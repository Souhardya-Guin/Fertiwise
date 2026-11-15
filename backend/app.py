
import os
import uuid
import json
import re
import sqlite3
import joblib
import pandas as pd
import urllib.request
import urllib.error
import smtplib
import ssl

from email.message import EmailMessage
from dotenv import load_dotenv

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename


# ==================================================
# 1. PROJECT PATHS
# ==================================================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))

FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")
DATABASE = os.path.join(BACKEND_DIR, "fertwise.db")

MODEL_PATH = os.path.join(BASE_DIR, "models", "fertilizer_model.pkl")

UPLOAD_FOLDER = os.path.join(BACKEND_DIR, "uploads")
ASSETS_FOLDER = os.path.join(FRONTEND_DIR, "assets")
SOIL_CLASSIFIER_FOLDER = os.path.join(FRONTEND_DIR, "soil_classifier")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ASSETS_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png", "webp"}


# ==================================================
# 2. FLASK CONFIGURATION
# ==================================================

app = Flask(__name__)
CORS(app)

app.config["JSON_SORT_KEYS"] = False
app.config["MAX_CONTENT_LENGTH"] = 8 * 1024 * 1024


# ==================================================
# 3. GMAIL NOTIFICATION CONFIGURATION
# ==================================================

load_dotenv(os.path.join(BASE_DIR, ".env"))

SMTP_EMAIL = os.getenv("SMTP_EMAIL", "").strip()

SMTP_APP_PASSWORD = os.getenv(
    "SMTP_APP_PASSWORD", ""
).replace(" ", "")

ADMIN_EMAIL = SMTP_EMAIL


def send_signup_notification(
    user_id,
    name,
    email,
    mobile,
    state,
    language
):

    if not SMTP_EMAIL or not SMTP_APP_PASSWORD:

        print("GMAIL ERROR: SMTP credentials are missing.")
        return False

    message = EmailMessage()

    message["Subject"] = "New User Registration - FertiWise"
    message["From"] = SMTP_EMAIL
    message["To"] = ADMIN_EMAIL

    registration_time = pd.Timestamp.now().strftime(
        "%d-%m-%Y %I:%M:%S %p"
    )

    message.set_content(f"""
Hello FertiWise Admin,

A new user has registered on your FertiWise platform.

NEW USER DETAILS
--------------------------------

User ID: {user_id}
Name: {name}
Email: {email}
Mobile Number: {mobile}
State: {state}
Language Preference: {language}

Registration Time: {registration_time}

--------------------------------

This is an automatic notification from FertiWise.

Regards,
FertiWise System
""")

    try:

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL(
            "smtp.gmail.com",
            465,
            context=context,
            timeout=20
        ) as server:

            server.login(
                SMTP_EMAIL,
                SMTP_APP_PASSWORD
            )

            server.send_message(message)

        print("GMAIL NOTIFICATION SENT SUCCESSFULLY!")
        return True

    except Exception as error:

        print("GMAIL NOTIFICATION ERROR:", error)
        return False


# ==================================================
# 4. MODEL FEATURES
# ==================================================

REQUIRED_FEATURES = [
    "Soil_Type",
    "Soil_pH",
    "Soil_Moisture",
    "Organic_Carbon",
    "Electrical_Conductivity",
    "Nitrogen_Level",
    "Phosphorus_Level",
    "Potassium_Level",
    "Temperature",
    "Humidity",
    "Rainfall",
    "Crop_Type",
    "Crop_Growth_Stage",
    "Season",
    "Irrigation_Type",
    "Previous_Crop",
    "Region",
    "Fertilizer_Used_Last_Season",
    "Yield_Last_Season"
]

NUMERIC_FEATURES = [
    "Soil_pH",
    "Soil_Moisture",
    "Organic_Carbon",
    "Electrical_Conductivity",
    "Nitrogen_Level",
    "Phosphorus_Level",
    "Potassium_Level",
    "Temperature",
    "Humidity",
    "Rainfall",
    "Yield_Last_Season"
]


