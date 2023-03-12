



import ReviewTile from './reviewtile'

import { Text, Box, Stack, Heading } from '@chakra-ui/react'
export default function ReviewCard(props: any) {
    console.log(props.reviews)
    return (

        <Stack>
            <Heading> Reviews</Heading>
            <Stack height={100} w={100}>
                {props.reviews.map((element: any) => {
                    return (<ReviewTile review={element} />);
                })}

            </Stack>
        </Stack>

    );
}