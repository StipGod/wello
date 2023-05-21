import { Flex,Box,WrapItem,Wrap,Center } from '@chakra-ui/react'

//componnets
import { IntroCard } from './introCard'
import { SearchCard } from './searchCard'

interface Listing {
    description: string;
    email: string;
    maxPrice: string;
    minPrice: string;
    _id: string;
    title : string;
  }

export const Body = ({listings}:{
    listings : Listing[]
})=>{

    const listingsObjects = listings?.map((listing)=>{
        return (
            <WrapItem>
                <SearchCard 
                    listing={listing}
                />
            </WrapItem>
        )
    })


    return(    
    <>
        <Wrap spacing='5rem' align='center' justify="center" p="5rem">
            {listingsObjects}
        </Wrap>

        <Flex 
        minH={'500px'}
        justifyContent={'center'}>
            <Flex width={'70%'}
            direction={'column'}>
                <Box
                width={'100%'}
                height={'3px'}
                bg={'#F6F8FE'}></Box>
                <Flex 
                pt={'2rem'}
                pb={'2rem'}
                justifyContent={'space-between'}>
                    <IntroCard
                      title='Mission'  
                      body='Empowering medical travelers by simplifying their journey, providing personalized solutions, and fostering global connections to ensure a seamless, stress-free, and accessible healthcare experience.'
                    />
                    <IntroCard
                    title='Vision'
                    body='To revolutionize healthcare travel by creating a world where accessing medical services across borders is effortless, empowering patients to make informed decisions, and fostering a global community that prioritizes health, wellness, and compassion.'/>
                </Flex>
            </Flex>
        </Flex> 
    </>
  )
}
