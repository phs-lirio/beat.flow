const UI = {

    songs: [
      { title: "Song 1", url: "music/1.mp3" },
      { title: "Song 2", url: "music/2.mp3" },
      { title: "Song 3", url: "music/3.mp3" }
    ],
  
    showHome() {
      const el = document.getElementById("content");
  
      el.innerHTML = `
        <h1>🔥 Em alta</h1>
  
        <div class="grid">
          ${this.songs.map((s, i) => `
            <div class="card">
              <h3>${s.title}</h3>
              <button onclick="Player.load(UI.songs); Player.play(${i})">
                Tocar
              </button>
              <button onclick="UI.addFav('${s.title}')">
                ⭐ Favoritar
              </button>
            </div>
          `).join("")}
        </div>
      `;
    },
  
    showFavorites() {
      const user = DB.getCurrentUser();
      const el = document.getElementById("content");
  
      el.innerHTML = `
        <h1>⭐ Favoritos</h1>
        <div class="grid">
          ${(user.favorites || []).map(s => `
            <div class="card">
              <h3>${s}</h3>
            </div>
          `).join("")}
        </div>
      `;
    },
  
    showPlaylists() {
      const user = DB.getCurrentUser();
      const el = document.getElementById("content");
  
      el.innerHTML = `
        <h1>📀 Playlists</h1>
        <div class="grid">
          ${(user.playlists || []).map(p => `
            <div class="card">
              <h3>${p.name}</h3>
            </div>
          `).join("")}
        </div>
      `;
    },
  
    addFav(song) {
      const user = DB.getCurrentUser();
  
      user.favorites = user.favorites || [];
  
      if (!user.favorites.includes(song)) {
        user.favorites.push(song);
      }
  
      DB.updateUser(user);
    }
  };