import { Flex, Loader } from "@mantine/core";

export const Spinner = () => (
  <Flex w="100%" style={{ aspectRatio: 2 }} align="center" justify="center">
    <Loader />
  </Flex>
);