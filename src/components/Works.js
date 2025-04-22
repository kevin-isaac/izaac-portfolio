import React from "react";
import Card from "./Card";


import {
    Box,
    Flex,
    Heading
} from "@chakra-ui/react";



const projects = [
    {
        title: "Zack's Getaway",
        description:
            "A mock ReactJS website for advertising and making reservations at a family vacation rental. ",
        getImageSrc: () => require("../img/website1.png"),
        badges:["Javascript","React"],
        link:"https://zacksgetaway.netlify.app"
    },
    {
        title: "Time Table EZ",
        description:
            "An app which generates a printable timetable for students at the University of the West Indies, utilizing data pre-2016. Based on work done while at the University, re-done using ReactJS. Utilizes Material UI and TailwindCSS for styling.",
        getImageSrc: () => require("../img/website4.png"),
        badges:["Javascript","React"],
        link:"https://ttable-ez.netlify.app"
    },
    {
        title: "Air Pollution Tracker",
        description:
            "A mock Angular Progressive Web App to track the level of air pollution in a specific geographical area, and give alerts on air pollution levels. Based on work done within Intelligent Applications Company Limited. Utilizes Bootstrap for styling and random sample data for demonstration purposes.",
        getImageSrc: () => require("../img/website3.png"),
        badges:["Typescript", "Angular"],
        link:"https://izaacaqi.netlify.app/"
    },
   /* {
        title: "Packing Distribution App",
        description:
            "A simple React app used to determine the best packing arrangement for goods inside of storage container departments based on chosen priorities.  Features Tailwind CSS. ",
        getImageSrc: () => require("../img/website4.png"),
        badges:["Javascript","React"]
    },*/
    {
        title: "Logo Legs Media",
        description:
            "A simple wordpress portfolio site to showcase graphic design works and receive commissions for new promotional media including logos, ads, business cards and videos.",
        getImageSrc: () => require("../img/website2.png"),
        badges:["Wordpress"], link:"https://logolegs.wordpress.com"
    },

   
    {
        title: "Bop Stick Games",
        description:
            "My project page on itch.io, featuring Phaser JS games that I have worked on, playable within internet browsers. Games created exclusively using Javascript and HTML, and also available on Android devices via Google Play.",
        getImageSrc: () => require("../img/website5.png"),
        badges:["PhaserJS"],
        link:"https://bopstick.itch.io"
    },


];


export default function Works(props) {


    return (
        <>

            <Flex
                minHeight={"10vh"} minWidth={"100vw"} alignContent={"center"} justifyContent={"center"}
                className="ProjectBG" id="Projects" mb="15rem"
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
                                        link={project.link}

                                    /> 
                                ))}
                </Box>



            </Flex>

        </>
    );
}

