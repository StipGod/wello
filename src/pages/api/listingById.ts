import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const id = req.body.id; 
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            
            const listing = await db.collection("listings").findOne({ _id: new ObjectId(id) })

            res.status(200).json({ statusCode: 200, message: "Succes",listing : listing })

        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}
