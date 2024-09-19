"use client";

import { Menu, Sheet } from "lucide-react";
import { Button } from "./ui/button";

const MobileSidebar = () => {
  return (
    <Sheet>
        <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
        </Button>
    </Sheet>
  )
}

export default MobileSidebar;