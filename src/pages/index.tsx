import {Heading,Box, Button} from '@chakra-ui/react'
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

import clientPromise from '../../lib/mongodb'


export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("wello");
    const resList = await db.collection("users").insertOne({
      email:"tomas@gmail.com",
      username:"Tomas",
    });

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
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Box>
          <Heading>
            Hola mundo {isConnected}
          </Heading>
        </Box>
      </>
    )
  }else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
  
}
