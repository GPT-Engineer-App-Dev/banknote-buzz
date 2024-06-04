import { Container, Text, VStack, Heading, Box, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>Financial Times</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="md" mb={4}>Latest News</Heading>
          <Text>Stay updated with the latest news articles.</Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="md" mb={4}>Trending Articles</Heading>
          <Text>Check out what's trending right now.</Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="md" mb={4}>Market Data</Heading>
          <Text>Get the latest market data and trends.</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;