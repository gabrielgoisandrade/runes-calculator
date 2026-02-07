import { Heading } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { Section } from '@/components/Section'
import styles from './tutorial.module.scss'

export const Tutorial = () => {
    return (
        <Section>
            <Heading className={styles.tutorial__title} level='h2'>
                Tutorial
            </Heading>

            <Section>
                <Heading className={styles.tutorial__title} level='h3'>
                    O que são runas em Elden Ring?
                </Heading>

                <Paragraph className={styles.tutorial__description}>
                    As Runas em Elden Ring são o principal recurso do jogo,
                    funcionando simultaneamente como moeda e pontos de
                    experiência (EXP). Você as ganha ao derrotar inimigos e as
                    usa para subir de nível e comprar itens/comércio com
                    mercadores nas Terras Intermédias.
                </Paragraph>
            </Section>

            <Section>
                <Heading className={styles.tutorial__title} level='h3'>
                    Por que utilizar a calculadora?
                </Heading>

                <Paragraph className={styles.tutorial__description}>
                    Cada vez que você sobe de nível aumentando algum atributo
                    com a Melina ou ao descansar em uma Graça, o custo de runas
                    para o próximo nível aumenta, e o jogo já mostra quantas
                    runas são necessárias para isso. Mas e se você quiser saber
                    quantas runas vai precisar para subir 5, 10 ou 30 níveis de
                    uma vez? É aí que a Calculadora de Runas entra em ação! Ela
                    permite ver exatamente a quantidade total de runas exigida
                    para atingir o nível desejado, ajudando você a planejar sua
                    progressão sem surpresas no meio do caminho.
                </Paragraph>
            </Section>

            <Section>
                <Heading className={styles.tutorial__title} level='h3'>
                    Como utilizar?
                </Heading>

                <Paragraph className={styles.tutorial__description}>
                    A utilização é bem simples:
                    <ol>
                        <li>Informe seu nível atual</li>
                        <li>Informe o nível que deseja atingir</li>
                        <li>Clique em &quot;calcular&quot;</li>
                    </ol>
                    Logo em seguida você receberá o total de runas necessário
                    para atingir o nível desejado.
                </Paragraph>
            </Section>
        </Section>
    )
}
