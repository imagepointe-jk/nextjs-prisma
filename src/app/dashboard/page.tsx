import { auth } from "@/auth";

//example of a route automatically protected by auth,
//thanks to middleware defined in middleware.ts.
export default async function Dashboard() {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard Placeholder</h1>
      <p>User: {session?.user?.name}</p>
    </div>
  );
}
