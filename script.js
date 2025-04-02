<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria Produktów</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <div class="top-bar">
            <div class="logo">Galeria Rękodzieła</div>
            <nav>
                <ul>
                    <li><a href="#">Biżuteria</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Dom</a></li>
                    <li><a href="#">Dziecko</a></li>
                    <li><a href="#">Na Okazje</a></li>
                    <li><a href="#">Kosmetyki</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <div class="user-options">
                <input type="text" placeholder="Szukaj...">
                <button>🔍</button>
                <a href="#">Zaloguj</a> |
                <a href="#">Zarejestruj</a>
            </div>
        </div>
    </header>
    <main>
        <h2>Ręcznie wykonane anioły</h2>
        <section class="gallery">
            <div class="product" onclick="showDetails('produkt1')">
                <img src="anioł1.jpg" alt="Anioł 1">
                <h2>Anioł ceramiczny</h2>
                <p>Wymiary: 30 cm wysokości</p>
                <p>Cena: 120 PLN</p>
                <p class="details">Opis: <span id="detail-1">[Tu możesz wpisać dodatkowe informacje]</span></p>
            </div>
            <div class="product" onclick="showDetails('produkt2')">
                <img src="anioł2.jpg" alt="Anioł 2">
                <h2>Anioł drewniany</h2>
                <p>Wymiary: 25 cm wysokości</p>
                <p>Cena: 100 PLN</p>
                <p class="details">Opis: <span id="detail-2">[Tu możesz wpisać dodatkowe informacje]</span></p>
            </div>
            <div class="product" onclick="showDetails('produkt3')">
                <img src="anioł3.jpg" alt="Anioł 3">
                <h2>Anioł szklany</h2>
                <p>Wymiary: 35 cm wysokości</p>
                <p>Cena: 150 PLN</p>
                <p class="details">Opis: <span id="detail-3">[Tu możesz wpisać dodatkowe informacje]</span></p>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Galeria Rękodzieła</p>
    </footer>
</body>
</html>
