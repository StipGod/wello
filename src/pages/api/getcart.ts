import clientPromise from '../../../lib/mongodb'
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
import Listing from '../listing';
import axios from 'axios';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "GET") {
        const { email } = req.query;
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const user = await db.collection("users").findOne({ "email": email });
            const ids = user?.cart;
            const listings = [];
            
            for (let index = 0; index < ids.length; index++) {
                const listing = await db.collection("listings").findOne({ "_id" : (ids[index])});
                listings.push(listing);
            } 

            res.status(200).json({ statusCode: 200, message: "Succes", listings })

        } catch (err) {
            res.status(555).json({ statusCode: 500, message: err })
        }

    } else {
        res.status(405).end("Method not allowed")
    }
}
