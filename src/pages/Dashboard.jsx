import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { ChartLine, Clock } from "lucide-react";

export default function Dashboard() {
  const [metrics, setMetrics] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8000/dashboard/metrics')
      .then(res => setMetrics(res.data))
  }, [])

  return (
    <>
      <Navbar />
    <div className="min-h-screen px-6 py-10">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">Analytics Dashboard</h1>
        <p className="text-gray-500 mt-2">Campaign performance and ROI tracking</p>
      </div>

      {/* Grid Cards */}
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Performance Metrics Card */}
        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 text-blue-600 font-semibold text-lg mb-4">
            <ChartLine />
            Performance Metrics
          </div>
          <div className="text-center">
            <ChartLine className="text-4xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Real-time Analytics</h3>
            <p className="text-gray-500 mt-2">
              Track campaign performance with Supabase backend
            </p>
          </div>
        </div>

        {/* Automation Insights Card */}
        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 text-blue-600 font-semibold text-lg mb-4">
            <Clock />
            Automation Insights
          </div>
          <div className="text-center">
            <Clock className="text-4xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Schedule Analytics</h3>
            <p className="text-gray-500 mt-2">
              Optimize outreach timing with data insights
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
