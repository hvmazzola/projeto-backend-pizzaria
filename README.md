# Projeto Back-end Pizzaria iTalents

Projeto desenvolvido no curso Full Stack iTalents do back-end para uma pizzaria.

<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" width="300" height="180">

*Código desenvolvido utilizando NodeJS*


## Pacotes "package.json" utilizados

* bcrypt
* cors
* dotenv
* express
* jsonwebtoken
* mongoose
* swagger-ui-express
* nodemon (como devDependencies)

## Instalação

1. Faça o download do código no presente repositório;
2. Abra a IDE de sua preferência e o terminal da mesma;
3. Execute no terminal as instalações dos pacotes necessários utilizando "npm i";
4. Execute, quando no diretório raiz do projeto, com "nodemon index.js.

## Endpoints

Abaixo serão listados os endpoins referentes a cada parte do banco de dados do projeto.

### User


| Endpoint                    | Tipo   | Descrição                                                |
| ----------------------------- | -------- | ------------------------------------------------------------ |
| /usuario/findById/:id       | GET    | Lista um usuário a partir do seu ID                       |
| /usuario/findAll            | GET    | Lista todos os usuários da API                            |
| /usuario/create             | POST   | Cria um usuário novo no sistem                            |
| /usuario/addAddress/:id     | POST   | Adiciona endereços a um usuário existente no sistema     |
| /usuario/addPedidoPizza/:id | POST   | Adiciona um pedido a um usuário existente no sistema      |
| /usuario/update/:id         | PUT    | Atualiza informações de um usuário existente no sistema |
| /usuario/remove/:id         | DELETE | Remove um usuário existente no sistema                    |
| /usuario/removeAddress/:id  | DELETE | Remove endereços a um usuário existente no sistema       |
