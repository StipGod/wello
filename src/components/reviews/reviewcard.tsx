import ReviewTile from './reviewtile'
import { useEffect, useState, useRef } from 'react'
import { Text, Flex, Stack, Heading, Input, Button, Image,Textarea } from '@chakra-ui/react'
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

        <Flex direction={"column"}>
            <Heading> Reviews</Heading>
            <Stack  >
                {allReviews}
            </Stack>
            <Flex direction={"row"} boxShadow='xs' p='6' rounded='md' bg='white' justifyContent={"flex-start"} >
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Stack spacing={0} pl="1rem" pr="1rem" >
                    <Text fontSize={"sm"}>Name</Text>
                    <Text fontSize={"xx-small"}>Posting Publicly</Text>
                </Stack>
                <Stack direction={"column"} align={"end"} spacing={2}>
                    <Textarea placeholder="write a review" w={"55rem"} h={"100%"} value={inputReview} name="description" onChange={getInputReview}/>
                    <Stack justifyContent={"flex-end"} alignItems={"end"} alignContent={"end"}>
                        <Button onClick={handleSubmitReview}> Submit</Button>
                    </Stack>
                </Stack>
            </Flex >

        </Flex >

    );
}