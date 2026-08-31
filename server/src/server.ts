import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import websocket from '@fastify/websocket'

import { createPollRoutes } from './http/routes/create-poll'
import { getPollRoutes } from './http/routes/get-poll'
import { getPollsRoutes } from './http/routes/get-polls'
import { voteOnPollRoutes } from './http/routes/vote-on-poll'
import { deletePollRoutes } from './http/routes/delete-poll'
import { pollResults } from './http/websocket/poll-results'
import { registerRoutes } from './http/routes/register'
import { loginRoutes } from './http/routes/login'
import { usersRoutes } from './http/routes/users'

const app = Fastify()

app.register(cors, {
  origin: ['https://quickcore.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
})

app.register(websocket)

app.register(createPollRoutes)
app.register(getPollRoutes)
app.register(getPollsRoutes)
app.register(voteOnPollRoutes)
app.register(deletePollRoutes)
app.register(pollResults)
app.register(registerRoutes)
app.register(loginRoutes)
app.register(usersRoutes)

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333

app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`)
})