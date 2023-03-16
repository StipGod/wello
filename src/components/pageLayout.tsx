import {Heading,Flex, Button, Box} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Footer } from './footer'

// components
import { Header } from './header'

export const PageLayout = ({ children } : any) => {
  return (
    <Flex direction={'column'} >
      <Header/>
      <Box display={"flex"} flexDirection="column">
      {children}
      </Box>
      <Footer/>
    </Flex>
  )
}