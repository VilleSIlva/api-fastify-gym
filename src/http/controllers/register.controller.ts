import { prisma } from '@/lib/prisma.ts'
import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function register(req:FastifyRequest, res:FastifyReply) {
  const schemaBodyRegister = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = schemaBodyRegister.parse(req.body)

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password,
    },
  })

  return res.status(201).send()
}
