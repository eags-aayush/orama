export default function ProspectCard({ prospect }) {
  return (
    <div className="border p-4 rounded bg-white shadow">
      <h3 className="font-bold">{prospect.name}</h3>
      <p>{prospect.role} @ {prospect.company}</p>
      <p className="mt-2 text-sm text-gray-700">{prospect.message}</p>
    </div>
  )
}
