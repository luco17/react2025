import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import NextLink from "next/link";

import { SiteData } from "./AddSiteModal";

interface SiteRow extends SiteData {
  id: string;
}

const SiteTable = ({ sites }) => {
  return (
    <TableContainer border="1px" borderColor="gray.200" borderRadius="md">
      <Table variant="simple">
        <Thead bgColor="gray.200">
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
              <Td>
                <Link href={site.siteUrl} isExternal>
                  {site.siteUrl}
                </Link>
              </Td>
              <Td>
                <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                  <Link color="blue.500" fontWeight="medium">
                    View feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.entryDate), "PP")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SiteTable;
