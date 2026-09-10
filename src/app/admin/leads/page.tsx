"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  X,
  FileText,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { LeadService, VALID_STATUS_TRANSITIONS } from "@/lib/services/leadService";
import { LeadRecord, LeadStatus } from "@/types/crm";

const ALL_STATUSES: (LeadStatus | "ALL")[] = [
  "ALL",
  "NEW",
  "CONTACTED",
  "COUNSELLING",
  "DOCUMENTS",
  "APPLICATION",
  "VISA_PROCESSING",
  "APPROVED",
  "CLOSED",
];

const STATUS_COLORS: Record<LeadStatus, string> = {
  NEW: "bg-blue-50 text-blue-700 border-blue-200",
  CONTACTED: "bg-purple-50 text-purple-700 border-purple-200",
  COUNSELLING: "bg-amber-50 text-amber-800 border-amber-200",
  DOCUMENTS: "bg-indigo-50 text-indigo-700 border-indigo-200",
  APPLICATION: "bg-orange-50 text-orange-800 border-orange-200",
  VISA_PROCESSING: "bg-sky-50 text-sky-700 border-sky-200",
  APPROVED: "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold",
  CLOSED: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLead, setActiveLead] = useState<LeadRecord | null>(null);
  const [newNote, setNewNote] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const loadLeads = async () => {
    const data = await LeadService.listLeads();
    setLeads(data.leads);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchStatus =
        selectedStatus === "ALL" || l.status === selectedStatus;
      const matchQuery =
        searchQuery === "" ||
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.phone.includes(searchQuery) ||
        l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStatus && matchQuery;
    });
  }, [leads, selectedStatus, searchQuery]);

  const handleStatusChange = async (leadId: string, nextStatus: LeadStatus) => {
    try {
      const updated = await LeadService.updateLeadStatus(
        leadId,
        nextStatus,
        "Staff Counselor (Rohtak HQ)",
        "Status updated from Admin Console"
      );
      setLeads((prev) => prev.map((l) => (l.id === leadId ? updated : l)));
      if (activeLead?.id === leadId) {
        setActiveLead(updated);
      }
      setStatusMessage(`Status updated to ${nextStatus}`);
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to update status";
      alert(msg);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLead || !newNote.trim()) return;

    const note = await LeadService.addLeadNote(activeLead.id, newNote, {
      id: "admin-1",
      name: "Rohtak Advisor",
    });

    const updatedLead = {
      ...activeLead,
      notes: [...(activeLead.notes || []), note],
    };

    setLeads((prev) => prev.map((l) => (l.id === activeLead.id ? updatedLead : l)));
    setActiveLead(updatedLead);
    setNewNote("");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-950">Website Leads &amp; CRM Pipeline</h1>
          <p className="text-xs text-slate-500">
            Track inquiries across the 8-stage lifecycle from initial booking to visa approval.
          </p>
        </div>

        {statusMessage && (
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {/* Toolbar: Search & Status Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-4 shadow-subtle">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate name, phone, course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-surface-gray/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-500"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-navy-950">{filteredLeads.length}</strong> of {leads.length} total inquiries
          </div>
        </div>

        {/* Status Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {ALL_STATUSES.map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedStatus === st
                  ? "bg-navy-950 text-amber-300 shadow-sm"
                  : "bg-surface-gray text-charcoal-700 hover:bg-slate-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="text-center py-16 px-4 space-y-2">
            <Users className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-navy-950">No Leads Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No inquiries match the current filter. Try selecting &ldquo;ALL&rdquo; or submit a test enquiry on the website.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-gray border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Destination &amp; Course</th>
                  <th className="py-3 px-4">Academic &amp; Test</th>
                  <th className="py-3 px-4">Target Intake</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-slate-50/70 transition-colors cursor-pointer"
                    onClick={() => setActiveLead(lead)}
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-navy-950">{lead.name}</div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span>{lead.phone}</span>
                        {lead.city && <span>• {lead.city}</span>}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-royal-700 uppercase tracking-wider block text-[11px]">
                        {lead.country}
                      </span>
                      <span className="text-charcoal-700 text-xs truncate max-w-[200px] block">
                        {lead.course}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="text-navy-950 font-medium">{lead.qualification} ({lead.percentage})</div>
                      <div className="text-[11px] text-slate-500">
                        {lead.test}: {lead.testScore || "N/A"}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-charcoal-700 font-medium">
                      {lead.intake}
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold border ${STATUS_COLORS[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveLead(lead);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-surface-gray hover:bg-royal-50 hover:text-royal-700 text-charcoal-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Manage →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lead Detail & Lifecycle Manager Drawer */}
      {activeLead && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-navy-950/60 backdrop-blur-xs animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveLead(null);
          }}
        >
          <div className="w-full max-w-xl bg-white h-screen shadow-2xl overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Drawer Top */}
            <div className="p-6 border-b border-slate-200 sticky top-0 bg-white z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Lead Ref: {activeLead.id}
                </span>
                <h2 className="text-xl font-bold text-navy-950">{activeLead.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveLead(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-navy-950 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-6 space-y-6 flex-1">
              {/* Quick Communication Bar */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/91${activeLead.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Hello ${activeLead.name}, this is your counsellor from Guruji Overseas Rohtak regarding your ${activeLead.country.toUpperCase()} study application.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 text-xs font-bold"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${activeLead.phone}`}
                  className="p-3 rounded-xl bg-royal-50 text-royal-800 border border-royal-200 hover:bg-royal-100 transition-colors flex items-center justify-center gap-2 text-xs font-bold"
                >
                  <Phone className="w-4 h-4 text-royal-600" />
                  <span>Call {activeLead.phone}</span>
                </a>
              </div>

              {/* Lifecycle Status Updater */}
              <div className="p-4 rounded-xl bg-surface-gray border border-slate-200 space-y-2">
                <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider">
                  Update Lead Lifecycle Stage:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_STATUSES.filter((s) => s !== "ALL").map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(activeLead.id, st as LeadStatus)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeLead.status === st
                          ? "bg-navy-950 text-amber-300 shadow-sm"
                          : "bg-white border border-slate-200 text-charcoal-700 hover:bg-slate-100"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Candidate Profile Grid */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                  Profile Details
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email:</span>
                    <span className="font-semibold text-navy-950">{activeLead.email || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Location:</span>
                    <span className="font-semibold text-navy-950">{activeLead.city || "Haryana"}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Qualification:</span>
                    <span className="font-semibold text-navy-950">
                      {activeLead.qualification} ({activeLead.percentage})
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Work Experience:</span>
                    <span className="font-semibold text-navy-950">{activeLead.workExperience}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Target Country &amp; Course:</span>
                    <span className="font-bold text-royal-700">{activeLead.country.toUpperCase()} • {activeLead.course}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">IELTS / PTE:</span>
                    <span className="font-semibold text-navy-950">
                      {activeLead.test} ({activeLead.testScore || "Score Pending"})
                    </span>
                  </div>
                </div>

                {activeLead.message && (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-charcoal-700">
                    <span className="font-bold text-slate-400 block text-[10px] uppercase mb-1">
                      Student Remarks / Query:
                    </span>
                    <p className="italic">&ldquo;{activeLead.message}&rdquo;</p>
                  </div>
                )}
              </div>

              {/* Internal Counselor Notes */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-royal-600" />
                  <span>Internal Staff Notes &amp; Audit Trail</span>
                </h3>

                <form onSubmit={handleAddNote} className="space-y-2">
                  <textarea
                    rows={2}
                    placeholder="Add private note (e.g., 'Called candidate, student planning for Jan 2027 intake, SOP pending')..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-surface-gray/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-lg bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    Save Private Note
                  </button>
                </form>

                <div className="space-y-2 pt-2">
                  {(activeLead.notes || []).length === 0 ? (
                    <p className="text-[11px] text-slate-400 italic">No notes added yet.</p>
                  ) : (
                    activeLead.notes?.map((n) => (
                      <div key={n.id} className="p-3 rounded-lg bg-amber-50/50 border border-amber-200/70 text-xs">
                        <div className="flex items-center justify-between text-[10px] text-amber-900 font-bold mb-1">
                          <span>{n.authorName}</span>
                          <span>{new Date(n.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-charcoal-800">{n.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
