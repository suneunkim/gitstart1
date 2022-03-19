// hamburger button access
const hamburger = document.querySelector(".hamburger-menu");
const gnb = document.querySelector(".gnb");

hamburger.addEventListener("click", function () {
  gnb.classList.toggle("active");
});

// tab menu

const tabMenu = document.querySelectorAll(".tqp-menu-item");
const group = document.querySelectorAll(".section2 .group");
let activeIndex = 0;


// 버튼 1개당 하나씩 써줘야 하는데, for로 반복문으로 처리할거임
// tabMenu[0].addEventListener('click' function(){
//   console.log(this);
// });

// tabMenu[1].addEventListener('click' function(){
//   console.log(this);
// });

// tabMenu[2].addEventListener('click' function(){
//   console.log(this);
// });

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("click", function () {
    tabMenu[0].classList.remove("active");
    tabMenu[1].classList.remove("active");
    tabMenu[2].classList.remove("active");

    for (let j = 0; j < tabMenu.length; j++) {
      tabMenu[j].classList.remove("active");
      group[j].classList.remove("active");
    }

    this.classList.add("active");

    for (let j = 0; j < tabMenu.length; j++) {
      if (tabMenu[j] === this) {
        activeIndex = j;
      }
    }

    group[activeIndex].classList.add("active"); //active라는 클래스를 추가한다
  });
}

// carousel

const play = document.querySelector('.play');
const slide = document.querySelectorAll('.slide');

let current = 0;
let next = 1;
let prev = 2;

play.addEventListener('play' function(){

  if(next >= slide.length){
    next = 0;
  }

  slide[current].classList.remove('current','next');
  slide[current].classList.add('prev');

  slide[next].classList.remove('prev','next');
  slide[next].classList.add('current');

  slide[prev].classList.remove('current','prev');
  slide[prev].classList.add('next');

 prev = current;
 cureent = next;
 next++;
 

});