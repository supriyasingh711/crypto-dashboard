import React from 'react'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'
import { Flex,Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
      <div>
        <Flex>
        <Sidenav/>
        <Box flexGrow="1">
        <Topnav/>

        </Box>
        </Flex>

   
      
    </div>
  )
}

export default Dashboard