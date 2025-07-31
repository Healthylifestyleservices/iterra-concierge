import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const IntakeForm = () => {
  const [form, setForm] = useState({ name: '', email: '', gender: '', concerns: '', pet_owner: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('intake_submissions').insert([form]);
    if (error) {
      console.error('Submission error:', error.message);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <p className="text-lg font-semibold">Thank you! Your intake has been received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">Personalized Wellness Intake</h2>

      <input name="name" onChange={handleChange} value={form.name} required placeholder="Full Name" className="w-full border rounded px-3 py-2" />
      <input name="email" onChange={handleChange} value={form.email} required placeholder="Email" type="email" className="w-full border rounded px-3 py-2" />
      
      <select name="gender" onChange={handleChange} value={form.gender} className="w-full border rounded px-3 py-2">
        <option value="">Select Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other / Prefer not to say</option>
      </select>

      <textarea name="concerns" onChange={handleChange} value={form.concerns} rows={4} placeholder="Wellness goals or concerns" className="w-full border rounded px-3 py-2" />
      
      <label className="flex items-center gap-2">
        <input type="checkbox" name="pet_owner" checked={form.pet_owner} onChange={handleChange} />
        I have pets
      </label>

      <button type="submit" className="bg-[#b89c77] text-white px-6 py-2 rounded-lg">Submit Intake</button>
    </form>
  );
};

export default IntakeForm;