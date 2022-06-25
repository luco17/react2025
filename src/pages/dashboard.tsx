import useSWR from "swr";
import { useAuth } from "@/context/AuthContext";
import DashboardShell from "components/DashboardShell";
import EmptyState from "components/SiteEmptyState";
import SiteTableSkeleton from "components/SiteTableSkeleton";
import fetcher from "@/utils/fetcher";

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR("/api/sites", fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
