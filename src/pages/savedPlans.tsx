import { Box, Heading, Text, Button, useColorMode, useColorModeValue, Grid, GridItem, Divider, Flex, Stack, Image, Badge, useToast} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react"
import { InferGetServerSidePropsType } from 'next'

// components
import { PageLayout } from '../components/pageLayout'
import clientPromise from '../../lib/mongodb'

const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      price: 19.99
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      price: 29.99
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      price: 39.99
    },
    {
        id: 4,
        name: "Product 3",
        image: "https://via.placeholder.com/150",
        price: 39.99
      }
  ];
  
  const ShoppingCart = () => {
    const { toggleColorMode } = useColorMode();
    const toast = useToast();
    const bgColor = useColorModeValue("blue.100", "blue.700");
    const textColor = useColorModeValue("gray.800", "white");
  
    const handleAddToCart = (product) => {
      toast({
        title: "Product added to cart",
        description: product.name,
        status: "success",
        duration: 3000,
        isClosable: true
      });
    };
  
    return (

    <PageLayout>
      <Box bgColor={bgColor} color={textColor} p={4}>
        <Box maxW="960px" mx="auto">
          <Flex justify="space-between" align="center" mb={4}>
            <Heading as="h1" size="lg">
              Shopping Cart
            </Heading>
            
          </Flex>
          <Divider mb={4} />
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {products.map((product) => (
              <GridItem key={product.id}>
                <Stack spacing={2}>
                  <Image src={product.image} alt={product.name} />
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text>${product.price}</Text>
                  <Button onClick={() => handleAddToCart(product)}>
                    Add to cart
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