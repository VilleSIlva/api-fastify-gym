import fastify from 'fastify'
import { routes } from './http/routes/index.ts'

const app = fastify()

app.register(routes)

export { app }
