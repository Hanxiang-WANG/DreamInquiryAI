import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
        <p>Dashboard Page (Protected)</p>
        <UserButton />
    </div>
  );
}

export default DashboardPage;