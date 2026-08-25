import Fastify from 'fastify'
import cors from '@fastify/cors'
import websocket from '@fastify/websocket'

import { createPollRoutes } from './http/routes/create-poll'
import { getPollRoutes } from './http/routes/get-poll'
import { getPollsRoutes } from './http/routes/get-polls'
import { voteOnPollRoutes } from './http/routes/vote-on-poll'
import { deletePollRoutes } from './http/routes/delete-poll'
import { pollResults } from './http/websocket/poll-results'

const app = Fastify()

app.register(cors, {
  origin: true,
})

app.register(websocket)

app.register(createPollRoutes)
app.register(getPollRoutes)
app.register(getPollsRoutes)
app.register(voteOnPollRoutes)
app.register(deletePollRoutes)
app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log('Servidor HTTP rodando em http://localhost:3333')
})