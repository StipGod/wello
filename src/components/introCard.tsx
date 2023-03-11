import { Box,Image } from '@chakra-ui/react'

export function IntroCard() {
  return (
    <>
      <Box 
      w={'400px'} 
      h={'400px'} 
      border={4}
      borderStyle={'solid'}
      borderColor={'#F6F8FE'}
      rounded={'md'}>
        <Image src='https://bit.ly/dan-abramov'  boxSize='400px' alt='Dan Abramov' />
      </Box>
    </>
  )
}
