import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return <VStack  
            bg="white" 
            color="black" spacing={4} 
            cursor="pointer"
            borderRadius="xl"
         >
            <Image src={imageSrc} alt="project-image" borderRadius="xl" />
            <VStack p={4} spacing={4} alignItems="flex-start" >
            <HStack justifyContent="space-between" alignItems="center"> 
              <Heading as="h3" size="lg" >{title}</Heading>
            </HStack>
              <Text color="#64748b" fontSize="lg">{description}</Text>
              <HStack spacing={2} >
                <Text >See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
              </HStack>
            </VStack>
         </VStack>;
};

export default Card;

