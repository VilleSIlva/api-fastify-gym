import type { FastifyReply, FastifyRequest } from 'fastify'
import { RegisterService } from '@/services/register.service.ts'
import z from 'zod'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.ts'
import { UserEmailExist } from '@/services/errors/user-email-exist.ts'

export async function register(req:FastifyRequest, res:FastifyReply) {
  const schemaBodyRegister = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = schemaBodyRegister.parse(req.body)

  try {
    const prismaUserRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(prismaUserRepository)
    registerService.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserEmailExist) {
      return res.status(409).send({ message: error.message })
    }

    throw error
  }

  return res.status(201).send()
}
