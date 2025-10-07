import { prisma } from '@/lib/prisma.ts'
import type { Prisma } from '@prisma/client'
import type { UserRepositoryInterface } from '../userRepositoryInterface.ts'

export class PrismaUsersRepository implements UserRepositoryInterface {
  async create(data:Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data })
    return user
  }

  async findByEmail(email:string) {
    const userWIthSameEmail = await prisma.user.findUnique({ where: { email } })

    if (userWIthSameEmail) {
      return userWIthSameEmail
    }

    return null
  }
}
