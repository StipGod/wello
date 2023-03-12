import {Box, Button, Text, Input, Heading, Textarea} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';

// components
import { PageLayout } from '@/components/pageLayout'
import axios from 'axios'


export default function editpage() {

    const { data: session } = useSession();

    const [inputs, setInputs] = useState({
        name : "",
        lastname : "",
        description : "",
        cellphone : "",
        image : ""
    });

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        console.log(event.target)
        setInputs((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.put("/api/edituser", {
                "email": session?.user?.email,
                "name": inputs.name,
                "lastname": inputs.lastname,
                "cellphone":inputs.cellphone,
                "image": inputs.image,
                "description": inputs.description
            })
            console.log(res);
        } catch (e: any) {
            console.log(e);
        }
    }
    
    return (

        <PageLayout>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
                <Box width={"30%"} boxShadow='xs' p='6' rounded='md' bg='white'>
                    <Box borderBottom={"1px"} borderColor={"gray.200"} mb={"1rem"}>
                        <Heading>Edit User</Heading>
                    </Box>
                    <Text>Name</Text>
                    <Input value={inputs.name} name="name" 
                    onChange={handleChange}/>
                    <Text>Last Name</Text>
                    <Input value={inputs.lastname} name="lastname"
                    onChange={handleChange}/>
                    <Text>Cellphone</Text>
                    <Input value={inputs.cellphone} name="cellphone" 
                    onChange={handleChange}/>
                    <Text>Image</Text>
                    <Input value={inputs.image} name="image" 
                    onChange={handleChange}/>
                    <Text>description</Text>
                    <Textarea value={inputs.description} name="description"
                    onChange={handleChange}/>
                    <Button mt={4} colorScheme='teal' type='submit'onClick={()=> handleSubmit()}>Submit</Button>
                </Box>
            </Box>
        </PageLayout>
        )

}
