import { Box, Flex, Heading, Text, Image, Stack, Link } from '@chakra-ui/react'
import React from "react";
import axios from 'axios';

axios.get('/api/getprofile')
    .then((response) => {
        const items = response.data;
    })
    .catch((error) => {
        console.error(error);
    });

const socialMedia = ["Twitter", "Instagram", "YouTube"];


type ProfileProps = {
    fullName: string;
    email: string;
    cellphone: string;
    profilePicture: string;
    bio: string;
    twitter: string;
    instagram: string;
    youtube: string;
};

const Profile = ({ fullName, email, cellphone, profilePicture, bio, twitter, instagram, youtube }: ProfileProps) => {
    return (
        <Flex flexDirection="column" alignItems="center" bg="#2D4785" color="white" py="5" px="3">
            <Image
                src={profilePicture}
                alt="Profile Picture"
                width="150px"
                height="150px"
                borderRadius="full"
                objectFit="cover"
                mb="3"
                boxShadow="md"
            />
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                {fullName}
            </Text>
            <Text fontSize="md" color="#526081" textAlign="center" mb="3">
                {email} &#8226; {cellphone}
            </Text>
            <Text textAlign="center" px="10" mb="5">
                {bio}
            </Text>
            <Stack isInline spacing="2" mb="3">
                <Link
                    fontSize="lg"
                    color="white"
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </Link>
                <Link
                    fontSize="lg"
                    color="white"
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </Link>
                <Link
                    fontSize="lg"
                    color="white"
                    href={`https://youtube.com/${youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    YouTube
                </Link>
            </Stack>
        </Flex>
    );
};

export default Profile;