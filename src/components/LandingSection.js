import React from "react";
import { Avatar, Heading, VStack, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16} >
      <VStack spacing={4} alignItems="center"> 
        <Avatar size="xl" name="Pete" src="https://i.pravatar.cc/150?img=7" ></Avatar>
        <Heading as="h5" size="xs" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h2" size="2xl" noOfLines={1}>{ bio1 }</Heading>
        <Heading as="h2" size="2xl" noOfLines={1}>{ bio2 }</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
