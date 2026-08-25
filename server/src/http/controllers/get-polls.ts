import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function getPolls(request: FastifyRequest, reply: FastifyReply) {
  const polls = await prisma.polls.findMany({
    orderBy: {
      created_in: 'desc',
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

  return reply.status(200).send({
    polls: polls.map((poll) => ({
      id: poll.id,
      question: poll.question,
      created_in: poll.created_in,
      user_id: poll.user_id,
      options: poll.options.map((option) => ({
        id: option.id,
        option_text: option.option_text,
        votes: option._count.votes,
      })),
    })),
  })
}