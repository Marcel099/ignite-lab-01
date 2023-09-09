## Instalação

Se deseja executar o projeto na sua máquina, você precisa, antes de tudo, instalar as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/), [Docker](https://www.docker.com/). Caso queira alterar algum arquivo sugiro também que instale algum editor de texto, como o [Visual Studio Code](https://code.visualstudio.com/) e o [Sublime](https://www.sublimetext.com/3).

Após isso, clone o repositório na pasta de sua escolha utilizando o seguinte comando na linha de comando:

```bash
git clone https://github.com/marcel099/rs-ignite-lab-01-microservices
```

### Back-End

Primeiramente, você deverá construir os contêineres Docker necessários para o funcionamento dos 3 microsserviços através do seguinte comando:

```bash
docker-compose up
```

A seguir, navegue para as pastas `gateway`, `purchases` e `classroom` através da linha de comando e instale as dependências de cada microsserviço:

```bash
yarn
```

Depois, crie arquivos `purchases/.env` e `classroom/.env` com base no conteúdo presente nos arquivos <a href="./purchases/.env.example">`purchases/.env.example`</a> e <a href="./classroom/.env.example">`classroom/.env.example`</a>.

Agora, coloque os dois microsserviços das pastas <a href="./purchases">`purchases`</a> e <a href="./classroom">`classroom`</a> em execução:

```bash
yarn start:dev
```

Por fim, coloque o microsserviço da pasta `gateway` em execução:

```bash
yarn start:dev
```

### Front-End Web

Primeiramente, instale as dependências.

```bash
# Instale as dependências
yarn
```

Por fim, execute a aplicação do site.

```bash
yarn dev
```