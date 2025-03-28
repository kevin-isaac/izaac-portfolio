import React from "react";
import { Flex } from "@chakra-ui/react";


export default function LandingLayout(props) {
  return (
    <Flex className="Landing-layout"
      direction="column"
      align="center"
      padding="0 auto"
      margin="0 auto"

      minW="100%"
      m="0 auto"
      {...props}
    >
 
      {props.children}
    </Flex>
  );
}
