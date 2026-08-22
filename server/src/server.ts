import Fastify from 'fastify'
import { createPollRoutes } from './http/routes/create-poll'
import { getPollRoutes } from './http/routes/get-poll'
import { voteOnPoll } from './http/controllers/vote-on-poll'
import { voteOnPollRoutes } from './http/routes/vote-on-poll'

const app = Fastify()

app.register(createPollRoutes)
app.register(getPollRoutes)
app.register(voteOnPollRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('Servidor HTTP rodando em http://localhost:3333')
})