
// window.onload = function (){
//     alert('DOM & content loaded');
// }

'use strict';

//создаем иконки загрузки контента + переключатели слайдера
let slider = document.querySelector('.main-slider');

let loadIcon = document.createElement('i');
    loadIcon.classList.add('fas','fa-spinner','fa-spin');
    slider.insertAdjacentElement('beforebegin',loadIcon);

let leftArrow = document.createElement('i');
    leftArrow.classList.add('fas','fa-chevron-circle-left','arrow-left');
    slider.insertAdjacentElement('beforeend',leftArrow);

let rightArrow = document.createElement('i');
    rightArrow.classList.add('fas','fa-chevron-circle-right','arrow-right');
    slider.insertAdjacentElement('beforeend',rightArrow);

window.addEventListener('load', function (){
    //убираем иконку загрузки
    loadIcon.style.display = 'none';

    //показываем первый слайд
    images.init();

    //создаем слушателей для иконок влево-вправо
    leftArrow.addEventListener('click',function(){
        images.nextImageLeft();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    rightArrow.addEventListener('click',function(){
        images.nextImageRight();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
});

//создаем объект с фотками
let images = {
    curIndex: 0,
    slides: [],
    init(){
        this.slides = document.querySelectorAll('.main-slider-item');
        this.showSlideWithCurrentIndex();
    },
    showSlideWithCurrentIndex(){
        this.slides[this.curIndex].classList.remove('hidden-slide');
    },
    nextImageLeft(){
        //прячем слайд, который показывается
        this.hideVisibleImage();

        if(this.curIndex === 0){
            this.curIndex = this.slides.length-1;
        }
        else{
            this.curIndex--;
        }
        this.showSlideWithCurrentIndex();
    },
    nextImageRight(){
        // //прячем слайд, который показывается
        this.hideVisibleImage();

        if(this.curIndex === this.slides.length-1){
            this.curIndex = 0;
        }
        else{
            this.curIndex++;
        }
        this.showSlideWithCurrentIndex();
    },
    hideVisibleImage(){
        //находим элемент с классом main-slider-item и БЕЗ класса hidden-slide
        document.querySelector('.main-slider-item:not(.hidden-slide)').classList.add('hidden-slide');
    }
};



