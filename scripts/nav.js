const nav = document.querySelector('#nav1');

const scroll = () =>{
    const scrollPos = window.scrollY;
    nav.classList.toggle("scroll-down", scrollPos > 56 );
};
document.addEventListener('scroll', scroll,{passive: true});


const navl = document.querySelector("#burger1")
const navi = document.querySelector("#secret")
const nav_links = navi.querySelectorAll('a');
const burger = document.querySelector("#burger1");
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navi.classList.toggle("nav_active");
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
  });
});

const hrefs = document.querySelectorAll("#secret a");
const secretDiv = document.getElementById('secret');

hrefs.forEach(href=>{
  href.addEventListener('click', ()=>{
    secretDiv.classList.remove('nav_active');
    burger.classList.toggle("toggle");
  })
})




const p = document.querySelectorAll("#dropd");
const ul = document.querySelectorAll("body > aside > ul");

const toggleMenu = () => {
  document.body.classList.toggle('open');
  const aside = document.querySelectorAll('aside p');
  ScrollReveal().reveal(aside, {origin: 'left', distance: '100%', interval: 100});
} 

p.forEach(a=>{
  a.addEventListener('click',()=>{
    if(a.classList.contains('pactive')){
      a.classList.remove('pactive');
      const next = a.nextElementSibling;
      let lis = next.querySelectorAll('li')
      next.classList.remove('active');
    }else{
      p.forEach(e=>{
        if(e.classList.contains('pactive')){
          e.classList.remove('pactive');
          const next = e.nextElementSibling;
          next.classList.toggle('active');
        }
      })
      a.classList.toggle('pactive');
      const next = a.nextElementSibling;
      let lis = next.querySelectorAll('li')
      next.classList.toggle('active');
    }
  })
})
const year = new Date().getFullYear();
console.log(year);
document.getElementById('ppp').textContent += ' '+ year;
document.getElementById('yyy').textContent += ' '+ year;
document.getElementById('rrr').textContent += ' '+ year;