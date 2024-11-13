import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  {
    icon: "",
    label: "DEALS",
  },
  {
    icon: "",
    label: "PHOTOS",
  },
  {
    icon: "",
    label: "INFO",
  },
];

const LocationTab = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.label}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default LocationTab;
