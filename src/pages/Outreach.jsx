import ProspectCard from '../components/ProspectCard'
import Navbar from '../components/Navbar'

const sampleProspects = [
  {
    name: "Rajesh Kumar",
    match: "88%",
    status: "connected",
    role: "CTO",
    company: "TechStart Solutions",
    location: "Bangalore, India",
    message: "Shared post about AI in recruitment",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rajesh",
  },
  {
    name: "Priya Singh",
    match: "85%",
    status: "not connected",
    role: "Head of People Operations",
    company: "GrowthCorp",
    location: "Delhi, India",
    message: "Announced new team expansion",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya",
  }
]

const stats = [
  { label: "Total Prospects", value: 72, color: "text-blue-600" },
  { label: "Connected", value: 23, color: "text-green-600" },
  { label: "Pending", value: 15, color: "text-yellow-500" },
  { label: "Replied", value: 8, color: "text-orange-500" },
  { label: "Conversions", value: 3, color: "text-blue-600" },
  { label: "Response Rate", value: "34.8%", color: "text-blue-600" },
];

export default function Outreach() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Prospect Dashboard</h2>
      <p className="text-gray-500 mt-2">
        AI-powered prospect discovery and engagement analytics
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="mt-1 text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-2">Best Matched Prospects</h2>
        <div className="space-y-4">
          {sampleProspects.map((p, i) => (
            <ProspectCard key={i} prospect={p} />
          ))}
        </div>
      </div>
    </>
  )
}
