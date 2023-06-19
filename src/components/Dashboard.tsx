import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { token } = useAuth();

  if (!token) {
    return null;
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard