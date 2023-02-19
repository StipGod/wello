import {Heading,Box, Button} from '@chakra-ui/react'
import { useState } from 'react';

import clientPromise from '../../lib/mongodb'

import { InferGetServerSidePropsType } from 'next'

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


  return (
    <Box>
      <Heading>
        Hola mundo {isConnected}
      </Heading>
    </Box>
  );
}
