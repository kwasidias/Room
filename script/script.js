"use strict"
const shopbtnDiv = document.querySelector('.shopbtn-div');
const shopbtn = document.querySelector('.shopbtn');
const arrow = document.querySelector('path');
const leftArrow = document.querySelector('.leftdiv');
const rightArrow = document.querySelector('.rightdiv');
const navItems = document.querySelector('ul');
const changingHeader = document.querySelector('h1');
const changingParagraphs = document.querySelector('.vary');
const hero = document.querySelector('.hero');
let counter = 0;


const images = ["../images/desktop-image-hero-1.jpg","../images/desktop-image-hero-2.jpg","../images/desktop-image-hero-3.jpg"];

const headerElements = [`Discover innovative ways to decorate`,`We are available all across the globe`,`Manufactured with the best materials`];

const paragraphElements = [
    `We provide unmatched quality, comfort, and style for property<br>
    owners across the country.Our experts combine form and<br>
    function in bringing your vision to life. Create a room in your own<br>
    style with our collection and make your property a reflection of<br> 
    you and what you love.
    `,
    `With stores all over the world, it's easy for you to find furniture for<br>
    your home or place of business.Locally, we’re in most major<br>
    cities throughout the country. Find the branch nearest you using<br>
    our store locator. Any questions? Don't hesitate to contact us<br>
    today.
    `,
    `Our modern furniture store provide a high level of quality. Our<br>
    company has invested in advanced technology to ensure that<br>
    every product is made as perfect and as consistent as possible.<br>
    With three decades of experience in this industry, we understand<br>
    what customers want for their home and office.
    `
];

function skip(e){
    if(e.target.className === 'leftdiv' && counter > 0){
        counter--;
        hero.src = images[counter];
        changingHeader.innerHTML = headerElements[counter];
        changingParagraphs.innerHTML = paragraphElements[counter];
    }
    if(e.target.className === "rightdiv" && counter < 2){
        counter++;
        hero.src =  images[counter];
        changingHeader.innerHTML = headerElements[counter];
        changingParagraphs.innerHTML = paragraphElements[counter]; 
    }
}

shopbtnDiv.addEventListener('mouseover',function(e){
    shopbtn.style.color = "#c6c6c6"
    arrow.style.fill = "#c6c6c6";
})
shopbtnDiv.addEventListener('mouseleave',function(e){
    arrow.style.fill = "";
    shopbtn.style.color = "";
})
navItems.addEventListener("mouseover",function(e){
   if(e.target.className === "navbtn"){
       const hr = e.target.parentNode.children[1]
       hr.classList.remove('hidden')
   }
})
navItems.addEventListener("mouseout",function(e){
    if(e.target.className === "navbtn"){
        const hr = e.target.parentNode.children[1]
        hr.classList.add('hidden');
    }
 })

 leftArrow.addEventListener('click',skip);
 rightArrow.addEventListener('click', skip)