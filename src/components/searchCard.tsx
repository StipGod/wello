import { CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,Card,ButtonGroup} from '@chakra-ui/react'

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
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}