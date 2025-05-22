import {
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const placeholder = useBreakpointValue({
    base: "Search",
    sm: "Search Games...", // up to 480px
  });
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input borderRadius={20} placeholder={placeholder} variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
