import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function createPoll(request: FastifyRequest, reply: FastifyReply) {
  const createPollBody = z.object({
    question: z.string().min(3),
    options: z.array(z.string().min(1)).min(2),
  })

  const { question, options } = createPollBody.parse(request.body)
  const user_id = request.userId as number

  const poll = await prisma.polls.create({
    data: {
      question,
      user_id,
      options: {
        createMany: {
          data: options.map((option) => ({ option_text: option })),
        },
      },
    },
  })

  return reply.status(201).send({ pollId: poll.id })
}