const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
// const helmet = require("helmet");
const app = express();
const port = 3000;

// app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "");
  app.use(cors());
  next();
});

// app.get("/cors", (req, res) => {
//   res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.send({ msg: "This has CORS enabled 🎈" });
// });

// Servindo arquivos estáticos da pasta de build do React
app.use(express.static(path.join(__dirname, "../front-end/dist")));

// Rota para a página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist", "index.html"));
});

// Configurando a CSP com a diretiva 'font-src' para permitir o carregamento de fontes
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'none'"],
//       fontSrc: ["'self'", "http://localhost:3000"],
//     },
//   })
// );

// Configuração do body-parser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Jas12/mil13",
  database: "SAGU",
});

connection.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
  connection.release(); // Release the connection
});

// Rota para exibir o formulário de cadastro
app.get("/cadastro", (req, res) => {
  const sql = "SELECT * from professor";
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Erro ao buscar usuário", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    res.json(results);
  });
});

// Rota de cadastro de usuário
app.post("/cadastro", (req, res) => {
  const { email, senha, nome, disciplina } = req.body;

  // Validação dos dados (exemplo básico)
  if (!email || !senha || !nome || !disciplina) {
    return res
      .status(400)
      .json({ error: "Por favor, preencha todos os campos" });
  }

  // Consulta SQL para inserir o novo usuário
  const sql =
    "INSERT INTO professor (email, senha, nome, disciplina) VALUES (?, ?, ?, ?)";
  const values = [email, senha, nome, disciplina];

  // Executar a consulta SQL
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Erro ao inserir novo usuário:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    res.json({ message: "Novo usuário cadastrado com sucesso" });
  });
});

// Rota de login
app.post("/login", (req, res) => {
  // Lógica de login
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
