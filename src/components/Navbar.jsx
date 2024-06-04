import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex as="nav" justify="space-between" wrap="wrap">
        <Link as={NavLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Home
        </Link>
        <Link as={NavLink} to="/world" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          World
        </Link>
        <Link as={NavLink} to="/business" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Business
        </Link>
        <Link as={NavLink} to="/markets" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Markets
        </Link>
        <Link as={NavLink} to="/opinion" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Opinion
        </Link>
        <Link as={NavLink} to="/tech" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Tech
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;