# Movie Management API

Esta é uma API RESTful para gerenciar filmes, construída com Node.js, Express e MongoDB. A API permite criar, listar, atualizar, deletar e avaliar filmes.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

## Instalação

1. Clone o repositório:
    
    ```
    git clone <https://github.com/seu-usuario/movie-management-api.git>
    cd movie-management-api
    ```
    
2. Instale as dependências:
    
    ```
    npm install
    ```
    
3. Inicie o servidor MongoDB (certifique-se de que ele está rodando na porta padrão 27017):
    
    ```
    mongod
    ```
    
4. Inicie o servidor Node.js:
    
    ```
    npm start
    ```
    

O servidor estará rodando em [http://localhost:5000](http://localhost:5000/).

## Endpoints da API

### Criar um Filme

- **URL**: `/movies`
- **Método**: `POST`
- **Body**: JSON
    
    ```json
    {
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseDate": "2010-07-16",
      "rating": 5
    }
    ```
    
- **Resposta**: Filme criado
    
    ```json
    {
      "_id": "60d5ec49fc13ae38d4000000",
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseDate": "2010-07-16T00:00:00.000Z",
      "rating": 5
    }
    ```
    

### Listar Filmes

- **URL**: `/movies`
- **Método**: `GET`
- **Resposta**: Array de filmes
    
    ```json
    [
      {
        "_id": "60d5ec49fc13ae38d4000000",
        "title": "Inception",
        "director": "Christopher Nolan",
        "releaseDate": "2010-07-16T00:00:00.000Z",
        "rating": 5
      }
    ]
    ```
    

### Atualizar um Filme

- **URL**: `/movies/:id`
- **Método**: `PUT`
- **Body**: JSON
    
    ```json
    {
      "title": "Inception Updated"
    }
    ```
    
- **Resposta**: Filme atualizado
    
    ```json
    {
      "_id": "60d5ec49fc13ae38d4000000",
      "title": "Inception Updated",
      "director": "Christopher Nolan",
      "releaseDate": "2010-07-16T00:00:00.000Z",
      "rating": 5
    }
    ```
    

### Deletar um Filme

- **URL**: `/movies/:id`
- **Método**: `DELETE`
- **Resposta**: Mensagem de confirmação
    
    ```json
    {
      "message": "Filme deletado com sucesso"
    }
    ```
    

### Avaliar um Filme

- **URL**: `/movies/:id/rate`
- **Método**: `PATCH`
- **Body**: JSON
    
    ```json
    {
      "rating": 4
    }
    ```
    
- **Resposta**: Filme atualizado
