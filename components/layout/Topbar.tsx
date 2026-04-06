import Image from "next/image";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-40 bg-white/80 backdrop-blur-xl h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-[18px] w-[18px]" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full bg-slate-100/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFE3WsWfHYmO1EAoqZHiLfdL9Fk_4bNHPByQcESFXBIxSNRjAbNt6ZpN1eQV6ux_GbHHaQn3Q5I98BKdf5lkLouMnaLb14Kj9rXy3hCDXX76QqvHi9iurAqwfXDJIG_QEJB39b9jw-qMnci3dYP6hJAvVZEMUvHmrY852DD2GdaYXjzQ_TVgfrG7p0Se3Cntd3-xlkKk-CKZEUxUjbdYx7eAjvOxx9XtDRkIOn3fQhMkhQ6x5MHGEuKaPCIZeBljTdu8l-bcDjgCaa"
            alt="User Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
