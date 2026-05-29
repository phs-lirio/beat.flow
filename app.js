const App = {
    state: {
      user: null,
      page: "home"
    },
  
    init() {
      this.state.user = DB.getCurrentUser();
      if (!this.state.user) {
        this.renderLogin();
      } else {
        this.renderHome();
      }
    },
  
    renderLogin() {
      document.body.innerHTML = `
        <div class="login-box">
          <h1>Spotify PRO</h1>
          <input id="email" placeholder="Email">
          <input id="password" type="password" placeholder="Senha">
          <button onclick="Auth.login()">Entrar</button>
        </div>
      `;
    },
  
    renderHome() {
      document.body.innerHTML = `
        <div class="app">
  
          <div class="sidebar">
            <h2 class="logo">Spotify PRO</h2>
  
            <div class="menu">
              <button onclick="UI.showHome()">🏠 Home</button>
              <button onclick="UI.showFavorites()">⭐ Favoritos</button>
              <button onclick="UI.showPlaylists()">📀 Playlists</button>
              <button onclick="Auth.logout()">🚪 Sair</button>
            </div>
          </div>
  
          <div class="content" id="content"></div>
  
          <div class="player">
            <button onclick="Player.prev()">⏮</button>
            <button onclick="Player.pause()">⏸</button>
            <button onclick="Player.next()">⏭</button>
          </div>
  
        </div>
      `;
  
      UI.showHome();
    }
  };
  
  window.onload = () => App.init();