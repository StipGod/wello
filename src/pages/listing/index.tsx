



import { useSession } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { Box } from '@chakra-ui/react'

// components
import { PageLayout } from '../../components/pageLayout'
import { DataInput } from "../../components/dataInput"
import { Footer } from "../../components/footer"
import { Body } from "../../components/body"

import clientPromise from '../../../lib/mongodb'

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

export default function Listing({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const { data: session } = useSession();

    return (
        <>
            <PageLayout>
            </PageLayout>
        </>
    )
}
