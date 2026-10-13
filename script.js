// ROSHAN GLOBAL TECH
// Developed by BK ROSHAN
// JavaScript Interactive Features

"use strict";

// ==================================
// 1. MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll("#navigation a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// ==================================
// 2. DARK / LIGHT MODE
// ==================================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("rgt-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function updateThemeButton() {

    if (!themeToggle) return;

    const isLight = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "🌙" : "☀️";

}

updateThemeButton();

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        const theme = document.body.classList.contains("light-mode")
            ? "light"
            : "dark";

        localStorage.setItem("rgt-theme", theme);

        updateThemeButton();

    });

}


// ==================================
// 3. LANGUAGE SWITCHER
// ==================================

const translations = {

    en: {
        home: "Home",
        about: "About",
        services: "Services",
        learning: "Learning",
        tools: "Smart Tools",
        career: "Career",
        contact: "Contact",
        heroText: "Explore technology, develop new skills and discover opportunities in Japan.",
        explore: "Explore Services →",
        startLearning: "Start Learning",
        aboutTitle: "About ROSHAN GLOBAL TECH",
        aboutText: "A digital project created by BK ROSHAN to combine technology, education and useful resources for life in Japan.",
        servicesTitle: "Technology & IT Services",
        learningTitle: "Smart Learning Center",
        toolsTitle: "Smart Digital Tools",
        careerTitle: "Career & Japan Resources",
        contactTitle: "Let's Connect"
    },

    ja: {
        home: "ホーム",
        about: "私たちについて",
        services: "サービス",
        learning: "学習",
        tools: "便利なツール",
        career: "就職情報",
        contact: "お問い合わせ",
        heroText: "テクノロジーを学び、新しいスキルを身につけ、日本での可能性を広げましょう。",
        explore: "サービスを見る →",
        startLearning: "学習を始める",
        aboutTitle: "ROSHAN GLOBAL TECHについて",
        aboutText: "BK ROSHANが制作した、IT・教育・日本での生活に役立つ情報をまとめたウェブプロジェクトです。",
        servicesTitle: "IT技術とサービス",
        learningTitle: "スマート学習センター",
        toolsTitle: "便利なデジタルツール",
        careerTitle: "就職・日本生活情報",
        contactTitle: "お問い合わせ"
    },

    ne: {
        home: "गृहपृष्ठ",
        about: "हाम्रो बारेमा",
        services: "सेवाहरू",
        learning: "सिकाइ",
        tools: "उपयोगी टुलहरू",
        career: "रोजगारी",
        contact: "सम्पर्क",
        heroText: "प्रविधि सिक्नुहोस्, नयाँ सीप विकास गर्नुहोस् र जापानमा अवसरहरू खोज्नुहोस्।",
        explore: "सेवाहरू हेर्नुहोस् →",
        startLearning: "सिक्न सुरु गर्नुहोस्",
        aboutTitle: "ROSHAN GLOBAL TECH को बारेमा",
        aboutText: "BK ROSHAN द्वारा तयार गरिएको प्रविधि, शिक्षा र जापानमा उपयोगी जानकारी समेटिएको डिजिटल परियोजना।",
        servicesTitle: "प्रविधि तथा आईटी सेवाहरू",
        learningTitle: "स्मार्ट सिकाइ केन्द्र",
        toolsTitle: "स्मार्ट डिजिटल टुलहरू",
        careerTitle: "रोजगारी तथा जापानका स्रोतहरू",
        contactTitle: "सम्पर्क गर्नुहोस्"
    }

};

const languageSelect = document.getElementById("languageSelect");

function changeLanguage(language) {

    const selected = translations[language] || translations.en;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

        const key = element.dataset.i18n;

        if (selected[key]) {
            element.textContent = selected[key];
        }

    });

    localStorage.setItem("rgt-language", language);

}

if (languageSelect) {

    const savedLanguage =
        localStorage.getItem("rgt-language") || "en";

    languageSelect.value = translations[savedLanguage]
        ? savedLanguage
        : "en";

    changeLanguage(languageSelect.value);

    languageSelect.addEventListener("change", function () {

        changeLanguage(this.value);

    });

}


// ==================================
// 4. JAPANESE JLPT QUIZ
// ==================================

const questions = [

    {
        question: "「水」の読み方は何ですか？",
        options: ["みず", "ひ", "やま", "かわ"],
        answer: 0
    },

    {
        question: "「学校」の読み方は何ですか？",
        options: ["せんせい", "がっこう", "かいしゃ", "でんしゃ"],
        answer: 1
    },

    {
        question: "「食べる」の意味は何ですか？",
        options: ["To sleep", "To drink", "To eat", "To go"],
        answer: 2
    },

    {
        question: "「明日」の読み方は何ですか？",
        options: ["きのう", "きょう", "あした", "まいにち"],
        answer: 2
    },

    {
        question: "「電車」の意味は何ですか？",
        options: ["Train", "Car", "Bus", "Airplane"],
        answer: 0
    },

    {
        question: "「勉強」の読み方は何ですか？",
        options: ["べんきょう", "しごと", "りょこう", "せいかつ"],
        answer: 0
    },

    {
        question: "「会社」の意味は何ですか？",
        options: ["Hospital", "School", "Company", "Station"],
        answer: 2
    },

    {
        question: "「約束」の読み方は何ですか？",
        options: ["やくそく", "やくしょ", "やさい", "やすみ"],
        answer: 0
    },

    {
        question: "「経験」の読み方は何ですか？",
        options: ["けいかく", "けいけん", "けいざい", "けんこう"],
        answer: 1
    },

    {
        question: "「努力」の意味は何ですか？",
        options: ["Holiday", "Effort", "Money", "Weather"],
        answer: 1
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("questionNumber");
const quizScore = document.getElementById("quizScore");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");

function showQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    quizScore.textContent = `Score: ${score}`;

    quizProgress.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    quizQuestion.textContent = current.question;

    quizOptions.innerHTML = "";

    quizFeedback.textContent = "";

    nextQuestion.disabled = true;

    nextQuestion.textContent = "Next Question →";

    current.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.addEventListener("click", function () {

            checkAnswer(index);

        });

        quizOptions.appendChild(button);

    });

}

function checkAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].answer;

    const buttons = quizOptions.querySelectorAll("button");

    buttons.forEach(function (button, index) {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== correctIndex) {
            button.classList.add("wrong");
        }

    });

    if (selectedIndex === correctIndex) {

        score++;

        quizFeedback.textContent = "✓ Correct! Well done.";

        quizFeedback.style.color = "#22c55e";

    } else {

        quizFeedback.textContent = "✗ Incorrect. Try the next question.";

        quizFeedback.style.color = "#ef4444";

    }

    quizScore.textContent = `Score: ${score}`;

    quizProgress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    nextQuestion.disabled = false;

    if (currentQuestion === questions.length - 1) {
        nextQuestion.textContent = "View Results →";
    }

}

if (
    questionNumber &&
    quizScore &&
    quizProgress &&
    quizQuestion &&
    quizOptions &&
    quizFeedback &&
    nextQuestion
) {

    nextQuestion.addEventListener("click", function () {

        if (currentQuestion >= questions.length) {

            currentQuestion = 0;
            score = 0;

            showQuestion();
            return;

        }

        currentQuestion++;

        if (currentQuestion >= questions.length) {

            quizQuestion.textContent =
                `Quiz Complete! Your Score: ${score}/${questions.length}`;

            quizOptions.innerHTML = "";

            quizFeedback.textContent =
                score >= 7
                    ? "Excellent work! Keep learning."
                    : "Good effort! Practice again to improve.";

            nextQuestion.textContent = "Restart Quiz";

            nextQuestion.disabled = false;

            return;

        }

        showQuestion();

    });

    showQuestion();

}


// ==================================
// 5. SALARY CALCULATOR
// ==================================

const calculateSalary = document.getElementById("calculateSalary");

if (calculateSalary) {

    calculateSalary.addEventListener("click", function () {

        const wageInput = document.getElementById("hourlyWage");
        const hoursInput = document.getElementById("workingHours");
        const result = document.getElementById("salaryResult");

        const wage = Number(wageInput.value);
        const hours = Number(hoursInput.value);

        if (
            wageInput.value.trim() === "" ||
            hoursInput.value.trim() === "" ||
            !Number.isFinite(wage) ||
            !Number.isFinite(hours) ||
            wage < 0 ||
            hours < 0
        ) {

            result.textContent =
                "Please enter valid wage and working hours.";

            return;

        }

        const salary = wage * hours;

        const formatted = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumFractionDigits: 0
        }).format(salary);

        result.textContent =
            `Estimated Gross Salary: ${formatted}`;

    });

}


// ==================================
// 6. TYPING SPEED PRACTICE
// ==================================

const typingTarget = document.getElementById("typingTarget");
const typingInput = document.getElementById("typingInput");
const typingTime = document.getElementById("typingTime");
const typingAccuracy = document.getElementById("typingAccuracy");
const typingWpm = document.getElementById("typingWpm");
const resetTyping = document.getElementById("resetTyping");

if (
    typingTarget &&
    typingInput &&
    typingTime &&
    typingAccuracy &&
    typingWpm &&
    resetTyping
) {

    const targetText = typingTarget.textContent.trim();

    let typingStart = null;
    let typingTimer = null;

    function updateTypingStats() {

        if (!typingStart) return;

        const typed = typingInput.value;

        const elapsed = Math.max(
            (Date.now() - typingStart) / 1000,
            0.001
        );

        let correctCharacters = 0;

        for (let i = 0; i < typed.length; i++) {

            if (typed[i] === targetText[i]) {
                correctCharacters++;
            }

        }

        const accuracy = typed.length === 0
            ? 100
            : Math.round(
                (correctCharacters / typed.length) * 100
            );

        const wpm = Math.round(
            (correctCharacters / 5) / (elapsed / 60)
        );

        typingTime.textContent =
            `Time: ${Math.floor(elapsed)}s`;

        typingAccuracy.textContent =
            `Accuracy: ${accuracy}%`;

        typingWpm.textContent =
            `WPM: ${wpm}`;

    }

    typingInput.addEventListener("input", function () {

        if (!typingStart && typingInput.value.length > 0) {

            typingStart = Date.now();

            typingTimer = setInterval(
                updateTypingStats,
                1000
            );

        }

        updateTypingStats();

        if (typingInput.value === targetText) {

            clearInterval(typingTimer);

            typingTimer = null;

            typingInput.disabled = true;

            updateTypingStats();

        }

    });

    resetTyping.addEventListener("click", function () {

        clearInterval(typingTimer);

        typingTimer = null;
        typingStart = null;

        typingInput.value = "";
        typingInput.disabled = false;

        typingTime.textContent = "Time: 0s";
        typingAccuracy.textContent = "Accuracy: 100%";
        typingWpm.textContent = "WPM: 0";

    });

}


// ==================================
// 7. SCROLL ANIMATIONS
// ==================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
       
