import { AdminPage } from "../Pages/AdminPage";
import { Flex } from "@aws-amplify/ui-react";
import { MarketingFooter } from '../ui-components'
export function AdminView() {

  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL
  return (
    <Flex
      width="100vw"
      height="auto"
      display="flex"
      gap="unset"
      alignItems="center"
      justifyContent="center"
      position="center"
      padding="0px 0px 0px 0px"
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
      >
        <AdminPage />
        <MarketingFooter image={`${IMAGE_URL}logo.png`} />
      </Flex>
    </Flex>
  );
}
