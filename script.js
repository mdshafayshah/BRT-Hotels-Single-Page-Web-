document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides(slideIndex);
    
    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    document.querySelector(".prev").addEventListener("click", function() {
        showSlides(--slideIndex);
    });

    document.querySelector(".next").addEventListener("click", function() {
        showSlides(++slideIndex);
    });

    setInterval(function() {
        showSlides(++slideIndex);
    }, 3000);

    // Back to Top Button
    
    window.onscroll = function() {
    let button = document.getElementById("backToTop");
    // اگر صفحہ 300 پکسل سے زیادہ اسکرول ہو تو بٹن دکھائیں
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// بٹن پر کلک کرنے سے صفحے کے اوپر جائیں
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
    
});
