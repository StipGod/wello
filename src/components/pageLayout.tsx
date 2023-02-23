import {Heading,Flex, Button, Box} from '@chakra-ui/react'
import type { AppProps } from 'next/app'

// components
import { Header } from './header'

export const PageLayout = ({ children } : any) => {
  return (
    <Flex direction={'column'}>
      <Header/>
      <Box display={"flex"} flexDirection="column" alignItems={"center"} p="2rem">
      {children}
      </Box>
    </Flex>
  )
}