export class UserEmailExist extends Error {
  constructor() {
    super('There is already a user with this email')
  }
}
