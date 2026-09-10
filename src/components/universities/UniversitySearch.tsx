"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface UniversitySearchProps {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function UniversitySearch({
  value,
  onChange,
  placeholder = "Search university name, city, or course stream...",
  className = "",
}: UniversitySearchProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-100 transition-all shadow-subtle"
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
          aria-label="Clear Search"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
