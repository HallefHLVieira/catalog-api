import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { followController } from './follow'
import { unFollowController } from './unfollow'

export async function followersRoutes(app: FastifyInstance) {
  app.post(
    '/v1/user/follow/services',
    { onRequest: [verifyJWT] },
    followController,
  )

  app.put(
    '/v1/user/unfollow/services',
    { onRequest: [verifyJWT] },
    unFollowController,
  )
}
