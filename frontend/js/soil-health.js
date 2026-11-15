
"use strict";

// ========================================
// FERTIWISE SOIL HEALTH REPORT
// English | Hindi | Bengali
// ========================================

// Add translations to the existing language system.
(function addSoilHealthTranslations() {

    if (typeof translations === "undefined") {
        console.error("FertiWise language system not found.");
        return;
    }

    Object.assign(translations.en, {
        soilHealthTitle: "🌱 Soil Health Report",
        soilHealthDescription: "Generate a summary using your current soil inputs.",
        generateSoilReport: "Generate Soil Health Report",
        soilHealthNote: "Note: This is an indicative summary, not a laboratory soil test. Follow local agricultural recommendations for fertilizer dosage.",
        soilParameterSummary: "Soil Parameter Summary",
        parameter: "Parameter",
        yourInput: "Your Input",
        soilPHObservation: "Soil pH Observation",
        cropLabel: "Crop",
        soilTypeLabel: "Soil Type",
        soilPHLabel: "Soil pH",
        soilMoistureLabel: "Soil Moisture",
        organicCarbonLabel: "Organic Carbon",
        nitrogenLabel: "Nitrogen (N)",
        phosphorusLabel: "Phosphorus (P)",
        potassiumLabel: "Potassium (K)",
        notProvided: "Not provided",
        enterValidPH: "Enter a valid soil pH value for an acidity summary.",
        acidicSoil: "The entered pH indicates acidic soil. Consider a laboratory soil test before applying amendments.",
        neutralSoil: "The entered pH is in a broadly near-neutral range.",
        alkalineSoil: "The entered pH indicates alkaline soil. Consider a laboratory soil test before applying amendments."
    });

    Object.assign(translations.hi, {
        soilHealthTitle: "🌱 मिट्टी स्वास्थ्य रिपोर्ट",
        soilHealthDescription: "आपकी मिट्टी की दी गई जानकारी के आधार पर रिपोर्ट तैयार करें।",
        generateSoilReport: "मिट्टी स्वास्थ्य रिपोर्ट तैयार करें",
        soilHealthNote: "ध्यान दें: यह केवल एक सामान्य जानकारी है, प्रयोगशाला की मिट्टी जांच नहीं। उर्वरक की मात्रा के लिए स्थानीय कृषि सलाह का पालन करें।",
        soilParameterSummary: "मिट्टी के मापदंडों का सारांश",
        parameter: "मापदंड",
        yourInput: "आपकी जानकारी",
        soilPHObservation: "मिट्टी के pH का निरीक्षण",
        cropLabel: "फसल",
        soilTypeLabel: "मिट्टी का प्रकार",
        soilPHLabel: "मिट्टी का pH",
        soilMoistureLabel: "मिट्टी की नमी",
        organicCarbonLabel: "ऑर्गेनिक कार्बन",
        nitrogenLabel: "नाइट्रोजन (N)",
        phosphorusLabel: "फॉस्फोरस (P)",
        potassiumLabel: "पोटैशियम (K)",
        notProvided: "जानकारी नहीं दी गई",
        enterValidPH: "अम्लता का सारांश देखने के लिए सही मिट्टी का pH दर्ज करें।",
        acidicSoil: "दिया गया pH मिट्टी के अम्लीय होने का संकेत देता है। सुधार करने से पहले प्रयोगशाला में मिट्टी की जांच करवाएं।",
        neutralSoil: "दिया गया pH लगभग सामान्य या तटस्थ सीमा में है।",
        alkalineSoil: "दिया गया pH मिट्टी के क्षारीय होने का संकेत देता है। सुधार करने से पहले प्रयोगशाला में मिट्टी की जांच करवाएं।"
    });

    Object.assign(translations.bn, {
        soilHealthTitle: "🌱 মাটির স্বাস্থ্য রিপোর্ট",
        soilHealthDescription: "আপনার দেওয়া মাটির তথ্যের ভিত্তিতে একটি রিপোর্ট তৈরি করুন।",
        generateSoilReport: "মাটির স্বাস্থ্য রিপোর্ট তৈরি করুন",
        soilHealthNote: "দ্রষ্টব্য: এটি একটি সাধারণ তথ্যভিত্তিক রিপোর্ট, পরীক্ষাগারের মাটি পরীক্ষা নয়। সারের পরিমাণের জন্য স্থানীয় কৃষি পরামর্শ মেনে চলুন।",
        soilParameterSummary: "মাটির উপাদানের সারাংশ",
        parameter: "উপাদান",
        yourInput: "আপনার দেওয়া তথ্য",
        soilPHObservation: "মাটির pH পর্যবেক্ষণ",
        cropLabel: "ফসল",
        soilTypeLabel: "মাটির ধরন",
        soilPHLabel: "মাটির pH",
        soilMoistureLabel: "মাটির আর্দ্রতা",
        organicCarbonLabel: "জৈব কার্বন",
        nitrogenLabel: "নাইট্রোজেন (N)",
        phosphorusLabel: "ফসফরাস (P)",
        potassiumLabel: "পটাশিয়াম (K)",
        notProvided: "তথ্য দেওয়া হয়নি",
        enterValidPH: "অম্লতার সারাংশ দেখতে সঠিক মাটির pH লিখুন।",
        acidicSoil: "দেওয়া pH অনুযায়ী মাটি অম্লীয় হতে পারে। মাটির উন্নতির আগে পরীক্ষাগারে মাটি পরীক্ষা করান।",
        neutralSoil: "দেওয়া pH মোটামুটি নিরপেক্ষ সীমার মধ্যে রয়েছে।",
        alkalineSoil: "দেওয়া pH অনুযায়ী মাটি ক্ষারীয় হতে পারে। মাটির উন্নতির আগে পরীক্ষাগারে মাটি পরীক্ষা করান।"
    });

})();


