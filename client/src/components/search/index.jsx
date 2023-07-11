// root
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

// components
import { Theme as theme } from "../../theme";

export default function Search() {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color={theme.color.secondary} />
        </InputLeftElement>
        <Input type="text" />
      </InputGroup>
    </>
  );
}
