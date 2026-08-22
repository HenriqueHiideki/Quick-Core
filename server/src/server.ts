import Fastify from 'fastify'
import { createPollRoutes } from './http/routes/create-poll'
import { getPollRoutes } from './http/routes/get-poll'

const app = Fastify()

app.register(createPollRoutes)
app.register(getPollRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('Servidor HTTP rodando em http://localhost:3333')
})