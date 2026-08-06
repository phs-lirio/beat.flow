let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function addFavorite(song) {
  if (!favoritos.includes(song)) {
    favoritos.push(song);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function removeFavorite(song) {
  favoritos = favoritos.filter(s => s !== song);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}