# ==================================================
# 5. LOAD ML MODEL
# ==================================================

model = None

try:

    if os.path.exists(MODEL_PATH):

        model = joblib.load(MODEL_PATH)

        print("FertiWise ML Model loaded successfully!")

    else:

        print("ERROR: Model file not found:", MODEL_PATH)

except Exception as error:

    print("MODEL LOADING ERROR:", error)


# ==================================================
# 6. DATABASE CONNECTION
# ==================================================

def get_db_connection():

    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row

    return connection


# ==================================================
# 7. DATABASE INITIALIZATION
# ==================================================

def initialize_database():

    connection = get_db_connection()
    cursor = connection.cursor()

    try:

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        """)

        existing_user_columns = {
            row["name"].lower()
            for row in cursor.execute(
                "PRAGMA table_info(users)"
            ).fetchall()
        }

        # Keep district column for existing user records.
        # New signup registrations will not use this column.

        new_user_columns = {
            "mobile_number": "TEXT",
            "state": "TEXT",
            "district": "TEXT",
            "language_preference": "TEXT DEFAULT 'en'"
        }

        for column, data_type in new_user_columns.items():

            if column.lower() not in existing_user_columns:

                cursor.execute(
                    f'ALTER TABLE users ADD COLUMN "{column}" {data_type}'
                )

                print("Added users column:", column)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS prediction_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                crop_name TEXT NOT NULL DEFAULT '',
                Soil_Type TEXT,
                Soil_pH REAL,
                Soil_Moisture REAL,
                Organic_Carbon REAL,
                Electrical_Conductivity REAL,
                Nitrogen_Level REAL,
                Phosphorus_Level REAL,
                Potassium_Level REAL,
                Temperature REAL,
                Humidity REAL,
                Rainfall REAL,
                Crop_Type TEXT,
                Crop_Growth_Stage TEXT,
                Season TEXT,
                Irrigation_Type TEXT,
                Previous_Crop TEXT,
                Region TEXT,
                Fertilizer_Used_Last_Season TEXT,
                Yield_Last_Season REAL,
                recommendation TEXT,
                recommended_fertilizer TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS soil_images (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                filename TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        column_types = {
            "user_id": "INTEGER",
            "crop_name": "TEXT NOT NULL DEFAULT ''",
            "Soil_Type": "TEXT",
            "Soil_pH": "REAL",
            "Soil_Moisture": "REAL",
            "Organic_Carbon": "REAL",
            "Electrical_Conductivity": "REAL",
            "Nitrogen_Level": "REAL",
            "Phosphorus_Level": "REAL",
            "Potassium_Level": "REAL",
            "Temperature": "REAL",
            "Humidity": "REAL",
            "Rainfall": "REAL",
            "Crop_Type": "TEXT",
            "Crop_Growth_Stage": "TEXT",
            "Season": "TEXT",
            "Irrigation_Type": "TEXT",
            "Previous_Crop": "TEXT",
            "Region": "TEXT",
            "Fertilizer_Used_Last_Season": "TEXT",
            "Yield_Last_Season": "REAL",
            "recommendation": "TEXT",
            "recommended_fertilizer": "TEXT",
            "created_at": "TIMESTAMP"
        }

        existing_columns = {
            row["name"].lower()
            for row in cursor.execute(
                "PRAGMA table_info(prediction_history)"
            ).fetchall()
        }

        for column, data_type in column_types.items():

            if column.lower() not in existing_columns:

                cursor.execute(
                    f'ALTER TABLE prediction_history '
                    f'ADD COLUMN "{column}" {data_type}'
                )

                print("Added database column:", column)

        connection.commit()

        print("Database initialized successfully!")
        print("Database location:", DATABASE)

    except Exception as error:

        connection.rollback()

        print("DATABASE INITIALIZATION ERROR:", error)

        raise

    finally:

        connection.close()


initialize_database()


# ==================================================
# 8. HELPER FUNCTIONS
# ==================================================

def allowed_file(filename):

    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS
    )


def get_prediction_insert_values(
    user_id,
    input_data,
    recommendation
):

    connection = get_db_connection()

    try:

        schema = connection.execute(
            "PRAGMA table_info(prediction_history)"
        ).fetchall()

        values_map = {
            "user_id": user_id,
            "crop_name": input_data["Crop_Type"],
            "crop_type": input_data["Crop_Type"],
            "recommendation": recommendation,
            "recommended_fertilizer": recommendation,
            "fertilizer_recommendation": recommendation,
            "predicted_fertilizer": recommendation,
            "fertilizer": recommendation,
            "fertilizer_name": recommendation
        }

        for feature, value in input_data.items():

            values_map[feature.lower()] = value

        insert_columns = []
        insert_values = []

        for column in schema:

            name = column["name"]
            lower_name = name.lower()

            if lower_name == "id":
                continue

            if lower_name in values_map:

                insert_columns.append(name)
                insert_values.append(values_map[lower_name])

            elif column["notnull"] and column["dflt_value"] is None:

                raise ValueError(
                    "Database requires an unsupported field: " + name
                )

        return insert_columns, insert_values

    finally:

        connection.close()


# ==================================================
# 9. FRONTEND ROUTES
# ==================================================

@app.route("/")
def home_page():

    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/index.html")
def index_page():

    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/login.html")
def login_page():

    return send_from_directory(FRONTEND_DIR, "login.html")


@app.route("/signup.html")
def signup_page():

    return send_from_directory(FRONTEND_DIR, "signup.html")


@app.route("/dashboard")
@app.route("/dashboard.html")
def dashboard_page():

    return send_from_directory(FRONTEND_DIR, "dashboard.html")


@app.route("/css/<path:filename>")
def css_files(filename):

    return send_from_directory(
        os.path.join(FRONTEND_DIR, "css"), filename
    )


@app.route("/js/<path:filename>")
def js_files(filename):

    return send_from_directory(
        os.path.join(FRONTEND_DIR, "js"), filename
    )


@app.route("/images/<path:filename>")
def image_files(filename):

    return send_from_directory(
        os.path.join(FRONTEND_DIR, "images"), filename
    )


@app.route("/assets/<path:filename>")
def asset_files(filename):

    return send_from_directory(ASSETS_FOLDER, filename)


# SOIL CLASSIFIER MODEL FILE ROUTE

@app.route("/soil_classifier/<path:filename>")
def soil_classifier_files(filename):

    return send_from_directory(
        SOIL_CLASSIFIER_FOLDER,
        filename
    )


# ==================================================
# 10. BACKEND STATUS
# ==================================================

@app.route("/api/status", methods=["GET"])
def status():

    return jsonify({
        "success": True,
        "project": "FertiWise",
        "status": "Backend is running",
        "model_loaded": model is not None,
        "gmail_configured": bool(
            SMTP_EMAIL and SMTP_APP_PASSWORD
        )
    })


# ==================================================
# 11. INDIAN STATES AND UNION TERRITORIES
# ==================================================

INDIAN_STATES_AND_UTS = {

    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",

    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"

}


# ==================================================
# 12. SIGNUP API WITH GMAIL NOTIFICATION
# ==================================================

@app.route("/api/signup", methods=["POST"])
def signup():

    data = request.get_json(silent=True) or {}

    name = str(data.get("name", "")).strip()

    email = str(data.get("email", "")).strip().lower()

    mobile = str(data.get("mobile_number", "")).strip()

    password = data.get("password", "")

    confirm_password = data.get("confirm_password", "")

    state = str(data.get("state", "")).strip()

    language = str(
        data.get("language_preference", "en")
    ).strip().lower()


    # ----------------------------------
    # REQUIRED FIELD VALIDATION
    # ----------------------------------

    if not all([
        name,
        email,
        mobile,
        password,
        confirm_password,
        state,
        language
    ]):

        return jsonify({
            "success": False,
            "message": "All fields are required"
        }), 400


    # ----------------------------------
    # NAME VALIDATION
    # ----------------------------------

    if len(name) < 2 or len(name) > 100:

        return jsonify({
            "success": False,
            "message": "Please enter a valid name"
        }), 400


    # ----------------------------------
    # EMAIL VALIDATION
    # ----------------------------------

    if (
        len(email) > 254
        or not re.fullmatch(
            r"[^@\s]+@[^@\s]+\.[^@\s]+",
            email
        )
    ):

        return jsonify({
            "success": False,
            "message": "Please enter a valid email address"
        }), 400


    # ----------------------------------
    # MOBILE VALIDATION
    # ----------------------------------

    mobile = mobile.replace(" ", "").replace("-", "")

    if not re.fullmatch(r"(?:\+91)?[6-9]\d{9}", mobile):

        return jsonify({
            "success": False,
            "message": "Please enter a valid Indian mobile number"
        }), 400


    # ----------------------------------
    # PASSWORD VALIDATION
    # ----------------------------------

    if not isinstance(password, str) or not isinstance(confirm_password, str):

        return jsonify({
            "success": False,
            "message": "Invalid password"
        }), 400

    if len(password) < 8:

        return jsonify({
            "success": False,
            "message": "Password must contain at least 8 characters"
        }), 400

    if (
        not re.search(r"[A-Z]", password)
        or not re.search(r"[a-z]", password)
        or not re.search(r"[0-9]", password)
        or not re.search(r"[^A-Za-z0-9]", password)
    ):

        return jsonify({
            "success": False,
            "message": "Password must contain uppercase, lowercase, number and special character"
        }), 400

    if password != confirm_password:

        return jsonify({
            "success": False,
            "message": "Passwords do not match"
        }), 400


    # ----------------------------------
    # STATE VALIDATION
    # ----------------------------------

    if state not in INDIAN_STATES_AND_UTS:

        return jsonify({
            "success": False,
            "message": "Please select a valid Indian State or Union Territory"
        }), 400

    if len(state) > 100:

        return jsonify({
            "success": False,
            "message": "State name is too long"
        }), 400


    # ----------------------------------
    # LANGUAGE VALIDATION
    # ----------------------------------

    if language not in ["en", "hi", "bn"]:

        return jsonify({
            "success": False,
            "message": "Invalid language preference"
        }), 400


    # ----------------------------------
    # HASH PASSWORD
    # ----------------------------------

    hashed_password = generate_password_hash(password)

    connection = get_db_connection()

    try:

        # New registration does not require District.

        cursor = connection.execute("""
            INSERT INTO users (
                name,
                email,
                password,
                mobile_number,
                state,
                language_preference
            )
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            name,
            email,
            hashed_password,
            mobile,
            state,
            language
        ))

        connection.commit()

        new_user_id = cursor.lastrowid


        # ----------------------------------
        # SEND GMAIL NOTIFICATION
        # ----------------------------------

        email_sent = send_signup_notification(
            new_user_id,
            name,
            email,
            mobile,
            state,
            language
        )


        return jsonify({
            "success": True,
            "message": "Account created successfully",
            "email_notification_sent": email_sent
        })


    except sqlite3.IntegrityError:

        return jsonify({
            "success": False,
            "message": "Email already registered"
        }), 409


    except Exception as error:

        print("SIGNUP ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to create account"
        }), 500


    finally:

        connection.close()


