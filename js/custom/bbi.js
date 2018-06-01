//scroll menu section
$(document).ready(function() {

    var header = $(".drop"); // ����
    var scrollPrev = 0 // ���������� �������� �������

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop(); // ������ ������� � px
        var firstScrollUp = false; // �������� ������ ������ �����
        var firstScrollDown = false; // �������� ������ ������ ����

        // ���� ��������
        if ( scrolled > 0 ) {
            // ���� ������� �������� ������� > �����������, �.�. �������� ����
            if ( scrolled > scrollPrev ) {
                firstScrollUp = false; // �������� �������� ������ ������� �����
                // ���� ���� �����
                if ( scrolled < header.height() + header.offset().top ) {
                    // ���� ������ ������ ��������� ����
                    if ( firstScrollDown === false ) {
                        var topPosition = header.offset().top; // ��������� ������� ������� ����
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollDown = true;
                    }
                    // ������������� ���� ���������
                    header.css({
                        "position": "absolute"
                    });
                    // ���� ���� �� �����
                } else {
                    // ������������� ���� ������������ ��� ������
                    header.css({
                        "position": "fixed",
                        "top": "-" + header.height() + "px"
                    });
                }

                // ���� ������� �������� ������� < �����������, �.�. �������� �����
            } else {
                firstScrollDown = false; // �������� �������� ������ ������� ����
                // ���� ���� �� �����
                if ( scrolled > header.offset().top ) {
                    // ���� ������ ������ ��������� �����
                    if ( firstScrollUp === false ) {
                        var topPosition = header.offset().top; // ��������� ������� ������� ����
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollUp = true;
                    }
                    // ������������� ���� ���������
                    header.css({
                        "position": "absolute"
                    });
                } else {
                    // ������� ��� �����
                    header.removeAttr("style");
                }
            }
            // ����������� ������� �������� ������� �����������
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

