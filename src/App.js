import { useState } from "react";

const skills = [
  "Python", "JavaScript", "Java", "SQL", "R", "C++", "HTML/CSS",
  "Machine Learning", "Data Analysis", "Cloud Computing", "Cybersecurity",
  "Mobile App Development", "Web Development", "Database Management",
  "Excel", "PowerPoint", "Project Management", "Finance", "Accounting",
  "Business Strategy", "Market Research", "Operations", "Supply Chain",
  "Communication", "Leadership", "Problem Solving", "Critical Thinking",
  "Teamwork", "Time Management", "Negotiation", "Public Speaking",
  "Graphic Design", "UI/UX Design", "Video Editing", "Content Writing",
  "Social Media", "Photography", "Storytelling", "Branding",
  "Research", "Teaching", "Customer Service", "Sales", "Marketing",
  "Event Planning", "Foreign Language", "Statistics"
];

const interests = [
  "Working with Numbers & Data", "Building & Coding Software",
  "Designing Beautiful Things", "Writing & Storytelling",
  "Helping & Teaching People", "Leading & Managing Teams",
  "Technology & Innovation", "Business & Entrepreneurship",
  "Healthcare & Medicine", "Education & Training",
  "Arts & Entertainment", "Science & Research",
  "Law & Justice", "Finance & Investment",
  "Marketing & Advertising", "Environment & Sustainability",
  "Solving Complex Problems", "Meeting & Talking to People",
  "Working Independently", "Travelling & Exploring",
  "Organizing & Planning", "Creating & Innovating",
  "Analyzing & Investigating", "Working with Machines or Tools"
];

