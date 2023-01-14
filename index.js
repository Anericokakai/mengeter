const nav = document.querySelector(".navbar");



// When the user scrolls down 20px from the top of the document, slide down the navbar


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-70px";
  }
}



const navigations=document.querySelector('nav')
const ul=navigations.querySelector('ul')
const barbtn=navigations.querySelector('.fa-bars')
const xmark=navigations.querySelector('.fa-xmark')



barbtn.onclick=()=>{
  ul.classList.toggle('menu')

}
xmark.onclick=()=>{
  ul.classList.toggle('menu')
}

const links=navigations.querySelectorAll('ul li a')

const pageindex=window.location.pathname
links.forEach(link => {
  if(link.href.includes(`${pageindex}`)){
    link.classList.toggle('back')
  }

  
});



