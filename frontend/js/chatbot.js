
document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    // ==========================================
    // KRISHIAI - FERTIWISE SMART AI CHATBOT
    // ==========================================

    if (document.getElementById("fertwise-chatbot")) return;

    // ==========================================
    // 1. LANGUAGE TRANSLATIONS
    // ==========================================

    const chatLanguages = {

        en: {
            title: "KrishiAI",
            subtitle: "Your Intelligent Farming Companion",
            online: "Online",
            welcome: "Hello! 🌱 I am KrishiAI, your intelligent farming assistant.",
            welcome2: "I can help you with soil health, crops, NPK nutrients, fertilizers and farming techniques.",
            placeholder: "Ask KrishiAI anything...",
            send: "Send",
            thinking: "KrishiAI is thinking...",
            context: "🌾 Connected with your FertiWise farming dashboard.",
            quickTitle: "Quick Questions",
            quick: [
                "How can I improve soil health?",
                "Which fertilizer is best for rice?",
                "Explain NPK nutrients",
                "How can I improve crop growth?"
            ],
            error: "Sorry! Something went wrong.",
            fallback: "I could not generate a response.",
            assistant: "AI Assistant"
        },

        hi: {
            title: "KrishiAI",
            subtitle: "आपका स्मार्ट कृषि साथी",
            online: "ऑनलाइन",
            welcome: "नमस्ते! 🌱 मैं KrishiAI हूं, आपका स्मार्ट कृषि सहायक।",
            welcome2: "मैं मिट्टी की सेहत, फसल, NPK पोषक तत्वों, उर्वरकों और खेती की तकनीकों में आपकी मदद कर सकता हूं।",
            placeholder: "KrishiAI से कुछ भी पूछें...",
            send: "भेजें",
            thinking: "KrishiAI सोच रहा है...",
            context: "🌾 आपके FertiWise कृषि डैशबोर्ड से जुड़ा हुआ।",
            quickTitle: "त्वरित प्रश्न",
            quick: [
                "मिट्टी की सेहत कैसे सुधारें?",
                "धान के लिए कौन सा उर्वरक अच्छा है?",
                "NPK पोषक तत्व समझाएं",
                "फसल की वृद्धि कैसे बढ़ाएं?"
            ],
            error: "क्षमा करें! कुछ समस्या हुई।",
            fallback: "मैं जवाब तैयार नहीं कर पाया।",
            assistant: "AI सहायक"
        },

        bn: {
            title: "KrishiAI",
            subtitle: "আপনার বুদ্ধিমান কৃষি সহায়ক",
            online: "অনলাইন",
            welcome: "নমস্কার! 🌱 আমি KrishiAI, আপনার স্মার্ট কৃষি সহায়ক।",
            welcome2: "আমি মাটির স্বাস্থ্য, ফসল, NPK পুষ্টি উপাদান, সার এবং কৃষি পদ্ধতি সম্পর্কে সাহায্য করতে পারি।",
            placeholder: "KrishiAI-কে যেকোনো প্রশ্ন করুন...",
            send: "পাঠান",
            thinking: "KrishiAI ভাবছে...",
            context: "🌾 আপনার FertiWise কৃষি ড্যাশবোর্ডের সঙ্গে সংযুক্ত।",
            quickTitle: "দ্রুত প্রশ্ন",
            quick: [
                "মাটির স্বাস্থ্য কীভাবে উন্নত করব?",
                "ধানের জন্য কোন সার ভালো?",
                "NPK পুষ্টি উপাদান ব্যাখ্যা করুন",
                "ফসলের বৃদ্ধি কীভাবে বাড়াব?"
            ],
            error: "দুঃখিত! একটি সমস্যা হয়েছে।",
            fallback: "আমি উত্তর তৈরি করতে পারিনি।",
            assistant: "AI সহায়ক"
        }
    };

    function getLanguageCode() {

        const select = document.getElementById("languageSelect");

        const selected = select?.value;

        const saved = localStorage.getItem("fertwise_language");

        const lang = selected || saved || "en";

        return chatLanguages[lang] ? lang : "en";
    }

    function getText() {
        return chatLanguages[getLanguageCode()];
    }

    // ==========================================
    // 2. CHATBOT DESIGN
    // ==========================================

    const style = document.createElement("style");

    style.textContent = `

        #fertwise-chatbot {
            position: fixed;
            right: 25px;
            bottom: 25px;
            z-index: 99999;
            font-family: Arial, sans-serif;
        }

        /* FLOATING BUTTON */

        #fertwise-chat-button {
            width: 64px;
            height: 64px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(135deg, #21864d, #105d35);
            color: white;
            font-size: 28px;
            cursor: pointer;
            box-shadow: 0 5px 22px rgba(20, 110, 60, .35);
            transition: .25s ease;
            position: relative;
        }

        #fertwise-chat-button:hover {
            transform: translateY(-4px) scale(1.04);
        }

        #fertwise-chat-button .chat-ai-label {
            position: absolute;
            right: -5px;
            top: -5px;
            background: #f3bd42;
            color: #243629;
            border-radius: 12px;
            font-size: 9px;
            font-weight: bold;
            padding: 3px 6px;
        }

        /* CHAT WINDOW */

        #fertwise-chat-window {
            display: none;
            position: absolute;
            right: 0;
            bottom: 78px;
            width: 380px;
            max-width: calc(100vw - 30px);
            height: 550px;
            max-height: calc(100vh - 110px);
            background: var(--card-bg, #ffffff);
            color: var(--text-color, #243629);
            border: 1px solid var(--input-border, #dce5dd);
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 12px 45px rgba(0,0,0,.20);
            flex-direction: column;
            animation: krishiOpen .25s ease;
        }

        @keyframes krishiOpen {
            from {
                opacity: 0;
                transform: translateY(15px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* HEADER */

        #fertwise-chat-header {
            background: linear-gradient(135deg, #176b3a, #21864d);
            color: white;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 11px;
            flex-shrink: 0;
        }

        #krishi-ai-logo {
            width: 43px;
            height: 43px;
            min-width: 43px;
            border-radius: 13px;
            background: rgba(255,255,255,.17);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        #krishi-ai-info {
            flex: 1;
            min-width: 0;
        }

        #krishi-ai-info h3 {
            font-size: 17px;
            margin: 0;
            color: white;
            font-weight: 700;
        }

        #krishi-ai-info p {
            font-size: 11px;
            margin: 3px 0 0;
            color: rgba(255,255,255,.85);
        }

        #krishi-ai-status {
            font-size: 10px;
            margin-top: 5px;
            color: #d5ffd9;
        }

        #krishi-ai-status::before {
            content: "";
            display: inline-block;
            width: 7px;
            height: 7px;
            background: #64ed91;
            border-radius: 50%;
            margin-right: 5px;
        }

        #fertwise-chat-close {
            background: rgba(255,255,255,.13);
            color: white;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            font-size: 22px;
            cursor: pointer;
        }

        #fertwise-chat-close:hover {
            background: rgba(255,255,255,.25);
        }

        /* MESSAGES */

        #fertwise-chat-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
            scroll-behavior: smooth;
        }

        #fertwise-chat-messages::-webkit-scrollbar {
            width: 5px;
        }

        #fertwise-chat-messages::-webkit-scrollbar-thumb {
            background: #a8c5af;
            border-radius: 10px;
        }

        .fertwise-chat-row {
            display: flex;
            align-items: flex-end;
            gap: 7px;
            max-width: 95%;
        }

        .fertwise-chat-row.user {
            align-self: flex-end;
            flex-direction: row-reverse;
        }

        .fertwise-chat-avatar {
            width: 27px;
            height: 27px;
            min-width: 27px;
            border-radius: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            background: #e2f3e6;
        }

        .fertwise-chat-message {
            padding: 11px 13px;
            border-radius: 13px;
            max-width: 100%;
            font-size: 13px;
            line-height: 1.6;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
        }

        .fertwise-bot-message {
            background: var(--soft-bg, #f0f5f0);
            border-bottom-left-radius: 3px;
        }

        .fertwise-user-message {
            background: #21864d;
            color: white;
            border-bottom-right-radius: 3px;
        }

        /* QUICK QUESTIONS */

        #krishi-quick-questions {
            padding: 10px 13px;
            flex-shrink: 0;
        }

        #krishi-quick-title {
            font-size: 11px;
            color: var(--muted-text, #66756a);
            margin-bottom: 8px;
            font-weight: 600;
        }

        #krishi-quick-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .krishi-quick-button {
            border: 1px solid #b8d8c0;
            background: transparent;
            color: var(--text-color, #243629);
            border-radius: 15px;
            padding: 7px 10px;
            font-size: 10px;
            cursor: pointer;
            transition: .2s;
        }

        .krishi-quick-button:hover {
            background: #e3f5e7;
            color: #176b3a;
            border-color: #21864d;
        }

        /* CONTEXT */

        #fertwise-chat-context {
            padding: 7px 12px;
            font-size: 10px;
            color: var(--muted-text, #66756a);
            border-top: 1px solid var(--input-border, #ddd);
            flex-shrink: 0;
        }

        /* FORM */

        #fertwise-chat-form {
            display: flex;
            gap: 8px;
            padding: 11px;
            border-top: 1px solid var(--input-border, #ddd);
            flex-shrink: 0;
        }

        #fertwise-chat-input {
            flex: 1;
            min-width: 0;
            padding: 12px;
            border: 1px solid var(--input-border, #ccc);
            border-radius: 10px;
            outline: none;
            background: var(--input-bg, white);
            color: var(--text-color, #243629);
            font-size: 13px;
        }

        #fertwise-chat-input:focus {
            border-color: #21864d;
            box-shadow: 0 0 0 2px rgba(33,134,77,.10);
        }

        #fertwise-chat-send {
            background: #21864d;
            color: white;
            border: none;
            border-radius: 10px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
        }

        #fertwise-chat-send:hover {
            background: #176b3a;
        }

        #fertwise-chat-send:disabled {
            opacity: .6;
            cursor: not-allowed;
        }

        /* TYPING ANIMATION */

        .krishi-typing {
            display: flex;
            gap: 4px;
            align-items: center;
            padding: 4px 2px;
        }

        .krishi-typing span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #21864d;
            animation: krishiTyping 1s infinite ease-in-out;
        }

        .krishi-typing span:nth-child(2) {
            animation-delay: .15s;
        }

        .krishi-typing span:nth-child(3) {
            animation-delay: .3s;
        }

        @keyframes krishiTyping {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: .4;
            }
            30% {
                transform: translateY(-5px);
                opacity: 1;
            }
        }

        @media(max-width: 450px) {

            #fertwise-chatbot {
                right: 12px;
                bottom: 15px;
            }

            #fertwise-chat-window {
                width: calc(100vw - 24px);
                height: 72vh;
                bottom: 75px;
            }

            #fertwise-chat-button {
                width: 58px;
                height: 58px;
            }
        }

    `;

    document.head.appendChild(style);

    // ==========================================
    // 3. CREATE CHATBOT HTML
    // ==========================================

    const chatbot = document.createElement("div");

    chatbot.id = "fertwise-chatbot";

    chatbot.innerHTML = `

        <div id="fertwise-chat-window">

            <div id="fertwise-chat-header">

                <div id="krishi-ai-logo">
                    🌱
                </div>

                <div id="krishi-ai-info">

                    <h3 id="krishi-title">KrishiAI</h3>

                    <p id="krishi-subtitle">
                        Your Intelligent Farming Companion
                    </p>

                    <div id="krishi-ai-status">
                        <span id="krishi-status-text">Online</span>
                    </div>

                </div>

                <button
                    id="fertwise-chat-close"
                    type="button"
                    aria-label="Close chatbot">
                    ×
                </button>

            </div>

            <div id="fertwise-chat-messages"></div>

            <div id="krishi-quick-questions">

                <div id="krishi-quick-title">
                    Quick Questions
                </div>

                <div id="krishi-quick-list"></div>

            </div>

            <div id="fertwise-chat-context">
                🌾 Connected with your FertiWise farming dashboard.
            </div>

            <form id="fertwise-chat-form">

                <input
                    id="fertwise-chat-input"
                    type="text"
                    placeholder="Ask KrishiAI anything..."
                    autocomplete="off"
                    required
                >

                <button
                    id="fertwise-chat-send"
                    type="submit">
                    Send
                </button>

            </form>

        </div>

        <button
            id="fertwise-chat-button"
            type="button"
            aria-label="Open KrishiAI chatbot"
            title="Chat with KrishiAI">

            🌱

            <span class="chat-ai-label">AI</span>

        </button>

    `;

    document.body.appendChild(chatbot);

    // ==========================================
    // 4. GET ELEMENTS
    // ==========================================

    const chatWindow =
        document.getElementById("fertwise-chat-window");

    const chatButton =
        document.getElementById("fertwise-chat-button");

    const closeButton =
        document.getElementById("fertwise-chat-close");

    const messages =
        document.getElementById("fertwise-chat-messages");

    const chatForm =
        document.getElementById("fertwise-chat-form");

    const chatInput =
        document.getElementById("fertwise-chat-input");

    const sendButton =
        document.getElementById("fertwise-chat-send");

    const quickList =
        document.getElementById("krishi-quick-list");

    // ==========================================
    // 5. DISPLAY MESSAGES
    // ==========================================

    function addMessage(message, sender) {

        const row = document.createElement("div");

        row.className =
            "fertwise-chat-row " +
            (sender === "user" ? "user" : "bot");

        const avatar = document.createElement("div");

        avatar.className = "fertwise-chat-avatar";

        avatar.textContent =
            sender === "user" ? "👨" : "🌱";

        const messageElement = document.createElement("div");

        messageElement.className =
            "fertwise-chat-message " +
            (sender === "user"
                ? "fertwise-user-message"
                : "fertwise-bot-message");

        messageElement.textContent = message;

        row.appendChild(avatar);
        row.appendChild(messageElement);

        messages.appendChild(row);

        messages.scrollTop = messages.scrollHeight;

        return messageElement;
    }

    // ==========================================
    // 6. TYPING INDICATOR
    // ==========================================

    function addTypingIndicator() {

        const row = document.createElement("div");

        row.className = "fertwise-chat-row bot";

        row.id = "krishi-typing-indicator";

        const avatar = document.createElement("div");

        avatar.className = "fertwise-chat-avatar";

        avatar.textContent = "🌱";

        const bubble = document.createElement("div");

        bubble.className =
            "fertwise-chat-message fertwise-bot-message";

        const typing = document.createElement("div");

        typing.className = "krishi-typing";

        typing.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        bubble.appendChild(typing);

        row.appendChild(avatar);
        row.appendChild(bubble);

        messages.appendChild(row);

        messages.scrollTop = messages.scrollHeight;

        return row;
    }

    // ==========================================
    // 7. UPDATE CHATBOT LANGUAGE
    // ==========================================

    function updateChatLanguage() {

        const text = getText();

        document.getElementById("krishi-title").textContent =
            text.title;

        document.getElementById("krishi-subtitle").textContent =
            text.subtitle;

        document.getElementById("krishi-status-text").textContent =
            text.online;

        document.getElementById("fertwise-chat-input").placeholder =
            text.placeholder;

        document.getElementById("fertwise-chat-send").textContent =
            text.send;

        document.getElementById("fertwise-chat-context").textContent =
            text.context;

        document.getElementById("krishi-quick-title").textContent =
            text.quickTitle;

        quickList.innerHTML = "";

        text.quick.forEach(function (question) {

            const button = document.createElement("button");

            button.type = "button";

            button.className = "krishi-quick-button";

            button.textContent = question;

            button.addEventListener("click", function () {

                chatInput.value = question;

                chatForm.requestSubmit();

            });

            quickList.appendChild(button);

        });

    }

    // ==========================================
    // 8. WELCOME MESSAGE
    // ==========================================

    function showWelcomeMessage() {

        const text = getText();

        addMessage(text.welcome, "bot");

        addMessage(text.welcome2, "bot");

    }

    // ==========================================
    // 9. OPEN AND CLOSE CHATBOT
    // ==========================================

    chatButton.addEventListener("click", function () {

        chatWindow.style.display = "flex";

        chatButton.style.display = "none";

        chatInput.focus();

    });

    closeButton.addEventListener("click", function () {

        chatWindow.style.display = "none";

        chatButton.style.display = "block";

    });

    // ==========================================
    // 10. READ DASHBOARD DATA
    // ==========================================

    function getDashboardData() {

        const form =
            document.getElementById("predictionForm");

        if (!form) return {};

        const formData = new FormData(form);

        const data = {};

        for (const [key, value] of formData.entries()) {

            const cleanValue = String(value).trim();

            if (cleanValue !== "") {

                data[key] = cleanValue;

            }

        }

        return data;

    }

    // ==========================================
    // 11. GET SELECTED LANGUAGE
    // ==========================================

    function getCurrentLanguage() {

        const languageSelect =
            document.getElementById("languageSelect");

        const language =
            languageSelect?.value || getLanguageCode();

        const languages = {

            en: "English",
            hi: "Hindi",
            bn: "Bengali"

        };

        return languages[language] || "English";

    }

    // ==========================================
    // 12. GET ML RECOMMENDATION
    // ==========================================

    function getRecommendation() {

        const box =
            document.getElementById("recommendationBox");

        const text =
            document.getElementById("recommendationText");

        if (!box || !text) return "";

        const boxStyle = window.getComputedStyle(box);

        if (
            boxStyle.display !== "none" &&
            boxStyle.visibility !== "hidden"
        ) {

            return text.textContent.trim();

        }

        return "";

    }

    // ==========================================
    // 13. BUILD KRISHIAI PROMPT
    // ==========================================

    function buildAIContext(question) {

        const dashboardData = getDashboardData();

        const language = getCurrentLanguage();

        const recommendation = getRecommendation();

        const context = {

            role: "KrishiAI - FertiWise Intelligent Farming Assistant",

            language: language,

            question: question,

            soil_data: dashboardData,

            ml_recommendation:
                recommendation || "Not available",

            rules: [

                "You are KrishiAI, an agriculture-focused AI assistant.",

                "Reply in the selected language.",

                "Use simple and understandable language.",

                "Use only supplied dashboard values.",

                "Never invent missing soil values or crop stages.",

                "Use the actual crop entered by the user.",

                "Explain the ML recommendation if available.",

                "Give practical farming advice.",

                "Never give unsupported fertilizer dosage.",

                "Suggest laboratory soil testing for precise fertilizer dosage.",

                "If a question is unrelated to agriculture, politely guide the user back to farming topics."

            ]

        };

        let prompt = JSON.stringify(context);

        // Reduce prompt if too long

        if (prompt.length > 1800) {

            context.rules = [

                "You are KrishiAI, an agriculture assistant.",

                "Reply in the selected language.",

                "Use only supplied values.",

                "Never invent data or fertilizer dosage.",

                "Explain ML recommendation if available."

            ];

            prompt = JSON.stringify(context);

        }

        if (prompt.length > 1900) {

            const shortContext = {

                role: "KrishiAI",

                language: language,

                question: question.substring(0, 250),

                soil_data: dashboardData,

                ml_recommendation:
                    recommendation.substring(0, 150),

                rule: "Use supplied data only. Never invent values or dosage."

            };

            prompt = JSON.stringify(shortContext);

        }

        return prompt;

    }

    // ==========================================
    // 14. SEND MESSAGE TO OLLAMA
    // ==========================================

    chatForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const question = chatInput.value.trim();

        if (!question || sendButton.disabled) return;

        addMessage(question, "user");

        chatInput.value = "";

        chatInput.disabled = true;

        sendButton.disabled = true;

        const text = getText();

        const typingIndicator = addTypingIndicator();

        try {

            const context = buildAIContext(question);

            console.log(
                "KrishiAI prompt length:",
                context.length
            );

            const response = await fetch("/api/chat", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    message: context

                })

            });

            const result = await response.json();

            if (!response.ok || !result.success) {

                throw new Error(

                    result.error ||
                    result.message ||
                    "AI assistant could not respond."

                );

            }

            typingIndicator.remove();

            addMessage(

                result.reply || getText().fallback,

                "bot"

            );

        } catch (error) {

            console.error("KrishiAI Error:", error);

            typingIndicator.remove();

            addMessage(

                getText().error + "\n\n" + error.message,

                "bot"

            );

        } finally {

            chatInput.disabled = false;

            sendButton.disabled = false;

            chatInput.focus();

        }

    });

    // ==========================================
    // 15. LANGUAGE CHANGE EVENT
    // ==========================================

    const languageSelect =
        document.getElementById("languageSelect");

    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            updateChatLanguage
        );

    }

    // ==========================================
    // 16. INITIALIZE KRISHIAI
    // ==========================================

    updateChatLanguage();

    showWelcomeMessage();

    console.log(
        "KrishiAI initialized successfully! 🌱"
    );

});
