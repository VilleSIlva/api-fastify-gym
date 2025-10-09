import { ZodError } from 'zod'
import { app } from './app.ts'
import { env } from './env/index.ts'

app.setErrorHandler((error, req, res) => {
  if (error instanceof ZodError) {
    return res.status(400).send({ message: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  }

  return res.status(500).send({ message: error.message })
})

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Running na porta ${env.PORT}`)
})
