// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const client = await clientPromise;
    const db = client.db("wello")
    const user = await db.collection("users").findOne({ "username": req.body.username })

    console.log(req.body.email)

    res.status(200).json({ status: 'working' })
}
