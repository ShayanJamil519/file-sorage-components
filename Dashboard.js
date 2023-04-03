import React, { useState } from "react";
import {
  Box,
  Button,
  Tabs,
  TabIndicator,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
// import { ChevronLeftIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  return (
    <Box paddingY="5em" paddingX="10em">
      <Tabs isLazy isFitted position="relative" variant="unstyled">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          {/* //  First Panel Container */}
          <TabPanel>
            <TableContainer>
              <Table size="md" border="1px" borderColor="gray.200">
                <Thead>
                  <Tr>
                    <Th paddingY="1em" fontSize="xl">
                      File Name
                    </Th>
                    <Th fontSize="xl">File Hash</Th>
                    <Th fontSize="xl">File Owner</Th>
                    <Th fontSize="xl">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>
                      {" "}
                      <Button
                        colorScheme="teal"
                        backgroundColor="black"
                        size="lg"
                      >
                        Set File For Sale
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>
                      <Button
                        colorScheme="teal"
                        backgroundColor="black"
                        size="lg"
                      >
                        Set File For Sale
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>
                      <Button
                        colorScheme="teal"
                        backgroundColor="black"
                        size="lg"
                      >
                        Set File For Sale
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          {/* //  Second Panel Container */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          {/* //  Third Panel Container */}
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
