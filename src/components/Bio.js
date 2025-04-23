import React from "react";
import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";


const jobs = [
  {
    title: "Software Developer",
    time: " (2020-2022)",
    job: "Intelligent Applications Company Ltd.",
    description:
      "Built, styled, deployed and tested various progressive web apps for clients using Angular, Angular JS and React JS, IIS and SQL Server. Development conducted using Visual Studio and Visual Studio Code. Version control and project management conducted through Git and Azure DevOps. Assisted in social media marketing via linkedIn and Twitter."
  },


   


  {
    title: "Web Developer",
    job: "Campus I.T Services, UWI STA", time: " (2018-2020)",
    description:
      "Developed software applications for internal IT Services staff using PHP & HTML. Maintained various university websites using Drupal content management systems and assisted university staff in updating their own department sites. Utilized Wordpress in order to create a new site for UWI STA's World Of Work programme, meant to connect graduate students with job recruiters."
  },
  {
    title: "Web Maintenance & Graphic Design Contractor",
    job: "Clever Solutions", time:" (2018 - Ongoing)",
    description:
      "Performed technical updates to revamp and maintain company website using Wordpress and custom plugins, provided assitance in creation and maintenance of company's online admin accounts, created and performed edits to various company marketing documents as requested on contract."
  },

  


  {
    title: "I.T Camp Counselor",
    job: "NIHERST", time:" (2015)",
    description:
      "Provided teaching and supervision assistance for Head Counselor at vacation camp. Designed, created, planned and presented lessons to children ages 7 through 17 on IT subjects such as Game Development, HTML, CSS, Unity Engine and Adobe Photoshop."
  },




];



const openPDF = () => {
  window.open('/docs/Resume.pdf', '_blank');
};


export default function Bio(props) {


  const [active, setActive] = useState(0);

  return (
    <Flex
      minHeight={"70vh"} minWidth={"100vw"} alignContent={"center"} justifyContent={"center"}

      className="BioBG" id="Bio"
      {...props.rest}

    >



      <VStack>
        <Box width="100%" maxWidth={"66vw"} textAlign={"left"} alignContent={"left"} justifyContent={"left"}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            mt="5rem"
            color="primary.800"
            textAlign={"left"}
          >
            Experience
          </Heading>

        </Box>
        <SimpleGrid maxW={["95%", "90%", "85%", "80%", "66%"]} minChildWidth="200px" >

          <Box width="80%" borderRight={"1px solid rgb(50, 106, 116)"} fontSize="18px"   >
            <ul className="job-list">

              {jobs.map((job, index) => (
                <li key={index}>
                  {active === index &&
                    <Link p="0.5em" cursor="pointer" bg={"#21394d"} fontWeight={"bold"} >{job.job}</Link>
                  }
                  {active !== index &&
                    <Link p="0.5em" color="#909090" cursor="pointer" _hover={{ boxShadow: "xl", transform: "scale(1.05)", bg: "#21394d" }} onClick={() => setActive(index)}>{job.job}</Link>
                  }
                </li>


              ))}


            </ul>
          </Box>
          <Box>
            <Text
              fontSize={["xs", "xs", "xs", "xs", "xs"]}
              textStyle="xs"
              textAlign="left"
              color="rgb(211, 211, 211)"
              margin="0"
            >
              {jobs[active].title}
            </Text>

            <Text
              fontWeight="light"
              textAlign="left"
              color="#909090"

              fontSize={["8px", "10px", "12px", "14px"]}
            >
              {
                '@' + jobs[active].job + jobs[active].time
              }

            </Text>
            
            
            <Text
              fontWeight="light"
              textAlign="left"
              color="#D0D0D0"
                
              fontSize={["8px", "12px", "16px", "16px"]}
            >
              {
                jobs[active].description
              }

            </Text>

          </Box>

        </SimpleGrid>
        <Box width="100%" maxWidth={"66vw"} fontSize={["8px", "12px", "16px", "16px"]}>

          <Link cursor={"pointer"} alignContent={"right"} justifyContent={"right"} p={"1em"} _hover={{ boxShadow: "1em", bg: "#61dafb", color: "#033030", fontWeight: "bold" }} float="right" bg="#033030" color="#61dafb" border={"1px solid #61dafb"} title="Resume PDF Download" onClick={openPDF}>
            Résumé
          </Link>


        </Box>

      </VStack>














    </Flex>
  );
}

