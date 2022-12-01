const express = require('express');
const app = express();
const User = require('./models/User.js')
const db = require ('./models/db');


app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Pagína inicial - Celke");
});


app.post("/cadastrar", async (req, res) => {
  console.log(req.body);
  await User.create(req.body)
  .then(() => {
     return res.json({     
     erro: false,
     mensagem: "Usuário cadastrado com sucesso!"
     })
  }).catch(() => {
    return res.status(400).json({  
    erro: true,
    mensagem: "Erro: Usuário não cadastrado com sucesso!"
  })
})
//Rota do tipo put(editar)
app.put("/users", async (req, res) => {
  const { id } = req.body;  
  
  await users.update(req.body, {where: {id}})
  .then(() => {
      return res.json({
          erro: false,
          mensagem: "Produto editado com sucesso!"
      });

  }).catch(() => {
      return res.status(400).json({
          erro: true,
          mensagem: "Erro: Produto não editado com sucesso!"
      });
  });
});

// rota deo tipo delete(deletar)
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;    

  await users.destroy({ where: {id}})
  .then(() => {
      return res.json({
          erro: false,
          mensagem: "Produto apagado com sucesso!"
      });
  }).catch(() => {
      return res.status(400).json({
          erro: true,
          mensagem: "Erro: Produto não apgado com sucesso!"
      });
  });
});













});
//res.send("página cadastrar");


app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});