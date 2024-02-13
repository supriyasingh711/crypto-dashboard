import { Button, Container,Box,Icon, Flex,Heading, Menu, MenuButton,MenuList, MenuItem, HStack } from '@chakra-ui/react'
import React from 'react'
import {FaUserTie} from "react-icons/fa"

const Topnav = () => {
  return (
    <Box boxShadow="xl">
 <HStack  
  maxW="80rem"
  h="16" 
  justify="space-between" 
  px="32"
  mx="auto"
  >
  

  <Heading>Dashboard</Heading>
  <Menu>
      <MenuButton as={Button} >
      <Icon 
      as={FaUserTie}
      />
      </MenuButton>
     
      <MenuList>

          <MenuItem>Download</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuItem>Download</MenuItem>

      </MenuList>
  </Menu>


</HStack>

    </Box>
 
  )
}

export default Topnav