import { Heading, Box, Image, Text, HStack , SimpleGrid, GridItem, Link,Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, badges }) => {
  return (
    <Box
      borderRadius="1vh"
      overflow="hidden"
      boxShadow="0 2px 4px 0 #022020, 0 3px 10px 0 #033030"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)"  }}
      transition="transform 0.3s ease-in-out"
      >

  


    <SimpleGrid   rounded="md"  minChildWidth="200px"   textAlign="left"       justifyContent={"left"}  color="white"   _hover={{  bg:"#033030" }}  alignItems="left" >
      <GridItem colSpan={1 }>
      <Image borderRadius="1vh" w={"100%"} src={ (imageSrc)} alt="projectPhoto"/>
      </GridItem>
      <GridItem colSpan={3 }>
        <Box pl="3.0vh" pr="3.0vh" pt="1.0vh" pb="1.0vh" >
          <Heading  fontSize={["8px","8px","8px","12px","16px"]} >{title}</Heading>
          <Text color="#D0D0D0" fontSize={["8px","8px","8px","12px","16px"]}>{description}</Text>
          <Link textDecoration={"none"} href="..." fontSize={["8px","8px","8px","12px","16px"]}> View Project <i class="fa fa-link link-col" aria-hidden="true"></i> </Link> 
          {badges&&badges.map((badge,index) => (
                                              <span key={index} className="badge">{badge}</span>
                                          ))}
          </Box>
      </GridItem>
 
       
      </SimpleGrid>





    </Box>
  );
};

export default Card;
