import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBody = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBody.parse(request.body)

  const passwordHash = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: passwordHash,
        status: 'active',
        access_level: 'user',
        created_in: new Date(),
      },
    })

    return reply.status(201).send({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
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