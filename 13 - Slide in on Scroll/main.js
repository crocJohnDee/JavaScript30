function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const slideImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {

    slideImages.forEach(slideImage => {
        const slideInAt = (scrollY + innerHeight) - slideImage.height / 8;
        console.log(slideInAt);
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrollPast = scrollY < imageBottom;
        if (isHalfShown && isNotScrollPast) {
            slideImage.classList.add("active");
        } else {
            slideImage.classList.remove("active")
        }
    })
}

window.addEventListener("scroll", debounce(checkSlide));