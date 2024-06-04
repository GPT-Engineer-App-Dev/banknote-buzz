import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justify="space-between" wrap="wrap" px={4}>
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <Flex>
          <Link href="/contact" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Contact
          </Link>
          <Link href="/privacy-policy" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;