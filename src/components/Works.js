import React from "react";
import SlideInComponent from './SlideInComponent';
import Card from "./Card";


import {
    Box,
    SimpleGrid,
    Flex,
    Image,
    Heading,
    Stack,
    Text
} from "@chakra-ui/react";

import {

    CardBody,
    Divider,
    CardFooter,
    Button,
    ButtonGroup,

} from "@chakra-ui/react";



const projects = [
    {
        title: "Zack's Getaway",
        description:
            "A React site used for advertising and making reservations at a family vacation rental.",
        getImageSrc: () => require("../img/website1.png"),
        badges:["Javascript","React","Redux"]
    },
    {
        title: "Shy Steps Media",
        description:
            "A wordpress portfolio site using custom plugins to showcase graphic design works and recieve commissions for new promotional media including logos, ads, business cards and videos.",
        getImageSrc: () => require("../img/website2.png"),
        badges:["Wordpress"]
    },
    {
        title: "Air Pollution Tracker",
        description:
            "An Angular Progressive Web App to track the level of air pollution in a specific geographical area and gives alerts on air pollution levels.",
        getImageSrc: () => require("../img/website3.png"),
        badges:["Typescript", "Angular"]
    },
    {
        title: "Packing Distribution App",
        description:
            "A simple [React] app used to determine the best packing arrangement for goods inside of storage container departments based on chosen priorities.",
        getImageSrc: () => require("../img/website4.png"),
        badges:["Javascript","React"]
    },


    {
        title: "Time Table EZ",
        description:
            "A React app which generates a printable timetable for students at the University of the West Indies during their current semester.",
        getImageSrc: () => require("../img/website1.png"),
        badges:["Javascript","React","Next.js"]
    },
    {
        title: "Bop Stick Games",
        description:
            "An Angular site for a video game developer studio, featuring a gallery of marketing material, dev blog section, and staff members.",
        getImageSrc: () => require("../img/website2.png"),
        badges:["Typescript","Angular"]
    },


];


export default function Works(props) {


    return (
        <>

            <Flex
                minHeight={"10vh"} minWidth={"100vw"} alignContent={"center"} justifyContent={"center"}
                className="ProjectBG" id="Projects" mb="5rem"
                {...props.rest}
            >



                <Box

                    spacing={20} gap={20}


                    maxW={["95%", "90%", "85%", "80%", "66%"]}
                    align={["left", "left", "left", "left"]}
                    display="grid"
                 

                >
                                <Box alignContent={"center"} justifyContent={"center"} maxH="5em">
                                    <Heading
                                        as="h2"
                                        size="xl"
                                        fontWeight="bold"
                                        mt="3rem"
                                        color="primary.800"
                                        textAlign={["left", "left", "left", "left"]}
                                    >
                                        Sample Projects
                                    </Heading>
 



                                </Box>
                                {projects.map((project) => (
                                   
                                    <Card
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        badges={project.badges}
                                        imageSrc={project.getImageSrc()}

                                    /> 
                                ))}
                </Box>



            </Flex>

        </>
    );
}

