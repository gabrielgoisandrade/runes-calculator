import { ComponentProps } from 'react'
import styles from './input.module.scss'

type InputProps = {
    label: string
    error?: string[]
} & ComponentProps<'input'>

export const Input = ({ label, error, ...props }: InputProps) => {
    return (
        <div>
            <label className={styles.input__container}>
                <span className={styles.input__label}>{label}</span>
                <input {...props} />
            </label>

            <p>{error}</p>
        </div>
    )
}
