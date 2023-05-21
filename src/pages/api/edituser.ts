import { type } from 'os';
import clientPromise from '../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method == "PUT"){
        try {
            const client = await clientPromise;
            const db = client.db("wello");
            const query = await db.collection("users").findOne( { email: req.body.email } );
            if(query != null){
                    db.collection("users").updateOne({ email: req.body.email },{ $set: {
                    name: req.body.name,    
                    lastname: req.body.lastname,              
                    description: req.body.description,
                    image:  req.body.image,
                    cellphone: req.body.cellphone,
                    twitter: req.body.twitter,
                    youtube: req.body.youtube,
                    instagram: req.body.instagram
                }});
            }
            res.status(200).json({statusCode: 200, message: "Succes"})

        } catch (err) {
            res.status(500).json({statusCode: 500, message: err})
        }

    }else {
        res.status(405).end("Method not allowed")
    }
}



    