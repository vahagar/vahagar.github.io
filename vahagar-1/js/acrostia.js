$(document).ready(function () {

    // Плавная прокрутка
    $('a[href^="#sec"]').on("click" , function(){
        // $(this).parent().toggleClass("active");
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    // Плавная прокрутка

// navbari activnery
    $(window).on("mousemove", function () {
        var topSize = $(this).scrollTop();
        if(topSize >= 0 && topSize < 600)  {
            $('a[href^="#sec1"]').parent().addClass("active");
        } else {
            $('a[href^="#sec1"]').parent().removeClass("active");
        }

        if(topSize >= 600 && topSize < 1600)  {
            $('a[href^="#sec2"]').parent().addClass("active");
        } else {
            $('a[href^="#sec2"]').parent().removeClass("active");
        }
        if(topSize >= 1600 && topSize < 2600)  {
            $('a[href^="#sec3"]').parent().addClass("active");
        } else {
            $('a[href^="#sec3"]').parent().removeClass("active");
        }

        if(topSize >= 2600 && topSize < 3600)  {
            $('a[href^="#sec4"]').parent().addClass("active");
        } else {
            $('a[href^="#sec4"]').parent().removeClass("active");
        }
        if(topSize >= 3600 && topSize < 4600)  {
            $('a[href^="#sec5"]').parent().addClass("active");
        } else {
            $('a[href^="#sec5"]').parent().removeClass("active");
        }
    });

    $(window).on("scroll", function () {
        var topSize = $(this).scrollTop();
        if(topSize >= 0 && topSize < 600)  {
            $('a[href^="#sec1"]').parent().addClass("active");
        } else {
            $('a[href^="#sec1"]').parent().removeClass("active");
        }

        if(topSize >= 600 && topSize < 1600)  {
            $('a[href^="#sec2"]').parent().addClass("active");
        } else {
            $('a[href^="#sec2"]').parent().removeClass("active");
        }
        if(topSize >= 1600 && topSize < 2600)  {
            $('a[href^="#sec3"]').parent().addClass("active");
        } else {
            $('a[href^="#sec3"]').parent().removeClass("active");
        }

        if(topSize >= 2600 && topSize < 3600)  {
            $('a[href^="#sec4"]').parent().addClass("active");
        } else {
            $('a[href^="#sec4"]').parent().removeClass("active");
        }
        if(topSize >= 3600 && topSize < 4600)  {
            $('a[href^="#sec5"]').parent().addClass("active");
        } else {
            $('a[href^="#sec5"]').parent().removeClass("active");
        }
    });
// navbari activnery




});