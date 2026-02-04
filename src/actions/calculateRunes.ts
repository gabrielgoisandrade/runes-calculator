import z from 'zod'

type RunesState = {
    runes?: string
    level?: {
        current: string | number
        target: string | number
    }
    errors?: {
        current?: string[]
        target?: string[]
    }
}

const CalculatorSchema = z.object({
    currentLevel: z.coerce
        .number('Valor inválido!')
        .min(1, 'Valor não permitido.')
        .max(713, 'Valor máximo atingido.'),
    targetLevel: z.coerce
        .number('Valor inválido!')
        .min(1, 'Valor não permitido.')
        .max(713, 'Valor máximo atingido.'),
})

function calculateRune(level: number) {
    let x = (level + 81 - 92) * 0.02

    if (x < 0) x = 0

    const result = (x + 0.1) * Math.pow(level + 81, 2) + 1

    return Math.floor(result)
}

export const calculateRunes = (_: RunesState, form: FormData): RunesState => {
    const currentLevel = form.get('current')?.toString() ?? ''
    const targetLevel = form.get('target')?.toString() ?? ''

    const { data, success, error } = CalculatorSchema.safeParse({
        currentLevel,
        targetLevel,
    })

    if (!success) {
        const errors = z.treeifyError(error)

        return {
            level: {
                current: currentLevel,
                target: targetLevel,
            },
            errors: {
                current: errors?.properties?.currentLevel?.errors,
                target: errors?.properties?.targetLevel?.errors,
            },
        }
    }

    let result: number = 0

    for (let i = data.currentLevel; i < data.targetLevel; i++) {
        result += calculateRune(i)
    }

    return {
        level: {
            current: data!.currentLevel,
            target: data!.targetLevel,
        },
        runes: Intl.NumberFormat('pt-BR').format(result),
    }
}
