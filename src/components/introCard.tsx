import { Box,Image,Heading,Text } from '@chakra-ui/react'

export function IntroCard({title,body}:{
  title:string,
  body : string
}) {
  return (
    <>
      <Box 
      w={"50%"} 
      border={2}
      p={"5px"}
      borderStyle={'solid'}
      borderColor={'#F6F8FE'}
      rounded={'md'}>
      
      <Heading color={"#526081"}>{title}</Heading>
      <Text color={"#526081"}>{body}</Text>
      </Box>
    </>
  )
}
