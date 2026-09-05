import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, 'dist');

// Servir arquivos estáticos gerados pelo Vite (build)
app.use(express.static(distPath));

// Endpoint de verificação de integridade (Health Check)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Redirecionamento SPA: envia o index.html para qualquer rota não mapeada
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
