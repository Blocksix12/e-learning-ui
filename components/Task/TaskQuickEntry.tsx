export default function TaskQuickEntry() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-bold mb-6">Quick Task Entry</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="bg-slate-100 rounded-lg p-3"
          placeholder="Assignment Title"
        />

        <input type="date" className="bg-slate-100 rounded-lg p-3" />

        <select className="bg-slate-100 rounded-lg p-3">
          <option>High Priority</option>
          <option>Medium</option>
        </select>

        <select className="bg-slate-100 rounded-lg p-3">
          <option>In Progress</option>
          <option>Todo</option>
        </select>
      </div>
    </div>
  );
}
