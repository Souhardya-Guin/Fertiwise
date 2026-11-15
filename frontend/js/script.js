
// ========================================
// FertiWise - Login & Signup
// 7 Field Registration System
// ========================================


// ========================================
// SAFE HTML TEXT
// ========================================

function escapeFertiWiseHTML(value) {

    return String(value).replace(/[&<>"']/g, function (character) {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}


// ========================================
// SMART NOTIFICATION
// ========================================

function showFertiWisePopup(
    title,
    message,
    type = "success",
    redirect = null
) {

    const oldPopup = document.getElementById("fertwisePopup");

    if (oldPopup) oldPopup.remove();

    const isSuccess = type === "success";

    const overlay = document.createElement("div");
    overlay.id = "fertwisePopup";

    overlay.innerHTML = `
        <div class="fw-popup-card">

            <div class="fw-popup-icon ${isSuccess ? "success" : "error"}">
                ${isSuccess ? "✓" : "!"}
            </div>

            <h2>${escapeFertiWiseHTML(title)}</h2>

            <p>${escapeFertiWiseHTML(message)}</p>

            ${redirect ? `
                <div class="fw-progress">
                    <div class="fw-progress-bar"></div>
                </div>
                <small>Taking you to the next page...</small>
            ` : `
                <button class="fw-popup-button" id="fwPopupClose">
                    Okay
                </button>
            `}

        </div>
    `;

    const style = document.createElement("style");

    style.textContent = `

        #fertwisePopup {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(6, 35, 18, 0.55);
            backdrop-filter: blur(7px);
            animation: fwFade 0.25s ease;
        }

        .fw-popup-card {
            width: 100%;
            max-width: 390px;
            padding: 38px 28px;
            text-align: center;
            border-radius: 24px;
            background: white;
            box-shadow: 0 25px 70px rgba(0,0,0,0.2);
            animation: fwPop 0.4s ease;
        }

        .fw-popup-icon {
            width: 75px;
            height: 75px;
            margin: 0 auto 20px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            font-size: 38px;
            font-weight: bold;
        }

        .fw-popup-icon.success {
            color: #15803d;
            background: #dcfce7;
            border: 5px solid #bbf7d0;
        }

        .fw-popup-icon.error {
            color: #dc2626;
            background: #fee2e2;
            border: 5px solid #fecaca;
        }

        .fw-popup-card h2 {
            color: #14532d;
            font-size: 25px;
            margin-bottom: 12px;
        }

        .fw-popup-card p {
            color: #64748b;
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 23px;
        }

        .fw-popup-card small {
            display: block;
            color: #64748b;
            margin-top: 13px;
        }

        .fw-popup-button {
            border: none;
            padding: 12px 35px;
            border-radius: 10px;
            background: #16a34a;
            color: white;
            font-weight: bold;
            cursor: pointer;
        }

        .fw-progress {
            height: 6px;
            width: 100%;
            background: #dcfce7;
            border-radius: 20px;
            overflow: hidden;
        }

        .fw-progress-bar {
            width: 0;
            height: 100%;
            background: #16a34a;
            animation: fwProgress 2.5s linear forwards;
        }

        @keyframes fwProgress {
            to { width: 100%; }
        }

        @keyframes fwFade {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fwPop {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(15px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    const closeButton = document.getElementById("fwPopupClose");

    if (closeButton) {

        closeButton.addEventListener("click", () => {
            overlay.remove();
        });

    }

    if (redirect) {

        setTimeout(() => {
            window.location.href = redirect;
        }, 2500);

    }

}


// ========================================
// VALID INDIAN STATES AND UNION TERRITORIES
// ========================================

const INDIAN_STATES_AND_UTS = [

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

];


// ========================================
// SIGNUP - 7 FIELDS
// ========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        // Get form values

        const name = document.getElementById("name")
            .value.trim();

        const email = document.getElementById("signupEmail")
            .value.trim().toLowerCase();

        const mobile = document.getElementById("mobileNumber")
            .value.trim();

        const password = document.getElementById("signupPassword")
            .value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const state = document.getElementById("signupState")
            .value.trim();

        const language = document.getElementById(
            "signupLanguagePreference"
        ).value;


        // ----------------------------------
        // REQUIRED FIELD VALIDATION
        // ----------------------------------

        if (
            !name ||
            !email ||
            !mobile ||
            !password ||
            !confirmPassword ||
            !state ||
            !language
        ) {

            showFertiWisePopup(
                "Missing Details",
                "Please fill in all 7 signup fields.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // STATE VALIDATION
        // ----------------------------------

        if (!INDIAN_STATES_AND_UTS.includes(state)) {

            showFertiWisePopup(
                "Invalid State",
                "Please select a valid Indian State or Union Territory.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // EMAIL VALIDATION
        // ----------------------------------

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showFertiWisePopup(
                "Invalid Email",
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // MOBILE VALIDATION
        // ----------------------------------

        const cleanMobile = mobile.replace(/[\s-]/g, "");

        const mobilePattern = /^(?:\+91)?[6-9]\d{9}$/;

        if (!mobilePattern.test(cleanMobile)) {

            showFertiWisePopup(
                "Invalid Mobile Number",
                "Please enter a valid 10-digit Indian mobile number.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // PASSWORD MATCH VALIDATION
        // ----------------------------------

        if (password !== confirmPassword) {

            showFertiWisePopup(
                "Password Mismatch",
                "Your passwords do not match. Please try again.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // PASSWORD STRENGTH VALIDATION
        // ----------------------------------

        if (
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[^A-Za-z0-9]/.test(password)
        ) {

            showFertiWisePopup(
                "Weak Password",
                "Use at least 8 characters with uppercase, lowercase, number and special character.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // LANGUAGE VALIDATION
        // ----------------------------------

        if (!["en", "hi", "bn"].includes(language)) {

            showFertiWisePopup(
                "Invalid Language",
                "Please select a valid language.",
                "error"
            );

            return;
        }


        // ----------------------------------
        // SUBMIT BUTTON
        // ----------------------------------

        const signupButton = signupForm.querySelector(
            'button[type="submit"]'
        );

        const originalButtonText = signupButton.textContent;

        signupButton.disabled = true;
        signupButton.textContent = "Creating Account...";


        // ----------------------------------
        // SEND SIGNUP REQUEST
        // ----------------------------------

        try {

            const response = await fetch("/api/signup", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    name: name,

                    email: email,

                    mobile_number: cleanMobile,

                    password: password,

                    confirm_password: confirmPassword,

                    state: state,

                    language_preference: language

                })

            });


            const result = await response.json();


            // ----------------------------------
            // SUCCESS
            // ----------------------------------

            if (response.ok && result.success) {

                showFertiWisePopup(
                    "Account Created! 🌱",
                    "Welcome to FertiWise, " +
                    name +
                    "! Your account is ready. Please login.",
                    "success",
                    "/login.html"
                );

            }


            // ----------------------------------
            // FAILURE
            // ----------------------------------

            else {

                showFertiWisePopup(
                    "Signup Failed",
                    result.message || "Unable to create your account.",
                    "error"
                );

                signupButton.disabled = false;
                signupButton.textContent = originalButtonText;

            }

        }


        // ----------------------------------
        // CONNECTION ERROR
        // ----------------------------------

        catch (error) {

            console.error("Signup error:", error);

            showFertiWisePopup(
                "Connection Error",
                "Cannot connect to FertiWise server. Please check whether Flask is running.",
                "error"
            );

            signupButton.disabled = false;
            signupButton.textContent = originalButtonText;

        }

    });

}


// ========================================
// LOGIN - EXISTING FUNCTION PRESERVED
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("email")
            .value.trim().toLowerCase();

        const password = document.getElementById("password").value;


        if (!email || !password) {

            showFertiWisePopup(
                "Missing Details",
                "Please enter your email and password.",
                "error"
            );

            return;
        }


        const loginButton = loginForm.querySelector(
            'button[type="submit"]'
        );

        const originalButtonText = loginButton.textContent;

        loginButton.disabled = true;
        loginButton.textContent = "Please wait...";


        try {

            const response = await fetch("/api/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: email,

                    password: password

                })

            });


            const result = await response.json();


            if (response.ok && result.success) {

                localStorage.setItem(
                    "fertwise_user",
                    JSON.stringify(result.user)
                );


                const userName =
                    result.user && result.user.name
                        ? result.user.name
                        : "Farmer";


                showFertiWisePopup(
                    "Welcome Back! 🌱",
                    "Hello " +
                    userName +
                    "! You are successfully logged in. Your smart farming dashboard is ready.",
                    "success",
                    "/dashboard"
                );

            }


            else {

                showFertiWisePopup(
                    "Login Failed",
                    result.message || "Invalid email or password.",
                    "error"
                );

                loginButton.disabled = false;
                loginButton.textContent = originalButtonText;

            }

        }


        catch (error) {

            console.error("Login error:", error);

            showFertiWisePopup(
                "Connection Error",
                "Cannot connect to FertiWise server. Make sure Flask is running.",
                "error"
            );

            loginButton.disabled = false;
            loginButton.textContent = originalButtonText;

        }

    });

}


// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem("fertwise_user");

    window.location.href = "/login.html";

}
