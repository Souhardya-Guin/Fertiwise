
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        if (typeof translations === "undefined") {
            console.error("FertiWise: Language system not found.");
            return;
        }

        // ==========================================
        // CROP CALENDAR TRANSLATIONS
        // ==========================================

        const calendarTranslations = {
            en: {
                calendarTitle: "🌱 Smart Crop Calendar",
                calendarDescription: "View a general crop growth and farming activity schedule.",
                selectCropLabel: "Select Crop:",
                chooseCrop: "Choose Crop",
                riceCrop: "Rice",
                wheatCrop: "Wheat",
                maizeCrop: "Maize",
                cottonCrop: "Cotton",
                sugarcaneCrop: "Sugarcane",
                tomatoCrop: "Tomato",
                potatoCrop: "Potato",
                onionCrop: "Onion",
                cabbageCrop: "Cabbage",
                vegetablesCrop: "Other Vegetables",
                generateCalendarButton: "Generate Crop Calendar",
                calendarNote: "Note: This is a general educational schedule. Actual timing and fertilizer requirements depend on variety, planting date, climate and soil-test results. Follow local agricultural recommendations.",
                selectCropError: "Please select a crop first.",
                growthCalendar: "Growth Calendar",
                growthStage: "Growth Stage",
                approximateTiming: "Approx. Timing",
                activity: "Activity"
            },

            hi: {
                calendarTitle: "🌱 स्मार्ट फसल कैलेंडर",
                calendarDescription: "फसल की वृद्धि और खेती की गतिविधियों का सामान्य कार्यक्रम देखें।",
                selectCropLabel: "फसल चुनें:",
                chooseCrop: "फसल चुनें",
                riceCrop: "चावल",
                wheatCrop: "गेहूँ",
                maizeCrop: "मक्का",
                cottonCrop: "कपास",
                sugarcaneCrop: "गन्ना",
                tomatoCrop: "टमाटर",
                potatoCrop: "आलू",
                onionCrop: "प्याज",
                cabbageCrop: "पत्तागोभी",
                vegetablesCrop: "अन्य सब्जियाँ",
                generateCalendarButton: "फसल कैलेंडर बनाएं",
                calendarNote: "नोट: यह एक सामान्य शैक्षिक कार्यक्रम है। वास्तविक समय और उर्वरक की आवश्यकता फसल की किस्म, बुवाई की तारीख, जलवायु और मिट्टी की जांच पर निर्भर करती है। स्थानीय कृषि सलाह का पालन करें।",
                selectCropError: "कृपया पहले एक फसल चुनें।",
                growthCalendar: "विकास कैलेंडर",
                growthStage: "विकास का चरण",
                approximateTiming: "अनुमानित समय",
                activity: "गतिविधि"
            },

            bn: {
                calendarTitle: "🌱 স্মার্ট ফসল ক্যালেন্ডার",
                calendarDescription: "ফসলের বৃদ্ধি এবং কৃষিকাজের সাধারণ সময়সূচি দেখুন।",
                selectCropLabel: "ফসল নির্বাচন করুন:",
                chooseCrop: "ফসল নির্বাচন করুন",
                riceCrop: "ধান",
                wheatCrop: "গম",
                maizeCrop: "ভুট্টা",
                cottonCrop: "তুলা",
                sugarcaneCrop: "আখ",
                tomatoCrop: "টমেটো",
                potatoCrop: "আলু",
                onionCrop: "পেঁয়াজ",
                cabbageCrop: "বাঁধাকপি",
                vegetablesCrop: "অন্যান্য সবজি",
                generateCalendarButton: "ফসলের ক্যালেন্ডার তৈরি করুন",
                calendarNote: "দ্রষ্টব্য: এটি একটি সাধারণ শিক্ষামূলক সময়সূচি। প্রকৃত সময় এবং সারের প্রয়োজনীয়তা ফসলের জাত, রোপণের তারিখ, জলবায়ু এবং মাটি পরীক্ষার ফলাফলের উপর নির্ভর করে। স্থানীয় কৃষি পরামর্শ অনুসরণ করুন।",
                selectCropError: "অনুগ্রহ করে প্রথমে একটি ফসল নির্বাচন করুন।",
                growthCalendar: "বৃদ্ধির ক্যালেন্ডার",
                growthStage: "বৃদ্ধির পর্যায়",
                approximateTiming: "আনুমানিক সময়",
                activity: "কাজের বিবরণ"
            }
        };

        Object.keys(calendarTranslations).forEach(function (language) {
            Object.assign(
                translations[language],
                calendarTranslations[language]
            );
        });

        // Translation helper
        function t(key) {
            const language =
                localStorage.getItem("fertwise_language") || "en";

            return (
                translations[language]?.[key] ||
                translations.en[key] ||
                key
            );
        }

        // ==========================================
        // CROP NAMES AND SCHEDULE TRANSLATIONS
        // ==========================================

        const textTranslations = {
            "Land preparation": ["भूमि की तैयारी", "জমি প্রস্তুতি"],
            "Before planting": ["बुवाई से पहले", "রোপণের আগে"],
            "Prepare and level the field. Check soil and water availability.": [
                "खेत तैयार करें और समतल करें। मिट्टी और पानी की उपलब्धता जांचें।",
                "জমি প্রস্তুত ও সমতল করুন। মাটি এবং জলের প্রাপ্যতা পরীক্ষা করুন।"
            ],
            "Establishment": ["स्थापना चरण", "প্রতিষ্ঠার পর্যায়"],
            "0–15 days": ["0–15 दिन", "0–15 দিন"],
            "Establish seedlings or direct-seeded crop. Maintain suitable soil moisture.": [
                "पौधों को स्थापित करें या सीधे बीज बोएं। मिट्टी में उचित नमी बनाए रखें।",
                "চারা রোপণ করুন অথবা সরাসরি বীজ বপন করুন। মাটিতে উপযুক্ত আর্দ্রতা বজায় রাখুন।"
            ],
            "Tillering": ["कल्ले निकलने का चरण", "কুশি গজানোর পর্যায়"],
            "15–45 days": ["15–45 दिन", "15–45 দিন"],
            "Monitor weeds and crop growth. Apply nutrients according to soil-test and local recommendations.": [
                "खरपतवार और फसल की वृद्धि पर नजर रखें। मिट्टी की जांच और स्थानीय सलाह के अनुसार पोषक तत्व दें।",
                "আগাছা ও ফসলের বৃদ্ধি পর্যবেক্ষণ করুন। মাটি পরীক্ষা এবং স্থানীয় পরামর্শ অনুযায়ী পুষ্টি দিন।"
            ],
            "Panicle development": ["बालियां विकसित होने का चरण", "শিষ গঠনের পর্যায়"],
            "45–70 days": ["45–70 दिन", "45–70 দিন"],
            "Monitor water, pests and crop health. Follow locally recommended nutrient schedule.": [
                "पानी, कीटों और फसल के स्वास्थ्य पर नजर रखें। स्थानीय पोषक तत्व कार्यक्रम का पालन करें।",
                "জল, পোকামাকড় এবং ফসলের স্বাস্থ্য পর্যবেক্ষণ করুন। স্থানীয় পুষ্টি ব্যবস্থাপনা অনুসরণ করুন।"
            ],
            "Maturity": ["परिपक्वता", "পরিপক্বতা"],
            "70 days onward": ["70 दिनों के बाद", "70 দিন পর থেকে"],
            "Reduce irrigation as appropriate and prepare for harvesting.": [
                "आवश्यकतानुसार सिंचाई कम करें और कटाई की तैयारी करें।",
                "প্রয়োজন অনুযায়ী সেচ কমান এবং ফসল কাটার প্রস্তুতি নিন।"
            ],
            "Sowing": ["बुवाई", "বীজ বপন"],
            "Day 0": ["पहला दिन", "প্রথম দিন"],
            "Prepare a fine seedbed and sow healthy seeds.": [
                "अच्छी बीज क्यारी तैयार करें और स्वस्थ बीज बोएं।",
                "ভালো বীজতলা তৈরি করুন এবং সুস্থ বীজ বপন করুন।"
            ],
            "Crown root initiation": ["क्राउन रूट बनने का चरण", "ক্রাউন রুট গঠনের পর্যায়"],
            "20–25 days": ["20–25 दिन", "20–25 দিন"],
            "Check moisture and apply irrigation when needed.": [
                "मिट्टी की नमी जांचें और आवश्यकता पड़ने पर सिंचाई करें।",
                "মাটির আর্দ্রতা পরীক্ষা করুন এবং প্রয়োজন হলে সেচ দিন।"
            ],
            "25–45 days": ["25–45 दिन", "25–45 দিন"],
            "Monitor weeds and crop growth. Follow recommended nutrient schedule.": [
                "खरपतवार और फसल की वृद्धि पर नजर रखें। अनुशंसित पोषक तत्व कार्यक्रम का पालन करें।",
                "আগাছা ও ফসলের বৃদ্ধি পর্যবেক্ষণ করুন। সুপারিশকৃত পুষ্টি ব্যবস্থাপনা অনুসরণ করুন।"
            ],
            "Flowering": ["फूल आने का चरण", "ফুল আসার পর্যায়"],
            "60–90 days": ["60–90 दिन", "60–90 দিন"],
            "Monitor irrigation, pests and diseases.": [
                "सिंचाई, कीटों और बीमारियों पर नजर रखें।",
                "সেচ, পোকামাকড় এবং রোগ পর্যবেক্ষণ করুন।"
            ],
            "Grain filling and maturity": ["दाना भरने और परिपक्वता का चरण", "দানা পূর্ণতা ও পরিপক্বতার পর্যায়"],
            "90 days onward": ["90 दिनों के बाद", "90 দিন পর থেকে"],
            "Avoid unnecessary irrigation near maturity and prepare for harvest.": [
                "परिपक्वता के समय अनावश्यक सिंचाई से बचें और कटाई की तैयारी करें।",
                "পরিপক্বতার সময় অপ্রয়োজনীয় সেচ এড়িয়ে চলুন এবং ফসল কাটার প্রস্তুতি নিন।"
            ],
            "Seedling stage": ["पौध अवस्था", "চারা পর্যায়"],
            "1–15 days": ["1–15 दिन", "1–15 দিন"],
            "Check germination and maintain adequate moisture.": [
                "अंकुरण जांचें और पर्याप्त नमी बनाए रखें।",
                "অঙ্কুরোদ্গম পরীক্ষা করুন এবং পর্যাপ্ত আর্দ্রতা বজায় রাখুন।"
            ],
            "Vegetative stage": ["वानस्पतिक अवस्था", "বৃদ্ধির পর্যায়"],
            "15–40 days": ["15–40 दिन", "15–40 দিন"],
            "Control weeds and follow soil-test-based nutrient recommendations.": [
                "खरपतवार नियंत्रित करें और मिट्टी की जांच के आधार पर पोषक तत्व दें।",
                "আগাছা নিয়ন্ত্রণ করুন এবং মাটি পরীক্ষার ভিত্তিতে পুষ্টি ব্যবস্থাপনা করুন।"
            ],
            "Tasseling and silking": ["टैसलिंग और सिल्किंग चरण", "ট্যাসেলিং ও সিল্কিং পর্যায়"],
            "40–65 days": ["40–65 दिन", "40–65 দিন"],
            "Avoid water stress and monitor crop health.": [
                "पानी की कमी से बचें और फसल के स्वास्थ्य पर नजर रखें।",
                "জলের অভাব এড়িয়ে চলুন এবং ফসলের স্বাস্থ্য পর্যবেক্ষণ করুন।"
            ],
            "65 days onward": ["65 दिनों के बाद", "65 দিন পর থেকে"],
            "Monitor grain development and prepare for harvest.": [
                "दाने के विकास पर नजर रखें और कटाई की तैयारी करें।",
                "দানা গঠন পর্যবেক্ষণ করুন এবং ফসল কাটার প্রস্তুতি নিন।"
            ],
            "1–20 days": ["1–20 दिन", "1–20 দিন"],
            "Prepare field and sow suitable cotton seeds.": [
                "खेत तैयार करें और उपयुक्त कपास के बीज बोएं।",
                "জমি প্রস্তুত করুন এবং উপযুক্ত তুলার বীজ বপন করুন।"
            ],
            "Check plant establishment and control early weeds.": [
                "पौधों की स्थापना जांचें और शुरुआती खरपतवार नियंत्रित करें।",
                "গাছের প্রতিষ্ঠা পরীক্ষা করুন এবং প্রাথমিক আগাছা নিয়ন্ত্রণ করুন।"
            ],
            "20–50 days": ["20–50 दिन", "20–50 দিন"],
            "Monitor plant growth and apply nutrients as recommended.": [
                "पौधों की वृद्धि पर नजर रखें और सलाह के अनुसार पोषक तत्व दें।",
                "গাছের বৃদ্ধি পর্যবেক্ষণ করুন এবং পরামর্শ অনুযায়ী পুষ্টি দিন।"
            ],
            "Flowering and boll formation": ["फूल और टिंडे बनने का चरण", "ফুল ও ফল গঠনের পর্যায়"],
            "50–100 days": ["50–100 दिन", "50–100 দিন"],
            "Monitor pests, irrigation and plant nutrition.": [
                "कीटों, सिंचाई और पौधों के पोषण पर नजर रखें।",
                "পোকামাকড়, সেচ এবং গাছের পুষ্টি পর্যবেক্ষণ করুন।"
            ],
            "Boll opening": ["टिंडे खुलने का चरण", "তুলার ফল ফাটার পর্যায়"],
            "100 days onward": ["100 दिनों के बाद", "100 দিন পর থেকে"],
            "Monitor boll maturity and pick mature cotton.": [
                "टिंडों की परिपक्वता जांचें और पकी हुई कपास चुनें।",
                "তুলার ফলের পরিপক্বতা পর্যবেক্ষণ করুন এবং পরিপক্ব তুলা সংগ্রহ করুন।"
            ],
            "Planting": ["रोपण", "রোপণ"],
            "Prepare furrows and plant healthy setts.": [
                "नालियां तैयार करें और स्वस्थ गन्ने के टुकड़े लगाएं।",
                "নালা তৈরি করুন এবং সুস্থ আখের টুকরো রোপণ করুন।"
            ],
            "Germination": ["अंकुरण", "অঙ্কুরোদ্গম"],
            "1–35 days": ["1–35 दिन", "1–35 দিন"],
            "Maintain moisture and check sprouting.": [
                "नमी बनाए रखें और अंकुरण जांचें।",
                "আর্দ্রতা বজায় রাখুন এবং অঙ্কুরোদ্গম পরীক্ষা করুন।"
            ],
            "35–120 days": ["35–120 दिन", "35–120 দিন"],
            "120–270 days": ["120–270 दिन", "120–270 দিন"],
            "Monitor irrigation, nutrients and crop health.": [
                "सिंचाई, पोषक तत्वों और फसल के स्वास्थ्य पर नजर रखें।",
                "সেচ, পুষ্টি এবং ফসলের স্বাস্থ্য পর্যবেক্ষণ করুন।"
            ],
            "Monitor maturity and harvest according to local variety recommendations.": [
                "परिपक्वता जांचें और स्थानीय किस्म की सलाह के अनुसार कटाई करें।",
                "পরিপক্বতা পর্যবেক্ষণ করুন এবং স্থানীয় জাতের পরামর্শ অনুযায়ী ফসল কাটুন।"
            ],
            "Nursery and planting": ["नर्सरी और रोपण", "নার্সারি ও রোপণ"],
            "Prepare healthy seedlings and transplant into prepared soil.": [
                "स्वस्थ पौधे तैयार करें और तैयार मिट्टी में रोपाई करें।",
                "সুস্থ চারা তৈরি করুন এবং প্রস্তুত মাটিতে রোপণ করুন।"
            ],
            "20–40 days": ["20–40 दिन", "20–40 দিন"],
            "Maintain moisture and check seedling growth.": [
                "नमी बनाए रखें और पौधों की वृद्धि जांचें।",
                "আর্দ্রতা বজায় রাখুন এবং চারার বৃদ্ধি পরীক্ষা করুন।"
            ],
            "Vegetative growth": ["वानस्पतिक वृद्धि", "উদ্ভিজ্জ বৃদ্ধি"],
            "Support healthy growth and monitor pests.": [
                "स्वस्थ वृद्धि में सहायता करें और कीटों पर नजर रखें।",
                "সুস্থ বৃদ্ধি নিশ্চিত করুন এবং পোকামাকড় পর্যবেক্ষণ করুন।"
            ],
            "Flowering and fruit setting": ["फूल और फल बनने का चरण", "ফুল ও ফল গঠনের পর্যায়"],
            "40–65 days": ["40–65 दिन", "40–65 দিন"],
            "Maintain even moisture and follow recommended nutrient management.": [
                "मिट्टी में समान नमी बनाए रखें और अनुशंसित पोषक तत्व प्रबंधन अपनाएं।",
                "মাটিতে সমান আর্দ্রতা বজায় রাখুন এবং সুপারিশকৃত পুষ্টি ব্যবস্থাপনা অনুসরণ করুন।"
            ],
            "Fruit development and harvest": ["फल विकास और कटाई", "ফল বৃদ্ধি ও সংগ্রহ"],
            "65 days onward": ["65 दिनों के बाद", "65 দিন পর থেকে"],
            "Monitor fruit health and harvest ripe fruits regularly.": [
                "फलों के स्वास्थ्य पर नजर रखें और पके फल नियमित रूप से तोड़ें।",
                "ফলের স্বাস্থ্য পর্যবেক্ষণ করুন এবং পাকা ফল নিয়মিত সংগ্রহ করুন।"
            ],
            "Plant healthy seed tubers in prepared soil.": [
                "तैयार मिट्टी में स्वस्थ बीज कंद लगाएं।",
                "প্রস্তুত মাটিতে সুস্থ বীজ আলু রোপণ করুন।"
            ],
            "Maintain suitable soil moisture.": [
                "मिट्टी में उचित नमी बनाए रखें।",
                "মাটিতে উপযুক্ত আর্দ্রতা বজায় রাখুন।"
            ],
            "Monitor weeds and plant health.": [
                "खरपतवार और पौधों के स्वास्थ्य पर नजर रखें।",
                "আগাছা এবং গাছের স্বাস্থ্য পর্যবেক্ষণ করুন।"
            ],
            "Tuber formation": ["कंद बनने का चरण", "কন্দ গঠনের পর্যায়"],
            "40–70 days": ["40–70 दिन", "40–70 দিন"],
            "Maintain suitable moisture and follow local nutrient recommendations.": [
                "उचित नमी बनाए रखें और स्थानीय पोषक तत्व सलाह का पालन करें।",
                "উপযুক্ত আর্দ্রতা বজায় রাখুন এবং স্থানীয় পুষ্টি পরামর্শ অনুসরণ করুন।"
            ],
            "Reduce irrigation before harvesting as locally advised.": [
                "स्थानीय सलाह के अनुसार कटाई से पहले सिंचाई कम करें।",
                "স্থানীয় পরামর্শ অনুযায়ী ফসল কাটার আগে সেচ কমান।"
            ],
            "Nursery and transplanting": ["नर्सरी और रोपाई", "নার্সারি ও চারা রোপণ"],
            "Prepare healthy seedlings and a suitable field.": [
                "स्वस्थ पौधे तैयार करें और उपयुक्त खेत तैयार करें।",
                "সুস্থ চারা তৈরি করুন এবং উপযুক্ত জমি প্রস্তুত করুন।"
            ],
            "Check seedling establishment.": [
                "पौधों की स्थापना जांचें।",
                "চারার প্রতিষ্ঠা পরীক্ষা করুন।"
            ],
            "Monitor weeds and crop nutrition.": [
                "खरपतवार और फसल के पोषण पर नजर रखें।",
                "আগাছা এবং ফসলের পুষ্টি পর্যবেক্ষণ করুন।"
            ],
            "Bulb formation": ["कंद बनने का चरण", "বাল্ব গঠনের পর্যায়"],
            "50–90 days": ["50–90 दिन", "50–90 দিন"],
            "Stop irrigation at the locally recommended time and prepare for harvest.": [
                "स्थानीय सलाह के अनुसार सही समय पर सिंचाई बंद करें और कटाई की तैयारी करें।",
                "স্থানীয় পরামর্শ অনুযায়ী সঠিক সময়ে সেচ বন্ধ করুন এবং ফসল কাটার প্রস্তুতি নিন।"
            ],
            "Prepare healthy seedlings and transplant carefully.": [
                "स्वस्थ पौधे तैयार करें और सावधानी से रोपाई करें।",
                "সুস্থ চারা তৈরি করুন এবং সাবধানে রোপণ করুন।"
            ],
            "Leaf growth": ["पत्तियों की वृद्धि", "পাতার বৃদ্ধি"],
            "45 days onward": ["45 दिनों के बाद", "45 দিন পর থেকে"],
            "Head formation": ["गोभी का सिर बनने का चरण", "বাঁধাকপির মাথা গঠনের পর্যায়"],
            "45–75 days": ["45–75 दिन", "45–75 দিন"],
            "Maintain even moisture and monitor pests.": [
                "समान नमी बनाए रखें और कीटों पर नजर रखें।",
                "সমান আর্দ্রতা বজায় রাখুন এবং পোকামাকড় পর্যবেক্ষণ করুন।"
            ],
            "Harvest": ["कटाई", "ফসল সংগ্রহ"],
            "75 days onward": ["75 दिनों के बाद", "75 দিন পর থেকে"],
            "Harvest when heads are firm and mature.": [
                "जब गोभी के सिर सख्त और परिपक्व हों तब कटाई करें।",
                "বাঁধাকপির মাথা শক্ত ও পরিপক্ব হলে সংগ্রহ করুন।"
            ],
            "Choose a suitable vegetable variety.": [
                "उपयुक्त सब्जी की किस्म चुनें।",
                "উপযুক্ত সবজির জাত নির্বাচন করুন।"
            ],
            "Check germination or transplant establishment.": [
                "अंकुरण या रोपाई की स्थापना जांचें।",
                "অঙ্কুরোদ্গম অথবা চারা রোপণের প্রতিষ্ঠা পরীক্ষা করুন।"
            ],
            "Control weeds and monitor plant health.": [
                "खरपतवार नियंत्रित करें और पौधों के स्वास्थ्य पर नजर रखें।",
                "আগাছা নিয়ন্ত্রণ করুন এবং গাছের স্বাস্থ্য পর্যবেক্ষণ করুন।"
            ],
            "Flowering and fruiting": ["फूल और फल आने का चरण", "ফুল ও ফল ধরার পর্যায়"],
            "40–70 days": ["40–70 दिन", "40–70 দিন"],
            "Maintain suitable moisture and follow crop-specific nutrient advice.": [
                "उचित नमी बनाए रखें और फसल के अनुसार पोषक तत्व सलाह का पालन करें।",
                "উপযুক্ত আর্দ্রতা বজায় রাখুন এবং ফসল অনুযায়ী পুষ্টি পরামর্শ অনুসরণ করুন।"
            ],
            "According to crop": ["फसल के अनुसार", "ফসল অনুযায়ী"],
            "Harvest at the correct maturity stage.": [
                "सही परिपक्वता अवस्था में कटाई करें।",
                "সঠিক পরিপক্বতার পর্যায়ে ফসল সংগ্রহ করুন।"
            ]
        };

        function translateText(value) {
            const language =
                localStorage.getItem("fertwise_language") || "en";

            if (language === "hi") {
                return textTranslations[value]?.[0] || value;
            }

            if (language === "bn") {
                return textTranslations[value]?.[1] || value;
            }

            return value;
        }

        // ==========================================
        // FIND PREDICTION FORM
        // ==========================================

        if (document.getElementById("cropCalendarSection")) return;

        const form = document.getElementById("predictionForm");

        if (!form) {
            console.error("FertiWise: Prediction form not found.");
            return;
        }

        // ==========================================
        // CREATE CROP CALENDAR SECTION
        // ==========================================

        const section = document.createElement("section");

        section.id = "cropCalendarSection";
        section.className = "card";
        section.style.cssText = "margin-top:20px;padding:20px;";

        section.innerHTML = `
            <h2 data-i18n="calendarTitle">
                ${t("calendarTitle")}
            </h2>

            <p data-i18n="calendarDescription">
                ${t("calendarDescription")}
            </p>

            <label for="calendarCrop">
                <strong data-i18n="selectCropLabel">
                    ${t("selectCropLabel")}
                </strong>
            </label>

            <select
                id="calendarCrop"
                style="display:block;width:100%;padding:10px;margin:10px 0 15px;border-radius:8px;"
            >
                <option value="" data-i18n="chooseCrop">
                    ${t("chooseCrop")}
                </option>
                <option value="Rice" data-i18n="riceCrop">${t("riceCrop")}</option>
                <option value="Wheat" data-i18n="wheatCrop">${t("wheatCrop")}</option>
                <option value="Maize" data-i18n="maizeCrop">${t("maizeCrop")}</option>
                <option value="Cotton" data-i18n="cottonCrop">${t("cottonCrop")}</option>
                <option value="Sugarcane" data-i18n="sugarcaneCrop">${t("sugarcaneCrop")}</option>
                <option value="Tomato" data-i18n="tomatoCrop">${t("tomatoCrop")}</option>
                <option value="Potato" data-i18n="potatoCrop">${t("potatoCrop")}</option>
                <option value="Onion" data-i18n="onionCrop">${t("onionCrop")}</option>
                <option value="Cabbage" data-i18n="cabbageCrop">${t("cabbageCrop")}</option>
                <option value="Vegetables" data-i18n="vegetablesCrop">${t("vegetablesCrop")}</option>
            </select>

            <button
                type="button"
                id="generateCropCalendar"
                data-i18n="generateCalendarButton"
                style="background:#16a34a;color:white;padding:11px 18px;border:0;border-radius:8px;cursor:pointer;"
            >
                ${t("generateCalendarButton")}
            </button>

            <div id="cropCalendarResult" style="margin-top:20px;"></div>

            <p
                data-i18n="calendarNote"
                style="font-size:12px;color:gray;margin-top:15px;"
            >
                ${t("calendarNote")}
            </p>
        `;

        const pdfSection =
            document.getElementById("pdfReportSection");

        const calculatorSection =
            document.getElementById("fertilizerCalculatorSection");

        const healthSection =
            document.getElementById("soilHealthSection");

        const insertAfter =
            pdfSection || calculatorSection || healthSection || form;

        insertAfter.insertAdjacentElement("afterend", section);

        // Apply currently selected language
        if (typeof applyLanguage === "function") {
            applyLanguage(
                localStorage.getItem("fertwise_language") || "en"
            );
        }

        // ==========================================
        // ORIGINAL CROP SCHEDULES
        // ==========================================

        const schedules = {
            Rice: [
                ["Land preparation", "Before planting", "Prepare and level the field. Check soil and water availability."],
                ["Establishment", "0–15 days", "Establish seedlings or direct-seeded crop. Maintain suitable soil moisture."],
                ["Tillering", "15–45 days", "Monitor weeds and crop growth. Apply nutrients according to soil-test and local recommendations."],
                ["Panicle development", "45–70 days", "Monitor water, pests and crop health. Follow locally recommended nutrient schedule."],
                ["Maturity", "70 days onward", "Reduce irrigation as appropriate and prepare for harvesting."]
            ],

            Wheat: [
                ["Sowing", "Day 0", "Prepare a fine seedbed and sow healthy seeds."],
                ["Crown root initiation", "20–25 days", "Check moisture and apply irrigation when needed."],
                ["Tillering", "25–45 days", "Monitor weeds and crop growth. Follow recommended nutrient schedule."],
                ["Flowering", "60–90 days", "Monitor irrigation, pests and diseases."],
                ["Grain filling and maturity", "90 days onward", "Avoid unnecessary irrigation near maturity and prepare for harvest."]
            ],

            Maize: [
                ["Sowing", "Day 0", "Sow quality seeds at locally recommended spacing."],
                ["Seedling stage", "1–15 days", "Check germination and maintain adequate moisture."],
                ["Vegetative stage", "15–40 days", "Control weeds and follow soil-test-based nutrient recommendations."],
                ["Tasseling and silking", "40–65 days", "Avoid water stress and monitor crop health."],
                ["Grain filling and maturity", "65 days onward", "Monitor grain development and prepare for harvest."]
            ],

            Cotton: [
                ["Sowing", "Day 0", "Prepare field and sow suitable cotton seeds."],
                ["Seedling stage", "1–20 days", "Check plant establishment and control early weeds."],
                ["Vegetative stage", "20–50 days", "Monitor plant growth and apply nutrients as recommended."],
                ["Flowering and boll formation", "50–100 days", "Monitor pests, irrigation and plant nutrition."],
                ["Boll opening", "100 days onward", "Monitor boll maturity and pick mature cotton."]
            ],

            Sugarcane: [
                ["Planting", "Day 0", "Prepare furrows and plant healthy setts."],
                ["Germination", "1–35 days", "Maintain moisture and check sprouting."],
                ["Tillering", "35–120 days", "Control weeds and follow recommended nutrient schedule."],
                ["Grand growth", "120–270 days", "Monitor irrigation, nutrients and crop health."],
                ["Maturity", "270 days onward", "Monitor maturity and harvest according to local variety recommendations."]
            ],

            Tomato: [
                ["Nursery and planting", "Before planting", "Prepare healthy seedlings and transplant into prepared soil."],
                ["Establishment", "1–20 days", "Maintain moisture and check seedling growth."],
                ["Vegetative growth", "20–40 days", "Support healthy growth and monitor pests."],
                ["Flowering and fruit setting", "40–65 days", "Maintain even moisture and follow recommended nutrient management."],
                ["Fruit development and harvest", "65 days onward", "Monitor fruit health and harvest ripe fruits regularly."]
            ],

            Potato: [
                ["Planting", "Day 0", "Plant healthy seed tubers in prepared soil."],
                ["Sprouting", "1–20 days", "Maintain suitable soil moisture."],
                ["Vegetative growth", "20–40 days", "Monitor weeds and plant health."],
                ["Tuber formation", "40–70 days", "Maintain suitable moisture and follow local nutrient recommendations."],
                ["Maturity", "70 days onward", "Reduce irrigation before harvesting as locally advised."]
            ],

            Onion: [
                ["Nursery and transplanting", "Before planting", "Prepare healthy seedlings and a suitable field."],
                ["Establishment", "1–20 days", "Maintain moisture and check seedling establishment."],
                ["Vegetative growth", "20–50 days", "Monitor weeds and crop nutrition."],
                ["Bulb formation", "50–90 days", "Maintain suitable moisture and monitor crop health."],
                ["Maturity", "90 days onward", "Stop irrigation at the locally recommended time and prepare for harvest."]
            ],

            Cabbage: [
                ["Nursery and transplanting", "Before planting", "Prepare healthy seedlings and transplant carefully."],
                ["Establishment", "1–20 days", "Maintain moisture and check plant establishment."],
                ["Leaf growth", "20–45 days", "Monitor weeds and follow soil-test-based nutrient recommendations."],
                ["Head formation", "45–75 days", "Maintain even moisture and monitor pests."],
                ["Harvest", "75 days onward", "Harvest when heads are firm and mature."]
            ],

            Vegetables: [
                ["Land preparation", "Before planting", "Prepare soil and choose a suitable vegetable variety."],
                ["Establishment", "1–20 days", "Check germination or transplant establishment."],
                ["Vegetative growth", "20–40 days", "Control weeds and monitor plant health."],
                ["Flowering and fruiting", "40–70 days", "Maintain suitable moisture and follow crop-specific nutrient advice."],
                ["Harvest", "According to crop", "Harvest at the correct maturity stage."]
            ]
        };

        // ==========================================
        // GENERATE CROP CALENDAR
        // ==========================================

        document
            .getElementById("generateCropCalendar")
            .addEventListener("click", function () {

                const crop =
                    document.getElementById("calendarCrop").value;

                const result =
                    document.getElementById("cropCalendarResult");

                if (!crop) {
                    result.innerHTML = `
                        <p style="color:red;">
                            ${t("selectCropError")}
                        </p>
                    `;
                    return;
                }

                const stages = schedules[crop];

                const language =
                    localStorage.getItem("fertwise_language") || "en";

                const cropNameKey = {
                    Rice: "riceCrop",
                    Wheat: "wheatCrop",
                    Maize: "maizeCrop",
                    Cotton: "cottonCrop",
                    Sugarcane: "sugarcaneCrop",
                    Tomato: "tomatoCrop",
                    Potato: "potatoCrop",
                    Onion: "onionCrop",
                    Cabbage: "cabbageCrop",
                    Vegetables: "vegetablesCrop"
                };

                const translatedCrop = t(cropNameKey[crop]);

                result.innerHTML = `
                    <h3>
                        ${translatedCrop} – ${t("growthCalendar")}
                    </h3>

                    <div style="overflow-x:auto;">
                        <table style="width:100%;border-collapse:collapse;">

                            <thead>
                                <tr style="background:#e8f5e9;">
                                    <th style="padding:10px;border:1px solid #ccc;">
                                        ${t("growthStage")}
                                    </th>

                                    <th style="padding:10px;border:1px solid #ccc;">
                                        ${t("approximateTiming")}
                                    </th>

                                    <th style="padding:10px;border:1px solid #ccc;">
                                        ${t("activity")}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                ${stages.map(function (stage) {
                    return `
                                        <tr>
                                            <td style="padding:10px;border:1px solid #ccc;">
                                                ${translateText(stage[0])}
                                            </td>

                                            <td style="padding:10px;border:1px solid #ccc;">
                                                ${translateText(stage[1])}
                                            </td>

                                            <td style="padding:10px;border:1px solid #ccc;">
                                                ${translateText(stage[2])}
                                            </td>
                                        </tr>
                                    `;
                }).join("")}
                            </tbody>

                        </table>
                    </div>
                `;
            });

        // ==========================================
        // AUTO-SELECT CROP FROM PREDICTION FORM
        // ==========================================

        const cropInput =
            form.querySelector('[name="Crop_Type"]');

        if (cropInput) {
            const calendarCrop =
                document.getElementById("calendarCrop");

            function syncCrop() {
                const selected =
                    cropInput.value.trim().toLowerCase();

                const matchingOption =
                    Array.from(calendarCrop.options).find(
                        option =>
                            option.value.toLowerCase() === selected
                    );

                if (matchingOption) {
                    calendarCrop.value = matchingOption.value;
                }
            }

            syncCrop();

            cropInput.addEventListener("change", syncCrop);
        }

        console.log(
            "FertiWise: Multilingual Crop Calendar loaded successfully."
        );
    });
})();
