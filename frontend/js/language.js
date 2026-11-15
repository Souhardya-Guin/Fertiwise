
"use strict";

// ========================================
// FertiWise Multilingual System
// English | Hindi | Bengali
// ========================================

const translations = {

    // ====================================
    // ENGLISH
    // ====================================
    en: {
        home: "Home",
        dashboard: "Dashboard",
        login: "Login",
        signup: "Sign Up",

        tagline: "AI-POWERED SMART FARMING",
        heroLine1: "Smarter Farming.",
        heroLine2: "Better Decisions.",
        heroDescription: "FertiWise helps farmers make smarter fertilizer decisions using soil information, crop data, environmental conditions and artificial intelligence.",
        getRecommendation: "Get Recommendation",
        learnMore: "Learn More",
        smartAgriculture: "SMART AGRICULTURE",
        featuresHeading: "Everything You Need for Better Farming",

        fertilizerTitle: "Fertilizer Recommendation",
        fertilizerDescription: "Get intelligent fertilizer recommendations based on crop and soil conditions.",
        soilTitle: "Soil Analysis",
        soilDescription: "Analyze important soil parameters such as Nitrogen, Phosphorus, Potassium and moisture.",
        assistantTitle: "AI Assistant",
        assistantDescription: "Get useful farming information and understand recommendations with an AI assistant.",
        dashboardTitle: "Smart Dashboard",
        dashboardDescription: "View your soil information, recommendations and farming history in one place.",
        footer: "© 2026 FertiWise. Smart Agriculture with AI.",

        languageLabel: "Select Language",
        createAccount: "Create Account",
        signupIntro: "Join FertiWise and start smart farming",
        fullName: "Full Name",
        emailAddress: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        alreadyAccount: "Already have an account?",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email",
        passwordPlaceholder: "Create a strong password",
        confirmPasswordPlaceholder: "Confirm your password",
        passwordHint: "Use 8+ characters with uppercase, lowercase, number and special character.",

        welcomeBack: "Welcome Back",
        loginHeading: "Login to FertiWise",
        loginIntro: "Enter your account details to continue.",
        loginButton: "Login to Account →",
        noAccount: "Don't have an account?",
        createAccountLink: "Create Account",
        emailLoginPlaceholder: "Enter your email address",
        loginPasswordPlaceholder: "Enter your password",
        showPassword: "SHOW",
        hidePassword: "HIDE",

        loginWelcomeTitle: "Grow Smarter. Farm Better.",
        loginWelcomeDescription: "Make smarter farming decisions with AI-powered fertilizer recommendations and soil insights.",
        loginFeature1: "AI-Based Fertilizer Recommendations",
        loginFeature2: "Smart Soil Analysis Dashboard",
        loginFeature3: "Track Your Prediction History",
        loginFooter: "Secure Login · FertiWise Smart Farming Platform",

        // DASHBOARD
        dashboardWelcome: "Welcome to FertiWise Dashboard",
        dashboardSubtitle: "Smart Fertilizer Recommendation System",
        welcomeFarmer: "Welcome",
        logout: "Logout",
        selectLanguage: "Select Language",

        recommendationHeading: "🌾 Fertilizer Recommendation",
        recommendationDescription: "Select soil, crop and environmental details.",
        soilType: "Soil Type",
        selectSoilType: "Select Soil Type",
        soilPH: "Soil pH",
        soilMoisture: "Soil Moisture",
        organicCarbon: "Organic Carbon",
        electricalConductivity: "Electrical Conductivity",
        nitrogenLevel: "Nitrogen Level",
        phosphorusLevel: "Phosphorus Level",
        potassiumLevel: "Potassium Level",
        temperature: "Temperature (°C)",
        humidity: "Humidity (%)",
        rainfall: "Rainfall",
        cropType: "Crop Type",
        selectCrop: "Select Crop",
        cropGrowthStage: "Crop Growth Stage",
        selectGrowthStage: "Select Growth Stage",
        season: "Season",
        selectSeason: "Select Season",
        irrigationType: "Irrigation Type",
        selectIrrigation: "Select Irrigation Type",
        previousCrop: "Previous Crop",
        selectPreviousCrop: "Select Previous Crop",
        region: "Region",
        selectRegion: "Select Region",
        fertilizerLastSeason: "Fertilizer Used Last Season (Numeric Code)",
        yieldLastSeason: "Yield Last Season",
        getFertilizerRecommendation: "Get Fertilizer Recommendation",
        generatingRecommendation: "Generating Recommendation...",
        recommendedFertilizer: "🌱 Recommended Fertilizer",

        // DROPDOWN OPTIONS
        black: "Black",
        red: "Red",
        alluvial: "Alluvial",
        clay: "Clay",
        sandy: "Sandy",
        loamy: "Loamy",

        rice: "Rice",
        wheat: "Wheat",
        maize: "Maize",
        cotton: "Cotton",
        sugarcane: "Sugarcane",
        potato: "Potato",
        tomato: "Tomato",
        onion: "Onion",
        cabbage: "Cabbage",
        vegetables: "Vegetables",

        seedling: "Seedling",
        vegetative: "Vegetative",
        flowering: "Flowering",
        maturity: "Maturity",
        harvesting: "Harvesting",

        kharif: "Kharif",
        rabi: "Rabi",
        zaid: "Zaid",
        summer: "Summer",
        winter: "Winter",
        monsoon: "Monsoon",

        rainfed: "Rainfed",
        drip: "Drip",
        sprinkler: "Sprinkler",
        flood: "Flood",
        none: "None",

        westBengal: "West Bengal",
        punjab: "Punjab",
        haryana: "Haryana",
        bihar: "Bihar",
        uttarPradesh: "Uttar Pradesh",
        maharashtra: "Maharashtra",
        gujarat: "Gujarat",
        rajasthan: "Rajasthan",
        madhyaPradesh: "Madhya Pradesh",

        // CAMERA
        cameraHeading: "📷 Camera Soil Analysis",
        cameraDescription: "Capture a soil image for visual inspection.",
        cameraPlaceholder: "Camera preview will appear here.",
        openCamera: "Open Camera",
        captureSoil: "Capture Soil",
        stopCamera: "Stop Camera",
        retakePhoto: "Retake Photo",
        analyzeImage: "Analyze Image",
        saveSoilImage: "Save Soil Image",
        savingImage: "Saving Image...",
        imageSaved: "Image Saved",
        visualAnalysis: "Visual Analysis Result",
        cameraInitial: "Click Open Camera to begin.",

        // SAVED IMAGES
        savedImagesHeading: "🖼️ Saved Soil Images",
        loadingImages: "Loading saved soil images...",
        noImages: "No soil images saved yet.",
        savedImagesFound: "saved soil image(s) found.",

        // HISTORY
        historyHeading: "📊 Prediction History",
        loadingHistory: "Loading prediction history...",
        historyDate: "Date",
        historyCrop: "Crop",
        historySoil: "Soil Type",
        historyNitrogen: "Nitrogen",
        historyPhosphorus: "Phosphorus",
        historyPotassium: "Potassium",
        historyRecommendation: "Recommendation",
        noHistory: "No prediction history available yet.",
        recordsFound: "prediction records found.",

        // ANALYTICS
        analyticsHeading: "📈 Soil & Crop Analytics",
        analyticsDescription: "Analytics generated from your saved prediction records.",
        loadingAnalytics: "Loading analytics...",
        noAnalytics: "No analytics data available yet.",
        noAnalyticsRecords: "No records available for analytics.",
        showingRecords: "Showing",
        historicalRecords: "historical prediction records.",
        numericalValue: "Numerical Value",
        numberOfRecords: "Number of Records",

        // MESSAGES
        fillAllFields: "Please fill all 19 input fields.",
        invalidNumber: "Invalid numerical value in",
        predictionSuccess: "Fertilizer recommendation generated successfully!",
        predictionFailed: "Prediction failed",
        emptyRecommendation: "Model returned an empty recommendation.",
        pleaseLogin: "Please login first.",
        cameraUnavailable: "Camera is unavailable. Open the app through localhost.",
        cameraStarted: "Camera started. Capture your soil image.",
        cameraOpenFirst: "Please open camera first.",
        imageCaptured: "Soil image captured successfully. You can now save it.",
        captureFirst: "Please capture a soil image first.",
        alreadySaved: "This image has already been saved.",
        uploadingImage: "Uploading soil image. Please wait...",
        imageSaveSuccess: "Soil image saved successfully!",
        imageSaveFailed: "Could not save soil image.",
        imageSaveError: "Image saving failed:",
        imageAnalysisLoading: "Loading image detection model...",
        personDetected: "Person detected. Please capture the soil image again without people.",
        retakeImage: "Please retake the image.",
        noPersonDetected: "No person detected. Image is ready for further soil analysis. This is visual object detection, not an NPK or pH soil test.",
        imageAnalysisCompleted: "Image analysis completed.",
        imageAnalysisFailed: "Image analysis failed:",
        captureImageFirst: "Capture an image first.",
        backendNotReady: "Backend or ML model is not ready.",
        footerDashboard: "FertiWise | Smart Agriculture & Fertilizer Recommendation System",

        soilPHPlaceholder: "e.g. 6.5",
        moisturePlaceholder: "e.g. 30",
        carbonPlaceholder: "e.g. 45",
        conductivityPlaceholder: "e.g. 20",
        nitrogenPlaceholder: "e.g. 60",
        phosphorusPlaceholder: "e.g. 56",
        potassiumPlaceholder: "e.g. 55",
        temperaturePlaceholder: "e.g. 23",
        humidityPlaceholder: "e.g. 68",
        rainfallPlaceholder: "e.g. 90",
        fertilizerPlaceholder: "e.g. 23",
        yieldPlaceholder: "e.g. 2"
    },


    // ====================================
    // HINDI
    // ====================================
    hi: {
        home: "होम",
        dashboard: "डैशबोर्ड",
        login: "लॉगिन",
        signup: "साइन अप",

        tagline: "AI आधारित स्मार्ट खेती",
        heroLine1: "स्मार्ट खेती।",
        heroLine2: "बेहतर फैसले।",
        heroDescription: "FertiWise मिट्टी की जानकारी, फसल के डेटा, मौसम की स्थिति और आर्टिफिशियल इंटेलिजेंस की मदद से किसानों को बेहतर उर्वरक चुनने में मदद करता है।",
        getRecommendation: "सुझाव प्राप्त करें",
        learnMore: "और जानें",
        smartAgriculture: "स्मार्ट कृषि",
        featuresHeading: "बेहतर खेती के लिए जरूरी सुविधाएं",

        fertilizerTitle: "उर्वरक की सलाह",
        fertilizerDescription: "फसल और मिट्टी की स्थिति के आधार पर सही उर्वरक की सलाह प्राप्त करें।",
        soilTitle: "मिट्टी का विश्लेषण",
        soilDescription: "नाइट्रोजन, फॉस्फोरस, पोटैशियम और मिट्टी की नमी जैसे महत्वपूर्ण तत्वों का विश्लेषण करें।",
        assistantTitle: "AI सहायक",
        assistantDescription: "खेती से जुड़ी उपयोगी जानकारी प्राप्त करें और AI की मदद से सुझाव समझें।",
        dashboardTitle: "स्मार्ट डैशबोर्ड",
        dashboardDescription: "मिट्टी की जानकारी, सुझाव और खेती का इतिहास एक ही जगह देखें।",
        footer: "© 2026 FertiWise. AI के साथ स्मार्ट खेती।",

        languageLabel: "भाषा चुनें",
        createAccount: "खाता बनाएं",
        signupIntro: "FertiWise से जुड़ें और स्मार्ट खेती शुरू करें",
        fullName: "पूरा नाम",
        emailAddress: "ईमेल पता",
        password: "पासवर्ड",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        alreadyAccount: "क्या आपका पहले से खाता है?",
        namePlaceholder: "अपना पूरा नाम लिखें",
        emailPlaceholder: "अपना ईमेल लिखें",
        passwordPlaceholder: "मजबूत पासवर्ड बनाएं",
        confirmPasswordPlaceholder: "पासवर्ड दोबारा लिखें",
        passwordHint: "कम से कम 8 अक्षर इस्तेमाल करें, जिनमें बड़े और छोटे अक्षर, नंबर और विशेष चिन्ह हों।",

        welcomeBack: "वापस स्वागत है",
        loginHeading: "FertiWise में लॉगिन करें",
        loginIntro: "जारी रखने के लिए अपने खाते की जानकारी दर्ज करें।",
        loginButton: "लॉगिन करें →",
        noAccount: "क्या आपका खाता नहीं है?",
        createAccountLink: "खाता बनाएं",
        emailLoginPlaceholder: "अपना ईमेल पता लिखें",
        loginPasswordPlaceholder: "अपना पासवर्ड लिखें",
        showPassword: "दिखाएं",
        hidePassword: "छिपाएं",

        loginWelcomeTitle: "स्मार्ट खेती करें। बेहतर फसल उगाएं।",
        loginWelcomeDescription: "AI आधारित उर्वरक सुझाव और मिट्टी की जानकारी से बेहतर खेती के फैसले लें।",
        loginFeature1: "AI आधारित उर्वरक सुझाव",
        loginFeature2: "स्मार्ट मिट्टी विश्लेषण",
        loginFeature3: "अपने सुझावों का इतिहास देखें",
        loginFooter: "सुरक्षित लॉगिन · FertiWise स्मार्ट कृषि प्लेटफॉर्म",

        // DASHBOARD
        dashboardWelcome: "FertiWise डैशबोर्ड में आपका स्वागत है",
        dashboardSubtitle: "स्मार्ट उर्वरक सुझाव प्रणाली",
        welcomeFarmer: "स्वागत है",
        logout: "लॉगआउट",
        selectLanguage: "भाषा चुनें",

        recommendationHeading: "🌾 उर्वरक की सलाह",
        recommendationDescription: "मिट्टी, फसल और पर्यावरण की जानकारी चुनें।",
        soilType: "मिट्टी का प्रकार",
        selectSoilType: "मिट्टी का प्रकार चुनें",
        soilPH: "मिट्टी का pH",
        soilMoisture: "मिट्टी की नमी",
        organicCarbon: "ऑर्गेनिक कार्बन",
        electricalConductivity: "विद्युत चालकता",
        nitrogenLevel: "नाइट्रोजन स्तर",
        phosphorusLevel: "फॉस्फोरस स्तर",
        potassiumLevel: "पोटैशियम स्तर",
        temperature: "तापमान (°C)",
        humidity: "आर्द्रता (%)",
        rainfall: "वर्षा",
        cropType: "फसल का प्रकार",
        selectCrop: "फसल चुनें",
        cropGrowthStage: "फसल की वृद्धि अवस्था",
        selectGrowthStage: "वृद्धि अवस्था चुनें",
        season: "मौसम",
        selectSeason: "मौसम चुनें",
        irrigationType: "सिंचाई का प्रकार",
        selectIrrigation: "सिंचाई का प्रकार चुनें",
        previousCrop: "पिछली फसल",
        selectPreviousCrop: "पिछली फसल चुनें",
        region: "क्षेत्र",
        selectRegion: "क्षेत्र चुनें",
        fertilizerLastSeason: "पिछले मौसम में इस्तेमाल उर्वरक (संख्यात्मक कोड)",
        yieldLastSeason: "पिछले मौसम की उपज",
        getFertilizerRecommendation: "उर्वरक की सलाह प्राप्त करें",
        generatingRecommendation: "सुझाव तैयार हो रहा है...",
        recommendedFertilizer: "🌱 सुझाया गया उर्वरक",

        // DROPDOWN OPTIONS
        black: "काली",
        red: "लाल",
        alluvial: "जलोढ़",
        clay: "चिकनी मिट्टी",
        sandy: "रेतीली",
        loamy: "दोमट",

        rice: "चावल",
        wheat: "गेहूं",
        maize: "मक्का",
        cotton: "कपास",
        sugarcane: "गन्ना",
        potato: "आलू",
        tomato: "टमाटर",
        onion: "प्याज",
        cabbage: "पत्तागोभी",
        vegetables: "सब्जियां",

        seedling: "अंकुर अवस्था",
        vegetative: "विकास अवस्था",
        flowering: "फूल आने की अवस्था",
        maturity: "परिपक्वता",
        harvesting: "कटाई",

        kharif: "खरीफ",
        rabi: "रबी",
        zaid: "जायद",
        summer: "गर्मी",
        winter: "सर्दी",
        monsoon: "मानसून",

        rainfed: "वर्षा आधारित",
        drip: "ड्रिप",
        sprinkler: "स्प्रिंकलर",
        flood: "बाढ़ सिंचाई",
        none: "कोई नहीं",

        westBengal: "पश्चिम बंगाल",
        punjab: "पंजाब",
        haryana: "हरियाणा",
        bihar: "बिहार",
        uttarPradesh: "उत्तर प्रदेश",
        maharashtra: "महाराष्ट्र",
        gujarat: "गुजरात",
        rajasthan: "राजस्थान",
        madhyaPradesh: "मध्य प्रदेश",

        // CAMERA
        cameraHeading: "📷 कैमरे से मिट्टी का निरीक्षण",
        cameraDescription: "निरीक्षण के लिए मिट्टी की तस्वीर लें।",
        cameraPlaceholder: "कैमरे का दृश्य यहां दिखाई देगा।",
        openCamera: "कैमरा खोलें",
        captureSoil: "मिट्टी की तस्वीर लें",
        stopCamera: "कैमरा बंद करें",
        retakePhoto: "दोबारा तस्वीर लें",
        analyzeImage: "तस्वीर का विश्लेषण करें",
        saveSoilImage: "मिट्टी की तस्वीर सेव करें",
        savingImage: "तस्वीर सेव हो रही है...",
        imageSaved: "तस्वीर सेव हो गई",
        visualAnalysis: "दृश्य विश्लेषण परिणाम",
        cameraInitial: "शुरू करने के लिए कैमरा खोलें।",

        // SAVED IMAGES
        savedImagesHeading: "🖼️ सेव की गई मिट्टी की तस्वीरें",
        loadingImages: "सेव की गई तस्वीरें लोड हो रही हैं...",
        noImages: "अभी तक कोई मिट्टी की तस्वीर सेव नहीं है।",
        savedImagesFound: "सेव की गई मिट्टी की तस्वीरें मिलीं।",

        // HISTORY
        historyHeading: "📊 सुझावों का इतिहास",
        loadingHistory: "इतिहास लोड हो रहा है...",
        historyDate: "तारीख",
        historyCrop: "फसल",
        historySoil: "मिट्टी का प्रकार",
        historyNitrogen: "नाइट्रोजन",
        historyPhosphorus: "फॉस्फोरस",
        historyPotassium: "पोटैशियम",
        historyRecommendation: "सुझाव",
        noHistory: "अभी तक कोई सुझाव इतिहास उपलब्ध नहीं है।",
        recordsFound: "सुझाव रिकॉर्ड मिले।",

        // ANALYTICS
        analyticsHeading: "📈 मिट्टी और फसल का विश्लेषण",
        analyticsDescription: "आपके सेव किए गए सुझाव रिकॉर्ड से विश्लेषण तैयार किया गया है।",
        loadingAnalytics: "विश्लेषण लोड हो रहा है...",
        noAnalytics: "अभी कोई विश्लेषण डेटा उपलब्ध नहीं है।",
        noAnalyticsRecords: "विश्लेषण के लिए कोई रिकॉर्ड उपलब्ध नहीं है।",
        showingRecords: "दिखाए जा रहे हैं",
        historicalRecords: "पुराने सुझाव रिकॉर्ड।",
        numericalValue: "संख्यात्मक मान",
        numberOfRecords: "रिकॉर्ड की संख्या",

        // MESSAGES
        fillAllFields: "कृपया सभी 19 फ़ील्ड भरें।",
        invalidNumber: "इस फ़ील्ड में अमान्य संख्या है:",
        predictionSuccess: "उर्वरक का सुझाव सफलतापूर्वक तैयार हो गया!",
        predictionFailed: "सुझाव तैयार नहीं हो सका।",
        emptyRecommendation: "मॉडल ने कोई सुझाव नहीं दिया।",
        pleaseLogin: "कृपया पहले लॉगिन करें।",
        cameraUnavailable: "कैमरा उपलब्ध नहीं है। ऐप को localhost के माध्यम से खोलें।",
        cameraStarted: "कैमरा शुरू हो गया। मिट्टी की तस्वीर लें।",
        cameraOpenFirst: "कृपया पहले कैमरा खोलें।",
        imageCaptured: "मिट्टी की तस्वीर सफलतापूर्वक ली गई। अब आप इसे सेव कर सकते हैं।",
        captureFirst: "कृपया पहले मिट्टी की तस्वीर लें।",
        alreadySaved: "यह तस्वीर पहले ही सेव हो चुकी है।",
        uploadingImage: "तस्वीर अपलोड हो रही है। कृपया प्रतीक्षा करें...",
        imageSaveSuccess: "मिट्टी की तस्वीर सफलतापूर्वक सेव हो गई!",
        imageSaveFailed: "मिट्टी की तस्वीर सेव नहीं हो सकी।",
        imageSaveError: "तस्वीर सेव करने में त्रुटि:",
        imageAnalysisLoading: "तस्वीर पहचानने वाला मॉडल लोड हो रहा है...",
        personDetected: "तस्वीर में व्यक्ति दिखाई दिया। कृपया बिना किसी व्यक्ति के दोबारा तस्वीर लें।",
        retakeImage: "कृपया दोबारा तस्वीर लें।",
        noPersonDetected: "कोई व्यक्ति नहीं मिला। तस्वीर आगे के निरीक्षण के लिए तैयार है। यह केवल दृश्य पहचान है, NPK या pH मिट्टी परीक्षण नहीं।",
        imageAnalysisCompleted: "तस्वीर का विश्लेषण पूरा हुआ।",
        imageAnalysisFailed: "तस्वीर का विश्लेषण विफल:",
        captureImageFirst: "पहले तस्वीर लें।",
        backendNotReady: "Backend या ML मॉडल अभी तैयार नहीं है।",
        footerDashboard: "FertiWise | स्मार्ट कृषि और उर्वरक सुझाव प्रणाली",

        soilPHPlaceholder: "जैसे 6.5",
        moisturePlaceholder: "जैसे 30",
        carbonPlaceholder: "जैसे 45",
        conductivityPlaceholder: "जैसे 20",
        nitrogenPlaceholder: "जैसे 60",
        phosphorusPlaceholder: "जैसे 56",
        potassiumPlaceholder: "जैसे 55",
        temperaturePlaceholder: "जैसे 23",
        humidityPlaceholder: "जैसे 68",
        rainfallPlaceholder: "जैसे 90",
        fertilizerPlaceholder: "जैसे 23",
        yieldPlaceholder: "जैसे 2"
    },


    // ====================================
    // BENGALI
    // ====================================
    bn: {
        home: "হোম",
        dashboard: "ড্যাশবোর্ড",
        login: "লগইন",
        signup: "সাইন আপ",

        tagline: "AI-চালিত স্মার্ট কৃষি",
        heroLine1: "উন্নত কৃষিকাজ।",
        heroLine2: "আরও ভালো সিদ্ধান্ত।",
        heroDescription: "FertiWise মাটির তথ্য, ফসলের তথ্য, আবহাওয়ার অবস্থা এবং কৃত্রিম বুদ্ধিমত্তার সাহায্যে কৃষকদের সঠিক সার বেছে নিতে সাহায্য করে।",
        getRecommendation: "সারের পরামর্শ নিন",
        learnMore: "আরও জানুন",
        smartAgriculture: "স্মার্ট কৃষি",
        featuresHeading: "উন্নত কৃষির জন্য প্রয়োজনীয় সবকিছু",

        fertilizerTitle: "সারের সুপারিশ",
        fertilizerDescription: "ফসল এবং মাটির অবস্থার উপর ভিত্তি করে সারের সুপারিশ পান।",
        soilTitle: "মাটি পরীক্ষা",
        soilDescription: "নাইট্রোজেন, ফসফরাস, পটাশিয়াম এবং মাটির আর্দ্রতার মতো গুরুত্বপূর্ণ উপাদান বিশ্লেষণ করুন।",
        assistantTitle: "AI সহকারী",
        assistantDescription: "কৃষিকাজের দরকারি তথ্য জানুন এবং AI-এর সাহায্যে পরামর্শ বুঝুন।",
        dashboardTitle: "স্মার্ট ড্যাশবোর্ড",
        dashboardDescription: "মাটির তথ্য, সুপারিশ এবং কৃষিকাজের ইতিহাস এক জায়গায় দেখুন।",
        footer: "© 2026 FertiWise. AI-এর সাহায্যে স্মার্ট কৃষি।",

        languageLabel: "ভাষা নির্বাচন করুন",
        createAccount: "অ্যাকাউন্ট তৈরি করুন",
        signupIntro: "FertiWise-এ যোগ দিন এবং স্মার্ট কৃষিকাজ শুরু করুন",
        fullName: "সম্পূর্ণ নাম",
        emailAddress: "ইমেল ঠিকানা",
        password: "পাসওয়ার্ড",
        confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
        alreadyAccount: "আপনার কি আগে থেকেই অ্যাকাউন্ট আছে?",
        namePlaceholder: "আপনার সম্পূর্ণ নাম লিখুন",
        emailPlaceholder: "আপনার ইমেল লিখুন",
        passwordPlaceholder: "একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন",
        confirmPasswordPlaceholder: "পাসওয়ার্ড আবার লিখুন",
        passwordHint: "কমপক্ষে ৮টি অক্ষর ব্যবহার করুন, যেখানে বড় ও ছোট অক্ষর, সংখ্যা এবং বিশেষ চিহ্ন থাকবে।",

        welcomeBack: "আবার স্বাগতম",
        loginHeading: "FertiWise-এ লগইন করুন",
        loginIntro: "চালিয়ে যেতে আপনার অ্যাকাউন্টের তথ্য লিখুন।",
        loginButton: "লগইন করুন →",
        noAccount: "আপনার কি অ্যাকাউন্ট নেই?",
        createAccountLink: "অ্যাকাউন্ট তৈরি করুন",
        emailLoginPlaceholder: "আপনার ইমেল ঠিকানা লিখুন",
        loginPasswordPlaceholder: "আপনার পাসওয়ার্ড লিখুন",
        showPassword: "দেখান",
        hidePassword: "লুকান",

        loginWelcomeTitle: "উন্নত কৃষিকাজ করুন। ভালো ফসল ফলান।",
        loginWelcomeDescription: "AI-ভিত্তিক সারের সুপারিশ এবং মাটির তথ্যের সাহায্যে আরও ভালো কৃষি সিদ্ধান্ত নিন।",
        loginFeature1: "AI-ভিত্তিক সারের সুপারিশ",
        loginFeature2: "স্মার্ট মাটি বিশ্লেষণ",
        loginFeature3: "আপনার সুপারিশের ইতিহাস দেখুন",
        loginFooter: "নিরাপদ লগইন · FertiWise স্মার্ট কৃষি প্ল্যাটফর্ম",

        // DASHBOARD
        dashboardWelcome: "FertiWise ড্যাশবোর্ডে আপনাকে স্বাগতম",
        dashboardSubtitle: "স্মার্ট সার সুপারিশ ব্যবস্থা",
        welcomeFarmer: "স্বাগতম",
        logout: "লগআউট",
        selectLanguage: "ভাষা নির্বাচন করুন",

        recommendationHeading: "🌾 সারের সুপারিশ",
        recommendationDescription: "মাটি, ফসল এবং পরিবেশের তথ্য নির্বাচন করুন।",
        soilType: "মাটির ধরন",
        selectSoilType: "মাটির ধরন নির্বাচন করুন",
        soilPH: "মাটির pH",
        soilMoisture: "মাটির আর্দ্রতা",
        organicCarbon: "জৈব কার্বন",
        electricalConductivity: "বৈদ্যুতিক পরিবাহিতা",
        nitrogenLevel: "নাইট্রোজেনের মাত্রা",
        phosphorusLevel: "ফসফরাসের মাত্রা",
        potassiumLevel: "পটাশিয়ামের মাত্রা",
        temperature: "তাপমাত্রা (°C)",
        humidity: "আর্দ্রতা (%)",
        rainfall: "বৃষ্টিপাত",
        cropType: "ফসলের ধরন",
        selectCrop: "ফসল নির্বাচন করুন",
        cropGrowthStage: "ফসলের বৃদ্ধির পর্যায়",
        selectGrowthStage: "বৃদ্ধির পর্যায় নির্বাচন করুন",
        season: "ঋতু",
        selectSeason: "ঋতু নির্বাচন করুন",
        irrigationType: "সেচের ধরন",
        selectIrrigation: "সেচের ধরন নির্বাচন করুন",
        previousCrop: "আগের ফসল",
        selectPreviousCrop: "আগের ফসল নির্বাচন করুন",
        region: "অঞ্চল",
        selectRegion: "অঞ্চল নির্বাচন করুন",
        fertilizerLastSeason: "গত মরসুমে ব্যবহৃত সার (সংখ্যাসূচক কোড)",
        yieldLastSeason: "গত মরসুমের ফলন",
        getFertilizerRecommendation: "সারের সুপারিশ পান",
        generatingRecommendation: "সারের সুপারিশ তৈরি হচ্ছে...",
        recommendedFertilizer: "🌱 প্রস্তাবিত সার",

        // DROPDOWN OPTIONS
        black: "কালো",
        red: "লাল",
        alluvial: "পলিমাটি",
        clay: "এঁটেল মাটি",
        sandy: "বেলে মাটি",
        loamy: "দোআঁশ মাটি",

        rice: "ধান",
        wheat: "গম",
        maize: "ভুট্টা",
        cotton: "তুলা",
        sugarcane: "আখ",
        potato: "আলু",
        tomato: "টমেটো",
        onion: "পেঁয়াজ",
        cabbage: "বাঁধাকপি",
        vegetables: "সবজি",

        seedling: "চারা পর্যায়",
        vegetative: "বৃদ্ধির পর্যায়",
        flowering: "ফুল ফোটার পর্যায়",
        maturity: "পরিপক্বতা",
        harvesting: "ফসল কাটার পর্যায়",

        kharif: "খরিফ",
        rabi: "রবি",
        zaid: "জায়েদ",
        summer: "গ্রীষ্ম",
        winter: "শীত",
        monsoon: "বর্ষা",

        rainfed: "বৃষ্টিনির্ভর",
        drip: "ড্রিপ",
        sprinkler: "স্প্রিংকলার",
        flood: "প্লাবন সেচ",
        none: "কোনোটিই নয়",

        westBengal: "পশ্চিমবঙ্গ",
        punjab: "পাঞ্জাব",
        haryana: "হরিয়ানা",
        bihar: "বিহার",
        uttarPradesh: "উত্তরপ্রদেশ",
        maharashtra: "মহারাষ্ট্র",
        gujarat: "গুজরাট",
        rajasthan: "রাজস্থান",
        madhyaPradesh: "মধ্যপ্রদেশ",

        // CAMERA
        cameraHeading: "📷 ক্যামেরায় মাটি পর্যবেক্ষণ",
        cameraDescription: "পর্যবেক্ষণের জন্য মাটির ছবি তুলুন।",
        cameraPlaceholder: "ক্যামেরার দৃশ্য এখানে দেখা যাবে।",
        openCamera: "ক্যামেরা খুলুন",
        captureSoil: "মাটির ছবি তুলুন",
        stopCamera: "ক্যামেরা বন্ধ করুন",
        retakePhoto: "আবার ছবি তুলুন",
        analyzeImage: "ছবি বিশ্লেষণ করুন",
        saveSoilImage: "মাটির ছবি সংরক্ষণ করুন",
        savingImage: "ছবি সংরক্ষণ হচ্ছে...",
        imageSaved: "ছবি সংরক্ষিত হয়েছে",
        visualAnalysis: "ছবি পর্যবেক্ষণের ফলাফল",
        cameraInitial: "শুরু করতে ক্যামেরা খুলুন।",

        // SAVED IMAGES
        savedImagesHeading: "🖼️ সংরক্ষিত মাটির ছবি",
        loadingImages: "সংরক্ষিত ছবি লোড হচ্ছে...",
        noImages: "এখনও কোনো মাটির ছবি সংরক্ষিত হয়নি।",
        savedImagesFound: "টি সংরক্ষিত মাটির ছবি পাওয়া গেছে।",

        // HISTORY
        historyHeading: "📊 সুপারিশের ইতিহাস",
        loadingHistory: "ইতিহাস লোড হচ্ছে...",
        historyDate: "তারিখ",
        historyCrop: "ফসল",
        historySoil: "মাটির ধরন",
        historyNitrogen: "নাইট্রোজেন",
        historyPhosphorus: "ফসফরাস",
        historyPotassium: "পটাশিয়াম",
        historyRecommendation: "সুপারিশ",
        noHistory: "এখনও কোনো সুপারিশের ইতিহাস নেই।",
        recordsFound: "টি সুপারিশের রেকর্ড পাওয়া গেছে।",

        // ANALYTICS
        analyticsHeading: "📈 মাটি ও ফসলের বিশ্লেষণ",
        analyticsDescription: "আপনার সংরক্ষিত সুপারিশের রেকর্ড থেকে বিশ্লেষণ তৈরি হয়েছে।",
        loadingAnalytics: "বিশ্লেষণ লোড হচ্ছে...",
        noAnalytics: "এখনও কোনো বিশ্লেষণের তথ্য নেই।",
        noAnalyticsRecords: "বিশ্লেষণের জন্য কোনো রেকর্ড নেই।",
        showingRecords: "দেখানো হচ্ছে",
        historicalRecords: "টি পুরনো সুপারিশের রেকর্ড।",
        numericalValue: "সংখ্যাসূচক মান",
        numberOfRecords: "রেকর্ডের সংখ্যা",

        // MESSAGES
        fillAllFields: "অনুগ্রহ করে ১৯টি ঘর পূরণ করুন।",
        invalidNumber: "এই ঘরে ভুল সংখ্যাসূচক মান রয়েছে:",
        predictionSuccess: "সারের সুপারিশ সফলভাবে তৈরি হয়েছে!",
        predictionFailed: "সুপারিশ তৈরি করা যায়নি।",
        emptyRecommendation: "মডেল কোনো সুপারিশ দেয়নি।",
        pleaseLogin: "অনুগ্রহ করে প্রথমে লগইন করুন।",
        cameraUnavailable: "ক্যামেরা উপলব্ধ নয়। localhost-এর মাধ্যমে অ্যাপ খুলুন।",
        cameraStarted: "ক্যামেরা চালু হয়েছে। মাটির ছবি তুলুন।",
        cameraOpenFirst: "অনুগ্রহ করে প্রথমে ক্যামেরা খুলুন।",
        imageCaptured: "মাটির ছবি সফলভাবে তোলা হয়েছে। এখন সংরক্ষণ করতে পারেন।",
        captureFirst: "অনুগ্রহ করে প্রথমে মাটির ছবি তুলুন।",
        alreadySaved: "এই ছবিটি ইতিমধ্যেই সংরক্ষিত হয়েছে।",
        uploadingImage: "ছবি আপলোড হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন...",
        imageSaveSuccess: "মাটির ছবি সফলভাবে সংরক্ষিত হয়েছে!",
        imageSaveFailed: "মাটির ছবি সংরক্ষণ করা যায়নি।",
        imageSaveError: "ছবি সংরক্ষণে সমস্যা:",
        imageAnalysisLoading: "ছবি শনাক্তকরণ মডেল লোড হচ্ছে...",
        personDetected: "ছবিতে একজন মানুষ দেখা গেছে। মানুষ ছাড়া আবার মাটির ছবি তুলুন।",
        retakeImage: "অনুগ্রহ করে আবার ছবি তুলুন।",
        noPersonDetected: "কোনো মানুষ শনাক্ত হয়নি। ছবি আরও পর্যবেক্ষণের জন্য প্রস্তুত। এটি শুধু দৃশ্য শনাক্তকরণ, NPK বা pH মাটি পরীক্ষা নয়।",
        imageAnalysisCompleted: "ছবি বিশ্লেষণ সম্পন্ন হয়েছে।",
        imageAnalysisFailed: "ছবি বিশ্লেষণ ব্যর্থ হয়েছে:",
        captureImageFirst: "প্রথমে একটি ছবি তুলুন।",
        backendNotReady: "Backend বা ML মডেল এখনও প্রস্তুত নয়।",
        footerDashboard: "FertiWise | স্মার্ট কৃষি ও সার সুপারিশ ব্যবস্থা",

        soilPHPlaceholder: "যেমন 6.5",
        moisturePlaceholder: "যেমন 30",
        carbonPlaceholder: "যেমন 45",
        conductivityPlaceholder: "যেমন 20",
        nitrogenPlaceholder: "যেমন 60",
        phosphorusPlaceholder: "যেমন 56",
        potassiumPlaceholder: "যেমন 55",
        temperaturePlaceholder: "যেমন 23",
        humidityPlaceholder: "যেমন 68",
        rainfallPlaceholder: "যেমন 90",
        fertilizerPlaceholder: "যেমন 23",
        yieldPlaceholder: "যেমন 2"
    }
};

