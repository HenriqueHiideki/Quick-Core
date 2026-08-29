import { FastifyRequest, FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({ message: 'Token não fornecido.' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: number }
    request.userId = payload.userId
  } catch (error) {
    return reply.status(401).send({ message: 'Token inválido ou expirado.' })
  }
}