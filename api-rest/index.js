/**
 * Criando um server
 */

// Importando a biblioteca express
import express from "express";

// Importando o http-status-codes
import { StatusCodes } from 'http-status-codes';

// Invocando o servidor
const app = express();
const PORT = 3000;

// Ouvindo o servidor
// () =>  = funcao de callback
app.listen(PORT, () => {
    console.log(`Servidor rodando em . . . http://localhost:${PORT}`);
});

// Criando uma rota, enviando e recebendo uma solicitação via método GET
// () =>  = funcao de callback com dois paramentros
app.get('/', (request, response) => {
    return response.send("<h1>Olá Mundo Express !!!</h1>");
});



/**
 * Consumindo (solicitacao) de usuarios via API do github
 */

// Criando uma lista global, atraves de um array de objetos, para a chamada de usuarios atraves do método GET
const users = [
    {
        id: 1,
        nome: 'allecosta'
    },
    {
        id: 2,
        nome: 'Marilande'
    }
];

// Criando um middleware para definir que todas as requests sejam em formato JSON
app.use(express.json());

// Retornando uma lista de usuarios
app.get('/users', (request, response) => {
    return response.send(users);
});

// Retornando um usuario especifico
app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId))
    });

    return response.send(user);
});


// Criando um novo usuario, retornando status 201
app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);
    return response.status(StatusCodes.CREATED).send(newUser);
});

// Atualizando usuario, retornando status 200
app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const updatedUser = request.body;

    users = users.map(user => {
        if (Number(userId) === user.id) {
            return updatedUser;
        }

        return user;
    });

    return response.send(updatedUser);
});

// Removendo usuario, retornando status 204
app.delete('/users/:userId', (request, response) => {
    const userId = request.params.userId;

    users = users.filter((user) => user.id !== Number(userId));

    return response.status(StatusCodes.NO_CONTENT).send();
})



