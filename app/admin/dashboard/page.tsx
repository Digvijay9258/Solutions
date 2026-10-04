"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  FolderKanban,
  LogOut,
  Plus,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  XCircle,
  Phone,
  MessageSquare,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import { getLeads, updateLeadStatus } from "@/actions/leads";

const statuses = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "WON", "LOST"];

const statusColors: Record<string, string> = {
  NEW: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  CONTACTED: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  QUALIFIED: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  PROPOSAL: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  WON: "bg-green-500/20 text-green-300 border-green-500/30",
  LOST: "bg-red-500/20 text-red-300 border-red-500/30",
};

interface Lead {
  id: string;
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  description: string;
  contactMethod?: string;
  status: string;
  createdAt: Date;
}

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("admin_auth");
      if (!auth) {
        router.push("/admin/login");
        return;
      }
    }
    loadLeads();
  }, [router]);

  const loadLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data as Lead[]);
    } catch {
      toast.error("Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    const result = await updateLeadStatus(id, newStatus);
    if (result.success) {
      toast.success(`Status updated to ${newStatus}`);
      loadLeads();
    } else {
      toast.error("Failed to update status");
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("admin_auth");
    }
    router.push("/admin/login");
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus =
      filterStatus === "ALL" || lead.status === filterStatus;
    const matchesSearch =
      searchQuery === "" ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const metrics = {
    total: leads.length,
    new: leads.filter((l) => l.status === "NEW").length,
    contacted: leads.filter((l) => l.status === "CONTACTED").length,
    qualified: leads.filter((l) => l.status === "QUALIFIED").length,
    won: leads.filter((l) => l.status === "WON").length,
    lost: leads.filter((l) => l.status === "LOST").length,
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 bg-bg-primary/80 backdrop-blur-xl border-b border-surface-border">
        <div className="container-main flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center font-heading font-bold text-white text-sm">
                G
              </div>
              <span className="font-heading font-bold text-sm text-text-primary">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-text-secondary hover:text-primary-400 transition-colors flex items-center gap-1"
            >
              View Site
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-text-secondary hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <LogOut className="w-3 h-3" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {[
            {
              label: "Total Leads",
              value: metrics.total,
              icon: Users,
              color: "text-primary-400",
            },
            {
              label: "New",
              value: metrics.new,
              icon: Plus,
              color: "text-blue-400",
            },
            {
              label: "Contacted",
              value: metrics.contacted,
              icon: Phone,
              color: "text-amber-400",
            },
            {
              label: "Qualified",
              value: metrics.qualified,
              icon: CheckCircle2,
              color: "text-purple-400",
            },
            {
              label: "Won",
              value: metrics.won,
              icon: BarChart3,
              color: "text-green-400",
            },
            {
              label: "Lost",
              value: metrics.lost,
              icon: XCircle,
              color: "text-red-400",
            },
          ].map((metric) => (
            <div key={metric.label} className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="text-2xl font-heading font-bold text-text-primary">
                {metric.value}
              </div>
              <div className="text-xs text-text-muted">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-surface-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["ALL", ...statuses].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  filterStatus === status
                    ? "bg-primary-500 text-white"
                    : "bg-white/5 border border-surface-border text-text-secondary hover:border-primary-500/30"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Leads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {loading ? (
            <div className="p-12 text-center text-text-muted">
              Loading leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-text-primary mb-2">
                No Leads Yet
              </h3>
              <p className="text-sm text-text-secondary">
                Leads submitted through the contact form will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-surface-border">
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Name
                    </th>
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Service
                    </th>
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Budget
                    </th>
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Status
                    </th>
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Date
                    </th>
                    <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-surface-border hover:bg-white/[0.02] transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-5 py-4">
                        <div>
                          <div className="font-medium text-sm text-text-primary">
                            {lead.name}
                          </div>
                          <div className="text-xs text-text-muted">
                            {lead.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-text-secondary">
                        {lead.service}
                      </td>
                      <td className="px-5 py-4 text-sm text-text-secondary">
                        {lead.budget || "—"}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                            statusColors[lead.status]
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-text-muted">
                        {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleStatusUpdate(lead.id, e.target.value);
                          }}
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 py-1 rounded-lg bg-white/5 border border-surface-border text-xs text-text-primary focus:outline-none focus:border-primary-500"
                        >
                          {statuses.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="bg-bg-primary"
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedLead(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary">
                    {selectedLead.name}
                  </h3>
                  {selectedLead.companyName && (
                    <p className="text-sm text-text-muted">
                      {selectedLead.companyName}
                    </p>
                  )}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    statusColors[selectedLead.status]
                  }`}
                >
                  {selectedLead.status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Email
                  </span>
                  <p className="text-sm text-text-primary">
                    {selectedLead.email}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Phone
                  </span>
                  <p className="text-sm text-text-primary">
                    {selectedLead.phone}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Service
                  </span>
                  <p className="text-sm text-text-primary">
                    {selectedLead.service}
                  </p>
                </div>
                {selectedLead.budget && (
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      Budget
                    </span>
                    <p className="text-sm text-text-primary">
                      {selectedLead.budget}
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Project Description
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1">
                    {selectedLead.description}
                  </p>
                </div>
                {selectedLead.contactMethod && (
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      Preferred Contact
                    </span>
                    <p className="text-sm text-text-primary">
                      {selectedLead.contactMethod}
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Submitted
                  </span>
                  <p className="text-sm text-text-primary">
                    {new Date(selectedLead.createdAt).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <select
                  value={selectedLead.status}
                  onChange={(e) => {
                    handleStatusUpdate(selectedLead.id, e.target.value);
                    setSelectedLead({
                      ...selectedLead,
                      status: e.target.value,
                    });
                  }}
                  className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-surface-border text-sm text-text-primary focus:outline-none focus:border-primary-500"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s} className="bg-bg-primary">
                      {s}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="btn-secondary !py-2 text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
