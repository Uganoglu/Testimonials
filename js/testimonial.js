const carousel_area = document.getElementsByClassName("carousel-area")[0];
const arrow_left = document.getElementsByClassName("arrow-left")[0];
const arrow_right = document.getElementsByClassName("arrow-right")[0];

arrow_left.addEventListener("click", function(){
    const slide_container_width = document.getElementsByClassName("slide-container")[0].clientWidth;
    carousel_area.scrollLeft -= slide_container_width;
})

arrow_right.addEventListener("click", function(){
    const slide_container_width = document.getElementsByClassName("slide-container")[0].clientWidth;
    carousel_area.scrollLeft += slide_container_width;
})




 function myFunction(x) {
    carousel_area.scrollLeft = 0;
}

var x = window.matchMedia("(max-width: 576px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var colors=['blueviolet', '#4caf50', '#9c27b0', '#e91e63'];

const cards=document.getElementsByClassName('carousel-area')[0].children.length;

for(i=0; i<cards; i++){
   document.getElementsByClassName('slide-row')[i].style.backgroundColor=colors[i];
}

