import { useState } from 'react'
import axios from 'axios'

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    product: '',
    job_roles: '',
    company_size: '',
    region: '',
    goal: '',
    brand_voice: '',
    triggers: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      job_roles: formData.job_roles.split(','),
      triggers: formData.triggers.split(',')
    }
    await axios.post('http://localhost:8000/campaign/create', payload)
    alert("Campaign created!")
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 text-center">
        Create LinkedIn Campaign
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-6">
        Set up your AI-powered outreach campaign. Define your ideal prospects and let our system craft personalized messages that convert.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white border rounded-lg p-6 shadow">

        {/* Product/Service */}
        <div>
          <label className="block font-medium mb-1">Product/Service *</label>
          <textarea
            name="product"
            rows={2}
            placeholder="Describe what you're offering (e.g., AI-powered HR SaaS for streamlined hiring)"
            value={formData.product}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            required
          />
        </div>

        {/* Job Roles */}
        <div>
          <label className="block font-medium mb-1">Target Roles</label>
          <input
            name="job_roles"
            placeholder="e.g., CTO, Head of HR, Growth Manager"
            value={formData.job_roles}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Company Size */}
        <div>
          <label className="block font-medium mb-1">Company Size</label>
          <select
            name="company_size"
            value={formData.company_size}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">Select company size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label className="block font-medium mb-1">Region/Location</label>
          <input
            name="region"
            placeholder="Select region"
            value={formData.region}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Goal */}
        <div>
          <label className="block font-medium mb-1">Outreach Goal</label>
          <input
            name="goal"
            placeholder="What's your goal?"
            value={formData.goal}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Brand Voice */}
        <div>
          <label className="block font-medium mb-1">Brand Voice</label>
          <select
            name="brand_voice"
            value={formData.brand_voice}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">Select tone</option>
            <option value="Professional">Professional</option>
            <option value="Friendly">Friendly</option>
            <option value="Assertive">Assertive</option>
            <option value="Casual">Casual</option>
          </select>
        </div>

        {/* Triggers */}
        <div>
          <label className="block font-medium mb-1">Optional Triggers (Advanced)</label>
          <div className="flex items-center gap-2">
            <input
              name="triggers"
              placeholder="Select trigger events"
              value={formData.triggers}
              onChange={handleChange}
              className="flex-grow border rounded px-3 py-2 text-sm"
            />
            <button type="button" className="px-3 py-2 text-sm border rounded text-gray-600 hover:bg-gray-50">
              Add Trigger
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 rounded text-white text-sm font-medium bg-gradient-to-r from-blue-500 to-pink-500 shadow-md hover:opacity-90"
          >
            Create Campaign & Find Prospects
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Connect Supabase to save campaigns and enable AI-powered prospect analysis
          </p>
        </div>
      </form>
    </div>
  )
}
