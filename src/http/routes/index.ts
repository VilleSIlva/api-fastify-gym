import type { FastifyInstance } from 'fastify'
import { register } from '../controllers/register.controller.ts'

export async function routes(app:FastifyInstance) {
  app.post('/users', register)
}
