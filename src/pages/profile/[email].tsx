import { useRouter } from 'next/router'
import { Box, Flex, Heading, Text, Image, Stack, Link } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { PageLayout } from '@/components/pageLayout';

export default function Profile() {
    const router = useRouter();
    const { email } = router.query;
    const [items, setItems] = useState({});

    useEffect(() => {
        if (email) {
            axios.get(`/api/getprofile?email=${email}`)
                .then((response) => {
                    console.log(response);
                    setItems(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [email]);
    
    return (
        <PageLayout>
            <Flex flexDirection="column" alignItems="center" bg="#2D4785" color="white" py="5" px="3">
                <Image
                    src={items.image}
                    alt="Profile Picture"
                    width="150px"
                    height="150px"
                    borderRadius="full"
                    objectFit="cover"
                    mb="3"
                    boxShadow="md"
                />
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    {items.name} {items.lastname} 
                </Text>
                <Text fontSize="md" color="#526081" textAlign="center" mb="3">
                    {items.email}  {items.cellphone}
                </Text>
                <Text textAlign="center" px="10" mb="5">
                    {items.description}
                </Text>
                <Stack isInline spacing="2" mb="3">
                    <Link
                        fontSize="lg"
                        color="white"
                        href={items.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </Link>
                    <Link
                        fontSize="lg"
                        color="white"
                        href={items.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </Link>
                    <Link
                        fontSize="lg"
                        color="white"
                        href={items.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </Link>
                </Stack>
            </Flex>
        </PageLayout>
    );
};