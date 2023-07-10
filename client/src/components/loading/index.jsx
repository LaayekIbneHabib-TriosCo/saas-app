// root
import { Text } from "@chakra-ui/react";

export default function Loading() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <Text fontSize="lg" style={style}>
        Loading...
      </Text>
    </>
  );
}
