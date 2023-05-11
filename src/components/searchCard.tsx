import { CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,Card,ButtonGroup,useToast} from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios'



interface Listing {
    description: string;
    email: string;
    maxPrice: string;
    minPrice: string;
    _id: string;
    title : string;
  }


  

export const SearchCard = ({listing}:{
    listing : Listing
}) => {
    const toast = useToast();
    const { data: session } = useSession();

    const handleAdd = async (id, email) => {
        toast({
            title: "Product added to cart",
            description: listing.description,
            status: "success",
            duration: 3000,
            isClosable: true
          });
    
        try {
            const res = await axios.post("/api/addToCart", {
                "email": email,
                "id": id
                
            })
            console.log(res);
        } catch (e: any) {
            console.log(e);
        }
    }

    return (
        <Card maxW='sm'>
            <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{listing.title}</Heading>
            <Text>
                {listing.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                {`[$${listing.maxPrice},$${listing.minPrice}]`}
            </Text>
            </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Link href={'/listing/'+String(listing._id)}><Button variant='ghost' colorScheme='blue'>Learn more</Button></Link>
                </ButtonGroup>
                <ButtonGroup spacing='2'>
                <Button onClick={() => handleAdd(listing._id,session?.user?.email)}>
                    Add to cart
                  </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}