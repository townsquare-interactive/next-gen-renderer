// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { stories } from './stories.json'
import type { NextApiRequest, NextApiResponse } from 'next'

type Story = {
    title: string
    id: string
    body: string
    stories: any
}

type Data = {
    stories: Story[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    //res.status(200).json({ name: 'John Doe' })

    res.status(200).json(stories)
}
