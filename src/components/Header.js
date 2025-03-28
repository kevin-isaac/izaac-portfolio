'use client'

import logo from '../img/logo.png';
import  { useEffect, useRef, useState } from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  useDisclosure,
    MenuItem,
    Menu,
    Button,
    MenuList,
  useColorModeValue,
  Stack,
  Heading,
  
  VStack
} from '@chakra-ui/react'

import { Link } from "react-router-dom";


import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
 



const Links = ['About','Bio', 'Projects',  'Contact']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      className='App-link'
      px={20}
      py={10}
      rounded={'lg'}
       borderRadius="15"
      _hover={{
 
        bg: "black",
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: "smooth"
    })
  };

  


  return (
    <>
      <header className="App-header">
      <Box className="App-nav" bg={useColorModeValue('gray.100', 'gray.900')} px={4} p={25} m={0} >
      
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={18} width="100%" >
            <Box float="left">
            <Link to={'/'}  >
            <Avatar className='nav-bar-avatar' transition="transform 0.3s ease-in-out" _hover={{ boxShadow: "xl", transform: "scale(1.25)"  }}
                  
                  h={'2.5rem'}
                  p={"0.5em"}
                  src={
                    logo
                  }
                />
               
           </Link>
                
            </Box>

    
          </HStack>
        

          <div  className="navlinks"  >
              <HStack   as={'nav'} spacing={20}      >
                {Links.map((link,index) => (

                  <VStack key={index}>
                    {link==props.active&&
                    <>

                    <Box transition="transform 0.3s ease-in-out" _hover={{ boxShadow: "xl", transform: "scale(1.05)"  }} className="nav-bar-links active" key={link} onClick={()=>scrollToSection(props.refs[link])   } >{link}</Box>
                    </>  
                    }
                    {link!=props.active&&
                    <>
                    <Box transition="transform 0.3s ease-in-out" _hover={{ boxShadow: "xl", transform: "scale(1.05)"  }} className="nav-bar-links" key={link} onClick={()=>scrollToSection(props.refs[link])   } >{link}</Box>
                    </>
                    }
                  </VStack>
                  
                  
                 
                ))}
             
         
              </HStack>
            </div>
                

        </Flex>
        
        
      </Box>

    

    </header>

    

    </>
  )
}
 