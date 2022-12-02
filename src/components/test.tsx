import { useState } from 'react'
import type { FC } from 'react'

interface testProps {
    name: string
}

const Test: FC<testProps> = ({ name }) => {
    const [bag] = useState<string>('')

    return (
        <div>
            {name}, {bag}
        </div>
    )
}

export default Test
