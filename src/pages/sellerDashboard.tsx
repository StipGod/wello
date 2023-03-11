
import { Heading, Box, Button, Link } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

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
    return (
        <PageLayout>
            <Heading>Seller Dashboard</Heading>
        </PageLayout>
    )
}