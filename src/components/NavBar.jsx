import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem,Flex,Box,Spacer} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div>
        
        <Flex>
  <Box p='4' bg='red.400'>
  <h3>Brand</h3>
  </Box>
  <Spacer />
  <Menu>
  <MenuButton >
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>A</MenuItem>
    <MenuItem>B</MenuItem>
    <MenuItem>C</MenuItem>
  </MenuList>
</Menu>
  <Spacer />
  <Box p='4' bg='green.400'>
  <CartWidget />
  </Box>
</Flex>    
    </div>
  )
}

export default NavBar