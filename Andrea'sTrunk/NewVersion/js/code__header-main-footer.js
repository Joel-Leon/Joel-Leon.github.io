window.onload = ()=>{
    const body = document.body;
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    const header__message = document.querySelector(".header__message");
    const header__logo = document.querySelector(".header__logo");
    const header__links = document.querySelector(".header__links");
    const footer__divline = document.querySelector(".footer__divline");

    changeResize();
    window.onresize = () => {changeResize()};

    function changeResize() {
        changeOnHeader();
        changeOnFooter();
    }

    function changeOnHeader() {
        if (window.innerWidth > 768) {
            if (header.childElementCount == 2) {
                body.removeChild(header__message);
                header.insertBefore(header__message, header__logo);
            } else if (header.childElementCount == 1) {
                body.removeChild(header__message);
                body.removeChild(header__links);
                header.insertBefore(header__message, header__logo);
                header.appendChild(header__links);
            }

        } else if (window.innerWidth > 545 && window.innerWidth <= 768) {
            if (header.childElementCount == 3) {
                header.removeChild(header__message);
                body.insertBefore(header__message, header);
            } else if(header.childElementCount == 1) {
                body.removeChild(header__links);
                header.appendChild(header__links);
            }
    
        } else {
            if (header.childElementCount == 3) {
                header.removeChild(header__message);
                body.insertBefore(header__message, header);
                header.removeChild(header__links);
                body.insertBefore(header__links, main);
            } else if (header.childElementCount == 2) {
                header.removeChild(header__links);
                body.insertBefore(header__links, main);
            }
        }
    }

    function changeOnFooter() {
        if (window.innerWidth > 768) {
            if (!footer__divline.classList.contains("vertical-line") && !footer__divline.classList.contains("horizontal-line")) {
                footer__divline.classList.add("vertical-line");
            } else {
                footer__divline.classList.replace("horizontal-line","vertical-line");
            }
        } else {
            if (!footer__divline.classList.contains("vertical-line") && !footer__divline.classList.contains("horizontal-line")) {
                footer__divline.classList.add("horizontal-line");
            } else {
                footer__divline.classList.replace("vertical-line","horizontal-line");
            }
        }

    }
}