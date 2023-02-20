
import { Heading, Box, Button, Link } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'



export default function HandleLogin() {
    return (
        <>
            <PageLayout>
            </PageLayout>
        </>
    )

}