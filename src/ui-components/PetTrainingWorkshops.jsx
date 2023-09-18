import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View, Flex, Image } from "@aws-amplify/ui-react";

export default function PetTrainingWorkshops(props) {
  const { overrides, training1, training2, training3, training4, training5, training6, ...rest } = props;

  return (
    <View
      width="100vw"
      height="auto"
      gap="unset"
      alignItems="center"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PetTrainingWorkshops")}
      {...rest}
    >
      <Text
        fontSize="32px"
        fontWeight="600"
        color="rgba(64,170,191,1)"
        margin="60px 0px 40px 0px"
      >
        Pet Training and Wellbeing Sessions
      </Text>
      <Flex
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="40px"
      >
        <Flex
        display="flex"
        direction="row"
      >
        <Image src={training1} width="450px" height="500px" objectFit="cover" />
        <Image src={training2} width="450px" height="500px" objectFit="cover" />
        <Image src={training3} width="450px" height="500px" objectFit="cover" />
      </Flex>
      <Flex
        display="flex"
        direction="row"
      >
        <Image src={training4} width="450px" height="500px" objectFit="cover" />
        <Image src={training5} width="450px" height="500px" objectFit="cover" />
        <Image src={training6} width="450px" height="500px" objectFit="cover" />
      </Flex>
      </Flex>
    </View>
  );
}
