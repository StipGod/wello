// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from 'lib/mongodb';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "POST") {
        const data = {
            email: req.body.email,
            id: req.body.id
        }
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const user = await db.collection("users").findOne({ "email": data.email })
            //search for id and remove.
            res.status(201).json({ statusCode: 201, message: "Success" });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