// ========================================
// NUMBER CONVERSION SYSTEM
// English | Hindi | Bengali
// ========================================

// Convert a number according to selected language
function fertiWiseFormatNumber(value, options = {}) {

    const language = localStorage.getItem("fertwise_language") || "en";

    const localeMap = {
        en: "en-IN",
        hi: "hi-IN",
        bn: "bn-IN"
    };

    const locale = localeMap[language] || "en-IN";

    const number = Number(value);

    if (!Number.isFinite(number)) {
        return String(value);
    }

    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: 3,
        ...options
    }).format(number);
}


// Convert English digits inside ordinary text
function fertiWiseConvertDigits(value) {

    const language = localStorage.getItem("fertwise_language") || "en";

    const digitMaps = {
        en: "0123456789",
        hi: "०१२३४५६७८९",
        bn: "০১২৩৪৫৬৭৮৯"
    };

    const digits = digitMaps[language] || digitMaps.en;

    return String(value).replace(/[0-9]/g, function (digit) {
        return digits[Number(digit)];
    });
}


// ========================================
// TRANSLATION HELPER
// ========================================

function fertiWiseTranslate(key) {

    let language = "en";

    try {
        language = localStorage.getItem("fertwise_language") || "en";
    } catch (error) {
        console.warn("Could not read language preference:", error);
    }

    const selected = translations[language] || translations.en;

    return selected[key] || translations.en[key] || key;
}


