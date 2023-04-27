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
            // console.log(1);
            console.log(req.body.email)
            if (req.body.email) {
                console.log(req.body.email)
                const query = await db.collection("users").findOne({ email: { $eq: req.body.email } });
                // console.log(query);
                let listings = []
                for (let i of query?.listings) {
                    const listing = await db.collection("listings").findOne({ _id: i });
                    // console.log("lis---->");
                    // console.log(listing);
                    if (listing)
                        listings.push(listing);
                }
                // console.log(arr);


                res.status(200).json({ statusCode: 200, message: "Succes", listings })
            } else
                res.status(200).json({ statusCode: 200, message: "Succes" })

        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}



