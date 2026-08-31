# QuickCore

Sistema web de **enquetes e votação ao vivo**, onde os resultados são atualizados em tempo real via WebSocket — sem precisar recarregar a página.

> Projeto desenvolvido para fins de portfólio, com foco em comunicação em tempo real entre cliente e servidor.

## 🚀 Funcionalidades

- Criação de enquetes com múltiplas opções de resposta
- Votação em enquetes ativas
- Atualização dos resultados em tempo real, assim que um novo voto é registrado
- Autenticação de usuários com JWT
- Validação de dados de entrada com Zod

## 🛠️ Tecnologias utilizadas

### Frontend
- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/) — requisições HTTP
- **WebSocket API nativa do navegador** — comunicação em tempo real com o backend

### Backend
- [Fastify](https://fastify.dev/) — framework do servidor
- [@fastify/websocket](https://github.com/fastify/fastify-websocket) — suporte a WebSocket no Fastify
- [Prisma ORM](https://www.prisma.io/) + [@prisma/adapter-pg](https://www.prisma.io/) — acesso ao banco de dados
- [PostgreSQL](https://www.postgresql.org/) (via `pg`)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken) — autenticação
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — hash de senhas
- [Zod](https://zod.dev/) — validação de schemas
- [TypeScript](https://www.typescriptlang.org/)

## 🧠 Como funciona o tempo real

O backend expõe uma conexão WebSocket (via `@fastify/websocket`) que os clientes conectados assinam ao acessar uma enquete. Quando um voto é registrado:

1. O voto é validado e persistido no banco de dados (PostgreSQL, via Prisma).
2. O servidor recalcula os resultados da enquete.
3. O novo resultado é transmitido via WebSocket para todos os clientes conectados àquela enquete.
4. O frontend recebe a atualização e re-renderiza os resultados automaticamente, sem reload da página.

## 📦 Como rodar o projeto localmente

### Pré-requisitos
- Node.js 18+
- PostgreSQL rodando localmente ou em um serviço na nuvem

### 1. Clone o repositório
```bash
git clone https://github.com/HenriqueHiideki/Quick-Core.git
cd Quick-Core
```

### 2. Configure o backend
```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta do backend com as variáveis necessárias:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/quickcore"
JWT_SECRET="sua_chave_secreta"
```

Rode as migrations do Prisma:
```bash
npx prisma migrate dev
```

Inicie o servidor em modo desenvolvimento:
```bash
npm run dev
```

### 3. Configure o frontend
Em outro terminal:
```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173` (padrão do Vite) e o backend na porta configurada no `.env`.


Desenvolvido por [Henrique Hideki](https://github.com/HenriqueHiideki).
