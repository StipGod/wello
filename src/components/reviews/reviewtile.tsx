

import { Stack, Text, Image, Flex, Heading, Icon } from "@chakra-ui/react";
import { IoStar, IoStarOutline } from 'react-icons/io5';


export default function ReviewTile(props: any) {
    const review = props.reviews;
    // console.log(review);
    return (
        <Flex direction={"row"} borderBottom={14} p={4} w={"80rem"} >
            <Stack align={"center"} flex={1}>
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />

            </Stack>
            <Stack direction={"column"} pl={10} flex={11}>
                <Stack direction={"row"} align={"center"} justifyContent={"space-between"}>
                    <Stack direction={"row"} align={"center"} >

                        <Heading >Name</Heading>
                        <Stack pl={5} direction={"row"}>
                            <Icon as={IoStarOutline} />
                            <Icon as={IoStarOutline} />
                            <Icon as={IoStarOutline} />
                            <Icon as={IoStarOutline} />
                            <Icon as={IoStarOutline} />

                        </Stack>
                    </Stack>
                    <Text>10/2/2023</Text>


                </Stack>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ut illum eveniet sapiente non omnis? Omnis voluptatem itaque tempore quas? Ducimus neque ipsum ea numquam dolorum labore ullam, blanditiis animi?</Text>

            </Stack>
        </Flex >
    );
}