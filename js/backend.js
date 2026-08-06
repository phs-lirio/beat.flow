// 📦 Banco de dados fake
let usuarios =
    JSON.parse(localStorage.getItem("usuarios"))
    || [];

// 💾 salvar usuários
function salvar() {

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}

// 📩 validar email
function emailValido(email) {

    return email.includes("@") &&
        email.includes(".");
}

// 🔐 cadastrar usuário
function cadastrar() {

    const email =
        prompt("Digite seu email:");

    const senha =
        prompt("Crie uma senha:");

    if (!email || !senha) {

        return alert(
            "⚠️ Preencha todos os campos!"
        );
    }

    if (!emailValido(email)) {

        return alert(
            "❌ Email inválido!"
        );
    }

    if (senha.length < 6) {

        return alert(
            "❌ Senha muito fraca!"
        );
    }

    const existe =
        usuarios.find(
            u => u.email === email
        );

    if (existe) {

        return alert(
            "⚠️ Usuário já existe!"
        );
    }

    usuarios.push({
        email,
        senha,
        criadoEm:
            new Date().toLocaleDateString()
    });

    salvar();

    alert(
        "✅ Conta criada com sucesso!"
    );
}

// 🔑 login
function login() {

    const email =
        document.getElementById(
            "email"
        ).value.trim();

    const senha =
        document.getElementById(
            "senha"
        ).value.trim();

    if (!email || !senha) {

        return alert(
            "⚠️ Digite email e senha!"
        );
    }

    const user =
        usuarios.find(
            u =>
                u.email === email &&
                u.senha === senha
        );

    if (user) {

        localStorage.setItem(
            "logado",
            email
        );

        document.getElementById(
            "loginPage"
        ).style.display = "none";

        document.getElementById(
            "homePage"
        ).style.display = "block";

        document.getElementById(
            "usuarioNome"
        ).innerText =
            "👤 " + email;

    } else {

        alert(
            "❌ Email ou senha incorretos!"
        );
    }
}

// ❓ recuperar senha
function esqueciSenha() {

    const email =
        prompt("Digite seu email:");

    const user =
        usuarios.find(
            u => u.email === email
        );

    if (user) {

        alert(
            "🔑 Sua senha é: " +
            user.senha
        );

    } else {

        alert(
            "❌ Usuário não encontrado!"
        );
    }
}

// 🔄 atualizar senha
function atualizarSenha() {

    const email =
        prompt("Digite seu email:");

    const index =
        usuarios.findIndex(
            u => u.email === email
        );

    if (index === -1) {

        return alert(
            "❌ Usuário não encontrado!"
        );
    }

    const atual =
        prompt("Digite sua senha atual:");

    if (
        usuarios[index].senha !== atual
    ) {

        return alert(
            "❌ Senha incorreta!"
        );
    }

    const nova =
        prompt("Digite a nova senha:");

    if (!nova || nova.length < 6) {

        return alert(
            "❌ Senha muito fraca!"
        );
    }

    const confirmar =
        prompt("Confirme a nova senha:");

    if (nova !== confirmar) {

        return alert(
            "❌ As senhas não coincidem!"
        );
    }

    usuarios[index].senha = nova;

    salvar();

    alert(
        "✅ Senha atualizada!"
    );
}

// 🎵 tocar música
function tocar(musica, nome) {

    const player =
        document.getElementById(
            "player"
        );

    player.src = musica;

    player.play();

    document.getElementById(
        "musica"
    ).innerText =
        "🎶 Tocando: " + nome;
}

// ⏸️ pausar música
function pausar() {

    document.getElementById(
        "player"
    ).pause();
}

// 🚪 logout
function logout() {

    localStorage.removeItem(
        "logado"
    );

    document.getElementById(
        "loginPage"
    ).style.display = "block";

    document.getElementById(
        "homePage"
    ).style.display = "none";

    document.getElementById(
        "email"
    ).value = "";

    document.getElementById(
        "senha"
    ).value = "";

    alert(
        "👋 Logout realizado!"
    );
}

// 🔥 manter login salvo
window.onload = () => {

    const logado =
        localStorage.getItem(
            "logado"
        );

    if (logado) {

        document.getElementById(
            "loginPage"
        ).style.display = "none";

        document.getElementById(
            "homePage"
        ).style.display = "block";

        document.getElementById(
            "usuarioNome"
        ).innerText =
            "👤 " + logado;
    }

    function pesquisarMusica() {

        let filtro =
            document.getElementById("pesquisa")
                .value
                .toLowerCase();

        let cards =
            document.querySelectorAll(".card");

        cards.forEach(card => {

            let titulo =
                card.querySelector("h3")
                    .innerText
                    .toLowerCase();

            if (titulo.includes(filtro)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }
};
import './app.js';
import './fakeDB.js';
import './esqueceuSenha.js';
import './player.js';
import './playlist.js';
import './ui.js';
import './auth.js';
import './atualizarSenha.js';
import './avoritos.js';

// Elementos
const btnPerfil = document.getElementById("btnPerfil");
const menuPerfil = document.getElementById("menuPerfil");

const inputFoto = document.getElementById("inputFoto");
const imgPerfil = document.getElementById("fotoPerfil");

const inputNome = document.getElementById("inputNome");
const nomePerfil = document.getElementById("nomePerfil");

const btnTrocarConta = document.getElementById("trocarConta");

// Abrir/fechar menu
btnPerfil.addEventListener("click", () => {
    menuPerfil.classList.toggle("ativo");
});

// Trocar foto de perfil
inputFoto.addEventListener("change", () => {
    const arquivo = inputFoto.files[0];
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = (e) => {
            imgPerfil.src = e.target.result;
            localStorage.setItem("fotoPerfil", e.target.result);
        };
        leitor.readAsDataURL(arquivo);
    }
});

// Trocar nome
inputNome.addEventListener("input", () => {
    nomePerfil.textContent = inputNome.value;
    localStorage.setItem("nomePerfil", inputNome.value);
});

// Trocar conta (simples)
btnTrocarConta.addEventListener("click", () => {
    if (confirm("Deseja trocar de conta?")) {
        localStorage.clear();
        location.reload();
    }
});

// Carregar dados salvos
window.onload = () => {
    const fotoSalva = localStorage.getItem("fotoPerfil");
    const nomeSalvo = localStorage.getItem("nomePerfil");

    if (fotoSalva) imgPerfil.src = fotoSalva;
    if (nomeSalvo) {
        nomePerfil.textContent = nomeSalvo;
        inputNome.value = nomeSalvo;
    }
};