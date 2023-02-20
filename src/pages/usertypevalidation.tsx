import { Heading, Box, Button, Link } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'

import axios from 'axios'


export default function Usertypevalidation() {
    const { data: session } = useSession();
    const handleClick = async (type: boolean) => {
        try {
            const res = await axios.post("/api/createuser", {
                "email": session?.user?.email,
                "username": session?.user?.name,
                "type": type ? "specialist" : "patient"
            })
            console.log(res);
        } catch (e: any) {
            console.log(e);
        }
    }
    return (
        <PageLayout>
            <Box>
                <Button onClick={() => { handleClick(true) }}><Link href='/specialist'>Specialist</Link></Button>
                <Button onClick={() => { handleClick(false) }}><Link href='/patient'>Patient</Link></Button>
            </Box>
        </PageLayout >
    )

}
