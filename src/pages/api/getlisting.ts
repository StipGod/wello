import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const query = await db.collection("listings").findOne({ _id: req.body.listingId });
            res.status(200).json({message:"Success!", listing:query??{}})
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}