import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Text,
  Image
} from "@aws-amplify/ui-react";

export function AboutUsPage(props) {
  const { overrides, ...rest } = props;

  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL

  return (
    <Flex
      gap="24px"
      direction="column"
      width="100%"
      height="auto"
      paddingBottom="40px"
      overflow="hidden"
      position="relative"
      padding="48px"
      backgroundColor="rgba(255,255,255,1)"
      borderRadius="8px"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      {...getOverrideProps(overrides, "AboutUsSection")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="38px"
        fontWeight="600"
        color="rgba(114,108,234,1)"
        lineHeight="32px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 20px 0px"
        whiteSpace="pre-wrap"
        children="About Us"
      ></Text>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        <Image
          src={`${IMAGE_URL}about-us-1.png`}
          width="500px"
          height="450px"
          objectFit="cover"
        />
        <Image src={`${IMAGE_URL}about-us-2.jpg`} width="400px" height="450px" objectFit="cover" />
        <Image src={`${IMAGE_URL}about-us-3.jpg`} width="500px" height="450px" objectFit="cover" />
      </Flex>
      <Flex
        direction="column"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        borderRadius="10px" 
        backgroundColor="rgba(250,250,250,1)"
      >
        <Text fontSize="18px" margin="20px 60px 0 60px" color="rgba(0,0,0,1)">
          Founded by the compassionate and dedicated Sarah Johnson, Own A Pet
          had its humble beginnings in 2012, rooted in a chance encounter with a
          shivering stray kitten on a rainy evening. That serendipitous moment
          sparked a deep passion and vision: to create a haven where every soul,
          human and furry alike, could find their ideal companion and embark on
          a lifelong journey together. What started as a heartfelt mission soon
          evolved into a thriving sanctuary for pets and pet lovers alike. Own A
          Pet has grown into a comprehensive platform that offers a wide range
          of services to foster the bond between humans and their animal
          friends. At Own A Pet, we believe in the power of adoption to
          transform lives.
        </Text>
        <Text fontSize="18px" margin="0 60px 20px 60px" color="rgba(0,0,0,1)">
          Our adoption center has found loving homes for thousands of pets, from
          playful pups to affectionate kittens, bringing joy to families across
          the nation. We are not just about finding homes for pets; we are about
          nurturing those bonds through comprehensive care. Our dedicated team
          of trainers and pet care specialists conducts regular training and
          well-being sessions. These sessions cover everything from obedience
          training to holistic pet health, ensuring that both pet and owner
          enjoy a happy, healthy life together. Our commitment to pets extends
          to their nutrition and comfort as well. We offer a curated selection
          of high-quality pet food and accessories, making it easy for pet
          parents to provide the best for their beloved companions. Sarah's
          inspiring journey from a chance encounter with a stray kitten to the
          creation of Own A Pet serves as a testament to the profound impact of
          love and compassion. With Own A Pet, we invite you to embark on your
          own journey of companionship, and together, we'll continue to create
          heartwarming stories of love and friendship, one paw at a time.
        </Text>
      </Flex>
      <Text
        fontSize="24px"
        fontWeight="600"
        color="rgba(79,70,229,255)"
        margin="40px 0px 20px 0px"
        padding="20px 0px 20px 0px"
        alignSelf="center"
        width="500px"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      >
        Business Hours : 8:00 AM - 6:00 PM
      </Text>
      <Flex display="flex" direction="row" justifyContent="center">
        <Flex marginRight="200px">
          <div className="location-info">
            <Text
              fontSize="24px"
              fontWeight="600"
              color="rgba(64,170,191,1)"
              marginBottom="20px"
            >
              Location
            </Text>
            <Flex
              gap="12px"
              alignItems="center"
              display="flex"
              direction="column"
            >
              <Text fontSize="16px" color="rgba(0,0,0,1)">
                Headquarters: 123 Main St, City, Sri Lanka
              </Text>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63370.72479090401!2d79.82928515291741!3d6.929954125800025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b13df4007e1%3A0xb63b0030686c647!2sPetmart!5e0!3m2!1sen!2slk!4v1694952849404!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Flex>
          </div>
        </Flex>
        <Flex marginTop="200px">
          <div className="contact-info">
            <Text
              fontSize="24px"
              fontWeight="600"
              color="rgba(64,170,191,1)"
              marginBottom="20px"
            >
              Contact Details
            </Text>
            <Flex
              gap="12px"
              alignItems="center"
              display="flex"
              direction="column"
            >
              <Text fontSize="16px" color="rgba(0,0,0,1)">
                Sales: 123-456-7890
              </Text>
              <Text fontSize="16px" color="rgba(0,0,0,1)">
                Support: 987-654-3210
              </Text>
              <Text fontSize="16px" color="rgba(0,0,0,1)">
                Email: contact@OwnAPet.org
              </Text>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
