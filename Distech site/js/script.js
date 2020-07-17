document.addEventListener("DOMContentLoaded", () => {
    //Top changes on scroll
    window.addEventListener('scroll', function(e) {
        document.getElementsByClassName('top-wrapper')[0].classList.add("scroll");
        if(window.scrollY === 0){
            document.getElementsByClassName('top-wrapper')[0].classList.remove("scroll");
        }
    });

    //Product details change
    let products = document.getElementsByClassName('product__block__item');
    let product1 = document.getElementById('item1');
    let product2 = document.getElementById('item2');
    let product3 = document.getElementById('item3');
    let details1 = document.getElementById('item1Details');
    let details2 = document.getElementById('item2Details');
    let details3 = document.getElementById('item3Details');
    let allActive = document.getElementsByClassName('product__block__item');
    for (let i = 0 ; i < products.length; i++) {

        products[i].addEventListener("click", function(e){

            if (e.currentTarget===product1){
                details1.style.display = "flex";
                details2.style.display = "none";
                details3.style.display = "none";
                for(let j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
            else if (e.currentTarget===product2){
                details1.style.display = "none";
                details2.style.display = "flex";
                details3.style.display = "none";
                for(let j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
            else if (e.currentTarget===product3){
                details1.style.display = "none";
                details2.style.display = "none";
                details3.style.display = "flex";
                for(let j = 0 ; j < allActive.length; j++){
                    allActive[j].classList.remove('active')
                }
                e.currentTarget.classList.add("active");
            }
        });
    }
});
