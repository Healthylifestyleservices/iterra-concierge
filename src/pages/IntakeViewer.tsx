import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const IntakeViewer = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('intake_submissions').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Fetch error:', error.message);
      } else {
        setSubmissions(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">iTERRA Intake Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#F8F3EC] text-left text-sm">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Gender</th>
              <th className="p-3 border">Concerns</th>
              <th className="p-3 border">Pet Owner</th>
              <th className="p-3 border">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((entry) => (
              <tr key={entry.id} className="border-t">
                <td className="p-3">{entry.name}</td>
                <td className="p-3">{entry.email}</td>
                <td className="p-3 capitalize">{entry.gender}</td>
                <td className="p-3">{entry.concerns}</td>
                <td className="p-3">{entry.pet_owner ? 'Yes' : 'No'}</td>
                <td className="p-3 text-sm text-gray-600">{new Date(entry.created_at).toLocaleString()}</td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500 italic">No submissions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntakeViewer;