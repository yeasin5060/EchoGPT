"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import PromptInput from "@/components/chat/PromptInput";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    // Show button if user scrolled up more than 150px from bottom
    const isUp = scrollHeight - scrollTop - clientHeight > 150;
    setShowScrollBottom(isUp);
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-slate-50/70 font-sans dark:bg-[#07080c]">
      {/* Background Subtle Gradient Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-10 -z-10 h-[500px] w-[800px] rounded-full bg-violet-600/5 blur-[140px] dark:bg-violet-600/10" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      {/* Responsive Collapsible Sidebar */}
      <ChatSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Backdrop Overlay with Backdrop Blur */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden"
        />
      )}

      {/* Main Chat Content Frame */}
      <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Chat Studio Header */}
        <ChatHeader onMenu={() => setSidebarOpen(true)} />

        {/* Scrollable Conversation Stream */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 scroll-smooth"
        >
          <MessageList />

          {/* Floating Scroll to Bottom Button */}
          {showScrollBottom && (
            <button
              onClick={scrollToBottom}
              className="animate-in fade-in zoom-in-75 slide-in-from-bottom-3 fixed bottom-32 right-8 z-30 flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-violet-500/40 hover:text-violet-600 active:scale-95 dark:border-white/10 dark:bg-[#12131b]/95 dark:text-white"
              aria-label="Scroll to newest messages"
            >
              <ArrowDown size={14} className="animate-bounce" />
              <span>Jump to latest</span>
            </button>
          )}
        </div>

        {/* Bottom Floating Composer Container with Dynamic Backdrop */}
        <div className="relative border-t border-slate-200/80 bg-white/80 px-4 py-3.5 backdrop-blur-xl transition-colors sm:px-6 dark:border-white/10 dark:bg-[#090a10]/80">
          <PromptInput />
        </div>
      </main>
    </div>
  );
}