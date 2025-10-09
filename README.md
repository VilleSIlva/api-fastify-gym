# Gym API

[![Node.js](https://img.shields.io/badge/node.js-18.x-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-20.x-blue)](https://www.docker.com/)
[![Vitest](https://img.shields.io/badge/Vitest-1.x-brightgreen)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Uma API para gerenciamento de academias, check-ins e usuários, construída com **Fastify, Prisma ORM, TypeScript e Node.js**, seguindo os princípios **SOLID** e boas práticas de arquitetura, incluindo **services, controllers, factories e in-memory repositories**.  

A API permite que usuários:  

- Se cadastrem e façam login via **JWT**  
- Procurem academias próximas de acordo com sua localização  
- Realizem check-ins em academias que estejam proxíma e acompanhem a contagem de check-ins  
- Cadastrem novas academias (admin)  

---

## 🛠 Tecnologias utilizadas

- **Node.js & TypeScript**  
- **Fastify** – framework web rápido e leve  
- **Prisma ORM** – para gerenciamento do banco de dados  
- **Bcrypt** – para hash de senhas  
- **JWT** – autenticação segura  
- **Docker** – containerização da aplicação  
- **Vitest** – testes unitários  
- **Arquitetura e patterns**: Service, Controller, Factory, In-memory Repositories  
 

---

## 📦 Funcionalidades

- **Autenticação** de usuários via JWT  
- **Cadastro** de usuários  
- **Cadastro** de academias  
- **Busca de academias** por proximidade  
- **Check-in** em academias com validação de localização  
- **Contagem de check-ins** por usuário  



