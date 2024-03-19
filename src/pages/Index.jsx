import React from "react";
import { Box, Heading, Text, VStack, HStack, Flex, Image, Button, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex maxW="container.lg" mx="auto" py={8} px={4} direction="column" align="center" justify="center" textAlign="center">
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTA4Mzc3MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Nazgar Kareem C. Abas" mb={6} />
        <Heading as="h1" size="2xl" mb={2}>
          Nazgar Kareem C. Abas
        </Heading>
        <Text fontSize="xl" color="gray.600" mb={8}>
          Software Engineer | Web Developer
        </Text>

        <HStack spacing={4} mb={8}>
          <Link href="https://github.com/yourusername" isExternal>
            <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" variant="ghost" colorScheme="gray" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" isExternal>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" colorScheme="blue" />
          </Link>
          <Link href="mailto:youremail@example.com">
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" colorScheme="red" />
          </Link>
        </HStack>

        <VStack spacing={8} align="stretch" maxW="2xl" mx="auto">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg" color="gray.600">
              I am a passionate software engineer with expertise in web development. I enjoy building modern and responsive web applications using the latest technologies.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Projects
            </Heading>
            <VStack spacing={4} align="start">
              <Box>
                <Heading as="h3" size="lg">
                  Project 1
                </Heading>
                <Text color="gray.600">A brief description of the project goes here.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  Project 2
                </Heading>
                <Text color="gray.600">A brief description of the project goes here.</Text>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact Me
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              If you have any questions or would like to work together, feel free to reach out to me.
            </Text>
            <Button as={Link} href="mailto:youremail@example.com" colorScheme="blue" size="lg">
              Get in Touch
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
