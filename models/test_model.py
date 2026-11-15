
import os
import joblib
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(
    BASE_DIR, "models", "fertilizer_model.pkl"
)

# Load trained model
model = joblib.load(MODEL_PATH)

# Sample soil information
sample = pd.DataFrame([{
    "Soil_Type": "Clay",
    "Soil_pH": 6.5,
    "Soil_Moisture": 35.0,
    "Organic_Carbon": 0.5,
    "Electrical_Conductivity": 1.2,
    "Nitrogen_Level": 60,
    "Phosphorus_Level": 40,
    "Potassium_Level": 80,
    "Temperature": 25.0,
    "Humidity": 70.0,
    "Rainfall": 1000.0,
    "Crop_Type": "Cotton",
    "Crop_Growth_Stage": "Vegetative",
    "Season": "Kharif",
    "Irrigation_Type": "Canal",
    "Previous_Crop": "Wheat",
    "Region": "South",
    "Fertilizer_Used_Last_Season": 100.0,
    "Yield_Last_Season": 4.0
}])

# Predict fertilizer
prediction = model.predict(sample)

print("FertiWise ML Prediction")
print("-----------------------")
print("Recommended Fertilizer:", prediction[0])
