import Sidebar from "@/components/dashboard/Sidebar"
import TopNavbar from "@/components/dashboard/TopNavBar"
import type { ReactNode } from "react"

export default function LecturerLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<TopNavbar role="lecturer" />

			<div className="flex">
				<Sidebar role="lecturer" />

				<main className="min-h-screen flex-1 bg-slate-50 p-8 pt-20 ml-64">{children}</main>
			</div>
		</div>
	)
}
