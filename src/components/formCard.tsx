
import { Stack,Text,Heading,Card,CardBody,CardFooter,Button,Image,Divider,ButtonGroup } from '@chakra-ui/react'


export function FormCard() {
  return (
    <Card maxW='sm'>
    <CardBody>
        <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>Medellin,Colombia</Heading>
        <Text>
            Cost of living: $67usd
        </Text>
        <Text noOfLines={2}>
            Visa: true
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' bg={'#526081'} color={'#ffffff'}>
            select
        </Button>
        <Button variant='ghost' color={'#526081'}>
            see more
        </Button>
        </ButtonGroup>
    </CardFooter>
    </Card>
  )
}
