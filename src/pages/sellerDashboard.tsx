
import { Heading, Box, Button, Link,Stack,Text,Card} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'
import { ObjectId } from 'mongodb';
import axios from 'axios'
// components
import { PageLayout } from '../components/pageLayout'

import ChartComponent from '@/components/chart';

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

const dat = [
    {
        _id: "644a0bf1d748816e84e98f4d",
        title: 'Rhinoplastia',
        category: 'Plastic Surgery',
        email: 'juancamilo.salazar2002@gmail.com',
        maxPrice: '20000',
        minPrice: '29991',
        description: 'Nose surgery',
        counter:0,
},{
    _id: "646552ba9de54bfa9963841f",
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '134',
    minPrice: '1234',
    description: 'fdsa',
    title: 'falkdjds',
    category: 'fasfd',
    counter:0,
  },{
    _id: "64654d4ba6b0f3114dda7c7f",
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '1341',
    minPrice: '12341',
    description: 'xzcdafsf',
    counter:0,
  }, {
    _id: "64654cfca6b0f3114dda7c7e",
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '2314321',
    minPrice: '132412',
    description: 'dfasdf',
    counter:0,
  },{
    _id: "644a0cd1d748816e84e98f51",
    title: 'Blood tranfusion',
    category: 'Cardiology',
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '40000',
    minPrice: '30000',
    description: 'fdsa',
    counter:0,
  },{
    _id: "644a0c97d748816e84e98f50",
    title: 'Teeth transformation',
    category: 'Odontology',
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '15000',
    minPrice: '18000',
    description: 'fdsa',
    counter:3,
  },{
    _id: "644a0c3cd748816e84e98f4f",
    title: 'Brain Surgery',
    category: 'NeuroSurgeon',
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '30000',
    minPrice: '40000',
    description: 'Long Surgery',
    counter:0,
  },{
    _id: "644a0c0cd748816e84e98f4e",
    title: 'Heart Transplant',
    category: 'Cardiology',
    email: 'juancamilo.salazar2002@gmail.com',
    maxPrice: '60000',
    minPrice: '80000',
    description: 'Delicate',
    counter:4,
  },
]
export default function SellerDashboard({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [analytics, setAnalytics] = useState<any>([]);
    const [value, setValue] = useState(false);
    useEffect(()=>{
        // const fetchData = async()=>{
        //     const data = await axios.post("/api/getdata",
        //     {
        //         "email" : "juancamilo.salazar2002@gmail.com",
        //     })

        //     if(data.data?.listings){
        //         setAnalytics(data.data?.listings)//se demora en renderizar
        //         setValue(true)

        //     }
        // }
        // fetchData()
        setAnalytics(dat)
    },[])
    return (
        <PageLayout>
            <Stack p = {4}>
                <Heading>Seller Dashboard</Heading>
                {value && <Text>{analytics.length}  listings</Text>}
                {value && (analytics.map((el :any,index : number)=>{
                    return(<Text key={index}>{el?.title}</Text>)
                }))}
                {analytics.length && <ChartComponent analytics= {analytics} />}
                
            </Stack>
        </PageLayout>
    )
}