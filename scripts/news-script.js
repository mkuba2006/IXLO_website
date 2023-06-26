import news from './news.js';
const newses = news;

const container = document.querySelector('#news');
for(let i of newses){
    const div = document.createElement('div');
    div.className ='container';
    div.innerHTML =`
        <img src='${i.img}'/>
        <div>    
            <time datetime="2023-06-24" class="card__date">${i.data}</time>
            <h1>${i.title}</h1>
            <p>${i.discription}</p>
        </div>

    `;
    container.appendChild(div);
}
ScrollReveal().reveal('#wiadomosci #news div', {origin: 'left', distance: '10%', interval: 100});