import { ComponentProps, ReactNode } from 'react'

type Level = 'h1' | 'h2' | 'h3'

type HeadingProps = {
    level: Level
    children: ReactNode
} & ComponentProps<Level>

export const Heading = ({ level, children, ...props }: HeadingProps) => {
    const Tag = level

    return <Tag {...props}>{children}</Tag>
}
