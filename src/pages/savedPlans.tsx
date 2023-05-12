import { Box, Heading, Text, Button, useColorMode, useColorModeValue, Grid, GridItem, Divider, Flex, Stack, Image, Badge, useToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';

// components
import { PageLayout } from '../components/pageLayout';
import clientPromise from '../../lib/mongodb';

const ShoppingCart: React.FC = () => {
  const { data: session } = useSession();
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  const bgColor = useColorModeValue("blue.100", "blue.700");
  const textColor = useColorModeValue("gray.800", "white");

  const handleRemoveCart = (id: number, name: string) => {
    toast({
      title: "Service removed from cart",
      description: name,
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/getcart', {
          //email: session?.user?.email,
          email: "stipgod2@gmail.com",
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchData();
  }, ["stipgod2@gmail.com"]);
  //}, [session?.user?.email]);

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
              <GridItem key={listing.id}>
                <Stack spacing={2}>
                  <Image src={listing.image} alt={listing.name} />
                  <Text fontWeight="bold">{listing.name}</Text>
                  <Text>${listing.price}</Text>
                  <Button onClick={() => handleRemoveCart(listing.id, listing.name)}>
                    Remove from cart
                  </Button>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default ShoppingCart;
