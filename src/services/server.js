const express = require('express');
const cors = require('cors');
const { getLos, createLo, updateLo, deleteLo } = require('./Api'); 

const app = express();

app.use(cors());

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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
