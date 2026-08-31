import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'

export async function updateMe(request: FastifyRequest, reply: FastifyReply) {
  const updateMeBody = z.object({
    name: z.string().min(2),
    email: z.string().email(),
  })

  const { name, email } = updateMeBody.parse(request.body)
  const user_id = request.userId as number

  try {
    const user = await prisma.users.update({
      where: { id: user_id },
      data: { name, email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return reply.status(200).send({ user })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return reply.status(400).send({ message: 'Este e-mail já está em uso.' })
    }
    throw error
  }
}