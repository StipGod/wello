



import { useSession } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'

// components
import { PageLayout } from '../../components/pageLayout'
import ListingCard from "../../components/listing"
import ReviewCard from "../../components/reviews/reviewcard"
import MakeReviewCard from "../../components/reviews/makereviewcard"


import { useRouter } from 'next/router'
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
    const router = useRouter()
    const id = router.query.sellerId as string
    console.log(id);
    const obj =
    {
        imageUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
        title: "Rhinoplastic Procedure",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore",
    }
    const listOfReviews = [
        { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore" },
        { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore" }

    ]
    return (
        <>
            <PageLayout>
                <Stack>
                    <ListingCard profile={obj} />
                    <Stack spacing={10}>
                        <ReviewCard reviews={listOfReviews} />
                        {/* <MakeReviewCard /> */}

                    </Stack>
                    {/* <Heading>s</Heading> */}
                </Stack>
            </PageLayout>
        </>
    )
}
