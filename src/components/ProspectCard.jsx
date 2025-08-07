const stats = [
  { label: "Total Prospects", value: 72, color: "text-blue-600" },
  { label: "Connected", value: 23, color: "text-green-600" },
  { label: "Pending", value: 15, color: "text-yellow-500" },
  { label: "Replied", value: 8, color: "text-orange-500" },
  { label: "Conversions", value: 3, color: "text-blue-600" },
  { label: "Response Rate", value: "34.8%", color: "text-blue-600" },
];

export default function ProspectCard({ prospect }) {
  return (
    <>
    

    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start space-x-4">
      {/* Avatar */}
      <img
        src={prospect.image}
        alt={prospect.name}
        className="w-12 h-12 rounded-full"
      />

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-lg">{prospect.name}</h3>
          <span className="text-sm text-gray-600 font-medium">
            ⭐ {prospect.match} match
          </span>
        </div>

        <p className="text-sm text-gray-700 font-medium">
          {prospect.role} @ <span className="text-gray-500">{prospect.company}</span>
        </p>
        <p className="text-xs text-gray-500 mb-2">{prospect.location}</p>

        <p className="text-sm text-gray-800 mb-3">{prospect.message}</p>

        <div className="flex items-center space-x-2 text-sm">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              prospect.status === "connected"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {prospect.status}
          </span>

          <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium">
            Connect
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
