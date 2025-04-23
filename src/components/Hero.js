import React from "react";
import profilePic from '../img/profile_col.png';
import metaPic from '../img/meta-developer-certificate.png';
import SlideInComponent from './SlideInComponent';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  SimpleGrid,
  GridItem, Link
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {


  return (



    <Flex
      minHeight={"100vh"} minWidth={"100vw"} alignContent={"center"} justifyContent={"center"}
      className="HeroBG" id="About"
      {...rest}
    >

      <SimpleGrid columns={[1, 2, 2]} m={"5rem"} maxW={["2%", "4%", "14%", "24%", "66%"]}   >
      <SlideInComponent> <GridItem colSpan={1}>
          <Box>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              mt="5rem"
              color="primary.800"
              textAlign={["left", "left", "left", "left"]}
            >
              {title}
            </Heading>


            <Text
              fontSize={["xs", "xs", "xs", "xs", "xs"]}
              textStyle="xs"
              textAlign="left"
              color="rgb(211, 211, 211)"
              margin="0"
            >
              {subtitle}
            </Text>


            <Heading
              fontWeight="light"
              textAlign="left"
              color="#D0D0D0"
          
              fontSize={["8px", "12px", "16px", "20px"]}
            >
              Bringing Enjoyable Aesthetic Experiences to your Screens.
            </Heading>
           
          </Box>
        </GridItem> </SlideInComponent>
        <GridItem colSpan={1}>
          <Box alignContent={"center"} justifyContent={"center"}>
            {/* TODO: Make this change every X secs */}
           <Link href="https://www.linkedin.com/in/kevin-isaac-8577631bb/" target="_blank" title="Kevin Isaac on LinkedIn"> <Image alt="Kevin Isaac" src={profilePic} id="hero-avatar" maxW={["3em", "7em"]} m={["1vh", "1vh", "1vh", "1vh", "5vh"]}  marginRight={["0em", "-1em"]} rounded="50%" shadow="2xl" transition="transform 0.3s ease-in-out"/></Link> 
           <Link href="https://coursera.org/share/be0c0ac83bbafa5676d0b5c9d4dc8a88" textDecoration="none" target="_blank" title="View Meta Certificate"> <Image  alt="Meta Cert Badge" transition="transform 0.3s ease-in-out" id="hero-avatar" maxW={["2em", "5em"]}  shadow="2xl"    src={metaPic}></Image></Link> 
          </Box>
        </GridItem>


        

        <GridItem colSpan={["2", "2", "2", "2"]}>
          <Box alignContent={"center"} justifyContent={"center"}    >



          <SlideInComponent> 
            <Text
              fontWeight="light"
              textAlign="left"
              color="#D0D0D0"

              fontSize={["8px", "12px", "16px", "16px"]}
            >
              Hello. I'm <b>Kevin Isaac</b>, and I'm a <b>Software Developer / Graphic Designer</b> based in Trinidad & Tobago.
              Over the years, my experience working in the IT industry have allowed me to realize that I possess a particular passion for building Front-End User Experiences with aesthetically pleasing intuitive designs.
              In my work, I've always aimed to enhance the quality of all kinds of digital experiences, be it through elegant interfaces, excellent functionality, engaging content, or entertaining interactivity.
              The fulfilment of establishing positive experiences for others via their screens has been the common denominator of my years spent as an agile Software Engineer, Front-End Web Developer, Game Developer and Graphic Design hobbyist.
              As such, I'm always looking forward to the next opportunity I can grab to put a smile on someone's face from nothing more than the pixels on their screen.

            </Text>
            </SlideInComponent> 
            
           
          </Box>
        </GridItem>
        
      </SimpleGrid>
      

    </Flex>
  );
}

