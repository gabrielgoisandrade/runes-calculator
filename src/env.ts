import z from 'zod'

const envSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.url(),
})

const { success, error, data } = envSchema.safeParse(process.env)

if (!success) {
    const msgError = 'Invalid environment variables.'

    console.error(msgError, z.treeifyError(error).errors)

    throw new Error(msgError)
}

export const env = data
