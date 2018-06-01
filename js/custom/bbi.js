//scroll menu section
$(document).ready(function() {

    var header = $(".drop"); // Меню
    var scrollPrev = 0 // Предыдущее значение скролла

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop(); // Высота скролла в px
        var firstScrollUp = false; // Параметр начала сколла вверх
        var firstScrollDown = false; // Параметр начала сколла вниз

        // Если скроллим
        if ( scrolled > 0 ) {
            // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
            if ( scrolled > scrollPrev ) {
                firstScrollUp = false; // Обнуляем параметр начала скролла вверх
                // Если меню видно
                if ( scrolled < header.height() + header.offset().top ) {
                    // Если только начали скроллить вниз
                    if ( firstScrollDown === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollDown = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                    // Если меню НЕ видно
                } else {
                    // Позиционируем меню фиксированно вне экрана
                    header.css({
                        "position": "fixed",
                        "top": "-" + header.height() + "px"
                    });
                }

                // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
            } else {
                firstScrollDown = false; // Обнуляем параметр начала скролла вниз
                // Если меню не видно
                if ( scrolled > header.offset().top ) {
                    // Если только начали скроллить вверх
                    if ( firstScrollUp === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollUp = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                } else {
                    // Убираем все стили
                    header.removeAttr("style");
                }
            }
            // Присваеваем текущее значение скролла предыдущему
            scrollPrev = scrolled;
        }
    });
});

//modal window section

var modal = document.getElementById('myModal');


var close = document.getElementsByClassName('close')[0];

function popUp() {
    modal.style.display = 'block';
}
close.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}

// Jquery modal

//$('.button').on('click', function () {
//    $('.modal').show();
//});
//
//$('.close').on('click', function () {
//    $('.modal').hide();
//});

// maps*********


function initMap() {
    var location = {lat: 43.816575, lng: -79.607895};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: 'img/map-marker.png'
    });
}

