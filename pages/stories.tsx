// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import Head from 'next/head'
import Article from '../components/List'
import storyData from './api/stories.json'

//const stories = storyData.stories
//console.log('story', storyData.stories)

type Story = {
    title: string
    id: string
    body: string
    story: any
}

type Data = {
    stories: Story[]
}

const Stories = (storyData: any) => {
    //Slicing only the first five posts to place

    //var storyArr = storyData.stories.slice(0, 3)

    return (
        <div>
            <Head>
                <title>Story Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            <div>
                <h1>Story Page</h1>
            </div>

            {/*             {storyData.story.map((story: Story) => (
                <Article title={story.title} body={story.body} border={true} key={story.id} />
            ))} */}
        </div>
    )
}

export default Stories
