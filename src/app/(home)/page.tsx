import { Form } from './Form'
import styles from './page.module.scss'
import { Tutorial } from './Tutorial/index'

export default function Home() {
    return (
        <div className={styles.page}>
            <Form />

            <Tutorial />
        </div>
    )
}
