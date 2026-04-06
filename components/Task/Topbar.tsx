import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-40 bg-white/80 backdrop-blur-xl h-16 flex items-center justify-between px-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

        <input
          className="w-full bg-slate-100/50 rounded-full py-2 pl-10 pr-4 text-sm"
          placeholder="Search assignments..."
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <Image
          src="/avatar.jpg"
          alt="user"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
