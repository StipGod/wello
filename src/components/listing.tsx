import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Link
} from '@chakra-ui/react';
import {
    IoLogoInstagram,
    IoLogoTwitter,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

interface Listing {
    _id: string;
    category: string;
    description: string;
    email: string;
    maxPrice: string;
    minPrice: string;
    title: string;
  }

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function ListingCard(props: any) {
    const id = props.id;

    const [listing,setListing] = useState<Listing>();

    const makeSearch = async () => {
        try {
          return await axios.post('/api/listingById',{
            id : id 
          });
        } catch (error) {
          console.error('Error creating post:', error);
        }
      };
    
    useEffect(()=>{
        (async ()=>{
            const listing = await makeSearch();
            setListing(listing?.data.listing)
        })()
    },[])

    
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Wello
                    </Text>
                    <Heading>{listing?.title}</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        {listing?.description}
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Link href={props.profile.instagramUrl}>
                            <Feature
                                icon={
                                    <Icon as={IoLogoInstagram} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Account'}
                            />
                        </Link>
                        <Link href={props.twitterUrl}>
                            <Feature
                                icon={<Icon as={IoLogoTwitter} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Twitter'}
                            />
                        </Link>
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Reviews'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            props.profile.imageUrl
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}