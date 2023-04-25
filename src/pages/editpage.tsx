import {Box, Button, Text, Input, Heading, Textarea, Link} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';

// components
import { PageLayout } from '@/components/pageLayout'
import axios from 'axios'


export default function editpage() {

    const { data: session } = useSession();

    
    const [isLoading,setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name : "",
        lastname : "",
        description : "",
        cellphone : "",
        twitter : "",
        instagram : "",
        youtube : "",
        image : ""
    });

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        setInputs((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await axios.put("/api/edituser", {
                "email": session?.user?.email,
                "name": inputs.name,
                "lastname": inputs.lastname,
                "cellphone":inputs.cellphone,
                "image": inputs.image,
                "twitter": inputs.twitter,
                "instagram": inputs.instagram,
                "youtube": inputs.youtube,
                "description": inputs.description
            })
            console.log(res);
        } catch (e: any) {
            console.log(e);
        }
        setInputs({
            name: "",
            lastname: "",
            cellphone: "",
            image: "",
            twitter: "",
            youtube: "",
            instagram: "",
            description: ""
        })
        setIsLoading(false);
    }
    
    return (

        <PageLayout>
            <Box width={"100%"} display={"flex"} justifyContent={"center"} mt="2rem" mb="2rem">
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
                    <Text>Twitter (Link)</Text>
                    <Input value={inputs.twitter} name="twitter" 
                    onChange={handleChange}/>
                    <Text>Youtube (Link)</Text>
                    <Input value={inputs.youtube} name="youtube" 
                    onChange={handleChange}/>
                    <Text>Instagram (Link)</Text>
                    <Input value={inputs.instagram} name="instagram" 
                    onChange={handleChange}/>
                    <Text>description</Text>
                    <Textarea value={inputs.description} name="description"
                    onChange={handleChange}/>
                    { session &&
                        <Button mt={4} colorScheme='teal' type='submit' onClick={handleSubmit}>{(isLoading) ? "Loading..." : "Submit"}<Link href={`/profile/${session?.user?.email}`}></Link></Button>
                    }
                    {!session &&
                    <Heading mt="2rem" size="4rem">Log in to edit profile</Heading>
                    }
                </Box>
            </Box>
        </PageLayout>
        )

}
