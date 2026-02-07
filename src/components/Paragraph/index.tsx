import { ComponentProps, ReactNode } from 'react'

type ParagraphProps = {
    children: ReactNode
} & ComponentProps<'p'>

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return <p {...props}>{children}</p>
}
