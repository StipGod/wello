
import { Text, Stack, Image, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";


export default function MakeReviewCard(props: any) {
    const [review, setReview] = useState("")
    const getInputReview = (e: any) => {
        setReview(e.target.value)
    }
    const handleSubmitReview = (e: any) => {

    }
    return (
       <></>
    );
}