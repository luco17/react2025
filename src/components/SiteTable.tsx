import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

import { SiteData } from "./AddSiteModal";

interface SiteRow extends SiteData {
  id: string;
}

const SiteTable = ({ sites }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site link</Th>
            <Th>Feedback link</Th>
            <Th>Date added</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sites.map((site: SiteRow) => (
            <Tr key={site.id}>
              <Td>{site.siteName}</Td>
              <Td>{site.siteUrl}</Td>
              <Td>Linko</Td>
              {/* <Td>{format(parseISO(site.entryDate), "PPpp")}</Td> */}
              <Td>{format(parseISO(site.entryDate), "PP")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SiteTable;
