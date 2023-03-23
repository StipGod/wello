// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from 'lib/mongodb';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method == "POST") {
        const data = {
            email : req.body.email,
            maxPrice : req.body.maxPrice,
            minPrice : req.body.minPrice,
            description : req.body.description
        }
        try {
            const client = await clientPromise;
            const db = client.db("wello");

            db.collection("listings").insertOne(data);

            res.status(201).json({ statusCode: 201, message: "" });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
