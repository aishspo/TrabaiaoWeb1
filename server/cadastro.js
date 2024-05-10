// Rota para editar informações do usuário
router.put('/editar', (req, res) => {
    const userEmail = req.user.email; // Obtém o email do usuário logado
    const { nome, telefone, cep, rua, numero, estado, complemento } = req.body;
  
    // Atualiza as informações do usuário no banco de dados
    connection.query('UPDATE Usuario SET nome=?, telefone=?, cep=?, rua=?, numero=?, estado=?, complemento=? WHERE email=?', 
      [nome, telefone, cep, rua, numero, estado, complemento, userEmail], 
      (error, results) => {
        if (error) {
          console.error('Erro ao atualizar no banco de dados:', error);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
  
        res.json({ message: 'Informações do usuário atualizadas com sucesso' });
      });
  });
  
  // Rota para excluir a conta do usuário
  router.delete('/excluir', (req, res) => {
    const userEmail = req.user.email; // Obtém o email do usuário logado
  
    // Exclui o usuário do banco de dados
    connection.query('DELETE FROM Usuario WHERE email=?', [userEmail], (error, results) => {
      if (error) {
        console.error('Erro ao excluir do banco de dados:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
  
      res.json({ message: 'Conta de usuário excluída com sucesso' });
    });
  });
  