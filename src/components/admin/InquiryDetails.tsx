"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle2,
  Trash2,
  FileText,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { InquiryRecord, InquiryStatus } from "@/types/inquiry";
import { INQUIRY_STATUSES } from "@/data/services";
import { StatusBadge } from "@/components/admin/StatusBadge";
import Link from "next/link";

interface InquiryDetailsProps {
  inquiry: InquiryRecord;
  onUpdateStatus?: (newStatus: InquiryStatus) => Promise<void>;
  onUpdateNotes?: (notes: string) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export function InquiryDetails({
  inquiry,
  onUpdateStatus,
  onUpdateNotes,
  onDelete,
}: InquiryDetailsProps) {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState<InquiryStatus>(inquiry.status);
  const [notes, setNotes] = useState(inquiry.notes || "");
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleStatusChange = async (status: InquiryStatus) => {
    if (status === currentStatus) return;
    setIsUpdatingStatus(true);
    try {
      if (onUpdateStatus) {
        await onUpdateStatus(status);
      } else {
        await fetch(`/api/admin/inquiries/${inquiry.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        });
      }
      setCurrentStatus(status);
      setFeedbackMessage(`Status updated to "${status}"`);
      setTimeout(() => setFeedbackMessage(""), 3000);
    } catch {
      alert("Failed to update inquiry status.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleSaveNotes = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingNotes(true);
    try {
      if (onUpdateNotes) {
        await onUpdateNotes(notes);
      } else {
        await fetch(`/api/admin/inquiries/${inquiry.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notes }),
        });
      }
      setFeedbackMessage("Internal staff notes saved successfully.");
      setTimeout(() => setFeedbackMessage(""), 3000);
    } catch {
      alert("Failed to save internal notes.");
    } finally {
      setIsSavingNotes(false);
    }
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      if (onDelete) {
        await onDelete();
      } else {
        await fetch(`/api/admin/inquiries/${inquiry.id}`, {
          method: "DELETE",
        });
      }
      router.push("/admin/inquiries");
    } catch {
      alert("Failed to delete inquiry.");
      setIsDeleting(false);
    }
  };

  const cleanPhone = inquiry.phone.replace(/[^\d+]/g, "");
  const waText = encodeURIComponent(
    `Hello ${inquiry.name}, this is Guruji Overseas counselling team regarding your enquiry on ${inquiry.services.join(", ")}.`
  );

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Bar with Back Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/admin/inquiries"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to Inquiries List</span>
        </Link>

        {feedbackMessage && (
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{feedbackMessage}</span>
          </div>
        )}
      </div>

      {/* Main Candidate Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-extrabold text-navy-950">{inquiry.name}</h1>
              <StatusBadge status={currentStatus} size="lg" />
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Inquiry ID: <span className="font-mono text-navy-950">{inquiry.id}</span> •
              Source: <span className="font-semibold text-slate-600">{inquiry.source || "Website Form"}</span>
            </p>
          </div>

          {/* Quick Click-to-Contact Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`tel:${cleanPhone}`}
              className="px-4 py-2.5 rounded-xl bg-royal-50 hover:bg-royal-100 text-royal-700 border border-royal-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-royal-600" />
              <span>Call {inquiry.phone}</span>
            </a>

            <a
              href={`https://wa.me/${cleanPhone.replace("+", "")}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${inquiry.email}?subject=Regarding your enquiry at Guruji Overseas`}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Status Pipeline Updater */}
        <div className="p-4 rounded-2xl bg-surface-gray/70 border border-slate-200 space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
              Change Inquiry Lifecycle Stage:
            </label>
            {isUpdatingStatus && <Loader2 className="w-4 h-4 animate-spin text-royal-600" />}
          </div>
          <div className="flex flex-wrap gap-2">
            {INQUIRY_STATUSES.map((st) => (
              <button
                key={st.value}
                type="button"
                disabled={isUpdatingStatus}
                onClick={() => handleStatusChange(st.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentStatus === st.value
                    ? "bg-navy-950 text-amber-300 shadow-md ring-2 ring-navy-950"
                    : "bg-white border border-slate-200 text-charcoal-700 hover:bg-slate-100"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Left Column: Contact & Services */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                Contact &amp; Submission Information
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Full Name:</span>
                  <span className="font-bold text-navy-950">{inquiry.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Phone Number:</span>
                  <a href={`tel:${cleanPhone}`} className="font-semibold text-royal-700 hover:underline">
                    {inquiry.phone}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Email Address:</span>
                  <a href={`mailto:${inquiry.email}`} className="font-semibold text-royal-700 hover:underline">
                    {inquiry.email}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Consent Provided:</span>
                  <span className="font-semibold text-emerald-700">
                    {inquiry.consent ? "Yes (Agreed to contact)" : "No"}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Received Date:</span>
                  <span className="text-slate-700">
                    {new Date(inquiry.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Last Updated:</span>
                  <span className="text-slate-700">
                    {new Date(inquiry.updatedAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Services */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                Services of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {inquiry.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-3 py-1.5 rounded-xl bg-white border border-royal-200 text-royal-800 text-xs font-bold shadow-xs"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Message & Internal Staff Notes */}
          <div className="space-y-4">
            {/* Student Message */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                Student Query / Message
              </h3>
              {inquiry.message ? (
                <p className="text-xs text-charcoal-800 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200">
                  &ldquo;{inquiry.message}&rdquo;
                </p>
              ) : (
                <p className="text-xs text-slate-400 italic">No additional message provided.</p>
              )}
            </div>

            {/* Internal Staff Notes Form */}
            <form onSubmit={handleSaveNotes} className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-700" />
                  <span>Internal Staff Notes</span>
                </h3>
                <span className="text-[10px] text-amber-700 font-medium">Confidential</span>
              </div>
              <textarea
                rows={4}
                placeholder="Add internal counsellor notes (e.g. 'Called candidate on 11th Sept, student planning for IELTS coaching in morning batch, docs pending')..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl border border-amber-300 bg-white text-xs text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                disabled={isSavingNotes}
                className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSavingNotes ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <span>Save Notes</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Danger Zone: Protected Deletion */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-rose-700">Delete Inquiry</h4>
            <p className="text-[11px] text-slate-400">Permanently remove this inquiry from the database</p>
          </div>
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete Inquiry</span>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-xs animate-in fade-in"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-navy-950">Confirm Deletion</h3>
              <p className="text-xs text-slate-500">
                Are you sure you want to delete the inquiry for <strong>{inquiry.name}</strong>? This action cannot be undone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-charcoal-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDeleteConfirm}
                className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
