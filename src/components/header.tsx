import Link from 'next/link';
import axios from 'axios';

import {Flex,Box, Button, Text,IconButton,useColorMode,Stack,Icon,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure} from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import {HamburgerIcon,CloseIcon,ChevronRightIcon} from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import {Logo} from "./logo"

export function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const { data: session } = useSession();
  const [error,setError] = useState<unknown>();
  const [madeUser,setMadeUser] = useState(false);
  const handleLogIn = async () =>{
    signIn();
  }

  const handleLogout =async () => {
    signOut();
  }

  // useEffect(()=>{
  //   if(madeUser) return;
  //   (async ()=>{
  //     try {
  //       const res = await axios.post("/api/createuser", {
  //         "email": session?.user?.email,
  //         "name": session?.user?.name
  //       })
  //       console.log(res)
  //       setMadeUser(true);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   })()
  // },[session])

  if (session) {
    // console.log(session);
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} align={"center"} justify={{ base: 'center', md: 'start' }} >
          <Flex align={"center"}>
            <Logo/>
            <Text
              fontWeight={"bold"}
              pl={"10px"}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              as="a"
              href='/'>
              Wello
            </Text>
          </Flex>
        

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Text>Signed in as: <Link href={"/editpage"}><Text fontWeight="bold">{session?.user?.email}</Text></Link></Text>
          <Button
            onClick={handleLogout}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#0D99FF'}>
            Log out
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
  }else{
    return (
      <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            fontWeight={"bold"}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            as="a"
            href='/'>
            Wello
          </Text>
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            onClick={handleLogIn}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#0D99FF'}>
            Log In
          </Button>
        </Stack>
      </Flex>
    </Box>
    )
  }
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'seller ',
    children: [
      {
        label: 'dashboard',
        subLabel: 'see all your seller information',
        href: '/sellerDashboard',
      },
      {
        label: 'make listing',
        subLabel: 'make a seller listing',
        href: '/makeListing',
      },
    ],
  },
  {
    label: 'saved plans',
    href: '/savedPlans',
  }
];