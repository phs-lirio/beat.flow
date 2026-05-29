const DB = {
    getUsers() {
      return JSON.parse(localStorage.getItem("users")) || [];
    },
  
    saveUsers(users) {
      localStorage.setItem("users", JSON.stringify(users));
    },
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem("currentUser"));
    },
  
    setCurrentUser(user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
  
    logout() {
      localStorage.removeItem("currentUser");
    },
  
    updateUser(updated) {
      let users = this.getUsers();
  
      const index = users.findIndex(u => u.id === updated.id);
      users[index] = updated;
  
      this.saveUsers(users);
      this.setCurrentUser(updated);
    }
  };