# ==================================================
# 13. LOGIN API
# ==================================================

@app.route("/api/login", methods=["POST"])
def login():

    data = request.get_json(silent=True) or {}

    email = str(data.get("email", "")).strip().lower()

    password = data.get("password", "")

    if not email or not password:

        return jsonify({
            "success": False,
            "message": "Email and password are required"
        }), 400

    connection = get_db_connection()

    try:

        user = connection.execute("""
            SELECT * FROM users WHERE email = ?
        """, (email,)).fetchone()

    finally:

        connection.close()

    if user is None:

        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    try:

        password_valid = check_password_hash(
            user["password"], password
        )

    except (ValueError, TypeError):

        password_valid = False

    if not password_valid:

        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    return jsonify({
        "success": True,
        "message": "Login successful",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"],
            "mobile_number": user["mobile_number"],
            "state": user["state"],

            # Retained for compatibility with existing accounts.
            "district": user["district"],

            "language_preference": user["language_preference"] or "en"
        }
    })


# ==================================================
# 14. FERTILIZER PREDICTION API
# ==================================================

@app.route("/api/predict", methods=["POST"])
def predict():

    if model is None:

        return jsonify({
            "success": False,
            "message": "ML model is not loaded"
        }), 500

    data = request.get_json(silent=True) or {}

    user_id = data.get("user_id")

    if not user_id:

        return jsonify({
            "success": False,
            "message": "User ID is required"
        }), 400

    missing_fields = [
        feature for feature in REQUIRED_FEATURES
        if feature not in data
        or data[feature] is None
        or data[feature] == ""
    ]

    if missing_fields:

        return jsonify({
            "success": False,
            "message": "Required input fields are missing",
            "missing_fields": missing_fields
        }), 400

    try:

        user_id = int(user_id)

        input_data = {}

        for feature in REQUIRED_FEATURES:

            if feature in NUMERIC_FEATURES:

                input_data[feature] = float(data[feature])

            else:

                input_data[feature] = str(data[feature]).strip()

        input_df = pd.DataFrame(
            [input_data],
            columns=REQUIRED_FEATURES
        )

        prediction = model.predict(input_df)[0]

        recommendation = str(prediction)

        print("\n========== FERTIWISE PREDICTION ==========")
        print("Input:", input_data)
        print("ML Output:", prediction)
        print("Recommendation:", recommendation)
        print("==========================================\n")

        columns, values = get_prediction_insert_values(
            user_id,
            input_data,
            recommendation
        )

        connection = get_db_connection()

        try:

            column_names = ", ".join(
                f'"{column}"' for column in columns
            )

            placeholders = ", ".join(["?"] * len(values))

            connection.execute(
                f"""
                INSERT INTO prediction_history
                ({column_names})
                VALUES ({placeholders})
                """,
                values
            )

            connection.commit()

        finally:

            connection.close()

        return jsonify({
            "success": True,
            "message": "Fertilizer recommendation generated successfully",
            "recommendation": recommendation,
            "fertilizer_recommendation": recommendation,
            "prediction": recommendation
        })

    except (ValueError, TypeError) as error:

        print("PREDICTION INPUT ERROR:", error)

        return jsonify({
            "success": False,
            "message": str(error)
        }), 400

    except Exception as error:

        print("PREDICTION ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Prediction failed",
            "error": str(error)
        }), 500


