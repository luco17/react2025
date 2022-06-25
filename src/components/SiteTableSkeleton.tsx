import React from "react";

import {
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const SkeletonRow = () => (
  <Tr>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
  </Tr>
);

const SiteTableSkeleton = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
          </Tr>
        </Thead>
        <Tbody>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SiteTableSkeleton;
