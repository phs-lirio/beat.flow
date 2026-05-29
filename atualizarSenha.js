function updatePassword() {
    const email = localStorage.getItem("resetEmail");
    const newPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!email) {
      return alert("Sessão de recuperação inválida!");
    }
  
    if (!newPassword || !confirmPassword) {
      return alert("Preencha todos os campos!");
    }
  
    if (newPassword !== confirmPassword) {
      return alert("As senhas não coincidem!");
    }
  
    const users = FakeDB.getUsers();
  
    const index = users.findIndex(u => u.email === email);
  
    if (index === -1) {
      return alert("Usuário não encontrado!");
    }
  
    users[index].password = newPassword;
  
    FakeDB.saveUsers(users);
  
    localStorage.removeItem("resetEmail");
  
    alert("Senha atualizada com sucesso!");
    window.location.href = "login.html";
  }