const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const port = 3000

app.get("/", (req, res) => {
  res.send("Página inicial");
});

// Configurando a CSP com a diretiva 'font-src' para permitir o carregamento de fontes
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: ["'self'", "http://localhost:3000"], // Permitindo fontes de 'self' (seu próprio domínio) e 'http://localhost:3000'
    },
  })
);

// Configuração do body-parser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: "local",
  user: "root",
  password: "Jas12/mil13",
  database: "sagu",
});

// Rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Consulta SQL para verificar se o usuário com o email fornecido existe
  const sql = "SELECT * FROM Usuario WHERE email = ?";

  connection.query(sql, [email], (error, results) => {
    if (error) {
      console.error("Erro ao consultar o banco de dados:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    // Verificando se o usuário foi encontrado
    if (results.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    // Verificando se a senha está correta
    const usuario = results[0];
    if (usuario.senha !== senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Login bem-sucedido
    res.json({ message: "Login bem-sucedido" });
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
