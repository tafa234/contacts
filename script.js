const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        alert(`Search for: ${searchQuery}`);
    } else {
        alert('Please Enter a Word to Search');
    }
});
const header = document.querySelector('header');
let lastScrollY = window.scrollY; // حفظ مكان التمرير الأخير

// التحقق من حالة التمرير
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // تغيير الخلفية بناءً على مكان التمرير
    if (currentScrollY > 50) {
        header.classList.add('scrolled'); // إضافة خلفية عند التمرير
    } else {
        header.classList.remove('scrolled'); // إزالة الخلفية عند العودة لأعلى الصفحة
    }

    // التحكم في ظهور/اختفاء الـ header عند التمرير لأعلى أو لأسفل
    if (currentScrollY > lastScrollY) {
        // إذا كنا نمر للأسفل
        header.classList.add('hide'); // إخفاء الـ header
        header.classList.remove('show');
    } else {
        // إذا كنا نمر للأعلى
        header.classList.add('show'); // إظهار الـ header
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY; // تحديث آخر مكان للتمرير
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button").addEventListener("click", function (event) {
        event.preventDefault(); // منع إعادة التحميل

        // الحصول على الحقول (اختياري للتحقق)
        const nameInput = document.querySelector('input[placeholder="Enter Your Name"]');
        const emailInput = document.querySelector('input[placeholder="Enter Your Email"]');

        const messageElement = document.getElementById("feedback-message");

        // التأكد من إدخال اسم وإيميل كحد أدنى (اختياري)
        if (!nameInput.value || !emailInput.value) {
            messageElement.textContent = "Please fill in all required fields.";
            messageElement.classList.add("error");
            messageElement.style.display = "block";
            return;
        }

        // تحديث الرسالة عند نجاح العملية
        messageElement.textContent = "Your message has been sent successfully!";
        messageElement.classList.remove("error");
        messageElement.style.display = "block";

        // إخفاء الرسالة بعد 3 ثوانٍ
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 3000);
    });
});




// تفاعل مع الأيقونات الاجتماعية في الـ Footer
const tiktok  = document.querySelectorAll('.footer .tiktok');  // جميع الأيقونات الاجتماعية

tiktok.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});

const twitter  = document.querySelectorAll('.footer .twitter');  // جميع الأيقونات الاجتماعية

twitter.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const instagram  = document.querySelectorAll('.footer .instagram');  // جميع الأيقونات الاجتماعية

instagram.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const facebook  = document.querySelectorAll('.footer .facebook');  // جميع الأيقونات الاجتماعية

facebook.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});





// الحصول على العنصر footer
const footer = document.querySelector('.footer');

// إضافة تأثير الخلفية عند التمرير
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // سرعة التمرير في الـ Y

    // تحريك الخلفية لتتبع التمرير
    footer.style.backgroundPosition = `center ${scrollY / 3}px`; // تغيير السرعة بناءً على مقدار التمرير
});