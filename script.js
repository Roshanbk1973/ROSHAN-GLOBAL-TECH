"use strict";

/* ROSHAN GLOBAL TECH */
/* Interactive Website Features */

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    const open = navigation.classList.toggle("active");

    menuToggle.textContent = open ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", String(open));

});

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// THEME

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("rgt-theme") === "light") {
    document.body.classList.add("light-mode");
}

function updateTheme() {

    themeToggle.textContent =
        document.body.classList.contains("light-mode")
        ? "🌙"
        : "☀️";

}

updateTheme();

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    localStorage.setItem(
        "rgt-theme",
        document.body.classList.contains("light-mode")
        ? "light"
        : "dark"
    );

    updateTheme();

});


// LANGUAGE

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

function changeLanguage(lang) {

    const selected = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (selected[key]) {
            element.textContent = selected[key];
        }

    });

    localStorage.setItem("rgt-language", lang);

}

languageSelect.value =
    localStorage.getItem("rgt-language") || "en";

if (!translations[languageSelect.value]) {
    languageSelect.value = "en";
}

changeLanguage(languageSelect.value);

languageSelect.addEventListener("change", event => {
    changeLanguage(event.target.value);
});


// JLPT QUIZ

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
let quizFinished = false;

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
        `${currentQuestion / questions.length * 100}%`;

    quizQuestion.textContent = current.question;

    quizOptions.innerHTML = "";

    quizFeedback.textContent = "";

    nextQuestion.disabled = true;

    nextQuestion.textContent = "Next Question →";

    current.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.addEventListener("click", () => {

            if (answered) return;

            answered = true;

            const correct = current.answer;

            if (index === correct) {
                score++;
            }

            quizOptions.querySelectorAll("button").forEach((btn, i) => {

                btn.disabled = true;

                if (i === correct) {
                    btn.classList.add("correct");
                }

                if (i === index && i !== correct) {
                    btn.classList.add("wrong");
                }

            });

            quizScore.textContent = `Score: ${score}`;

            quizFeedback.textContent =
                index === correct
                ? "✓ Correct! Well done."
                : "✗ Incorrect. Keep practicing.";

            quizFeedback.style.color =
                index === correct ? "#22c55e" : "#ef4444";

            quizProgress.style.width =
                `${(currentQuestion + 1) / questions.length * 100}%`;

            nextQuestion.disabled = false;

            if (currentQuestion === questions.length - 1) {
                nextQuestion.textContent = "View Results →";
            }

        });

        quizOptions.appendChild(button);

    });

}

nextQuestion.addEventListener("click", () => {

    if (quizFinished) {

        currentQuestion = 0;
        score = 0;
        quizFinished = false;

        showQuestion();
        return;

    }

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        quizFinished = true;

        questionNumber.textContent = "Completed";

        quizQuestion.textContent =
            `Quiz Complete! Your Score: ${score}/${questions.length}`;

        quizOptions.innerHTML = "";

        quizFeedback.textContent =
            score >= 7
            ? "Excellent work! Keep learning."
            : "Good effort! Practice again.";

        nextQuestion.textContent = "Restart Quiz";

        nextQuestion.disabled = false;

        return;

    }

    showQuestion();

});

showQuestion();


// SALARY CALCULATOR

document.getElementById("calculateSalary")
.addEventListener("click", () => {

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

        result.textContent = "Please enter valid numbers.";
        return;

    }

    const salary = wage * hours;

    result.textContent =
        "Estimated Gross Salary: " +
        new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumFractionDigits: 0
        }).format(salary);

});


// TYPING PRACTICE

const typingTarget = document.getElementById("typingTarget");
const typingInput = document.getElementById("typingInput");
const typingTime = document.getElementById("typingTime");
const typingAccuracy = document.getElementById("typingAccuracy");
const typingWpm = document.getElementById("typingWpm");
const resetTyping = document.getElementById("resetTyping");

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

    let correct = 0;

    for (let i = 0; i < typed.length; i++) {

        if (typed[i] === targetText[i]) {
            correct++;
        }

    }

    const accuracy = typed.length
        ? Math.round(correct / typed.length * 100)
        : 100;

    const wpm = Math.round(
        (correct / 5) / (elapsed / 60)
    );

    typingTime.textContent =
        `Time: ${Math.floor(elapsed)}s`;

    typingAccuracy.textContent =
        `Accuracy: ${accuracy}%`;

    typingWpm.textContent =
        `WPM: ${wpm}`;

}

typingInput.addEventListener("input", () => {

    if (!typingStart && typingInput.value.length > 0) {

        typingStart = Date.now();

        typingTimer = setInterval(updateTypingStats, 1000);

    }

    updateTypingStats();

    if (typingInput.value === targetText) {

        clearInterval(typingTimer);

        typingTimer = null;

        typingInput.disabled = true;

    }

});

resetTyping.addEventListener("click", () => {

    clearInterval(typingTimer);

    typingTimer = null;
    typingStart = null;

    typingInput.value = "";
    typingInput.disabled = false;

    typingTime.textContent = "Time: 0s";
    typingAccuracy.textContent = "Accuracy: 100%";
    typingWpm.textContent = "WPM: 0";

});


// BACK TO TOP

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    backToTop.classList.toggle(
        "visible",
        window.scrollY > 400
    );

}, { passive: true });

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("ROSHAN GLOBAL TECH - Website Ready");
