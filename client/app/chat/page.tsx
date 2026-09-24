"use client";

import { useState } from "react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import PromptInput from "@/components/chat/PromptInput";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#08090c]">
      <ChatSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <main className="flex min-w-0 flex-1 flex-col">
        <ChatHeader
          onMenu={() => setSidebarOpen(true)}
        />

        <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 sm:py-10">
          <MessageList />
        </div>

        <div className="border-t border-black/5 bg-slate-50/90 px-4 py-4 backdrop-blur dark:border-white/5 dark:bg-[#08090c]/90 sm:px-6">
          <PromptInput />
        </div>
      </main>
    </div>
  );
}