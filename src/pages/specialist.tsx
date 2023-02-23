
import { Heading, Box, Button, Link, Input } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'
import axios from 'axios'


export async function getServerSideProps() {
    try {
        // const client = await clientPromise;
        // const db = client.db("wello");
        // const resList = await db.collection("users").insertOne({
        //   email:"tomas@gmail.com",
        //   username:"Tomas",
        // });

        return {
            props: { isConnected: true },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}


export default function Specialist({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data: session } = useSession();
    const [image, setImage] = useState(null);
    const handleUpload = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }
    const uploadImg = async (event: any) => {
        try {
            await axios.post("/api/uploadimage", { image, "username": session?.user?.name });
        } catch (e: any) {
            console.log(e);
        }
    }
    return (
        <PageLayout>
            <Heading>Hello Specialist</Heading>
            <Input type={"file"} onChange={handleUpload} />
            <Button onClick={uploadImg}>Upload</Button>
        </PageLayout>
    )

}