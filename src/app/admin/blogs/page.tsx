"use client";

import React, { useState, useEffect } from "react";
import {
  AdminBlogPost,
  DEFAULT_BLOG_POSTS,
} from "@/lib/services/adminStore";
import {
  BookOpen,
  Plus,
  Trash2,
  CheckCircle2,
  FileText,
  Clock,
  Calendar,
  User,
  ExternalLink,
  Search,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<AdminBlogPost[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [formData, setFormData] = useState<Partial<AdminBlogPost>>({
    category: "Study Abroad Guides",
    readTime: "5 min read",
    author: "Guruji Overseas Editorial Team",
    published: true,
  });
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("guruji_admin_blogs");
    if (saved) {
      try {
        setBlogs(JSON.parse(saved));
      } catch {
        setBlogs(DEFAULT_BLOG_POSTS);
      }
    } else {
      setBlogs(DEFAULT_BLOG_POSTS);
      localStorage.setItem("guruji_admin_blogs", JSON.stringify(DEFAULT_BLOG_POSTS));
    }
  }, []);

  const saveBlogs = (updated: AdminBlogPost[]) => {
    setBlogs(updated);
    localStorage.setItem("guruji_admin_blogs", JSON.stringify(updated));
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary) {
      alert("Please enter title and summary for the article");
      return;
    }

    const slug =
      formData.slug ||
      formData
        .title!.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const newBlog: AdminBlogPost = {
      id: `blog-${Date.now()}`,
      slug,
      title: formData.title,
      category: (formData.category as any) || "Study Abroad Guides",
      summary: formData.summary,
      readTime: formData.readTime || "5 min read",
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      author: formData.author || "Guruji Overseas Team",
      published: formData.published !== undefined ? formData.published : true,
    };

    const updated = [newBlog, ...blogs];
    saveBlogs(updated);
    setShowModal(false);
    setFormData({
      category: "Study Abroad Guides",
      readTime: "5 min read",
      author: "Guruji Overseas Editorial Team",
      published: true,
    });
    showToast("📝 Article Published to Website!");
  };

  const togglePublish = (id: string) => {
    const updated = blogs.map((b) =>
      b.id === id ? { ...b, published: !b.published } : b
    );
    saveBlogs(updated);
    showToast("Publish status updated");
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      const updated = blogs.filter((b) => b.id !== id);
      saveBlogs(updated);
      showToast("Article deleted");
    }
  };

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "ALL" || b.category === categoryFilter;
    return matchesSearch && matchesCategory;
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
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" /> Content Management
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            Study Abroad Blog & Guides
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Write and publish immigration news, student visa guidelines, and test prep tips.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition-all"
          >
            <ExternalLink className="w-4 h-4" /> View Public Blog
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" /> New Article
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles by title, keywords, author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          >
            <option value="ALL">All Categories</option>
            <option value="Study Abroad Guides">Study Abroad Guides</option>
            <option value="Visa Policy Updates">Visa Policy Updates</option>
            <option value="IELTS & PTE Tips">IELTS & PTE Tips</option>
            <option value="Cost & Finance">Cost & Finance</option>
          </select>
        </div>
      </div>

      {/* Blog Cards List */}
      <div className="space-y-4">
        {filteredBlogs.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
                  {post.category}
                </span>
                {post.published ? (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Live on Site
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 flex items-center gap-1">
                    <EyeOff className="w-3 h-3" /> Draft
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {post.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {post.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-3 md:pt-0 md:pl-5 shrink-0">
              <button
                onClick={() => togglePublish(post.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  post.published
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                {post.published ? "Unpublish" : "Publish"}
              </button>

              <button
                onClick={() => handleDelete(post.id, post.title)}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors"
                title="Delete Post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredBlogs.length === 0 && (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              No blog posts match your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> Create New Blog Article
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. New Australia Visa Rules 2026 for Haryana Students"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category || "Study Abroad Guides"}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as any })
                    }
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Study Abroad Guides">Study Abroad Guides</option>
                    <option value="Visa Policy Updates">Visa Policy Updates</option>
                    <option value="IELTS & PTE Tips">IELTS & PTE Tips</option>
                    <option value="Cost & Finance">Cost & Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Est. Read Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read"
                    value={formData.readTime || ""}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Author Byline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Counsellor, Rohtak Branch"
                  value={formData.author || ""}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Article Summary / Excerpt *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write a clear overview of the advice, requirements, key changes, or strategies..."
                  value={formData.summary || ""}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
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
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