const educationOptions = [
  { label: "High School", icon: "🏫" },
  { label: "Currently in College", icon: "🎓" },
  { label: "Bachelor's Degree", icon: "📘" },
  { label: "Master's Degree", icon: "🧠" },
  { label: "Self-taught / Bootcamp", icon: "💻" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #0a0a0f; color: #f0eee8; min-height: 100vh; }
  .app { min-height: 100vh; background: #0a0a0f; }
  .home { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 24px; position: relative; overflow: hidden; }
  .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(99,60,255,0.15); border: 1px solid rgba(99,60,255,0.3); color: #a78bfa; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px; border-radius: 100px; margin-bottom: 28px; }
  .badge::before { content: ''; width: 6px; height: 6px; background: #a78bfa; border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  .home-title { font-family: 'Syne', sans-serif; font-size: clamp(48px, 8vw, 88px); font-weight: 800; line-height: 1; text-align: center; margin-bottom: 16px; letter-spacing: -0.03em; }
  .home-title span { background: linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .home-sub { font-size: 18px; color: #888; text-align: center; max-width: 440px; line-height: 1.6; margin-bottom: 48px; font-weight: 300; }
  .start-btn { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #6630ff, #a855f7); color: white; border: none; padding: 18px 40px; border-radius: 100px; font-size: 16px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 0 40px rgba(99,60,255,0.4); margin-bottom: 48px; }
  .start-btn:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(99,60,255,0.6); }
  .home-stats { display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; }
  .stat { text-align: center; }
  .stat-num { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 700; background: linear-gradient(135deg, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .stat-label { font-size: 13px; color: #555; margin-top: 2px; }
  .form-page { max-width: 760px; margin: 0 auto; padding: 48px 24px 80px; }
  .back-btn { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; color: #666; font-size: 14px; cursor: pointer; font-family: 'DM Sans', sans-serif; margin-bottom: 32px; transition: color 0.2s; padding: 0; }
  .back-btn:hover { color: #a78bfa; }
  .progress-bar { height: 2px; background: #1a1a2e; border-radius: 2px; margin-bottom: 32px; overflow: hidden; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, #6630ff, #f472b6); border-radius: 2px; transition: width 0.5s ease; }
  .section-title { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 700; margin-bottom: 6px; color: #f0eee8; }
  .section-sub { color: #555; font-size: 14px; margin-bottom: 24px; }
  .section-block { margin-bottom: 48px; }
  .section-label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #444; margin-bottom: 16px; }
  .edu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
  .edu-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 12px; padding: 16px 12px; cursor: pointer; transition: all 0.2s; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .edu-card:hover { border-color: #6630ff; background: rgba(102,48,255,0.05); }
  .edu-card.active { border-color: #a78bfa; background: rgba(167,139,250,0.08); }
  .edu-icon { font-size: 24px; }
  .edu-label { font-size: 12px; color: #888; font-weight: 400; line-height: 1.3; }
  .edu-card.active .edu-label { color: #a78bfa; }
  .chip-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { background: #111118; border: 1px solid #1e1e2e; border-radius: 100px; padding: 8px 16px; font-size: 13px; color: #666; cursor: pointer; transition: all 0.18s; font-family: 'DM Sans', sans-serif; }
  .chip:hover { border-color: #333; color: #ccc; }
  .chip.active { background: rgba(167,139,250,0.1); border-color: #a78bfa; color: #a78bfa; }
  .count-badge { display: inline-flex; align-items: center; justify-content: center; background: rgba(167,139,250,0.15); color: #a78bfa; font-size: 11px; font-weight: 600; min-width: 20px; height: 20px; border-radius: 100px; padding: 0 6px; margin-left: 6px; }
  .submit-area { position: sticky; bottom: 24px; display: flex; justify-content: center; margin-top: 40px; }
  .submit-btn { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #6630ff, #a855f7); color: white; border: none; padding: 16px 48px; border-radius: 100px; font-size: 15px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; box-shadow: 0 8px 32px rgba(99,60,255,0.4); }
  .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,60,255,0.6); }
  .submit-btn:disabled { opacity: 0.3; cursor: not-allowed; box-shadow: none; }
  .loading-page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; }
  .loader { width: 56px; height: 56px; border-radius: 50%; border: 2px solid #1e1e2e; border-top-color: #a78bfa; animation: spin 0.8s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .loading-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 600; color: #f0eee8; }
  .loading-sub { font-size: 14px; color: #444; }
  .results-page { max-width: 760px; margin: 0 auto; padding: 48px 24px 80px; }
  .results-title { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800; margin-bottom: 8px; line-height: 1.1; }
  .results-title span { background: linear-gradient(135deg, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .results-sub { color: #555; font-size: 15px; margin-bottom: 40px; }
  .career-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 20px; padding: 28px; margin-bottom: 16px; transition: border-color 0.2s; cursor: pointer; }
  .career-card:hover { border-color: #2e2e4e; }
  .career-card.open { border-color: rgba(167,139,250,0.3); }
  .career-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
  .career-num { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: #333; text-transform: uppercase; margin-bottom: 8px; }
  .career-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: #f0eee8; margin-bottom: 8px; }
  .career-desc { font-size: 14px; color: #666; line-height: 1.6; }
  .expand-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #1e1e2e; display: flex; align-items: center; justify-content: center; color: #444; font-size: 18px; transition: all 0.2s; margin-top: 4px; }
  .career-card.open .expand-icon { border-color: #a78bfa; color: #a78bfa; transform: rotate(45deg); }
  .career-details { margin-top: 24px; padding-top: 24px; border-top: 1px solid #1a1a2a; display: none; }
  .career-card.open .career-details { display: block; }
  .detail-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #444; margin-bottom: 12px; margin-top: 20px; font-weight: 500; }
  .detail-label:first-child { margin-top: 0; }
  .skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag { background: rgba(167,139,250,0.08); border: 1px solid rgba(167,139,250,0.2); color: #a78bfa; font-size: 12px; padding: 5px 12px; border-radius: 100px; }
  .steps-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .step-item { display: flex; gap: 12px; align-items: flex-start; }
  .step-num { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.2); color: #a78bfa; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
  .step-text { font-size: 14px; color: #888; line-height: 1.5; }
  .restart-btn { display: inline-flex; align-items: center; gap: 8px; background: none; border: 1px solid #1e1e2e; color: #666; padding: 12px 28px; border-radius: 100px; font-size: 14px; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; margin-top: 32px; }
  .restart-btn:hover { border-color: #333; color: #ccc; }
  .error-page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 24px; }
  .error-icon { font-size: 48px; }
  .error-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: #f0eee8; }
  .error-sub { color: #555; font-size: 14px; }
`;

export default function App() {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({ education: "", selectedSkills: [], selectedInterests: [] });
  const [results, setResults] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const toggle = (field, item) => setForm(prev => ({
    ...prev,
    [field]: prev[field].includes(item)
      ? prev[field].filter(i => i !== item)
      : [...prev[field], item]
  }));

  const canSubmit = form.education && form.selectedSkills.length > 0 && form.selectedInterests.length > 0;

  const progressPct = () => {
    let score = 0;
    if (form.education) score += 33;
    if (form.selectedSkills.length > 0) score += 33;
    if (form.selectedInterests.length > 0) score += 34;
    return score;
  };

  const analyzeProfile = async () => {
    setPage("loading");
    try {
      const prompt = `Education: ${form.education}
Skills: ${form.selectedSkills.join(", ")}
Interests: ${form.selectedInterests.join(", ")}
Respond ONLY in this JSON format, no extra text, no markdown:
{
  "careers": [
    {
      "title": "Career Title",
      "description": "Why this fits you in 2 sentences",
      "requiredSkills": ["skill1", "skill2", "skill3"],
      "steps": ["step1", "step2", "step3", "step4"]
    }
  ]
}`;

      const response = await fetch("/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7
        })
      });

      const data = await response.json();
console.log("Full response:", JSON.stringify(data));
const text = data.choices[0].message.content;
console.log("Text:", text);
const clean = text.replace(/```json|```/g, "").trim();
const parsed = JSON.parse(clean);
setResults(parsed.careers);
setPage("results");
    } catch (err) {
      console.error("Error:", err);
      setPage("error");
    }
  };

  return (
    <div className="app">
      <style>{styles}</style>

      {page === "home" && (
        <div className="home">
          <div className="badge">AI-Powered Career Guidance</div>
          <h1 className="home-title">
            Find Your<br /><span>Perfect Career</span>
          </h1>
          <p className="home-sub">
            Tell us about your skills and interests. We'll match you with career paths built for who you are.
          </p>
          <button className="start-btn" onClick={() => setPage("form")}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="home-stats">
            <div className="stat"><div className="stat-num">50+</div><div className="stat-label">Skills tracked</div></div>
            <div className="stat"><div className="stat-num">24+</div><div className="stat-label">Interest areas</div></div>
            <div className="stat"><div className="stat-num">AI</div><div className="stat-label">Powered matching</div></div>
          </div>
        </div>
      )}

      {page === "form" && (
        <div className="form-page">
          <button className="back-btn" onClick={() => setPage("home")}>← Back</button>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPct()}%` }} />
          </div>
          <h1 className="section-title">Build your profile</h1>
          <p className="section-sub">Select all that apply — the more you pick, the better your matches.</p>

          <div className="section-block">
            <div className="section-label">Education level</div>
            <div className="edu-grid">
              {educationOptions.map(opt => (
                <div key={opt.label} className={`edu-card ${form.education === opt.label ? "active" : ""}`} onClick={() => setForm(prev => ({ ...prev, education: opt.label }))}>
                  <span className="edu-icon">{opt.icon}</span>
                  <span className="edu-label">{opt.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-block">
            <div className="section-label">Skills {form.selectedSkills.length > 0 && <span className="count-badge">{form.selectedSkills.length}</span>}</div>
            <div className="chip-grid">
              {skills.map(skill => (
                <button key={skill} className={`chip ${form.selectedSkills.includes(skill) ? "active" : ""}`} onClick={() => toggle("selectedSkills", skill)}>{skill}</button>
              ))}
            </div>
          </div>

          <div className="section-block">
            <div className="section-label">Interests {form.selectedInterests.length > 0 && <span className="count-badge">{form.selectedInterests.length}</span>}</div>
            <div className="chip-grid">
              {interests.map(interest => (
                <button key={interest} className={`chip ${form.selectedInterests.includes(interest) ? "active" : ""}`} onClick={() => toggle("selectedInterests", interest)}>{interest}</button>
              ))}
            </div>
          </div>

          <div className="submit-area">
            <button className="submit-btn" onClick={analyzeProfile} disabled={!canSubmit}>
              Predict My Career Path
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {page === "loading" && (
        <div className="loading-page">
          <div className="loader" />
          <div className="loading-title">Analyzing your profile…</div>
          <div className="loading-sub">Finding your best career matches</div>
        </div>
      )}

      {page === "results" && (
        <div className="results-page">
          <div className="badge">Your Results</div>
          <h1 className="results-title">Your career<br /><span>matches</span></h1>
          <p className="results-sub">Based on your education, skills, and interests.</p>
          {results.map((career, i) => (
            <div key={i} className={`career-card ${expanded === i ? "open" : ""}`} onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className="career-top">
                <div>
                  <div className="career-num">Match {String(i + 1).padStart(2, "0")}</div>
                  <div className="career-title">{career.title}</div>
                  <div className="career-desc">{career.description}</div>
                </div>
                <div className="expand-icon">+</div>
              </div>
              <div className="career-details">
                <div className="detail-label">Required skills</div>
                <div className="skills-list">
                  {career.requiredSkills.map((s, j) => <span key={j} className="skill-tag">{s}</span>)}
                </div>
                <div className="detail-label">Steps to get there</div>
                <ul className="steps-list">
                  {career.steps.map((s, j) => (
                    <li key={j} className="step-item">
                      <span className="step-num">{j + 1}</span>
                      <span className="step-text">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button className="restart-btn" onClick={() => { setPage("home"); setResults([]); setExpanded(null); setForm({ education: "", selectedSkills: [], selectedInterests: [] }); }}>
            ← Start Over
          </button>
        </div>
      )}

      {page === "error" && (
        <div className="error-page">
          <div className="error-icon">⚠️</div>
          <div className="error-title">Something went wrong</div>
          <div className="error-sub">Check your API key or try again</div>
          <button className="restart-btn" onClick={() => setPage("home")}>← Go Home</button>
        </div>
      )}
    </div>
  );
}
