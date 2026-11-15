
// ==========================================
// FERTIWISE - SMART FERTILIZER QUANTITY & COST CALCULATOR
// 18 Crops | No District Selection
// English, Hindi and Bengali
// ==========================================

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        if (typeof translations === "undefined") {
            console.error("FertiWise: Language system not found.");
            return;
        }

        // ======================================
        // TRANSLATIONS
        // ======================================

        const calculatorTranslations = {
            en: {
                fertilizerCalculatorTitle: "🌱 Smart Fertilizer Calculator",
                fertilizerCalculatorDescription: "Select your crop and land area to estimate fertilizer quantity and total cost.",
                calcCropLabel: "Select Crop",
                calcAreaLabel: "Land Area",
                calcUnitLabel: "Area Unit",
                calcSelectCrop: "Choose Crop",

                calcRice: "Rice",
                calcWheat: "Wheat",
                calcMaize: "Maize",
                calcPotato: "Potato",
                calcTomato: "Tomato",
                calcOnion: "Onion",
                calcMustard: "Mustard",
                calcJute: "Jute",
                calcSugarcane: "Sugarcane",
                calcCotton: "Cotton",
                calcGroundnut: "Groundnut",
                calcSoybean: "Soybean",
                calcBrinjal: "Brinjal",
                calcCabbage: "Cabbage",
                calcCauliflower: "Cauliflower",
                calcChilli: "Chilli",
                calcPeas: "Peas",
                calcBarley: "Barley",

                calcAcre: "Acre",
                calcBigha: "Bigha",
                calcHectare: "Hectare",
                calcAreaPlaceholder: "Enter land area",

                calcButton: "Calculate Fertilizer Quantity",
                calcResultTitle: "Your Fertilizer Requirement",
                calcCrop: "Crop",
                calcLandArea: "Land Area",

                calcNutrientTitle: "Required Nutrients",
                calcFertilizerTitle: "Estimated Fertilizer Quantity",

                calcUrea: "Urea",
                calcDAP: "DAP",
                calcMOP: "MOP (Potash)",

                calcNitrogen: "Nitrogen (N)",
                calcPhosphorus: "Phosphorus (P₂O₅)",
                calcPotassium: "Potassium (K₂O)",

                calcPriceTitle: "Enter Fertilizer Prices (₹ per kg)",
                calcUreaPrice: "Urea Price (₹/kg)",
                calcDAPPrice: "DAP Price (₹/kg)",
                calcMOPPrice: "MOP Price (₹/kg)",
                calcPricePlaceholder: "Enter price per kg",

                calcCostButton: "Calculate Total Cost",
                calcCostResult: "Estimated Total Cost",
                calcUreaCost: "Urea Cost",
                calcDAPCost: "DAP Cost",
                calcMOPCost: "MOP Cost",

                calcInvalid: "Please select a crop and enter a valid land area.",
                calcPriceInvalid: "Please enter valid prices for all three fertilizers.",

                calcDisclaimer: "These are indicative estimates using general crop nutrient rates, not a soil-test-based prescription. Actual requirements vary by soil, crop variety, season and farming conditions. Get a soil test and follow local agricultural department guidance before applying fertilizer.",

                calcNoData: "Recommendation data is not available for this crop."
            },

            hi: {
                fertilizerCalculatorTitle: "🌱 स्मार्ट उर्वरक कैलकुलेटर",
                fertilizerCalculatorDescription: "फसल और भूमि क्षेत्र चुनकर उर्वरक की मात्रा और कुल अनुमानित लागत जानें।",
                calcCropLabel: "फसल चुनें",
                calcAreaLabel: "भूमि का क्षेत्रफल",
                calcUnitLabel: "क्षेत्रफल की इकाई",
                calcSelectCrop: "फसल चुनें",

                calcRice: "धान",
                calcWheat: "गेहूं",
                calcMaize: "मक्का",
                calcPotato: "आलू",
                calcTomato: "टमाटर",
                calcOnion: "प्याज",
                calcMustard: "सरसों",
                calcJute: "जूट",
                calcSugarcane: "गन्ना",
                calcCotton: "कपास",
                calcGroundnut: "मूंगफली",
                calcSoybean: "सोयाबीन",
                calcBrinjal: "बैंगन",
                calcCabbage: "पत्तागोभी",
                calcCauliflower: "फूलगोभी",
                calcChilli: "मिर्च",
                calcPeas: "मटर",
                calcBarley: "जौ",

                calcAcre: "एकड़",
                calcBigha: "बीघा",
                calcHectare: "हेक्टेयर",
                calcAreaPlaceholder: "भूमि का क्षेत्रफल दर्ज करें",

                calcButton: "उर्वरक की मात्रा निकालें",
                calcResultTitle: "आपकी उर्वरक आवश्यकता",
                calcCrop: "फसल",
                calcLandArea: "भूमि का क्षेत्रफल",

                calcNutrientTitle: "आवश्यक पोषक तत्व",
                calcFertilizerTitle: "अनुमानित उर्वरक मात्रा",

                calcUrea: "यूरिया",
                calcDAP: "डीएपी",
                calcMOP: "एमओपी (पोटाश)",

                calcNitrogen: "नाइट्रोजन (N)",
                calcPhosphorus: "फॉस्फोरस (P₂O₅)",
                calcPotassium: "पोटैशियम (K₂O)",

                calcPriceTitle: "उर्वरक की कीमत दर्ज करें (₹ प्रति किलो)",
                calcUreaPrice: "यूरिया की कीमत (₹/किलो)",
                calcDAPPrice: "डीएपी की कीमत (₹/किलो)",
                calcMOPPrice: "एमओपी की कीमत (₹/किलो)",
                calcPricePlaceholder: "प्रति किलो कीमत दर्ज करें",

                calcCostButton: "कुल लागत की गणना करें",
                calcCostResult: "अनुमानित कुल लागत",
                calcUreaCost: "यूरिया की लागत",
                calcDAPCost: "डीएपी की लागत",
                calcMOPCost: "एमओपी की लागत",

                calcInvalid: "कृपया फसल चुनें और भूमि का सही क्षेत्रफल दर्ज करें।",
                calcPriceInvalid: "कृपया तीनों उर्वरकों की सही कीमत दर्ज करें।",

                calcDisclaimer: "ये सामान्य फसल पोषक तत्व दरों पर आधारित संकेतात्मक अनुमान हैं, मिट्टी की जांच पर आधारित अंतिम सलाह नहीं। वास्तविक आवश्यकता मिट्टी, किस्म, मौसम और खेती की स्थिति के अनुसार बदलती है। उर्वरक डालने से पहले मिट्टी की जांच कराएं और स्थानीय कृषि विभाग की सलाह लें।",

                calcNoData: "इस फसल के लिए सिफारिश उपलब्ध नहीं है।"
            },

            bn: {
                fertilizerCalculatorTitle: "🌱 স্মার্ট সার ক্যালকুলেটর",
                fertilizerCalculatorDescription: "ফসল ও জমির পরিমাণ নির্বাচন করে সারের পরিমাণ এবং মোট আনুমানিক খরচ হিসাব করুন।",
                calcCropLabel: "ফসল নির্বাচন করুন",
                calcAreaLabel: "জমির পরিমাণ",
                calcUnitLabel: "জমির একক",
                calcSelectCrop: "ফসল নির্বাচন করুন",

                calcRice: "ধান",
                calcWheat: "গম",
                calcMaize: "ভুট্টা",
                calcPotato: "আলু",
                calcTomato: "টমেটো",
                calcOnion: "পেঁয়াজ",
                calcMustard: "সরিষা",
                calcJute: "পাট",
                calcSugarcane: "আখ",
                calcCotton: "তুলা",
                calcGroundnut: "চিনাবাদাম",
                calcSoybean: "সয়াবিন",
                calcBrinjal: "বেগুন",
                calcCabbage: "বাঁধাকপি",
                calcCauliflower: "ফুলকপি",
                calcChilli: "লঙ্কা",
                calcPeas: "মটরশুঁটি",
                calcBarley: "যব",

                calcAcre: "একর",
                calcBigha: "বিঘা",
                calcHectare: "হেক্টর",
                calcAreaPlaceholder: "জমির পরিমাণ লিখুন",

                calcButton: "সারের পরিমাণ হিসাব করুন",
                calcResultTitle: "আপনার সারের প্রয়োজন",
                calcCrop: "ফসল",
                calcLandArea: "জমির পরিমাণ",

                calcNutrientTitle: "প্রয়োজনীয় পুষ্টি উপাদান",
                calcFertilizerTitle: "আনুমানিক সারের পরিমাণ",

                calcUrea: "ইউরিয়া",
                calcDAP: "ডিএপি",
                calcMOP: "এমওপি (পটাশ)",

                calcNitrogen: "নাইট্রোজেন (N)",
                calcPhosphorus: "ফসফরাস (P₂O₅)",
                calcPotassium: "পটাশিয়াম (K₂O)",

                calcPriceTitle: "সারের দাম লিখুন (₹ প্রতি কেজি)",
                calcUreaPrice: "ইউরিয়ার দাম (₹/কেজি)",
                calcDAPPrice: "ডিএপি-র দাম (₹/কেজি)",
                calcMOPPrice: "এমওপি-র দাম (₹/কেজি)",
                calcPricePlaceholder: "প্রতি কেজির দাম লিখুন",

                calcCostButton: "মোট খরচ হিসাব করুন",
                calcCostResult: "আনুমানিক মোট খরচ",
                calcUreaCost: "ইউরিয়ার খরচ",
                calcDAPCost: "ডিএপি-র খরচ",
                calcMOPCost: "এমওপি-র খরচ",

                calcInvalid: "অনুগ্রহ করে ফসল নির্বাচন করুন এবং জমির সঠিক পরিমাণ লিখুন।",
                calcPriceInvalid: "অনুগ্রহ করে তিনটি সারের সঠিক দাম লিখুন।",

                calcDisclaimer: "এগুলি সাধারণ ফসলের পুষ্টি উপাদানের হারের উপর ভিত্তি করে প্রাথমিক অনুমান, মাটি পরীক্ষাভিত্তিক চূড়ান্ত পরামর্শ নয়। মাটি, ফসলের জাত, মরসুম ও চাষের পরিস্থিতি অনুযায়ী প্রকৃত প্রয়োজন বদলাতে পারে। সার প্রয়োগের আগে মাটি পরীক্ষা করান এবং স্থানীয় কৃষি দপ্তরের পরামর্শ নিন।",

                calcNoData: "এই ফসলের জন্য সুপারিশের তথ্য নেই।"
            }
        };

        Object.keys(calculatorTranslations).forEach(function (lang) {
            if (!translations[lang]) {
                translations[lang] = {};
            }

            Object.assign(
                translations[lang],
                calculatorTranslations[lang]
            );
        });

        function t(key) {
            const lang =
                localStorage.getItem("fertwise_language") || "en";

            return (
                translations[lang]?.[key] ||
                translations.en[key] ||
                key
            );
        }

        // ======================================
        // CROP NUTRIENT DATA
        // Indicative kg/ha: [N, P2O5, K2O]
        // ======================================

        const cropRates = {
            rice: [70, 40, 35],
            wheat: [68, 38, 36],
            maize: [120, 60, 50],
            potato: [180, 80, 120],
            tomato: [120, 60, 60],
            onion: [100, 50, 50],
            mustard: [80, 40, 40],
            jute: [60, 30, 30],
            sugarcane: [150, 60, 60],
            cotton: [100, 50, 50],
            groundnut: [25, 50, 45],
            soybean: [30, 60, 40],
            brinjal: [100, 50, 50],
            cabbage: [120, 60, 60],
            cauliflower: [120, 60, 60],
            chilli: [100, 50, 50],
            peas: [25, 50, 40],
            barley: [60, 30, 20]
        };

        const cropKeys = [
            "rice", "wheat", "maize", "potato",
            "tomato", "onion", "mustard", "jute",
            "sugarcane", "cotton", "groundnut", "soybean",
            "brinjal", "cabbage", "cauliflower", "chilli",
            "peas", "barley"
        ];

        // ======================================
        // CHECK DASHBOARD ELEMENTS
        // ======================================

        const predictionForm =
            document.getElementById("predictionForm");

        const recommendationBox =
            document.getElementById("recommendationBox");

        if (!predictionForm || !recommendationBox) {
            console.error("FertiWise: Dashboard elements not found.");
            return;
        }

        if (document.getElementById("fertilizerCalculatorSection")) {
            return;
        }

        predictionForm.insertAdjacentElement(
            "afterend",
            recommendationBox
        );

        // ======================================
        // CREATE CALCULATOR
        // ======================================

        const calculator = document.createElement("section");

        calculator.id = "fertilizerCalculatorSection";
        calculator.className = "card";

        // IMPORTANT: data-i18n added to every crop option
        const cropOptions = cropKeys.map(function (crop) {
            const key =
                "calc" + crop.charAt(0).toUpperCase() + crop.slice(1);

            return `<option value="${crop}" data-i18n="${key}">${t(key)}</option>`;
        }).join("");

        calculator.innerHTML = `
            <style>
                #fertilizerCalculatorSection .calc-result-card {
                    margin-top: 20px;
                    padding: 18px;
                    border-radius: 12px;
                    background: var(--card-bg, transparent);
                    border: 1px solid var(--border-color, #ddd);
                }

                #fertilizerCalculatorSection .calc-result-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 12px;
                    margin-top: 14px;
                }

                #fertilizerCalculatorSection .calc-result-item {
                    padding: 14px;
                    border-radius: 10px;
                    background: var(--input-bg, rgba(128,128,128,0.08));
                }

                #fertilizerCalculatorSection .calc-result-item strong {
                    display: block;
                    font-size: 20px;
                    margin-top: 7px;
                }

                #fertilizerCalculatorSection .calc-result-heading {
                    margin: 20px 0 10px;
                    font-size: 16px;
                }

                #fertilizerCalculatorSection .calc-disclaimer {
                    margin-top: 16px;
                    padding: 12px;
                    border-radius: 8px;
                    background: rgba(255, 180, 0, 0.09);
                    font-size: 13px;
                    line-height: 1.6;
                }

                #fertilizerCalculatorSection .calc-result-card[hidden] {
                    display: none;
                }

                #fertilizerCalculatorSection .calc-total {
                    margin-top: 16px;
                    padding: 18px;
                    border-radius: 10px;
                    border: 1px solid var(--border-color, #ddd);
                    text-align: center;
                }

                #fertilizerCalculatorSection .calc-total strong {
                    display: block;
                    margin-top: 8px;
                    font-size: 28px;
                    color: var(--success-color, #16834a);
                }

                #fertilizerCalculatorSection .calc-crop-select {
                    width: 100%;
                    min-height: 46px;
                    padding: 10px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                }
            </style>

            <h2 data-i18n="fertilizerCalculatorTitle">
                ${t("fertilizerCalculatorTitle")}
            </h2>

            <p
                style="margin-bottom:18px;color:var(--muted-text);"
                data-i18n="fertilizerCalculatorDescription">
                ${t("fertilizerCalculatorDescription")}
            </p>

            <div class="form-grid">

                <div class="form-group">
                    <label for="calcCrop" data-i18n="calcCropLabel">
                        ${t("calcCropLabel")}
                    </label>

                    <select id="calcCrop" class="calc-crop-select">
                        <option value="" data-i18n="calcSelectCrop">
                            ${t("calcSelectCrop")}
                        </option>
                        ${cropOptions}
                    </select>
                </div>

                <div class="form-group">
                    <label for="calcArea" data-i18n="calcAreaLabel">
                        ${t("calcAreaLabel")}
                    </label>

                    <input
                        type="number"
                        id="calcArea"
                        min="0.01"
                        step="any"
                        placeholder="${t("calcAreaPlaceholder")}"
                    >
                </div>

                <div class="form-group">
                    <label for="calcUnit" data-i18n="calcUnitLabel">
                        ${t("calcUnitLabel")}
                    </label>

                    <select id="calcUnit">
                        <option value="acre" data-i18n="calcAcre">${t("calcAcre")}</option>
                        <option value="bigha" data-i18n="calcBigha">${t("calcBigha")}</option>
                        <option value="hectare" data-i18n="calcHectare">${t("calcHectare")}</option>
                    </select>
                </div>

            </div>

            <button
                type="button"
                id="calculateFertilizerQuantity"
                class="primary-btn"
                data-i18n="calcButton">
                ${t("calcButton")}
            </button>

            <p
                id="fertilizerQuantityError"
                class="message"
                aria-live="polite">
            </p>

            <div
                id="fertilizerQuantityResult"
                class="calc-result-card"
                hidden
                aria-live="polite">

                <h3 data-i18n="calcResultTitle">
                    ${t("calcResultTitle")}
                </h3>

                <div id="calcSelectedDetails"></div>

                <h4 class="calc-result-heading" data-i18n="calcNutrientTitle">
                    ${t("calcNutrientTitle")}
                </h4>

                <div id="calcNutrientResults" class="calc-result-grid"></div>

                <h4 class="calc-result-heading" data-i18n="calcFertilizerTitle">
                    ${t("calcFertilizerTitle")}
                </h4>

                <div id="calcFertilizerResults" class="calc-result-grid"></div>

                <h4 class="calc-result-heading" data-i18n="calcPriceTitle">
                    ${t("calcPriceTitle")}
                </h4>

                <div class="form-grid">

                    <div class="form-group">
                        <label for="calcUreaPrice" data-i18n="calcUreaPrice">
                            ${t("calcUreaPrice")}
                        </label>
                        <input type="number" id="calcUreaPrice" min="0" step="any"
                            placeholder="${t("calcPricePlaceholder")}">
                    </div>

                    <div class="form-group">
                        <label for="calcDAPPrice" data-i18n="calcDAPPrice">
                            ${t("calcDAPPrice")}
                        </label>
                        <input type="number" id="calcDAPPrice" min="0" step="any"
                            placeholder="${t("calcPricePlaceholder")}">
                    </div>

                    <div class="form-group">
                        <label for="calcMOPPrice" data-i18n="calcMOPPrice">
                            ${t("calcMOPPrice")}
                        </label>
                        <input type="number" id="calcMOPPrice" min="0" step="any"
                            placeholder="${t("calcPricePlaceholder")}">
                    </div>

                </div>

                <button
                    type="button"
                    id="calculateTotalFertilizerCost"
                    class="primary-btn"
                    data-i18n="calcCostButton">
                    ${t("calcCostButton")}
                </button>

                <p id="fertilizerCostError" class="message" aria-live="polite"></p>

                <div id="fertilizerCostBreakdown" class="calc-result-card" hidden></div>

                <div class="calc-disclaimer" data-i18n="calcDisclaimer">
                    ${t("calcDisclaimer")}
                </div>

            </div>
        `;

        // ======================================
        // INSERT CALCULATOR
        // ======================================

        const soilHealth =
            document.getElementById("soilHealthSection");

        if (soilHealth) {
            soilHealth.insertAdjacentElement("afterend", calculator);
        } else {
            recommendationBox.insertAdjacentElement("afterend", calculator);
        }

        // Apply currently selected language
        if (typeof applyLanguage === "function") {
            const savedLanguage =
                localStorage.getItem("fertwise_language") || "en";

            applyLanguage(savedLanguage);
        }

        // ======================================
        // CALCULATOR STATE
        // ======================================

        let latestFertilizerQuantities = null;

        function formatKg(value) {
            return value.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + " kg";
        }

        function formatRupees(value) {
            return "₹" + value.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        function getCropName(crop) {
            const key =
                "calc" + crop.charAt(0).toUpperCase() + crop.slice(1);

            return t(key);
        }

        // ======================================
        // QUANTITY CALCULATION
        // ======================================

        document
            .getElementById("calculateFertilizerQuantity")
            .addEventListener("click", function () {

                const crop =
                    document.getElementById("calcCrop").value;

                const areaInput =
                    document.getElementById("calcArea").value;

                const area = Number(areaInput);

                const unit =
                    document.getElementById("calcUnit").value;

                const error =
                    document.getElementById("fertilizerQuantityError");

                const result =
                    document.getElementById("fertilizerQuantityResult");

                const costError =
                    document.getElementById("fertilizerCostError");

                const costBreakdown =
                    document.getElementById("fertilizerCostBreakdown");

                error.textContent = "";
                error.className = "message";

                costError.textContent = "";
                costError.className = "message";

                costBreakdown.hidden = true;
                result.hidden = true;

                latestFertilizerQuantities = null;

                if (
                    !crop ||
                    areaInput === "" ||
                    !Number.isFinite(area) ||
                    area <= 0
                ) {
                    error.textContent = t("calcInvalid");
                    error.className = "message error";
                    return;
                }

                const rates = cropRates[crop];

                if (!rates) {
                    error.textContent = t("calcNoData");
                    error.className = "message error";
                    return;
                }

                // Convert land area into hectares
                const conversion = {
                    acre: 0.404686,
                    bigha: 0.1338,
                    hectare: 1
                };

                const areaInHectares =
                    area * conversion[unit];

                const nitrogen =
                    rates[0] * areaInHectares;

                const phosphorus =
                    rates[1] * areaInHectares;

                const potassium =
                    rates[2] * areaInHectares;

                // Fertilizer grades:
                // Urea = 46% Nitrogen
                // DAP = 18% Nitrogen + 46% P2O5
                // MOP = 60% K2O

                const dapQuantity =
                    phosphorus / 0.46;

                const nitrogenFromDAP =
                    dapQuantity * 0.18;

                const remainingNitrogen =
                    Math.max(0, nitrogen - nitrogenFromDAP);

                const ureaQuantity =
                    remainingNitrogen / 0.46;

                const mopQuantity =
                    potassium / 0.60;

                latestFertilizerQuantities = {
                    urea: ureaQuantity,
                    dap: dapQuantity,
                    mop: mopQuantity
                };

                const unitNames = {
                    acre: t("calcAcre"),
                    bigha: t("calcBigha"),
                    hectare: t("calcHectare")
                };

                document.getElementById("calcSelectedDetails").innerHTML = `
                    <p>
                        <strong>${t("calcCrop")}:</strong>
                        ${getCropName(crop)}
                    </p>
                    <p>
                        <strong>${t("calcLandArea")}:</strong>
                        ${area} ${unitNames[unit]}
                    </p>
                `;

                document.getElementById("calcNutrientResults").innerHTML = `
                    <div class="calc-result-item">
                        ${t("calcNitrogen")}
                        <strong>${formatKg(nitrogen)}</strong>
                    </div>
                    <div class="calc-result-item">
                        ${t("calcPhosphorus")}
                        <strong>${formatKg(phosphorus)}</strong>
                    </div>
                    <div class="calc-result-item">
                        ${t("calcPotassium")}
                        <strong>${formatKg(potassium)}</strong>
                    </div>
                `;

                document.getElementById("calcFertilizerResults").innerHTML = `
                    <div class="calc-result-item">
                        ${t("calcUrea")}
                        <strong>${formatKg(ureaQuantity)}</strong>
                    </div>
                    <div class="calc-result-item">
                        ${t("calcDAP")}
                        <strong>${formatKg(dapQuantity)}</strong>
                    </div>
                    <div class="calc-result-item">
                        ${t("calcMOP")}
                        <strong>${formatKg(mopQuantity)}</strong>
                    </div>
                `;

                result.hidden = false;

                result.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

                console.log(
                    "FertiWise: Fertilizer quantity calculated.",
                    latestFertilizerQuantities
                );
            });

        // ======================================
        // TOTAL COST CALCULATION
        // ======================================

        document
            .getElementById("calculateTotalFertilizerCost")
            .addEventListener("click", function () {

                const ureaPriceInput =
                    document.getElementById("calcUreaPrice").value;

                const dapPriceInput =
                    document.getElementById("calcDAPPrice").value;

                const mopPriceInput =
                    document.getElementById("calcMOPPrice").value;

                const ureaPrice = Number(ureaPriceInput);
                const dapPrice = Number(dapPriceInput);
                const mopPrice = Number(mopPriceInput);

                const error =
                    document.getElementById("fertilizerCostError");

                const output =
                    document.getElementById("fertilizerCostBreakdown");

                error.textContent = "";
                error.className = "message";
                output.hidden = true;

                if (
                    !latestFertilizerQuantities ||
                    ureaPriceInput === "" ||
                    dapPriceInput === "" ||
                    mopPriceInput === "" ||
                    !Number.isFinite(ureaPrice) ||
                    !Number.isFinite(dapPrice) ||
                    !Number.isFinite(mopPrice) ||
                    ureaPrice < 0 ||
                    dapPrice < 0 ||
                    mopPrice < 0
                ) {
                    error.textContent = t("calcPriceInvalid");
                    error.className = "message error";
                    return;
                }

                const ureaCost =
                    latestFertilizerQuantities.urea * ureaPrice;

                const dapCost =
                    latestFertilizerQuantities.dap * dapPrice;

                const mopCost =
                    latestFertilizerQuantities.mop * mopPrice;

                const totalCost =
                    ureaCost + dapCost + mopCost;

                output.innerHTML = `
                    <h3>${t("calcCostResult")}</h3>

                    <div class="calc-result-grid">

                        <div class="calc-result-item">
                            ${t("calcUreaCost")}
                            <strong>${formatRupees(ureaCost)}</strong>
                        </div>

                        <div class="calc-result-item">
                            ${t("calcDAPCost")}
                            <strong>${formatRupees(dapCost)}</strong>
                        </div>

                        <div class="calc-result-item">
                            ${t("calcMOPCost")}
                            <strong>${formatRupees(mopCost)}</strong>
                        </div>

                    </div>

                    <div class="calc-total">
                        <span>${t("calcCostResult")}</span>
                        <strong>${formatRupees(totalCost)}</strong>
                    </div>
                `;

                output.hidden = false;

                output.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

                console.log(
                    "FertiWise: Total fertilizer cost calculated.",
                    {
                        ureaCost: ureaCost,
                        dapCost: dapCost,
                        mopCost: mopCost,
                        totalCost: totalCost
                    }
                );
            });

        console.log(
            "FertiWise: Smart Fertilizer Quantity & Cost Calculator loaded successfully."
        );

    });
})();
