

import { Stack, Text, Image, Flex, Heading, Icon } from "@chakra-ui/react";
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { Rating } from 'react-simple-star-rating'
import { useState,useEffect } from "react";

export default function ReviewTile(props: any) {
    const review = props.review;
    const [rating,setRating] = useState(0)
    const [month,setMonth] = useState(1);
    const [day,setDay] = useState(1);
    const [year,setYear] = useState(2000);
    // console.log(review);
    // const onPointerMove = (value: number, index: number) => console.log(value, index)
    const handleRating = (rate: number) => {
        setRating(rate)
      }
      useEffect(()=>{
        const date = new Date(review?.timestamp)
        setMonth(date.getMonth()+1);
        setDay(date.getDate());
        setYear(date.getFullYear())
      },[])
    return (
        <Flex direction={"row"} borderBottom={14} p={4} w={"80rem"} >
            <Stack align={"center"} flex={1}>
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src={review.imageUrl}
                    alt='Dan Abramov'
                />

            </Stack>
            <Stack direction={"column"} pl={10} flex={11}>
                <Stack direction={"row"} align={"center"} justifyContent={"space-between"}>
                    <Stack direction={"row"} align={"center"} >

                        <Heading >{review.name}</Heading>
                        <Stack direction={'row'}>
                            <Rating initialValue={review.rating} emptyStyle={{ display: "flex" }}fillStyle={{ display: "-webkit-inline-box" }} onClick ={handleRating} allowFraction={true} readonly={true}  />
                        </Stack>
                    </Stack>
                    <Text>{day}/{month}/{year}</Text>


                </Stack>
                <Text>{review.text}</Text>

            </Stack>
        </Flex >
    );
}