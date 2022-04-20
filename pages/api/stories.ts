import type { NextApiRequest, NextApiResponse } from 'next'
import { stories } from './stories.json'

type Story = {
    title: string
    id: string
    body: string
    stories: any
}

type Data = {
    stories: Story[]
}

export function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    //res.status(200).json({ name: 'John Doe' })

    res.status(200).json(stories)
}
