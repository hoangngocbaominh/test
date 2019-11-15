document.addEventListener("DOMContentLoaded", function () {
    var buttonNext = document.querySelector(".next"),
        buttonBack = document.querySelector(".back"),
        buttonNext2 = document.querySelector(".next2"),
        buttonBack2 = document.querySelector(".back2"),
        buttonNext3 = document.querySelector(".next3"),
        buttonBack3 = document.querySelector(".back3"),
        list = document.querySelector(".listSlide ul"),
        list2 = document.querySelector(".listSlide2 ul"),
        list3 = document.querySelector(".listSlide3 ul");
    buttonNext.addEventListener("click", function () {
        list.classList.add("move");
        list.classList.remove("fallBack");
    })
    buttonBack.addEventListener("click", function () {
        list.classList.add("fallBack");
        list.classList.remove("move");

    })
    buttonNext2.addEventListener("click", function () {
        list2.classList.add("move");
        list2.classList.remove("fallBack");
    })
    buttonBack2.addEventListener("click", function () {
        list2.classList.add("fallBack");
        list2.classList.remove("move");

    })
    buttonNext3.addEventListener("click", function () {
        list3.classList.add("move");
        list3.classList.remove("fallBack");
    })
    buttonBack3.addEventListener("click", function () {
        list3.classList.add("fallBack");
        list3.classList.remove("move");

    })
}, false)

document.addEventListener("DOMContentLoaded", function () {
    var down_1 = document.querySelector(".modeOnOff .down_1"),
        up_2 = document.querySelector(".modeOnOff .up_2"),
        listIcon = document.querySelector(".modeOnOff .listIcon")
        logoAndMenu = document.querySelector(".logoAndMenu"),
        logo = document.querySelector(".logo"),
        menu = document.querySelector(".menu"),
        body_QC = document.querySelector(".body_QC"),
        body = document.querySelector(".body"),
        iconOff = document.querySelector(".iconOff"),
        iconOn = document.querySelector(".iconOn"),
        search =document.querySelector(".logo .search input"),
        login = document.querySelector(".logoAndMenu .logo .login p"),
        text_2 = document.querySelectorAll(".categoryMusic .textName");
           
    down_1.addEventListener("click", function () {
        down_1.classList.add("hiden");
        up_2.classList.add("show")
        listIcon.classList.add("openlistIcon");
        
    })
    up_2.addEventListener("click", function () {
        up_2.classList.remove("show");
        down_1.classList.remove("hiden");
        listIcon.classList.remove("openlistIcon");
    })
    iconOff.addEventListener("click", function () {
        iconOff.classList.add("hiden");
        iconOn.classList.add("openlistIcon");
        logoAndMenu.classList.add("black_1");
        logo.classList.add("black_1");
        iconOn.classList.add("colorIcon");
        menu.classList.add("black_2");
        body_QC.classList.add("black_1");
        body.classList.add("black_3");
        listIcon.classList.remove("openlistIcon");
        up_2.classList.remove("show");
        down_1.classList.remove("hiden");
        down_1.classList.add("whiteText");
        up_2.classList.add("whiteText");
        search.classList.add("black_1");
        search.classList.add("whiteText");
        text_2[0].classList.add("whiteText");
        text_2[1].classList.add("whiteText");
        text_2[2].classList.add("whiteText");
        login.classList.add("whiteText");
        listIcon.classList.add("black_1");

    })
    iconOn.addEventListener("click", function () {
        iconOff.classList.remove("hiden");
        iconOn.classList.remove("openlistIcon");
        logoAndMenu.classList.remove("black_1");
        logo.classList.remove("black_1");
        menu.classList.remove("black_2");
        body_QC.classList.remove("black_1");
        body.classList.remove("black_3");
        listIcon.classList.remove("openlistIcon");
        up_2.classList.remove("show");
        down_1.classList.remove("hiden");
        down_1.classList.remove("whiteText");
        up_2.classList.remove("whiteText");
        search.classList.remove("black_1");
        text_2[0].classList.remove("whiteText");
        text_2[1].classList.remove("whiteText");
        text_2[2].classList.remove("whiteText");
        login.classList.remove("whiteText");
        listIcon.classList.remove("black_1");
        search.classList.remove("whiteText");
    })
}, false)