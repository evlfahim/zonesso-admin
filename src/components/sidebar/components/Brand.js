import React from "react";

import { Flex, useColorModeValue } from "@chakra-ui/react";

import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <h1
        style={{ fontSize: "36px", fontWeight: "bolder", marginBottom: "10px" }}
      >
        Car-Listing
      </h1>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
