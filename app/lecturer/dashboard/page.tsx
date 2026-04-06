type StudentGrade = {
  id: string
  name: string
  initials: string
  avatarBg: string
  assignment1: number
  assignment2: number
  midterm: number
  finalExam: number
  participation: number
  overall: number
  status: "Pass" | "Fail"
}

const students: StudentGrade[] = [
  {
    id: "Q-44502",
    name: "Alex Mercer",
    initials: "AM",
    avatarBg: "bg-indigo-100 text-indigo-700",
    assignment1: 94,
    assignment2: 91,
    midterm: 88,
    finalExam: 92,
    participation: 100,
    overall: 93.0,
    status: "Pass",
  },
  {
    id: "Q-44503",
    name: "Sarah Koppel",
    initials: "SK",
    avatarBg: "bg-indigo-100 text-indigo-700",
    assignment1: 72,
    assignment2: 68,
    midterm: 54,
    finalExam: 70,
    participation: 85,
    overall: 69.8,
    status: "Pass",
  },
  {
    id: "Q-44504",
    name: "James Holden",
    initials: "JH",
    avatarBg: "bg-slate-100 text-slate-700",
    assignment1: 45,
    assignment2: 32,
    midterm: 41,
    finalExam: 48,
    participation: 60,
    overall: 45.2,
    status: "Fail",
  },
  {
    id: "Q-44505",
    name: "Elena Lopez",
    initials: "EL",
    avatarBg: "bg-green-100 text-green-700",
    assignment1: 88,
    assignment2: 84,
    midterm: 79,
    finalExam: 82,
    participation: 95,
    overall: 85.6,
    status: "Pass",
  },
  {
    id: "Q-44506",
    name: "Thomas Yang",
    initials: "TY",
    avatarBg: "bg-amber-100 text-amber-700",
    assignment1: 62,
    assignment2: 65,
    midterm: 61,
    finalExam: 59,
    participation: 40,
    overall: 57.4,
    status: "Fail",
  },
]

function getHeatClass(score: number) {
  if (score >= 80) {
    return "bg-green-100 text-green-700"
  }

  if (score >= 60) {
    return "bg-amber-100 text-amber-700"
  }

  return "bg-red-100 text-red-700"
}

export default function LecturerAiReportPage() {
  return (
    <div className="mx-auto max-w-[1200px] pb-24 md:pb-8">
      <header className="mb-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">
              Gradebook Analytics
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              AI performance report for{" "}
              <span className="font-semibold text-indigo-600">
                Advanced Quantum Mechanics - Cohort B
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export to CSV
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:brightness-110">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              Generate PDF
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-end gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="min-w-[200px] flex-1">
            <label className="mb-1.5 block px-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Select Cohort
            </label>
            <select className="w-full rounded-xl border-none bg-slate-100 py-2.5 text-sm focus:ring-2 focus:ring-indigo-200">
              <option>Quantum Physics - Spring 2024</option>
              <option>Theoretical Mechanics - Fall 2023</option>
              <option>Particle Physics - Winter 2024</option>
            </select>
          </div>

          <div className="min-w-[230px] flex-1">
            <label className="mb-1.5 block px-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Date Range
            </label>
            <div className="flex items-center gap-2">
              <input
                className="w-full rounded-xl border-none bg-slate-100 py-2.5 text-sm focus:ring-2 focus:ring-indigo-200"
                type="date"
              />
              <span className="text-slate-500">to</span>
              <input
                className="w-full rounded-xl border-none bg-slate-100 py-2.5 text-sm focus:ring-2 focus:ring-indigo-200"
                type="date"
              />
            </div>
          </div>

          <div className="min-w-[180px]">
            <label className="mb-1.5 block px-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Status Filter
            </label>
            <div className="flex gap-2">
              <button className="rounded-xl bg-indigo-100 px-4 py-2.5 text-sm font-semibold text-indigo-700">
                All Students
              </button>
              <button className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">
                At Risk
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100">
                <th className="sticky left-0 z-10 whitespace-nowrap bg-slate-100 px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Student Profile
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Assignment 1
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Assignment 2
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Midterm
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Final Exam
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Participation
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Overall Grade
                </th>
                <th className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {students.map((student) => (
                <tr key={student.id} className="group transition-colors hover:bg-slate-50">
                  <td className="sticky left-0 z-10 bg-white px-6 py-4 group-hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${student.avatarBg}`}
                      >
                        {student.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{student.name}</div>
                        <div className="text-[10px] font-medium text-slate-500">ID: #{student.id}</div>
                      </div>
                    </div>
                  </td>

                  <td className={`px-6 py-4 text-center text-sm font-bold ${getHeatClass(student.assignment1)}`}>
                    {student.assignment1}%
                  </td>
                  <td className={`px-6 py-4 text-center text-sm font-bold ${getHeatClass(student.assignment2)}`}>
                    {student.assignment2}%
                  </td>
                  <td className={`px-6 py-4 text-center text-sm font-bold ${getHeatClass(student.midterm)}`}>
                    {student.midterm}%
                  </td>
                  <td className={`px-6 py-4 text-center text-sm font-bold ${getHeatClass(student.finalExam)}`}>
                    {student.finalExam}%
                  </td>
                  <td className={`px-6 py-4 text-center text-sm font-bold ${getHeatClass(student.participation)}`}>
                    {student.participation}%
                  </td>

                  <td className="px-6 py-4 text-center text-base font-black text-indigo-600">
                    {student.overall.toFixed(1)}%
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        student.status === "Pass"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-100 px-8 py-5">
          <p className="text-sm text-slate-600">
            Showing <span className="font-bold">5</span> of <span className="font-bold">42</span> students
          </p>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-500 transition-colors hover:bg-white">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-sm font-bold text-slate-500 transition-colors hover:bg-white">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-sm font-bold text-slate-500 transition-colors hover:bg-white">
              3
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-500 transition-colors hover:bg-white">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm md:col-span-1">
          <div>
            <span className="material-symbols-outlined mb-4 text-4xl text-green-700">analytics</span>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-slate-500">Average Score</h3>
            <div className="text-4xl font-black text-slate-900">78.4%</div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-700">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +3.2% vs Last Cohort
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm md:col-span-1">
          <div>
            <span className="material-symbols-outlined mb-4 text-4xl text-indigo-600">group</span>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-slate-500">Pass Rate</h3>
            <div className="text-4xl font-black text-slate-900">91.2%</div>
          </div>
          <div className="mt-4 text-xs font-bold text-slate-500">Target: 85.0%</div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 p-8 text-white shadow-xl md:col-span-2">
          <div className="relative z-10">
            <h3 className="mb-2 text-xl font-bold">AI Grading Assistant</h3>
            <p className="mb-6 text-sm leading-relaxed text-indigo-100">
              Based on Assignment 2 results, 12 students are struggling with "Wave-Particle
              Duality". Would you like to schedule a remedial session?
            </p>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-lg transition-transform hover:scale-105 active:scale-95">
              Generate Remedial Plan
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-3xl border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center px-6 py-2 text-slate-400 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center px-6 py-2 text-slate-400 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">checklist</span>
          <span className="text-[10px] font-bold uppercase">Tasks</span>
        </a>
        <a className="flex flex-col items-center justify-center rounded-2xl bg-indigo-100 px-6 py-2 text-indigo-700 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">grade</span>
          <span className="text-[10px] font-bold uppercase">Grades</span>
        </a>
        <a className="flex flex-col items-center justify-center px-6 py-2 text-slate-400 transition-all duration-200 active:scale-90">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </a>
      </nav>
    </div>
  )
}
