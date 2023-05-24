import { Box,Flex,Heading,Text,Input,Button } from '@chakra-ui/react'
import { MutableRefObject } from 'react'

export function DataInput({queryRef,handleSearch}:{
    queryRef: MutableRefObject<HTMLInputElement | null>
    handleSearch : () => void 
}) {
    
  return (
      <Flex 
      p={'2rem'}
      direction={'column'}>
        <Flex
        bg={'#F6F8FE'}
        minH={'200px'}
        boxShadow={'sm'}
        p={'6'} 
        rounded={'md'}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}>
            <Heading
            color={'#526081'}
            size='lg' 
            fontSize='50px'>
            Plan your Entire &nbsp;
                <Heading 
                as='samp' 
                size='lg' 
                fontSize='50px' 
                color={'#2D4785'}>
                Medical Trip
                </Heading>
            </Heading>
            <Flex>

                <Flex
                direction={'column'}
                alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box
                        h={'40px'}
                        w={'40px'}
                        borderRadius={'50%'}
                        bg={'#BFDBF7'}
                        border={4}
                        borderStyle={'solid'}
                        borderColor={'#2D4785'}>
                        </Box>
                        <Box
                        h={'3px'}
                        w={'100px'}
                        bg={'#BFDBF7'}>
                        </Box>
                    </Flex>
                    <Text alignSelf={'flex-start'}>Speciality</Text>
                </Flex>

                <Flex
                direction={'column'}
                alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box
                        h={'40px'}
                        w={'40px'}
                        borderRadius={'50%'}
                        bg={'#BFDBF7'}>
                        </Box>
                        <Box
                        h={'3px'}
                        w={'100px'}
                        bg={'#BFDBF7'}>
                        </Box>
                    </Flex>
                    <Text alignSelf={'flex-start'}>Country</Text>
                </Flex>

                <Flex
                direction={'column'}
                alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box
                        h={'40px'}
                        w={'40px'}
                        borderRadius={'50%'}
                        bg={'#BFDBF7'}>
                        </Box>
                        <Box
                        h={'3px'}
                        w={'100px'}
                        bg={'#BFDBF7'}>
                        </Box>
                    </Flex>
                    <Text alignSelf={'flex-start'}>Doctor</Text>
                </Flex>

                <Flex
                direction={'column'}
                alignItems={'center'}>
                    <Flex alignItems={'center'} alignSelf={'flex-start'}>
                        <Box
                        h={'40px'}
                        w={'40px'}
                        borderRadius={'50%'}
                        bg={'#BFDBF7'}>
                        </Box>
                    </Flex>
                    <Text alignSelf={'flex-start'}>Information</Text>
                </Flex>
                
            </Flex>
        </Flex>

        <Flex
        minH={'150px'}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}>
            <Flex
            bg={'#fffff'}
            minH={'150px'}
            minW={'600px'}
            rounded={'md'}
            border={8}
            borderTop={0}
            borderStyle={'solid'}
            borderColor={'#F6F8FE'}
            direction={'column'}
            padding={'2rem'}>
                <Heading color={'#526081'} fontWeight={'light'} pb={'1rem'}>Find By Specialty</Heading>
                <Flex>
                    <Input ref={queryRef} type='text' placeholder={'Eg. “Periodontist”'} size='lg' mr={'1rem'} />
                    <Button onClick={handleSearch} color={'#526081'} size='lg' variant='outline'>
                        search
                    </Button>
                </Flex>
            </Flex>
        </Flex>

      </Flex>
  )
}
