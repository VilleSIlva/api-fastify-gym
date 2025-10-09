import type { Prisma, User } from '@prisma/client'
import type { UserRepositoryInterface } from '../userRepositoryInterface.ts'

export class InMemoryUsersRepository implements UserRepositoryInterface {
  private items: User[] = []

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user:User = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email)
    if (!user) return null
    return user
  }

  async clear() {
    this.items = []
  }
}
