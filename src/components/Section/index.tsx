import { ReactNode } from 'react'
import styles from './section.module.scss'

type SectionProps = {
    children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
    return <section className={styles.section}>{children}</section>
}
