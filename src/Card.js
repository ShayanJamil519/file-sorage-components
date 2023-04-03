import {
  SimpleGrid,
  Card,
  Link,
  CardHeader,
  Heading,
  Button,
  Text,
  Icon,
  Tooltip,
  CardBody,
  CardFooter
} from "@chakra-ui/react";
import { BsFillShareFill } from "react-icons/bs";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import InitialFocus from "./InitialFocus";

const dummyData = [
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  },
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  },
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  },
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  },
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  },
  {
    fileId: 1,
    name: "File 1",
    description:
      "The file lay silently on the desktop, its name a meaningless jumble of letters and numbers. But inside its digital confines lay a treasure trove of information, waiting to be unearthed by the",
    link: "faklfsffnkrm....jpqafasfpqrq",
    price: 0.01
  }
];

export default function CardsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <InitialFocus isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        paddingY="5em"
        paddingX="10em"
        backgroundColor="#f5f5f5"
      >
        {dummyData.map((data) => (
          <Card>
            <CardHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="-1em"
            >
              <Heading fontFamily="sans-serif" size="md">
                {" "}
                File id # {data.fileId}
              </Heading>
              <Tooltip label="Share File" placement="auto">
                <Button onClick={onOpen}>
                  <Icon as={BsFillShareFill} boxSize={6} />
                </Button>
              </Tooltip>
            </CardHeader>
            <CardBody>
              <Text
                fontFamily="sans-serif"
                textAlign="left"
                marginBottom="0.5em"
              >
                <Text fontWeight="bold" fontSize="lg" display="inline">
                  {" "}
                  Name:{" "}
                </Text>
                {data.name}
              </Text>
              <Text
                fontFamily="sans-serif"
                textAlign="left"
                marginBottom="0.5em"
              >
                <Text fontWeight="bold" fontSize="lg" display="inline">
                  {" "}
                  Description:{" "}
                </Text>
                {data.description}
              </Text>

              <Text
                fontWeight="bold"
                fontSize="lg"
                fontFamily="sans-serif"
                textAlign="left"
                marginBottom="0.5em"
              >
                {" "}
                View:{" "}
                <Link
                  fontWeight="light"
                  fontSize="md"
                  href="https://chakra-ui.com"
                  isExternal
                >
                  {data.link} <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
              <Text fontFamily="sans-serif" textAlign="left">
                <Text fontWeight="bold" fontSize="lg" display="inline">
                  {" "}
                  Price:{" "}
                </Text>
                {data.price} ETH
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                marginX="auto"
                backgroundColor="black"
                textColor="white"
                width="100%"
                paddingY="1.4em"
                _hover={{
                  backgroundColor: "blackAlpha.800"
                }}
              >
                Buy File
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
