"use client";

import React, { useState, useEffect } from "react";
import {
  StudentResultItem,
  DEFAULT_STUDENT_RESULTS,
} from "@/lib/services/adminStore";
import {
  Award,
  Plus,
  Trash2,
  CheckCircle2,
  Globe2,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Search,
  Filter,
} from "lucide-react";

export default function AdminResultsPage() {
  const [results, setResults] = useState<StudentResultItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("ALL");
  const [formData, setFormData] = useState<Partial<StudentResultItem>>({
    country: "Canada",
    statusBadge: "Visa Approved",
    countryFlag: "🇨🇦",
  });
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("guruji_admin_results");
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch {
        setResults(DEFAULT_STUDENT_RESULTS);
      }
    } else {
      setResults(DEFAULT_STUDENT_RESULTS);
      localStorage.setItem("guruji_admin_results", JSON.stringify(DEFAULT_STUDENT_RESULTS));
    }
  }, []);

  const saveResults = (updated: StudentResultItem[]) => {
    setResults(updated);
    localStorage.setItem("guruji_admin_results", JSON.stringify(updated));
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const getFlag = (country: string) => {
    switch (country) {
      case "Canada":
        return "🇨🇦";
      case "United Kingdom":
        return "🇬🇧";
      case "Australia":
        return "🇦🇺";
      case "United States":
        return "🇺🇸";
      case "Germany":
        return "🇩🇪";
      case "New Zealand":
        return "🇳🇿";
      default:
        return "🌍";
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.institution || !formData.course) {
      alert("Please fill in Student Name, Institution, and Course");
      return;
    }

    const newResult: StudentResultItem = {
      id: `visa-${Date.now()}`,
      name: formData.name,
      hometown: formData.hometown || "Haryana, India",
      country: (formData.country as any) || "Canada",
      countryFlag: getFlag(formData.country || "Canada"),
      visaType: formData.visaType || `${formData.country} Student Visa`,
      institution: formData.institution,
      course: formData.course,
      intake: formData.intake || "Upcoming Intake",
      statusBadge: (formData.statusBadge as any) || "Visa Approved",
      createdAt: new Date().toISOString().split("T")[0],
    };

    const updated = [newResult, ...results];
    saveResults(updated);
    setShowModal(false);
    setFormData({
      country: "Canada",
      statusBadge: "Visa Approved",
      countryFlag: "🇨🇦",
    });
    showToast("🎉 Student Visa Result Added Successfully!");
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove visa result for ${name}?`)) {
      const updated = results.filter((r) => r.id !== id);
      saveResults(updated);
      showToast("Result removed from website marquee");
    }
  };

  const filteredResults = results.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.hometown.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === "ALL" || r.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          {toastMsg}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" /> Live Website Stream
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            Student Visa Results Manager
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Add recent visa approvals to display on the homepage live right-to-left results ticker.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> Add Visa Result
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by student name, college, course, city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          >
            <option value="ALL">All Countries</option>
            <option value="Canada">🇨🇦 Canada</option>
            <option value="United Kingdom">🇬🇧 United Kingdom</option>
            <option value="Australia">🇦🇺 Australia</option>
            <option value="United States">🇺🇸 United States</option>
            <option value="Germany">🇩🇪 Germany</option>
            <option value="New Zealand">🇳🇿 New Zealand</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.countryFlag}</span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" /> {item.hometown}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <Sparkles className="w-3 h-3" /> {item.statusBadge}
                </span>
              </div>

              <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-3">
                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700 dark:text-slate-200 line-clamp-1">
                    {item.institution}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400 line-clamp-1">
                    {item.course}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.intake}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>{item.visaType}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Added: {item.createdAt}</span>
              <button
                onClick={() => handleDelete(item.id, item.name)}
                className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
                title="Delete Result"
              >
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </button>
            </div>
          </div>
        ))}

        {filteredResults.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Award className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              No visa results found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" /> Add Student Visa Success
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sahil Dahiya"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Hometown / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rohtak, HR"
                    value={formData.hometown || ""}
                    onChange={(e) => setFormData({ ...formData, hometown: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Destination Country *
                  </label>
                  <select
                    value={formData.country || "Canada"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value as any,
                        countryFlag: getFlag(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  >
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Intake / Session
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Fall 2026 / Jan 2027"
                    value={formData.intake || ""}
                    onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  University / College *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. University of Windsor, Ontario"
                  value={formData.institution || ""}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Course / Program Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master of Applied Computing"
                  value={formData.course || ""}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Visa Category
                </label>
                <input
                  type="text"
                  placeholder="e.g. Canada SDS Study Permit"
                  value={formData.visaType || ""}
                  onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 font-semibold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Save & Publish Result
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