// ========================================
// MAIN FEATURE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("predictionForm");

    if (!form || document.getElementById("soilHealthSection")) {
        return;
    }

    const section = document.createElement("section");
    section.id = "soilHealthSection";

    section.innerHTML = `
        <div style="
            margin: 25px 0;
            padding: 22px;
            border-radius: 14px;
            background: var(--card-bg, #ffffff);
            border: 1px solid #d1d5db;
            color: var(--text-color, #222);
        ">

            <h2 data-i18n="soilHealthTitle">
                🌱 Soil Health Report
            </h2>

            <p data-i18n="soilHealthDescription">
                Generate a summary using your current soil inputs.
            </p>

            <button
                type="button"
                id="generateSoilReport"
                style="
                    padding: 11px 20px;
                    border: none;
                    border-radius: 8px;
                    background: #16a34a;
                    color: white;
                    cursor: pointer;
                "
                data-i18n="generateSoilReport"
            >
                Generate Soil Health Report
            </button>

            <div id="soilHealthResult" style="margin-top: 20px;"></div>

            <p
                style="font-size: 12px; margin-top: 15px; color: #777;"
                data-i18n="soilHealthNote"
            >
                Note: This is an indicative summary, not a laboratory soil test.
                Follow local agricultural recommendations for fertilizer dosage.
            </p>

        </div>
    `;

    form.insertAdjacentElement("afterend", section);


    // ====================================
    // TRANSLATION HELPER
    // ====================================

    function t(key) {

        if (typeof fertiWiseTranslate === "function") {
            return fertiWiseTranslate(key);
        }

        const language =
            localStorage.getItem("fertwise_language") || "en";

        return translations[language]?.[key]
            || translations.en[key]
            || key;
    }


    // ====================================
    // NUMBER DISPLAY FORMATTER
    // ====================================

    function formatDisplayValue(value) {

        const text = String(value).trim();

        if (!text || text === t("notProvided")) {
            return text;
        }

        // Only format numeric display values.
        // Do not modify original form values.
        const number = Number(text);

        if (!Number.isFinite(number)) {
            return text;
        }

        if (typeof fertiWiseFormatNumber === "function") {
            return fertiWiseFormatNumber(number, {
                maximumFractionDigits: 3
            });
        }

        if (typeof fertiWiseConvertDigits === "function") {
            return fertiWiseConvertDigits(text);
        }

        return text;
    }


    // ====================================
    // GET FORM VALUES
    // ====================================

    function getValue(data, key) {

        const value = data.get(key);

        return value && String(value).trim() !== ""
            ? String(value).trim()
            : t("notProvided");
    }


    // ====================================
    // HTML SECURITY
    // ====================================

    function escapeHTML(value) {

        return String(value).replace(/[&<>"']/g, function (char) {

            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];

        });
    }


    // ====================================
    // GENERATE SOIL REPORT
    // ====================================

    document.getElementById("generateSoilReport")
        .addEventListener("click", function () {

            const data = new FormData(form);

            const soil = {

                crop: getValue(data, "Crop_Type"),

                soilType: getValue(data, "Soil_Type"),

                ph: getValue(data, "Soil_pH"),

                moisture: getValue(data, "Soil_Moisture"),

                organicCarbon: getValue(data, "Organic_Carbon"),

                nitrogen: getValue(data, "Nitrogen_Level"),

                phosphorus: getValue(data, "Phosphorus_Level"),

                potassium: getValue(data, "Potassium_Level")

            };


            // ====================================
            // SOIL PH OBSERVATION
            // ====================================

            let phAdvice = t("enterValidPH");

            const ph = Number(soil.ph);

            if (
                soil.ph !== t("notProvided") &&
                Number.isFinite(ph) &&
                ph >= 0 &&
                ph <= 14
            ) {

                if (ph < 5.5) {

                    phAdvice = t("acidicSoil");

                } else if (ph <= 7.5) {

                    phAdvice = t("neutralSoil");

                } else {

                    phAdvice = t("alkalineSoil");

                }

            }


            // ====================================
            // REPORT TABLE DATA
            // ====================================

            const rows = [

                [t("cropLabel"), soil.crop],

                [t("soilTypeLabel"), soil.soilType],

                [t("soilPHLabel"), soil.ph],

                [t("soilMoistureLabel"), soil.moisture],

                [t("organicCarbonLabel"), soil.organicCarbon],

                [t("nitrogenLabel"), soil.nitrogen],

                [t("phosphorusLabel"), soil.phosphorus],

                [t("potassiumLabel"), soil.potassium]

            ];


            // ====================================
            // FORMAT NUMBERS FOR DISPLAY
            // ====================================

            const tableRows = rows.map(function (item) {

                const displayValue = formatDisplayValue(item[1]);

                return `
                    <tr>

                        <td style="
                            padding:10px;
                            border-bottom:1px solid #ddd;
                        ">
                            ${escapeHTML(item[0])}
                        </td>

                        <td style="
                            padding:10px;
                            border-bottom:1px solid #ddd;
                        ">
                            ${escapeHTML(displayValue)}
                        </td>

                    </tr>
                `;

            }).join("");


            // ====================================
            // DISPLAY REPORT
            // ====================================

            document.getElementById("soilHealthResult").innerHTML = `

                <h3>${escapeHTML(t("soilParameterSummary"))}</h3>

                <table style="
                    width:100%;
                    border-collapse:collapse;
                    text-align:left;
                ">

                    <thead>

                        <tr>

                            <th style="padding:10px;">
                                ${escapeHTML(t("parameter"))}
                            </th>

                            <th style="padding:10px;">
                                ${escapeHTML(t("yourInput"))}
                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        ${tableRows}
                    </tbody>

                </table>


                <h3 style="margin-top:18px;">
                    ${escapeHTML(t("soilPHObservation"))}
                </h3>

                <p>
                    ${escapeHTML(phAdvice)}
                </p>

            `;

        });


    // ====================================
    // APPLY SAVED LANGUAGE
    // ====================================

    const savedLanguage =
        localStorage.getItem("fertwise_language") || "en";

    if (typeof applyLanguage === "function") {
        applyLanguage(savedLanguage);
    }

});
