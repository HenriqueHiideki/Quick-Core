import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function getMe(request: FastifyRequest, reply: FastifyReply) {
  const user_id = request.userId as number

  const user = await prisma.users.findUnique({
    where: { id: user_id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  if (!user) {
    return reply.status(404).send({ message: 'Usuário não encontrado.' })
  }

  return reply.status(200).send({ user })
}