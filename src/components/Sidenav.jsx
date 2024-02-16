import { Box, Stack, HStack,Icon,Text, Heading} from '@chakra-ui/react'
import React from 'react'
import {RxDashboard} from 'react-icons/rx';
import { BiTransferAlt } from "react-icons/bi";
import {BiSupport} from 'react-icons/bi';
const Sidenav = () => {
    const navlinks=[
        {
            icon:RxDashboard,
            text:"Dashboard",
            link:"/"
        },
        {
            icon:BiTransferAlt,
            text:"Transactions",
            link:"/transactions"
        },
        
       
    ]
  return (
    
    <Stack justify="space-between" boxShadow="lg" w="20rem" h="100vh"  >
        <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">Crypto Dashboard</Heading>
        {
            navlinks.map((nav)=>(
                <HStack mx="3" py="3" px="3"
                _hover={
                    {
                        bg:"#F3F3F7",
                        color:"#171717"
                    
                }
                }
                color="#797E82"
                key={nav.text}
                >
                    <Icon
                    as={nav.icon}
                    />
                    <Text fontSize="15px" fontWeight="medium">{nav.text}</Text>
                </HStack>
            ))
        }
        </Box>
        
        <Box mt="6" mx="3" mb="6">
        <HStack mx="3" py="3" px="3"
                _hover={
                    {
                        bg:"#F3F3F7",
                        color:"#171717"
                    
                }
                }
                color="#797E82"
                
                >
                    <Icon as={BiSupport}
                
                    />
                    <Text fontSize="15px" fontWeight="medium">support</Text>
                </HStack>
        </Box>
       
    </Stack>
  )
}

export default Sidenav