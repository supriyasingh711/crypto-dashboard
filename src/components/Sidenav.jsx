import { Box, Stack, HStack,Icon,Text} from '@chakra-ui/react'
import React from 'react'
import {RxDashboard} from 'react-icons/rx';
import { BiTransferAlt } from "react-icons/bi";
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
    
    <Stack boxShadow="sm" maxW="16rem">
        {
            navlinks.map((nav)=>(
                <HStack 
                key={nav.text}
                >
                    <Icon
                    as={nav.icon}
                    />
                    <Text>{nav.text}</Text>
                </HStack>
            ))
        }
    </Stack>
  )
}

export default Sidenav