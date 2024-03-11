let caras = 0;
let coroas = 0;

let moeda = document.querySelector('.moeda');
let btnGirar = document.querySelector('#btn-girar');
let btnResetar = document.querySelector('#btn-resetar');

btnGirar.addEventListener("click", () => {
    let cc = Math.floor(Math.random() * 2);
    moeda.style.animation = "none";

    if (cc) {
        setTimeout(function () {
            moeda.style.animation = "girar-cara 3s forwards";
        }, 100);
        caras++;
    } else {
        setTimeout(function () {
            moeda.style.animation = "girar-coroa 3s forwards";
        }, 100);
        coroas++;
    }

    setTimeout(updateStats(), 3000);
    disableBotao();
});

function updateStats() {
    document.querySelector('#qtdCara').textContent = `Cara: ${caras}`;
    document.querySelector('#qtdCoroa').textContent = `Coroa: ${coroas}`;
}

function disableBotao() {
    btnGirar.disabled = true;
    setTimeout(function () {
        btnGirar.disabled = false;
    }, 800);
}

btnResetar.addEventListener("click", () => {
    moeda.style.animation = "none";
    btnGirar.disabled = false;
    caras = 0;
    coroas = 0;
    updateStats();
});
