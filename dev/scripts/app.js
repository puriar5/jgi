$(document).ready(function() {
    // Something Magic here

    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) &&
                    o.call(r, t[c], c, t);
        else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener(
                "click",
                function() {
                    this.classList.toggle("is-active");
                },
                false
            );
        });
    }

    $(".hamburger").on("click", function() {
        $(".theme-header").toggleClass("theme-header--is-open");
    });

    // Header Adjustment
    function headerAdjustment() {
        var headerHeight = $(".theme-header").outerHeight(),
            finalHeight = headerHeight;
        $(".above-the-fold").css("padding-top", "" + (finalHeight + 40) + "px");
    }

    // Resize adjustment
    $(window).resize(function() {
        headerAdjustment();
    });

    headerAdjustment();
});
