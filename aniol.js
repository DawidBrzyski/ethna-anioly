document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const aniołId = params.get("id");
    const anioł = anioły.find(a => a.id === aniołId);
    
    if (!anioł) {
        document.body.innerHTML = "<h1>Nie znaleziono anioła</h1>";
        return;
    }
    
    document.getElementById("nazwa").textContent = anioł.nazwa;
    document.getElementById("opis").textContent = anioł.opis;
    document.getElementById("metoda").textContent = anioł.metoda;
    document.getElementById("kolory").textContent = anioł.kolory;
    document.getElementById("przesylka").textContent = anioł.przesylka;
    document.getElementById("cena").textContent = anioł.cena;
    document.getElementById("imie").textContent = anioł.kontakt.imie;
    
    let numerTelefonu = anioł.kontakt.telefon;
    const telefonElement = document.getElementById("telefon");
    document.getElementById("pokaz-numer").addEventListener("click", () => {
        telefonElement.textContent = numerTelefonu;
    });
    
    // Obsługa galerii
    const imgElement = document.getElementById("anioł-img");
    let currentImgIndex = 0;
    let images = [`gfx/${anioł.id}.jpg`];
    for (let i = 1; i <= 5; i++) {
        let imgPath = `gfx/${anioł.id}-${i}.jpg`;
        images.push(imgPath);
    }
    
    function updateImage() {
        imgElement.src = images[currentImgIndex];
    }
    document.getElementById("prev").addEventListener("click", () => {
        currentImgIndex = (currentImgIndex === 0) ? images.length - 1 : currentImgIndex - 1;
        updateImage();
    });
    document.getElementById("next").addEventListener("click", () => {
        currentImgIndex = (currentImgIndex === images.length - 1) ? 0 : currentImgIndex + 1;
        updateImage();
    });
    updateImage();
});
