import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const query = req.body.query; 
        console.log(query)
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const dbQuery = db.collection("listings").find();
            const listings = await dbQuery.toArray();

            res.status(200).json({ statusCode: 200, message: "Succes",listings : listings })

        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}
