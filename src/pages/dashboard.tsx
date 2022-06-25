import useSWR from "swr";
import { useAuth } from "@/context/AuthContext";
import DashboardShell from "components/DashboardShell";
import EmptyState from "components/SiteEmptyState";
import SiteTableSkeleton from "components/SiteTableSkeleton";
import fetcher from "@/utils/fetcher";
import SiteTable from "components/SiteTable";

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
