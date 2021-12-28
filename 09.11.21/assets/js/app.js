$(function() {
    var bDrop = $(".backdrop");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop()
        if (scroll >= 30) {
            $(".navbar").addClass("nav-colored");
        } else {
            $(".navbar").removeClass("nav-colored");
        }
    });

    function backDrop() {
        bDrop.toggleClass("showed");

        if (bDrop.hasClass("showed")) {
            $("body").css("overflowY", "hidden");
        } else {
            $("body").css("overflowY", "auto");
        }
    }

    function navShow() {
        $("#navbarMob").addClass("showNav");
    }
    var navHide = function() {
        $("#navbarMob").removeClass("showNav");
    }


    $(".navbar-toggler").click(function() {
        navShow();
        backDrop();
    });
    $("#closeNav").click(function() {
        navHide();
        backDrop();
        scrollHide();
    });
    bDrop.click(function() {
        navHide();
        backDrop();
        $(".filters-Wrap").removeClass("open");

    });
    $("#filter-md-btn").click(function() {
        $(".filters-Wrap").addClass("open");
        backDrop();
    });

    //exRange slider

    var exRangeInput = document.getElementById("rs-range-line");

    if (!exRangeInput) {
        var exRangeMaxValue = null;
    } else {
        var exRangeMaxValue = parseInt(exRangeInput.max);
    }
    var exRangeSelector = document.getElementById("selector");
    var outputValue = document.querySelector(".output");
    var pBar = document.querySelector(".pBar");
    if (!exRangeInput) {
        exRangeInput = "";
    } else {
        outputValue.innerHTML = exRangeInput.value;
    }

    exRangeInput.oninput = function() {
        outputValue.innerHTML = this.value;
        exRangeSelector.style.left = this.value / ((exRangeMaxValue + 1.31) / 100) + "%";
        pBar.style.width = this.value / ((exRangeMaxValue + 1.31) / 100) + "%";
    }

    //password show and hide
    var pShowBtn = document.getElementById("passShow");
    var pInput = document.getElementById("password");

    function showPass() {
        if (pInput.type === "password") {
            pInput.type = "text";
            pShowBtn.innerHTML = "Hide";
        } else {
            pInput.type = "password";
            pShowBtn.innerHTML = "Show";
        }
    }
    if (!!pShowBtn) {
        pShowBtn.addEventListener("click", showPass);
    }

    // payment page radio btn colour change funtion

    $(document).change(function() {
        if ($(".form4 .check-wrap1 .form-check-input").is(":checked")) {
            $(".form4 .check-wrap1").addClass("bg-gray");
            $(".form4 .check-wrap2").removeClass("bg-gray");
        } else {
            $(".form4 .check-wrap1").removeClass("bg-gray");
            $(".form4 .check-wrap2").addClass("bg-gray");
        }
    });


    $("#dob").click(function() {
        $("#dob").attr("type", "date");
    });

    $("#function .bootstrap-tagsinput input").attr("placeholder", "Choose your function");
    $("#skills .bootstrap-tagsinput input").attr("placeholder", "Ex. MacOS, Xcode");
});