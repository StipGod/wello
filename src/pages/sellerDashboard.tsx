
import { Heading, Box, Button, Link, Stack, Card, Text } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { BarExample } from '@/components/charts/bar'
// components
import { PageLayout } from '../components/pageLayout'

import clientPromise from '../../lib/mongodb'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
    try {
        // const client = await clientPromise;
        // const db = client.db("wello");
        // // const listings = db.collection("listings")

        // const state = {};
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
    const [datanalytics, setDataAnalytics] = useState([]);
    const [fetching, setFetching] = useState(false)
    const { data: session } = useSession();
    let reactComp;
    useEffect(() => {
        try {
            // console.log(session);
            const getData = async () => {
                const resp = await axios.post("/api/getdata", {
                    "email": session?.user?.email,
                })
                console.log(resp);
                return resp;
            }
            const visual = async () => {
                const data = await getData();
                console.log(1);
                console.log(data);
                console.log(2);
                if (data.data.listings) {
                    setDataAnalytics(data.data.listings)//aqui no cambia analytics todavía
                    setFetching(true);
                    // console.log("as");
                    // console.log(datanalytics)
                    // console.log(data.data.listings)
                }
            }
            visual()

        }
        catch (e) {
            console.log(e);
        }
    }, [])
    // useEffect(() => {
    //     console.log("herae");
    //     if (datanalytics.length > 0) {
    //         setFetching(true)
    //     }
    //     console.log(datanalytics);

    // }, [datanalytics])
    return (
        <PageLayout>
            <Stack>
                <Heading>Seller Dashboard</Heading>
                {fetching && <BarExample datanalytics />}
                <Stack direction={"column"}>
                    <Card maxW='sm' p={3} >
                        <Stack direction={"row"}>
                            <Text>Listings: </Text>
                            {/* {bar} */}
                            <Text> {datanalytics.length} </Text>
                        </Stack>
                    </Card>
                    {datanalytics.map((el: any) => {
                        return (
                            <Stack direction={"row"}>
                                <Card maxW='sm' p={3}>
                                    <Stack direction={"row"}>
                                        <Text>_id: </Text>
                                        {/* {bar} */}
                                        <Text> {el._id} </Text>
                                    </Stack>
                                </Card>
                                <Card maxW='sm' p={3}>
                                    <Stack direction={"row"}>
                                        <Text>email: </Text>
                                        {/* {bar} */}
                                        <Text> {el.email} </Text>
                                    </Stack>
                                </Card>
                                <Card maxW='sm' p={3}>
                                    <Stack direction={"row"}>
                                        <Text>title: </Text>
                                        {/* {bar} */}
                                        <Text> {el.title} </Text>
                                    </Stack>
                                </Card>
                                <Card maxW='sm' p={3}>
                                    <Stack direction={"row"}>
                                        <Text>category: </Text>
                                        {/* {bar} */}
                                        <Text> {el.category} </Text>
                                    </Stack>
                                </Card>
                            </Stack>
                        )
                    })}
                </Stack>

            </Stack>
        </PageLayout>
    )
}