# Gerador de QR Code e Senhas

Este projeto é um gerador de QR Code e senhas para sites, utilizando Node.js. Ele permite que você gere QR Codes a partir de links de sites e senhas seguras com base em um arquivo `.env`.

## Funcionalidades

- Geração de QR Code a partir de links de sites
- Geração de senhas seguras com base em um arquivo `.env`
- Utilização de Node.js para executar as operações

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- `.env`: Arquivo de variáveis de ambiente para gerar senhas
- `src`: Pasta principal do projeto
  - `index.js`: Arquivo principal do projeto
  - `prompts-schema`: Pasta com esquemas de prompts para gerar QR Code e senhas
    - `prompt-schema-main.js`: Esquema de prompt principal
    - `prompt-schema-qrcode.js`: Esquema de prompt para gerar QR Code
  - `services`: Pasta com serviços para gerar QR Code e senhas
    - `password`: Pasta com serviços para gerar senhas
      - `create.js`: Serviço para criar senhas
      - `handle.js`: Serviço para lidar com senhas
      - `utils`: Pasta com utilitários para gerar senhas
        - `permitted-characters.js`: Utilitário para caracteres permitidos em senhas
    - `qr-code`: Pasta com serviços para gerar QR Code
      - `create.js`: Serviço para criar QR Code
      - `handle.js`: Serviço para lidar com QR Code

## Requisitos

- Node.js instalado
- Arquivo `.env` com variáveis de ambiente para gerar senhas

## Como Usar

1.  Clone o repositório

2.  Instale as dependências com `npm install`

3.  Crie um arquivo `.env` com as variáveis de ambiente abaixo para gerar senhas.

Para os casos abaixo, digite sem aspas simples ou duplas "true" ou "false"

- `UPPERCASE_LETTERS=`

- `LOWERCASE_LETTERS=`

- `NUMBERS=`

- `SPECIAL_CHARACTERS=`

Para o caso abaixo, digite, em algarismo a quantidade de caracteres que você deseja que tenha a sua senha

- `PASSWORD_LENGTH=`

4.  Execute o projeto com `npm run start`

5.  Digita no terminal se você deseja gerar um QR Code ou uma senha.

6.  Aproveite para compartilhar isso e usar a vontade
