
import { Heading, Box, Button, Link, Stack, Card, Text } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'

// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'

export async function getServerSideProps() {
    try {

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

export default function SellerDashboard({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const state = { "listings": [] }
    return (
        <PageLayout>
            <Stack>
                <Heading>Seller Dashboard</Heading>
                <Card maxW='sm' p={3}>
                    <Stack direction={"row"}>
                        <Text>Listings: </Text>
                        <Text> {state.listings.length} </Text>
                    </Stack>
                </Card>
            </Stack>
        </PageLayout>
    )
}