// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from 'lib/mongodb';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "PUT") {
        const data = {
            email: req.body.email,
            id: req.body.id
        }
        console.log(data)
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const user = await db.collection("users").findOne({ "email": data.email })
            //search for id and remove.
            const cart = await user?.cart
            const index = cart.indexOf(data.id)
            const removed = cart.splice(index, 1);
            db.collection("users").updateOne({ email: req.body.email }, {
                $set: {
                    cart: cart
                }
            });
            console.log("New cart:")
            console.log(cart)
            res.status(201).json({ statusCode: 201, message: "Success", cart});
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
