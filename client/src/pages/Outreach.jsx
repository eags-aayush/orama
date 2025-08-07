import ProspectCard from '../components/ProspectCard'

const sampleProspects = [
  {
    name: "Anjali Mehta",
    role: "HR Manager",
    company: "HirePulse",
    message: "Hi Anjali, loved your post on hybrid hiring..."
  }
]

export default function Outreach() {
  return (
    <div>
      <h2 className="text-xl mb-2">Top Prospects</h2>
      <div className="space-y-4">
        {sampleProspects.map((p, i) => (
          <ProspectCard key={i} prospect={p} />
        ))}
      </div>
    </div>
  )
}