# ==================================================
# 15. PREDICTION HISTORY API
# ==================================================

@app.route("/api/history", methods=["GET"])
def history():

    user_id = request.args.get("user_id")

    if not user_id:

        return jsonify({
            "success": False,
            "message": "User ID is required"
        }), 400

    connection = get_db_connection()

    try:

        records = connection.execute("""
            SELECT *
            FROM prediction_history
            WHERE user_id = ?
            ORDER BY id DESC
        """, (user_id,)).fetchall()

        history_data = [dict(record) for record in records]

        for record in history_data:

            if not record.get("Crop_Type"):

                record["Crop_Type"] = record.get("crop_name", "")

            if not record.get("recommendation"):

                record["recommendation"] = (
                    record.get("recommended_fertilizer")
                    or record.get("fertilizer_recommendation")
                    or record.get("predicted_fertilizer")
                    or record.get("fertilizer")
                    or ""
                )

        return jsonify({
            "success": True,
            "total_records": len(history_data),
            "history": history_data
        })

    finally:

        connection.close()


# ==================================================
# 16. SAVE SOIL IMAGE API
# ==================================================

@app.route("/api/soil-image", methods=["POST"])
def save_soil_image():

    user_id = request.form.get("user_id")

    image = request.files.get("image")

    if not user_id or not image:

        return jsonify({
            "success": False,
            "message": "User ID and soil image are required"
        }), 400

    try:

        user_id = int(user_id)

    except (ValueError, TypeError):

        return jsonify({
            "success": False,
            "message": "Invalid user ID"
        }), 400

    if not image.filename:

        return jsonify({
            "success": False,
            "message": "No image selected"
        }), 400

    safe_name = secure_filename(image.filename)

    if not allowed_file(safe_name):

        return jsonify({
            "success": False,
            "message": "Only JPG, JPEG, PNG and WEBP images are allowed"
        }), 400

    extension = safe_name.rsplit(".", 1)[1].lower()

    filename = f"{uuid.uuid4().hex}.{extension}"

    file_path = os.path.join(UPLOAD_FOLDER, filename)

    connection = get_db_connection()

    try:

        user = connection.execute(
            "SELECT id FROM users WHERE id = ?",
            (user_id,)
        ).fetchone()

        if user is None:

            return jsonify({
                "success": False,
                "message": "User not found"
            }), 404

        image.save(file_path)

        cursor = connection.execute("""
            INSERT INTO soil_images (user_id, filename)
            VALUES (?, ?)
        """, (user_id, filename))

        connection.commit()

        return jsonify({
            "success": True,
            "message": "Soil image saved successfully",
            "image_id": cursor.lastrowid,
            "filename": filename,
            "image_url": f"/soil-images/{filename}"
        })

    except Exception as error:

        connection.rollback()

        if os.path.exists(file_path):

            os.remove(file_path)

        print("SOIL IMAGE SAVE ERROR:", error)

        return jsonify({
            "success": False,
            "message": str(error)
        }), 500

    finally:

        connection.close()


