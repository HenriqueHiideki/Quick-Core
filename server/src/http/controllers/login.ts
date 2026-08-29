import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../lib/prisma'

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginBody = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = loginBody.parse(request.body)

  const user = await prisma.users.findUnique({
    where: { email },
  })

  if (!user || !user.password) {
    return reply.status(400).send({ message: 'E-mail ou senha inválidos.' })
  }

  const passwordMatches = await bcrypt.compare(password, user.password)

  if (!passwordMatches) {
    return reply.status(400).send({ message: 'E-mail ou senha inválidos.' })
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' }
  )

  return reply.status(200).send({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  })
}