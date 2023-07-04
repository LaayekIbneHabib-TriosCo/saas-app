// root
import { withRequiredAuthInfo, useRedirectFunctions, useLogoutFunction } from "@propelauth/react";

import {
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  Stack,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const Header = withRequiredAuthInfo((props) => {
  const { redirectToAccountPage, redirectToOrgPage } = useRedirectFunctions();
  const logoutFunction = useLogoutFunction();

  if (props.isLoggedIn) {
    return (
      <>
        <Card>
          <CardBody display="flex" justifyContent="space-between" alignItems="center">
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
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
                      name={props.user.firstName + " " + props.user.lastName}
                      src={props.user.pictureUrl}
                    >
                      <AvatarBadge boxSize="1rem" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>{props.user.firstName + " " + props.user.lastName}</MenuItem>
                    <MenuItem>Owner</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<FaUser />} onClick={redirectToAccountPage}>
                      Account
                    </MenuItem>
                    <MenuItem icon={<GoOrganization />} onClick={redirectToOrgPage}>
                      Organization
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<RiLogoutBoxLine />} onClick={logoutFunction}>
                      Logout
                    </MenuItem>
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
