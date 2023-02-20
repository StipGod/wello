import {Heading,Box, Button} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'


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

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <PageLayout>
        </PageLayout>
      </>
    )
  }else {
    return (
      <>
        <PageLayout>
        </PageLayout>
      </>
    )
  }
  
}
