



import { useSession } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'

// components
import { PageLayout } from '../../components/pageLayout'
import ListingCard from "../../components/listing"
import ReviewCard from "../../components/reviews/reviewcard"
import MakeReviewCard from "../../components/reviews/makereviewcard"
import { useEffect,useState } from "react"

import { useRouter } from 'next/router'
import axios from "axios"
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
    const[listingId, setListingId] = useState("1");
    const { data: session } = useSession();
    const router = useRouter()
    const id = router.query.sellerId as string

    const [profileData,setProfileData] = useState(
    {
        imageUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
        title: "Rhinoplastic Procedure",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore",
    })
    // const [listOfReviews,setListOfReviews] = useState([
    //     { 
    //         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore" ,
    //         image:"https://bit.ly/dan-abramov'",
    //         name:"Juan",
    //         timestamp: 1684642272684,
    //     },
    //     { 
    //         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore",
    //         image: "https://bit.ly/dan-abramov'",
    //         name: "tomas",
    //         timestamp: 1684642272684,
    //     }

    // ]);
    const [listOfReviews,setListOfReviews] = useState([]);
    const [fetchedReviews,setFetchedReviews] = useState(false)
    const [user,setUser]  = useState({})
    const [fetchedUser,setFetchedUser] = useState(false)
    const [listing,setListing] = useState({})
    const [fetchedListing, setFetchedListing] = useState(false);

    useEffect(()=>{
        (async()=>{//get reviews
            const response = await axios.post('/api/getreviews',{"listingId":id});
            setListOfReviews(response.data.reviews)
            setFetchedReviews(true)
            // console.log(response.data.reviews)
        })();
    },[])
    
    useEffect(()=>{
        (async()=>{
            if(session?.user?.email){
                const response = await axios.post('/api/getuser',{"email":session?.user?.email})
                if(response){
                    setUser(response.data.user)
                    setFetchedUser(true);
                    console.log(response.data.user);
                    
                }
            }
        })();
        
        
    },[session])
    
    return (
        <>
            <PageLayout>
                <Stack>
                    <ListingCard profile={profileData} id={id} />
                    <Stack align={"center"} spacing={10}>
                        {fetchedReviews && fetchedUser &&<ReviewCard reviews={listOfReviews} listingId={id} user={user}/>}
                    </Stack>
                </Stack>
            </PageLayout>
        </>
    )
}
