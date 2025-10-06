import "dotenv/config"
import z from "zod"

const schemaEnv = z.object({
    NODE_ENV: z.enum(['test','development','production']).default('production'),
    PORT:z.coerce.number().default(3333)
})

const _env = schemaEnv.safeParse(process.env)

if(_env.success === false){
    console.log('Incorrect inviroment', _env.error.format())
    throw new Error('Incorrect inviroment');
}

export const env = _env.data