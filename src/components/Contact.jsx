import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hasnainhanifhasnainhanif4@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 bg-gradient-to-b from-bg to-bg-elevated/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold tracking-wider uppercase mb-2 border border-accent/20">
            <Sparkles size={12} />
            <span>LET'S CONNECT</span>
          </div>
          
          {/* Solid Visible Heading */}
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text tracking-tight mb-2">
            Get In <span className="text-accent">Touch</span>
          </h2>
          
          <p className="text-text-muted text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Have a project in mind, want to discuss a full-stack opportunity, or just want to connect? My inbox is always open!
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Side: Direct Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-surface border border-border hover:border-accent/40 shadow-sm transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <a
                    href="mailto:hasnainhanifhasnainhanif4@gmail.com"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider mb-0.5">
                        Direct Email
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-text truncate group-hover:text-accent transition-colors">
                        hasnainhanifhasnainhanif4@gmail.com
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 text-text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-colors ml-1"
                  >
                    {copiedEmail ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <a
                href="https://wa.me/923161825012"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-surface border border-border hover:border-accent/40 shadow-sm transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider mb-0.5">
                      Call / WhatsApp
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      +92 316 1825012
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-all" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-text">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-4 rounded-xl bg-surface border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-semibold text-text uppercase tracking-wider font-mono">
                    Availability Status
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted flex items-center gap-1">
                  <Clock size={11} /> ~24h Response
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Available for full-time roles, freelance projects, and custom web application engineering.
              </p>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-surface rounded-xl border border-border p-5 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="my-auto py-8 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-text">Message Sent!</h3>
                <p className="text-xs text-text-muted max-w-xs mx-auto">
                  Thank you for reaching out. I'll review your details and respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={16} className="text-accent" />
                  <h3 className="text-base font-semibold text-text">Send Me a Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-text-muted uppercase mb-1">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-bg border border-border text-text placeholder:text-text-muted/40 text-xs focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-text-muted uppercase mb-1">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-bg border border-border text-text placeholder:text-text-muted/40 text-xs focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-medium text-text-muted uppercase mb-1">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Proposal / Hiring Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-bg border border-border text-text placeholder:text-text-muted/40 text-xs focus:outline-none focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-medium text-text-muted uppercase mb-1">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-bg border border-border text-text placeholder:text-text-muted/40 text-xs focus:outline-none focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-5 rounded-lg font-semibold text-xs text-white bg-accent hover:opacity-90 shadow-md shadow-accent/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}