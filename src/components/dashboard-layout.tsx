"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Zap,
  Settings,
  ChevronLeft,
  ChevronRight,
  Workflow,
  Database,
  Users,
  FileText,
  Plus,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Workflows", href: "/workflows", icon: Workflow },
    { name: "Integrations", href: "/integrations", icon: Zap },
    { name: "Data Sources", href: "/data-sources", icon: Database },
    { name: "Team", href: "/team", icon: Users },
    { name: "Logs", href: "/logs", icon: FileText },
    { name: "Settings", href: "dashboard/settings", icon: Settings },
  ];

  // Demo data
  const activeWorkflows = 12;
  const workflowRuns = 342;
  const successRate = 94.5;
  const recentActivities = [
    {
      id: 1,
      workflow: "New user welcome",
      status: "success",
      time: "2 min ago",
    },
    {
      id: 2,
      workflow: "Invoice processing",
      status: "running",
      time: "5 min ago",
    },
    { id: 3, workflow: "Data sync", status: "failed", time: "1 hour ago" },
    {
      id: 4,
      workflow: "Weekly report",
      status: "success",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "relative bg-muted/10 border-r transition-all duration-300 ease-in-out",
          isExpanded ? "w-64" : "w-20"
        )}
      >
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-4 z-10 rounded-full border bg-background hover:bg-muted"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>

        {/* Logo */}
        <div className="flex items-center p-4 border-b">
          <Zap className="h-6 w-6 text-primary" />
          {isExpanded && (
            <h1 className="ml-2 text-lg font-semibold">ZapClone</h1>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant={pathname.includes(item.href) ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    !isExpanded && "justify-center px-0"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    {isExpanded && <span className="ml-3">{item.name}</span>}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        {isExpanded && (
          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
              <div>
                <p className="text-sm font-medium">User Name</p>
                <p className="text-xs text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b p-4 flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <h2 className="text-xl font-semibold">
            {navItems.find((item) => pathname.startsWith(item.href))?.name ||
              "Dashboard"}
          </h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              <span>New Workflow</span>
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {children || ( // If no children, show demo dashboard
            <div className="grid gap-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Active Workflows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{activeWorkflows}</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      +2 from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Runs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{workflowRuns}</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      +24% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Success Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{successRate}%</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      +1.2% improvement
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest workflow executions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              activity.status === "success"
                                ? "bg-green-500"
                                : activity.status === "failed"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                            }`}
                          />
                          <div>
                            <p className="font-medium">{activity.workflow}</p>
                            <p className="text-sm text-muted-foreground">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start</CardTitle>
                  <CardDescription>
                    Create your first automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <Zap className="h-6 w-6" />
                      <span>Blank Workflow</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Use Template</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2">
                      <Database className="h-6 w-6" />
                      <span>Connect Data</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
