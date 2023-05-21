import { useSession} from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { Box } from '@chakra-ui/react'
import { useRef, useState } from "react"


// components
import { PageLayout } from '../components/pageLayout'
import { DataInput } from "../components/dataInput"
import { Body } from "../components/body"

import clientPromise from '../../lib/mongodb'
import axios from "axios"

interface Listing {
  description: string;
  email: string;
  maxPrice: string;
  minPrice: string;
  _id: string;
  title : string;
}

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

  const queryRef = useRef<string>("");

  const [listings,setListings] = useState<Listing[]>([]);

  const handleSearch = async () => {
      if(queryRef.current.value){
        const resListing  =  await makeSearch(queryRef.current.value);
        setListings(resListing?.data.listings);
      }
  }

  const makeSearch = async (query:string) => {
    try {
      return await axios.post('/api/getListings',{
        query : query 
      });
      console.log('Post created successfully:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <PageLayout>
      <Box>
        <DataInput
          queryRef={queryRef}
          handleSearch={handleSearch}
        />
        <Body
        listings={listings}
        />
      </Box>
      </PageLayout>
    </>
  )
}
