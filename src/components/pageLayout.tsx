import {Heading,Flex, Button} from '@chakra-ui/react'
import type { AppProps } from 'next/app'

// components
import { Header } from './header'

export const PageLayout = ({ children } : any) => {
  return (
    <Flex>
      <Header/>
      {children}
    </Flex>
  )
}