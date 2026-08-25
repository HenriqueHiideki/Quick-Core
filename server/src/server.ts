import Fastify from 'fastify'
import { createPollRoutes } from './http/routes/create-poll'
import { getPollRoutes } from './http/routes/get-poll'
import { getPollsRoutes } from './http/routes/get-polls'
import { voteOnPollRoutes } from './http/routes/vote-on-poll'
import { deletePollRoutes } from './http/routes/delete-poll'

const app = Fastify()

app.register(createPollRoutes)
app.register(getPollRoutes)
app.register(getPollsRoutes)
app.register(voteOnPollRoutes)
app.register(deletePollRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('Servidor HTTP rodando em http://localhost:3333')
})