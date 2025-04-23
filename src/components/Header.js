'use client'

import logo from '../img/logo.png';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  useColorModeValue,  
  VStack
} from '@chakra-ui/react'





const Links = ['About','Bio', 'Projects',  'Contact']

 

export default function Header(props) {
 
  
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
       
            <Avatar title="iZaac" className='nav-bar-avatar' transition="transform 0.3s ease-in-out" _hover={{ boxShadow: "xl", transform: "scale(1.25)"  }}
                  
                  h={'2.5rem'}
                  p={"0.5em"}
                  src={
                    logo
                  }
                />
               
           
                
            </Box>

    
          </HStack>
        

          <div  className="navlinks"  >
              <HStack   as={'nav'} spacing={20}      >
                {Links.map((link,index) => (

                  <VStack key={index}>
                    {link===props.active&&
                    <>

                    <Box transition="transform 0.3s ease-in-out" _hover={{ boxShadow: "xl", transform: "scale(1.05)"  }} className="nav-bar-links active" key={link} onClick={()=>scrollToSection(props.refs[link])   } >{link}</Box>
                    </>  
                    }
                    {link!==props.active&&
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
 