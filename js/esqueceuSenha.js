function sendResetLink() {
    const email = document.getElementById("email").value;
  
    if (!email) {
      return alert("Digite seu email!");
    }
  
    const users = FakeDB.getUsers();
    const userExists = users.find(u => u.email === email);
  
    if (!userExists) {
      return alert("Usuário não encontrado!");
    }
  
    // salva temporariamente quem vai resetar senha
    localStorage.setItem("resetEmail", email);
  
    alert("Link de recuperação enviado (simulado)!");
    window.location.href = "reset.html";
  }