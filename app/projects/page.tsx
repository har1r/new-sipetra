"use client";

import * as React from "react";
import { 
  IconPlus, 
  IconSearch, 
  IconFilter, 
  IconLayoutGrid, 
  IconList 
} from "@tabler/icons-react";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/data-table";

// Mock data untuk project
const projectData = [
      {
    "id": 60,
    "header": "Backup and Recovery Procedures",
    "type": "Technical content",
    "status": "Done",
    "target": "18",
    "limit": "21",
    "reviewer": "Assign reviewer"
  },
];

export default function ProjectsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-4 p-4 lg:p-6">
            
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
                <p className="text-muted-foreground">
                  Manage and track all your active projects here.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="gap-2">
                  <IconPlus size={18} />
                  New Project
                </Button>
              </div>
            </div>

            <hr className="border-border" />

            {/* Toolbar Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
              <div className="flex flex-1 items-center gap-2 max-w-sm">
                <div className="relative w-full">
                  <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-9 bg-background"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <IconFilter size={18} />
                </Button>
              </div>

              <Tabs defaultValue="list" className="w-[180px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grid" className="gap-2">
                    <IconLayoutGrid size={16} /> Grid
                  </TabsTrigger>
                  <TabsTrigger value="list" className="gap-2">
                    <IconList size={16} /> List
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Content Section: Menggunakan DataTable yang sudah Anda miliki */}
            <div className="rounded-xl border bg-card shadow-sm">
              <DataTable data={projectData} />
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}