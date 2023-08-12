function logScrollHeight() {
    const buttons_w = document.getElementById('buttons').clientHeight;
    const buttons2_w = document.getElementById('buttons2').clientHeight;
    const tiles_w = document.getElementById('tiles').clientHeight;
    const wiadomosci_w = document.querySelector("#wiadomosci").clientHeight;
    const map_w = document.getElementById('map').clientHeight;

    console.log(buttons_w + buttons2_w + tiles_w + wiadomosci_w + map_w);
}

  document.addEventListener("DOMContentLoaded", logScrollHeight);