const express = require('express');
const cors = require('cors');
const { getLos, createLo, updateLo, deleteLo } = require('./Api'); 

const app = express();

app.use(cors({ origin: 'http://localhost:8000' }));

app.get('/los', async (req, res) => {
  try {
    const losResponse = await getLos(); 
    const los = losResponse.data; 
    res.json(los);
  } catch (error) {
    console.error('Erro ao buscar LOs:', error);
    res.status(500).json({ error: 'Erro ao buscar LOs' });
  }
});

app.get('/los/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getLo(id);
    const loDetails = response.data;
    res.json(loDetails);
  } catch (error) {
    console.error('Erro ao buscar detalhes do LO:', error);
    res.status(500).json({ error: 'Erro ao buscar detalhes do LO' });
  }
});


app.post('/los', async (req, res) => {
  try {
    const newLoData = req.body;
    const response = await createLo(newLoData);
    const createdLo = response.data;
    res.json(createdLo);
  } catch (error) {
    console.error('Erro ao criar LO:', error);
    res.status(500).json({ error: 'Erro ao criar LO' });
  }
});

app.put('/los/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedLoData = req.body;
    const response = await updateLo(id, updatedLoData);
    const updatedLo = response.data;
    res.json(updatedLo);
  } catch (error) {
    console.error('Erro ao atualizar LO:', error);
    res.status(500).json({ error: 'Erro ao atualizar LO' });
  }
});

app.delete('/los/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await deleteLo(id);
    const deletedLo = response.data;
    res.json(deletedLo);
  } catch (error) {
    console.error('Erro ao excluir LO:', error);
    res.status(500).json({ error: 'Erro ao excluir LO' });
  }
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
