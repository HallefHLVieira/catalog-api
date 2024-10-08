import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeUserFollowRepositoryUseCase } from '@/domain/use-cases/factories/make-follow-service'
import { FollowerAlreadyExistsError } from '@/domain/use-cases/errors/followers-already-exists'

export async function followController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const followBodySchema = z.object({
    serviceId: z.string(),
  })

  const { serviceId } = followBodySchema.parse(request.body)

  try {
    const followUseCase = makeUserFollowRepositoryUseCase()

    await followUseCase.execute({
      serviceId,
      userId: request.user.sub,
    })
    return reply.status(201).send()
  } catch (err) {
    if (err instanceof FollowerAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
}
