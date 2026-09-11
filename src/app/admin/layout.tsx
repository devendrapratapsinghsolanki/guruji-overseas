"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // If on login page, don't show the dashboard shell
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth/me");
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          // Check client fallback
          const localAuth = sessionStorage.getItem("guruji_admin_auth");
          if (localAuth === "true") {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            router.push("/admin/login");
          }
        }
      } catch {
        const localAuth = sessionStorage.getItem("guruji_admin_auth");
        if (localAuth === "true") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push("/admin/login");
        }
      }
    }

    checkAuth();
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center text-white text-xs font-semibold">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-surface-gray">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="md:pl-64 flex flex-col min-h-screen">
        <AdminHeader
          onOpenSidebar={() => setSidebarOpen(true)}
          title={
            pathname === "/admin"
              ? "Dashboard Overview"
              : pathname.startsWith("/admin/inquiries")
              ? "Website Inquiries"
              : pathname.startsWith("/admin/leads")
              ? "Admissions Pipeline"
              : pathname.startsWith("/admin/results")
              ? "Visa Results"
              : "Admin Portal"
          }
          subtitle="Guruji Overseas Rohtak HQ"
        />

        <main className="flex-1 p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
