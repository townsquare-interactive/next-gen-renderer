// app/api/proxy/route.ts

import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: any, res: NextApiResponse) {
    const formRequest = await req.json()
    const { url } = formRequest.body;
    console.log('body test:',formRequest .body)

    if (!url) {
        console.log('no url param')
        return res.status(400).send('Missing URL parameter');
    }

    try {
        const response = await fetch(url as string);
        const scriptContent = await response.text();
        res.status(200).send(scriptContent);
    } catch (error) {
        console.error('Error fetching script:', error);
        res.status(500).send('Error fetching script');
    }
}

export async function POST(req:any, res: NextApiResponse) {
    try {
        const request = await req.json()
        const { url } = request;
        console.log('body test:', request)

        if (!url) {
            throw new Error('URL parameter is missing');
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch script: ' + response.statusText);
        }

        const scriptContent = await response.text();
        //res.setHeader('Content-Type', 'text/plain'); // Set content type if necessary
        //res.statusCode = 200; // Set status code
        //res.end(scriptContent); // Send response
        return NextResponse.json(scriptContent)
    } catch (error) {
        console.error('Error fetching script:', error);
        res.statusCode = 500; // Set status code
        return NextResponse.json(error)
    }
}