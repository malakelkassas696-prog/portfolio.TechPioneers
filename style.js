// home.js

// تحديد زر اللغة
const langToggle = document.querySelector(".lang-selector");

// تحديد كل العناصر اللي تحتوي data-en و data-ar
const translatableElements = document.querySelectorAll("[data-en][data-ar]");

// حالة اللغة الحالية
let currentLang = "en";

// حدث عند الضغط على زر اللغة
langToggle.addEventListener("click", () => {

    // تبديل النصوص بين الإنجليزية والعربية
    translatableElements.forEach(el => {
        // إذا العنصر فيه نصوص داخل span
        if (el.querySelector(".text-content")) {
            const textSpan = el.querySelector(".text-content");
            textSpan.textContent = currentLang === "en"
                ? el.getAttribute("data-ar")
                : el.getAttribute("data-en");
        } else {
            el.textContent = currentLang === "en"
                ? el.getAttribute("data-ar")
                : el.getAttribute("data-en");
        }
    });

    // 🔥 تغيير اتجاه الصفحة بالكامل
    document.documentElement.dir = currentLang === "en" ? "rtl" : "ltr";

    // تحديث الزر نفسه
    if (currentLang === "en") {
        langToggle.innerHTML = "AR <span>▾</span>";
        currentLang = "ar";
    } else {
        langToggle.innerHTML = "EN <span>▾</span>";
        currentLang = "en";
    }
});



