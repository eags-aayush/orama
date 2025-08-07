import { useState } from 'react'
import axios from 'axios'

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    product: '',
    target_industry: '',
    job_roles: '',
    company_size: '',
    region: '',
    goal: '',
    brand_voice: '',
    triggers: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {["product", "target_industry", "job_roles", "company_size", "region", "goal", "brand_voice", "triggers"].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field.replace('_', ' ')}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  )
}
