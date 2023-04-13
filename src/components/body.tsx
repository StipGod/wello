import { Flex,Box,Heading } from '@chakra-ui/react'

//componnets
import { IntroCard } from './introCard'

export const Body = ()=>{
    return(    
    <>
        <Flex 
        minH={'600px'}
        justifyContent={'center'}>
            <Flex width={'70%'}
            direction={'column'}>
                <Heading
                fontWeight={'light'}
                color={'#526081'}
                ></Heading>
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

// const form = ()=>{
//     return(
//     <>
//         <Flex 
//         minH={'600px'}
//         justifyContent={'center'}>
//             <Flex width={'70%'}
//             direction={'column'}>
//                 <Heading
//                 fontWeight={'light'}
//                 color={'#526081'}
//                 >Top most searched places</Heading>
//                 <Box
//                 width={'100%'}
//                 height={'3px'}
//                 bg={'#F6F8FE'}></Box>
//                 <Flex 
//                 pt={'2rem'}
//                 pb={'2rem'}
//                 justifyContent={'space-between'}>
//                     <FormCard/>
//                     <FormCard/>
//                     <FormCard/>
//                 </Flex>
//             </Flex>
//         </Flex> 
//     </>
//     )
// }

