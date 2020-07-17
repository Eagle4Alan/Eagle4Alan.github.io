document.addEventListener("DOMContentLoaded", () => {
    //Top changes on scroll
    window.addEventListener('scroll', onScroll);

    document.addEventListener("touchmove", onScroll);
    function onScroll(){
        document.getElementsByClassName('top-wrapper')[0].classList.add("scroll");
        if(window.scrollY === 0){
            document.getElementsByClassName('top-wrapper')[0].classList.remove("scroll");
        }
    };

    //Product details change
    var products = document.getElementsByClassName('product__block__item');
    var product1 = document.getElementById('item1');
    var product2 = document.getElementById('item2');
    var product3 = document.getElementById('item3');
    var details1 = document.getElementById('item1Details');
    var details2 = document.getElementById('item2Details');
    var details3 = document.getElementById('item3Details');
    var allActive = document.getElementsByClassName('product__block__item');
    for (var i = 0 ; i < products.length; i++) {

        products[i].addEventListener("click", function(e){

            if (e.currentTarget===product1){
                details1.style.display = "flex";
                details2.style.display = "none";
                details3.style.display = "none";
                for(var j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
            else if (e.currentTarget===product2){
                details1.style.display = "none";
                details2.style.display = "flex";
                details3.style.display = "none";
                for(var j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
            else if (e.currentTarget===product3){
                details1.style.display = "none";
                details2.style.display = "none";
                details3.style.display = "flex";
                for(var j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
        });
    }
});

