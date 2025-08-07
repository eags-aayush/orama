import CampaignForm from '../components/CampaignForm'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-xl mb-2">Create Campaign</h2>
        <CampaignForm />
      </div>
    </>
  )
}