// ========================================
// APPLY SELECTED LANGUAGE
// ========================================

function applyLanguage(language) {

    const selectedLanguage = translations[language] ? language : "en";
    const currentTranslations = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;

    // Translate normal text
    document.querySelectorAll("[data-i18n]").forEach(function (element) {

        const key = element.getAttribute("data-i18n");

        if (Object.prototype.hasOwnProperty.call(currentTranslations, key)) {
            element.textContent = currentTranslations[key];
        }

    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

        const key = element.getAttribute("data-i18n-placeholder");

        if (Object.prototype.hasOwnProperty.call(currentTranslations, key)) {
            element.placeholder = currentTranslations[key];
        }

    });

    // Translate dropdown options
    document.querySelectorAll("[data-i18n-option]").forEach(function (element) {

        const key = element.getAttribute("data-i18n-option");

        if (Object.prototype.hasOwnProperty.call(currentTranslations, key)) {
            element.textContent = currentTranslations[key];
        }

    });

    // Save language
    try {
        localStorage.setItem("fertwise_language", selectedLanguage);
    } catch (error) {
        console.warn("Language preference could not be saved:", error);
    }

    // Update dropdown
    const selector = document.getElementById("languageSelect");

    if (selector) {
        selector.value = selectedLanguage;
    }

    // Update password visibility button if present
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (passwordInput && togglePassword) {
        const key = passwordInput.type === "password" ? "showPassword" : "hidePassword";
        togglePassword.textContent = currentTranslations[key] || key;
    }

}


// ========================================
// INITIALIZE LANGUAGE SYSTEM
// ========================================

function initializeLanguage() {

    let savedLanguage = "en";

    try {
        savedLanguage = localStorage.getItem("fertwise_language") || "en";
    } catch (error) {
        console.warn("Could not read saved language:", error);
    }

    applyLanguage(savedLanguage);

    const selector = document.getElementById("languageSelect");

    if (selector && !selector.dataset.languageListenerAdded) {

        selector.addEventListener("change", function () {
            applyLanguage(this.value);
        });

        selector.dataset.languageListenerAdded = "true";
    }

}


// ========================================
// START LANGUAGE SYSTEM
// ========================================

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initializeLanguage);

} else {

    initializeLanguage();

}
