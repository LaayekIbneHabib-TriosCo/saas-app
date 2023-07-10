// root
import { withRequiredAuthInfo, useRedirectFunctions, useLogoutFunction } from "@propelauth/react";

import {
  Menu,
  Text,
  Card,
  Wrap,
  Input,
  Stack,
  Avatar,
  CardBody,
  WrapItem,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuButton,
  InputGroup,
  MenuDivider,
  AvatarBadge,
  InputLeftElement,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { Search2Icon } from "@chakra-ui/icons";
import { RiLogoutBoxLine } from "react-icons/ri";

// components
import { Theme as theme } from "../../theme";

const Header = withRequiredAuthInfo((props) => {
  const logoutFunction = useLogoutFunction();
  const { redirectToAccountPage } = useRedirectFunctions();

  const email = props.user.email;
  const name = props.user.firstName + " " + props.user.lastName;
  const noname = typeof props.user.firstName && props.user.lastName === undefined;

  if (props.isLoggedIn) {
    return (
      <>
        <Card>
          <CardBody display="flex" justifyContent="space-between" alignItems="center" gap="1rem">
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color={theme.color.secondary} />
                </InputLeftElement>
                <Input type="text" />
              </InputGroup>
            </Stack>
            <Wrap>
              <WrapItem>
                <Menu>
                  <MenuButton>
                    <Avatar
                      cursor="pointer"
                      name={noname ? email : name}
                      src={props.user.pictureUrl}
                    >
                      <AvatarBadge boxSize="1rem" bg={theme.color.hero} />
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem
                        display="flex"
                        gap=".65rem"
                        _hover={{ background: "none" }}
                        _focus={{ background: "none" }}
                      >
                        <Avatar
                          size="2xs"
                          name={noname ? email : name}
                          src={props.user.pictureUrl}
                        />
                        <Text
                          fontSize="md"
                          background="gray.100"
                          borderRadius=".5rem"
                          padding="0 .25rem 0 .25rem"
                          maxWidth="10rem"
                          overflowX="scroll"
                          display="flex"
                        >
                          <span>{noname ? email : name}</span>
                        </Text>
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Settings">
                      <MenuItem icon={<FaUser />} onClick={redirectToAccountPage}>
                        Account
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<RiLogoutBoxLine />} onClick={logoutFunction}>
                        Logout
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </WrapItem>
            </Wrap>
          </CardBody>
        </Card>
      </>
    );
  }
});

export default Header;
