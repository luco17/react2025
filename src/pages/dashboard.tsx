import { useAuth } from "@/context/AuthContext";
import DashboardShell from "components/DashboardShell";
import EmptyState from "components/SiteEmptyState";
import SiteTableSkeleton from "components/SiteTableSkeleton";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
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
