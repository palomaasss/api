import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import veiculoController from './controller/veiculoController.js';
import clienteController from './controller/clienteController.js';


let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(veiculoController);
servidor.use(clienteController);

servidor.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));
