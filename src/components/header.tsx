import {Heading,Flex,Box, Button, Text} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"


export const Header = () => {
    const { data: session } = useSession();
  // console.log(session);
    if (session) {
      return (
        <>
        <Flex w="100%" p=".5rem" boxShadow='sm'>
            <Box width="70%">
                <Heading>wello</Heading>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" width="30%">
                <Text>signed in as {session?.user?.email}</Text>
              <Button onClick={() => { signOut() }}>Sign out</Button>
            </Box>
        </Flex>
        </>
      )
    }else {
      return (
        <>
        <Flex w="100%" p=".5rem" boxShadow='sm'>
            <Box width="70%" >
                <Heading>wello</Heading>
            </Box>
            <Box display="flex" justifyContent="end" width="30%" >
                 <Button  onClick={() => signIn()}>Sign in</Button>
            </Box>
        </Flex>
        </>
      )
    }
}