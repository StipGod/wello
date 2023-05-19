import {Link, Box, Card, CardBody, CardFooter, ButtonGroup, Heading, Text, Button, useColorMode, useColorModeValue, Grid, GridItem, Divider, Flex, Stack, Image, Badge, useToast } from "@chakra-ui/react";

import { useSession } from "next-auth/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';

// components
import { PageLayout } from '../components/pageLayout';
import clientPromise from '../../lib/mongodb';

const ShoppingCart: React.FC = () => {
  const { data: session, status } = useSession();
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  const bgColor = useColorModeValue("blue.100", "blue.700");
  const textColor = useColorModeValue("gray.800", "white");

  const handleRemoveCart = (id: number, name: string) => {

    if (status === "authenticated") {
      const response = axios.post('/api/removecart', {
          "email": session?.user?.email,
          "id": id,
      }); 
      toast({
        title: "Service removed from cart",
        description: name,
        status: "success",
        duration: 3000,
        isClosable: true
      });
    } else {
      toast({
        title: "You must be logged in to remove items from your cart",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated") {
        const response = await axios.get('/api/getcart', {
          params: {
            email: session?.user?.email,
          },
        }); 
        setCartItems(response.data.listings)
        console.log(Array.isArray(response.data.listings))
      }
  };
console.log(cartItems)
fetchData();
}, [status, session?.user?.email]);

  console.log(cartItems)

if (status === "loading") {
  return <PageLayout bgColor={bgColor} textColor={textColor}>
    <Box p={4}>
      <Box maxW="960px" mx="auto">
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h1" size="lg">
            Loading...
          </Heading>
        </Flex>
      </Box>
    </Box>
  </PageLayout>;
}
  
return (
  <PageLayout bgColor={bgColor} textColor={textColor}>
    <Box p={4}>
      <Box maxW="960px" mx="auto">
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h1" size="lg">
            Shopping Cart
          </Heading>
        </Flex>
        <Divider mb={4} />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {cartItems.map((listing: any) => (
            <GridItem key={listing._id}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{listing.title}</Heading>
                    <Text>{listing.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {`[$${listing.maxPrice}, $${listing.minPrice}]`}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link href={"/listing/" + String(listing._id)}>
                      <Button variant="ghost" colorScheme="blue">
                        Learn more
                      </Button>
                    </Link>
                  </ButtonGroup>
                  <ButtonGroup spacing="2">
                    <Button onClick={() => handleRemoveCart(listing._id, listing.title)}>
                      Remove from cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  </PageLayout>
);
};

const savedPlans = () => {
  return (
    <ShoppingCart />
  );
};

export default savedPlans;