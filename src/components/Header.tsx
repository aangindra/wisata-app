import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="grid grid-cols-3">
        <Link href="https://project-exterior-technical-test-app.up.railway.app/img/logo.png">
          <Image
            src="https://project-exterior-technical-test-app.up.railway.app/img/logo.png"
            alt="Exterior logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="w-full">
          <Button variant="outline">Outline</Button>
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent className="mx-auto w-[400px] sm:w-[540px]" side="top">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
