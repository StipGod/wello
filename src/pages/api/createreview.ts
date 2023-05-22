import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const query = await db.collection("reviews").insertOne({...req.body});
            res.status(200).json({ statusCode: 200, message: "Succes" })

        } catch (err) {

            console.log(err)
            res.status(500).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}



