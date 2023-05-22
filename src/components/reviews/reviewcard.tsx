import ReviewTile from './reviewtile'
import { useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import { Text, Flex, Stack, Heading, Input, Button, Image,Textarea } from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function ReviewCard(props: any) {
    const [inputReview, setReview] = useState("")
    const [allReviews, setAllReviews] = useState([])
    const listRef = useRef<HTMLUListElement | null>(null);
    const [name,setName] = useState("undefined");
    const { data: session } = useSession();
    const serverSideEmail = props.serverSideEmail
    useEffect(() => {
        setAllReviews(props.reviews.map((element: any) => {
            return (<ReviewTile review={element} />);
        }));
        setName(props.user.name)
        // (async ()=>{
        //     const data = await axios.post('/api/getReviews')
        // })();
    }, [])
    const getInputReview = (e: any) => {
        setReview(e.target.value)
    }
    const [rating,setRating] = useState(0)  
    const handleSubmitReview = async(e: any) => {
        // console.log(props.reviews.length)
        // console.log(inputReview)
        const newReview = {
             text: inputReview,
             rating,
             name,
            timestamp: Date.now(),
            imageUrl: props.user.image,
            doctorEmail: serverSideEmail,
            listingId: props.listingId,
        }
        props.reviews.push(newReview);
        setAllReviews(props.reviews.map((element: any) => {
            return (<ReviewTile review={element} />);
        }))
        listRef.current?.lastElementChild?.scrollIntoView();
        await createReview(newReview)
    }
    const createReview = async(newReview:Object)=>{
        try{
            const data = axios.post("/api/createreview",{
                ...newReview,
            })
        }catch(e){
            console.log("error" + e);
        }
    }
    // const onPointerMove = (value: number, index: number) => console.log(value, index)
    const handleRating = (rate: number) => {
        setRating(rate)
      }
    // console.log(props.reviews)
    return (

        <Flex direction={"column"}>
            <Heading> Reviews</Heading>
            <Stack  >
                {allReviews}
            </Stack>
            <Flex direction={"row"} boxShadow='xs' p='6' rounded='md' bg='white' justifyContent={"flex-start"} >
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src={props.user.image}
                />
                <Stack spacing={0} pl="1rem" pr="1rem" >
                    <Text fontSize={"sm"}>{props.user.name??"unspecified"}</Text>
                    <Text fontSize={"xx-small"}>Posting Publicly</Text>

                </Stack>
                <Stack direction={"column"}  spacing={2}>
                    <Rating  emptyStyle={{ display: "flex" }}fillStyle={{ display: "-webkit-inline-box" }} onClick ={handleRating} allowFraction={true}  />
                    <Textarea placeholder="write a review" w={"55rem"} h={"100%"} value={inputReview} name="description" onChange={getInputReview}/>
                    <Stack justifyContent={"flex-end"} alignItems={"end"} alignContent={"end"}>
                        <Button onClick={handleSubmitReview}> Submit</Button>
                    </Stack>
                </Stack>
            </Flex >

        </Flex >

    );
}