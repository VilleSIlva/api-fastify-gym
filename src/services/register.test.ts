import { it, describe, expect } from 'vitest'
import { RegisterService } from './register.service.ts'
import { InMemoryUsersRepository } from '@/repositories/inMemory/inMemoryUsersRepository.ts'
import { compare } from 'bcrypt'
import { UserEmailExist } from './errors/user-email-exist.ts'

describe('Testar funcionalidades de usuários', () => {
  it('deve ser possivel fazer o cadastro', async () => {
    const repository = new InMemoryUsersRepository()
    const registerService = new RegisterService(repository)

    const { user } = await registerService.execute({
      name: 'John doe',
      email: 'Johndoe@gmail.com',
      password: '123456789',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('deve ser possivel fazer hash da senha', async () => {
    const repository = new InMemoryUsersRepository()
    const registerService = new RegisterService(repository)

    const { user } = await registerService.execute({
      name: 'John doe',
      email: 'Johndoe@gmail.com',
      password: '123456789',
    })

    const confirmPasswordIsHash = await compare('123456789', user.password_hash)

    expect(confirmPasswordIsHash).toEqual(true)
  })

  it('deve se aparecer um erro ao se cadastrar com email existente', async () => {
    const repository = new InMemoryUsersRepository()
    const registerService = new RegisterService(repository)

    const email = 'johndoes@gmail.com'

    await registerService.execute({
      name: 'John doe',
      email,
      password: '123456789',
    })

    expect(async () => {
      await registerService.execute({
        name: 'John doe',
        email,
        password: '123456789',
      })
    }).rejects.toBeInstanceOf(UserEmailExist)
  })
})
