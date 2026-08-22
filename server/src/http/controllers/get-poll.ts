import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function getPoll(request: FastifyRequest, reply: FastifyReply) {
  const getPollParams = z.object({
    pollId: z.coerce.number(),
  })

  const { pollId } = getPollParams.parse(request.params)

  const poll = await prisma.polls.findUnique({
    where: {
      id: pollId,
    },
    include: {
      options: {
        select: {
          id: true,
          option_text: true,
          _count: {
            select: {
              votes: true,
            },
          },
        },
      },
    },
  })

  if (!poll) {
    return reply.status(404).send({ message: 'Enquete não encontrada.' })
  }

  return reply.status(200).send({
    poll: {
      id: poll.id,
      question: poll.question,
      created_in: poll.created_in,
      user_id: poll.user_id,
      options: poll.options.map((option) => ({
        id: option.id,
        option_text: option.option_text,
        votes: option._count.votes,
      })),
    },
  })
}