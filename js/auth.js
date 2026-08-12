const Auth = {

    login() {
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;
  
      const users = DB.getUsers();
  
      const user = users.find(u => u.email === email && u.password === pass);
  
      if (!user) {
        alert("Login inválido");
        return;
      }
  
      DB.setCurrentUser(user);
      App.renderHome();
    },
  
    logout() {
      DB.logout();
      App.renderLogin();
    }
  };