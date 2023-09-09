<h4 align="center"> 
  Ignite Lab #01 - Microsserviços
</h4>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/last-commit/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/issues/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/issues-closed/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/license/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/stars/marcel099/rs-ignite-lab-01-microservices.svg?style=social">
</div>

## Índice

* [Índice](#índice)
* [Sobre](#sobre)
  * [Arquitetura](#arquitetura)
* [Licença](#licença)

## Sobre

O projeto foi desenvolvido na primeira edição do evento Ignite Lab proporcionado pela empresa [Rocketseat](https://rocketseat.com.br/) aos alunos do programa [Ignite](https://www.rocketseat.com.br/ignite).

O propósito do projeto foi desenvolver um sistema baseado na [arquitetura de microsserviços](https://cloud.google.com/learn/what-is-microservices-architecture?hl=pt-br).

### Arquitetura

O sistema, desenvolvido em TypeScript, é composto de um site em React e um Back-End GraphQL Node em arquitetura de microsserviços.

<div align="center">
  <img title="Tela para escolha do tipo de relatório de melhoria. São 3: Problema, Ideia e Outro." src="./assets/diagrams/microservices-architecture-diagram.png" width="70%" />
</div>

Cada um dos microsserviços se conecta ao seu próprio banco de dados.

<div align="center">
  <img title="Tela para escolha do tipo de relatório de melhoria. São 3: Problema, Ideia e Outro." src="./assets/diagrams/purchases-db-erm.png" width="45%" style="margin-right: 1rem" />
  <img title="Tela para escolha do tipo de relatório de melhoria. São 3: Problema, Ideia e Outro." src="./assets/diagrams/classrooms-db-erm.png" width="45%" />
</div>

## Licença

Este projeto está sob a licença MIT. Para maiores detalhes acesse o <a href="./LICENSE.md">arquivo de licença</a>.
