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
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="container">
        <div className="flex flex-row justify-between py-2">
          <Link href="https://project-exterior-technical-test-app.up.railway.app/img/logo.png">
            <div className="relative w-[184px] h-[42px]">
              <Image
                src="https://project-exterior-technical-test-app.up.railway.app/img/logo.png"
                alt="Exterior logo"
                fill
              />
            </div>
          </Link>
          <div className="w-full mx-12">
            <Sheet>
              <SheetTrigger asChild className="bg-gray-100">
                <Button variant="ghost" className="w-full">
                  <IoIosSearch />
                  Fairmont
                </Button>
              </SheetTrigger>
              <SheetContent
                className="mx-auto w-[400px] sm:w-[540px]"
                side="top"
              >
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
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
