// root
import { Card, Wrap, Stack, CardBody, WrapItem } from "@chakra-ui/react";

// components
import Search from "../../components/search";
import Auth from "../../logic/auth";

export default function Header() {
  return (
    <>
      <Card>
        <CardBody display="flex" justifyContent="space-between" alignItems="center" gap="1rem">
          <Stack spacing={4}>
            <Search />
          </Stack>
          <Wrap>
            <WrapItem>
              <Auth />
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </>
  );
}
