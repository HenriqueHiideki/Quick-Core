import Fastify from 'fastify'

const app = Fastify()

app.get('/ping', async () => {
  return { message: 'pong' }
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP Server running on http://localhost:3333')
})