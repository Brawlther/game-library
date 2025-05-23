import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={15} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