# ==================================================
# 17. GET SAVED SOIL IMAGES API
# ==================================================

@app.route("/api/soil-images", methods=["GET"])
def get_soil_images():

    user_id = request.args.get("user_id")

    if not user_id:

        return jsonify({
            "success": False,
            "message": "User ID is required"
        }), 400

    connection = get_db_connection()

    try:

        records = connection.execute("""
            SELECT id, filename, created_at
            FROM soil_images
            WHERE user_id = ?
            ORDER BY id DESC
        """, (user_id,)).fetchall()

        images = [
            {
                "id": record["id"],
                "filename": record["filename"],
                "created_at": record["created_at"],
                "image_url": f"/soil-images/{record['filename']}"
            }
            for record in records
        ]

        return jsonify({
            "success": True,
            "total_images": len(images),
            "images": images
        })

    finally:

        connection.close()


# ==================================================
# 18. SERVE SOIL IMAGES
# ==================================================

@app.route("/soil-images/<path:filename>", methods=["GET"])
def serve_soil_image(filename):

    return send_from_directory(
        UPLOAD_FOLDER,
        filename
    )


# ==================================================
# 19. OLLAMA LOCAL AI CHATBOT API
# ==================================================

OLLAMA_URL = "http://127.0.0.1:11434/api/chat"

