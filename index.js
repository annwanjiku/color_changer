const val = 255;
const my_button = document.getElementById("button_one");

my_button.addEventListener("click",()=>{   
    let rand_red = Math.ceil(Math.random()*val);
    let rand_green = Math.ceil(Math.random()*val);
    let rand_blue = Math.ceil(Math.random()*val);

    let col= `rgb(${rand_red},${rand_green},${rand_blue})`
    my_button.style.backgroundColor=col;
})
