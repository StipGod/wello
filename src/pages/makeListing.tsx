import {Box, Button,Text,Input,Heading,Textarea} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';

// components
import { PageLayout } from '../components/pageLayout'

export default function MakeListing() {

    const { data: session } = useSession();

    const [inputs, setInputs] = useState({
        title : "",
        priceRange : "",
        description : ""
    });
    console.log(session);

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        console.log(event.target)
        setInputs((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleSubmit = () => {
        // send data to api
        console.log(inputs)
    }

    return (

    <PageLayout>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box width={"30%"} boxShadow='xs' p='6' rounded='md' bg='white'>
                <Box borderBottom={"1px"} borderColor={"gray.200"} mb={"1rem"}>
                    <Heading>Make Listing</Heading>
                </Box>
                <Text>title</Text>
                <Input value={inputs.title} name="title" 
                onChange={handleChange}/>
                <Text>price range</Text>
                <Input value={inputs.priceRange} name="priceRange"
                onChange={handleChange}/>
                <Text>description</Text>
                <Textarea value={inputs.description} name="description"
                onChange={handleChange}/>
                <Button mt={4} colorScheme='teal' type='submit' onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>
    </PageLayout>
    )

}
