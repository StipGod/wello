import axios from 'axios';

import {Box, Button,Text,Input,Heading,Textarea} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useRef } from 'react';

// components
import { PageLayout } from '../components/pageLayout'

export default function MakeListing() {

    const { data: session } = useSession();
    const [isLoading,setIsLoading] = useState(false);


    const [inputs, setInputs] = useState({
        title : "",
        maxPrice : "",
        category: "",
        minPrice : "",
        description : ""
    });

    const handleChange = (event : any) => {
        const { name, value } = event.target;

        // console.log(event.target)
        setInputs((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleSubmit = async () => {
        if(!session) return
        setIsLoading(true);
        try {
            const res = await axios.post("/api/createListing", {
                "email": session?.user?.email,
                "title": inputs.title,
                "category": inputs.category,
                "maxPrice": inputs.maxPrice,
                "minPrice":inputs.minPrice,
                "description": inputs.description
            })
        } catch (e) {
            console.log(e)
        }
        setInputs({
            title : "",
            maxPrice : "",
            category: "",
            minPrice : "",
            description : ""
        })
        setIsLoading(false);
    }

    return (

    <PageLayout>
        <Box width={"100%"} display={"flex"} justifyContent={"center"} mt="2rem" mb="2rem">
            <Box width={"30%"} boxShadow='xs' p='6' rounded='md' bg='white'>
                <Box borderBottom={"1px"} borderColor={"gray.200"} mb={"1rem"}>
                    <Heading>Make Listing</Heading>
                </Box>
                <Text>title</Text>
                    <Input value={inputs.title} name="title" placeholder='Procedure  ex: Rhinoplastia' 
                onChange={handleChange}/>
                    <Text>Category</Text>
                    <Input value={inputs.category} name="category" placeholder='Category  ex: Dermatology'
                        onChange={handleChange} />
                <Text>max price</Text>
                    <Input type={"number"} value={inputs.maxPrice} name="maxPrice"
                onChange={handleChange}/>
                 <Text>min price</Text>
                    <Input type={"number"} value={inputs.minPrice} name="minPrice"
                onChange={handleChange}/>
                <Text>description</Text>
                <Textarea value={inputs.description} name="description" onChange={handleChange}/>
                { session &&
                    <Button mt={4} colorScheme='teal' type='submit' onClick={handleSubmit}>{(isLoading)?"Loading...":"Submit"}</Button>
                }
                 {!session &&
                   <Heading mt="2rem" size="4rem">Log in to make listing</Heading>
                }
                
            </Box>
        </Box>
    </PageLayout>
    )

}
