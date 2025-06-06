
import logo from '../img/logo.png';

import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";

import {  HStack, Link } from '@chakra-ui/react'
import { SiGithub, SiLinkedin } from 'react-icons/si'


export default function Contact() {


  return (


    <Flex minHeight={"10vh"} minWidth={"100vw"} alignContent={"center"} justifyContent={"center"} id="Contact" className="ContactBG" >

      <SimpleGrid  columns={[1, 2, 3]}   m={"5rem"} minChildWidth="80px" minW={["2%","4%","14%","24%","66%"]} >

        <GridItem colSpan={1 }>
          <VStack>

          
            <HStack  alignContent={"center"} justifyContent={"center"} textAlign="center">
                <Image maxW="1.5em" src={logo} alt="iZaac Logo"/>
                <b>iZaac</b>
              
            </HStack>
            <Box><Text textAlign="left"
                      color="#D0D0D0"
 
                      ml={10}
                      fontSize={["8px", "10px", "12px" ]}>Designed and built by Kevin Isaac</Text></Box>
        </VStack>
        </GridItem>
        {/*<GridItem colSpan={1 }>
        <Image src={certicon}   maxW={["5em"]} m={["1vh", "1vh", "1vh", "1vh", "1vh"]}   />
        </GridItem>*/}

        <GridItem colSpan={1 }>

        <HStack alignContent={"center"} justifyContent={"center"} textAlign="center" mt="0.5em">
         <Link mr="0.5em" ml="0.5em" href="https://www.linkedin.com/in/kevin-isaac-8577631bb/" target="_blank" ><SiLinkedin /></Link> <Link href="https://github.com/kevin-isaac" target="_blank"><SiGithub /></Link>  
        </HStack>

        </GridItem>

        <GridItem colSpan={1 }>
        
                    <Text
                       textAlign="left"
                      color="#D0D0D0"
                      fontWeight={"bold"}
                      lineHeight={0.5}
                      fontSize={["8px", "12px", "14px" ]}
                      
                    >
                      Address
                    </Text>
                    <Text
                      fontWeight="light"
                       textAlign="left"
                      color="#D0D0D0"
                      lineHeight={1}
                      mb={"3em"}
                      fontSize={["8px", "12px", "14px" ]}
                    >
                      Tacarigua, Trinidad & Tobago
                    </Text>

                    <Text
                      textAlign="left"
                      color="#D0D0D0"
                      fontWeight={"bold"}
                      lineHeight={0.5}
                      fontSize={["8px", "12px", "14px" ]}
                      
                    >
                      Email
                    </Text>
                    <Text
                      fontWeight="light"
                      textAlign="left"
                      color="#D0D0D0"
                      lineHeight={1}
                      mb={"3em"}
                      fontSize={["8px", "12px", "14px" ]}
                    >
                      kevin.izaac@gmail.com
                    </Text>
                    <Text
                      textAlign="left"
                      color="#D0D0D0"
                      fontWeight={"bold"}
                      lineHeight={0.5}
                      fontSize={["8px", "12px", "14px" ]}
                    >
                      Contact
                    </Text>
                    <Text
                      fontWeight="light"
                      textAlign="left"
                      color="#D0D0D0"
                      lineHeight={1}
                      fontSize={["8px", "12px", "14px" ]}
                  
                    >
                      +1 868 351 2527
                    </Text>
                  
        </GridItem>

      </SimpleGrid>

      {/**/}
  
        
    </Flex>
  );
}



