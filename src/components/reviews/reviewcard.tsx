



import ReviewTile from './reviewtile'
import { useEffect, useState, useRef } from 'react'
import { Text, Box, Flex, Stack, Heading, Input, Button, Image } from '@chakra-ui/react'
export default function ReviewCard(props: any) {
    const [inputReview, setReview] = useState("")
    const [allReviews, setAllReviews] = useState([])
    const listRef = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        setAllReviews(props.reviews.map((element: any) => {
            return (<ReviewTile review={element} />);
        }))

    }, [])
    const getInputReview = (e: any) => {
        setReview(e.target.value)
    }
    const handleSubmitReview = (e: any) => {
        // console.log(props.reviews.length)
        // console.log(inputReview)
        props.reviews.push({ "text": inputReview });
        setAllReviews(props.reviews.map((element: any) => {
            return (<ReviewTile review={element} />);
        }))
        // props.reviews.push({ "text": inputReview })
        // console.log(allReviews)
        // console.log(props.reviews.length)
        listRef.current?.lastElementChild?.scrollIntoView();
    }
    // console.log(props.reviews)
    return (

        <Flex direction={"column"} /*bg={"black"}*/>
            <Heading> Reviews</Heading>
            <Stack  >
                {allReviews}
            </Stack>
            <Flex direction={"row"} p={2} pl={"10rem"} justifyContent={"flex-start"} >
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Stack spacing={0} >
                    <Text fontSize={"sm"}>Name</Text>
                    <Text fontSize={"xx-small"}>Posting Publicly</Text>
                </Stack>
                <Stack direction={"column"} align={"end"} spacing={2}>
                    <Input placeholder="write a review" type={"text"} w={"55rem"} h={"100%"} value={inputReview} onChange={getInputReview}></Input>
                    <Stack justifyContent={"flex-end"} alignItems={"end"} alignContent={"end"}>
                        <Button onClick={handleSubmitReview}> Submit</Button>
                    </Stack>
                </Stack>
            </Flex >

        </Flex >

    );
}