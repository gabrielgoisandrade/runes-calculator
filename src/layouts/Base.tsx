import { ReactNode } from 'react'
import styles from './base.module.scss'

type BaseLayoutProps = {
    children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
            <h1 className={styles.base__title}>Calculadora de Runas</h1>

            <main className={styles.base__container}>{children}</main>
        </>
    )
}