OLLAMA_MODEL = "qwen2.5:1.5b"


@app.route("/api/chat", methods=["POST"])
def chat():

    data = request.get_json(silent=True) or {}

    user_message = str(data.get("message", "")).strip()

    if not user_message:

        return jsonify({
            "success": False,
            "message": "Please enter a message."
        }), 400

    if len(user_message) > 2000:

        return jsonify({
            "success": False,
            "message": "Message is too long. Maximum 2000 characters."
        }), 400

    language = "English"

    try:

        parsed_message = json.loads(user_message)

        requested_language = str(
            parsed_message.get("language", "English")
        ).strip().lower()

        supported_languages = {
            "english": "English",
            "hindi": "Hindi",
            "bengali": "Bengali"
        }

        language = supported_languages.get(
            requested_language,
            "English"
        )

    except (json.JSONDecodeError, AttributeError):

        parsed_message = None

    system_prompt = f"""
You are FertiWise, a friendly agriculture assistant.

LANGUAGE:
You MUST answer completely in {language}.

LANGUAGE RULES:
1. English: Use simple natural English.
2. Hindi: Use natural everyday Hindi in Devanagari script.
3. Bengali: Use natural, grammatically correct Bengali script.
4. Never mix languages unnecessarily.
5. Never produce meaningless or random sentences.
6. Never repeat sentences or paragraphs.
7. If you do not understand something, ask a short question.

AGRICULTURE RULES:
1. Help with farming, crops, fertilizers and soil health.
2. Explain Nitrogen, Phosphorus and Potassium simply.
3. Explain soil pH, moisture and nutrients.
4. Use actual dashboard values when provided.
5. Never invent missing soil measurements or crop stages.
6. Explain the ML fertilizer recommendation when available.
7. Never guarantee crop yield improvement.
8. Never give unsupported exact fertilizer dosage.
9. Recommend laboratory soil testing for precise dosage.
10. Do not treat a camera image as a laboratory test.

RESPONSE STYLE:
- Use simple words.
- Keep answers short and useful.
- Use numbered points only when necessary.
- Avoid unnecessary repetition.
- Give practical farming guidance.

IMPORTANT:
Your entire response MUST be in {language}.
"""

    payload = {
        "model": OLLAMA_MODEL,
        "messages": [
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": user_message
            }
        ],
        "stream": False,
        "options": {
            "temperature": 0.2,
            "top_p": 0.8,
            "repeat_penalty": 1.2,
            "num_predict": 220
        }
    }

    try:

        request_data = json.dumps(payload).encode("utf-8")

        ollama_request = urllib.request.Request(
            OLLAMA_URL,
            data=request_data,
            headers={
                "Content-Type": "application/json"
            },
            method="POST"
        )

        with urllib.request.urlopen(
            ollama_request,
            timeout=180
        ) as response:

            result = json.loads(
                response.read().decode("utf-8")
            )

        bot_reply = (
            result.get("message", {})
            .get("content", "")
            .strip()
        )

        if not bot_reply:

            raise ValueError("AI returned an empty response")

        return jsonify({
            "success": True,
            "reply": bot_reply,
            "model": OLLAMA_MODEL,
            "language": language
        })

    except urllib.error.URLError as error:

        print("OLLAMA CONNECTION ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Ollama is not running. Please start Ollama."
        }), 503

    except Exception as error:

        print("CHATBOT ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to generate a response. Please try again."
        }), 500


# ==================================================
# 20. FILE SIZE ERROR
# ==================================================

@app.errorhandler(413)
def file_too_large(error):

    return jsonify({
        "success": False,
        "message": "Image is too large. Maximum size is 8 MB."
    }), 413


# ==================================================
# 21. RUN FLASK SERVER
# ==================================================

if __name__ == "__main__":

    print("\n====================================")
    print("             FERTIWISE")
    print("      SMART AGRICULTURE SYSTEM")
    print("====================================")

    print("Database:", DATABASE)
    print("Frontend:", FRONTEND_DIR)
    print("Assets:", ASSETS_FOLDER)
    print("Soil Classifier:", SOIL_CLASSIFIER_FOLDER)
    print("Model loaded:", model is not None)
    print("Ollama model:", OLLAMA_MODEL)

    print("Gmail configured:", bool(
        SMTP_EMAIL and SMTP_APP_PASSWORD
    ))

    print("\nREGISTERED ROUTES:")
    print(app.url_map)

    print("\nStarting Flask server...")

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
