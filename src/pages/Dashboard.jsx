import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const [metrics, setMetrics] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8000/dashboard/metrics')
      .then(res => setMetrics(res.data))
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-xl mb-2">Campaign Metrics</h2>
        <ul className="list-disc ml-6">
          <li>Connections Sent: {metrics.connections_sent}</li>
          <li>Replies Received: {metrics.replies_received}</li>
          <li>Conversion Rate: {metrics.conversion_rate}</li>
        </ul>
      </div>
    </>
  )
}
