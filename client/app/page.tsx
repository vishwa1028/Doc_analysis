"use client";
import { useEffect, useState } from 'react';

type AnalysisResult = {
  results?: { keyword_macro: string; analysis_type: string; value: string[] }[];
  error?: string;
};

export default function Home() {
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/analyze', {  // Changed to localhost:5000
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text_body: "This is a confidential agreement. It has confidential data and terms.",
        keyword_macros: ["confidential+agreement"],
        analysis_type: "top_words"
      })
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setResult(data))
      .catch(err => {
        console.error('Fetch error:', err);
        setResult({ error: err.message });
      });
  }, []);

  return (
    <div>
      <h1>Document Analysis</h1>
      <pre>{result ? JSON.stringify(result, null, 2) : 'Loading...'}</pre>
    </div>
  );
}