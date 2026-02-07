'use client'

import { calculateRunes } from '@/actions/calculateRunes'
import { Input } from '@/components/Input'
import { useActionState } from 'react'
import styles from './form.module.scss'

export const Form = () => {
    const [{ runes, level, errors }, action] = useActionState(
        calculateRunes,
        {},
    )

    return (
        <form action={action} className={styles.form}>
            <Input
                label='Level atual'
                name='current'
                error={errors?.current}
                defaultValue={level?.current}
            />

            <Input
                label='Level desejado'
                name='target'
                error={errors?.target}
                defaultValue={level?.target}
            />

            <button type='submit'>Calcular</button>

            <p className={styles.result}>
                Você precisa de <span>{runes || '_'}</span> runas para atingir o
                level <span>{level?.target || '_'}</span>.
            </p>
        </form>
    )
}
