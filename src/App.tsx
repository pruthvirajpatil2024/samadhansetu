import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Landmark,
  MapPinned,
  Search,
  Users,
} from 'lucide-react'
import { useState } from 'react'

type ViewName =
  | 'landing'
  | 'submit'
  | 'explorer'
  | 'detail'
  | 'expert'
  | 'matching'
  | 'university'
  | 'workspace'
  | 'project'
  | 'industry'
  | 'gov'
  | 'impact'

const navItems: Array<{ label: string; view: ViewName }> = [
  { label: 'Home', view: 'landing' },
  { label: 'Challenges', view: 'explorer' },
  { label: 'Universities', view: 'university' },
  { label: 'Industry Partners', view: 'industry' },
  { label: 'Impact', view: 'impact' },
]

const challengeCards = [
  {
    id: 'CH-JH-1042',
    title: 'Smart Water Quality Monitoring for Rural Communities',
    location: 'Dumka',
    domain: 'Water & Sanitation',
    priority: 'High Priority',
    date: '14 Mar 2026',
    status: 'Expert Validation',
    impact: 'High',
    aiMatch: 94,
    problem:
      'Community wells are showing rising turbidity and contamination risk during monsoon periods, affecting drinking water safety in remote villages.',
    evidence: ['Water quality test reports', 'Community complaints log', 'Photo evidence from 3 locations'],
    beneficiaries: '12,000 residents',
    expectedImpact: 'Improved potable water safety and early alerts for contamination events.',
  },
  {
    id: 'CH-JH-9831',
    title: 'Affordable Smart Irrigation for Small Farmers',
    location: 'Giridih',
    domain: 'Agriculture',
    priority: 'Medium Priority',
    date: '27 Feb 2026',
    status: 'University Matched',
    impact: 'High',
    aiMatch: 96,
    problem:
      'Smallholder farmers need efficient irrigation guidance to reduce groundwater depletion and improve crop resilience.',
    evidence: ['Groundwater usage reports', 'Farmer interviews', 'Satellite rainfall trend'],
    beneficiaries: '8,500 farmers',
    expectedImpact: 'Reduce irrigation wastage and increase productivity across wetland clusters.',
  },
  {
    id: 'CH-JH-7160',
    title: 'School Waste Segregation and Composting',
    location: 'Ranchi',
    domain: 'Waste Management',
    priority: 'High Priority',
    date: '04 Jan 2026',
    status: 'Prototype',
    impact: 'Medium',
    aiMatch: 88,
    problem:
      'Schools are generating large volumes of mixed waste without segregation facilities and composting systems.',
    evidence: ['Site inspection notes', 'Waste volume estimates', 'Student survey results'],
    beneficiaries: '3,200 students',
    expectedImpact: 'Lower landfill load and improved environmental awareness in schools.',
  },
]

const universityMatches = [
  {
    name: 'BIT Mesra',
    departments: 'Agricultural Engineering',
    expertise: 'IoT Research Lab',
    projects: '12 relevant projects',
    infrastructure: 'Smart farming field station',
    match: 96,
  },
  {
    name: 'IIT (ISM) Dhanbad',
    departments: 'Mining & Environmental Engineering',
    expertise: 'Water analytics lab',
    projects: '9 relevant projects',
    infrastructure: 'Sensor validation lab',
    match: 94,
  },
  {
    name: 'University of Ranchi',
    departments: 'Civil Engineering',
    expertise: 'Community innovation cell',
    projects: '11 relevant projects',
    infrastructure: 'Prototype incubation space',
    match: 91,
  },
]

const universityDirectory = [
  {
    name: 'BIT Mesra',
    type: 'Engineering University',
    city: 'Ranchi',
    completedProjects: 24,
    activeResearchers: 18,
    labs: ['IoT Lab', 'Agri Systems', 'Sensor Lab'],
    match: 96,
    focus: 'Smart agriculture and water-tech',
  },
  {
    name: 'IIT (ISM) Dhanbad',
    type: 'Technical Institute',
    city: 'Dhanbad',
    completedProjects: 19,
    activeResearchers: 22,
    labs: ['Water Analytics Lab', 'Climate Lab', 'Digital Twin Lab'],
    match: 94,
    focus: 'Water, mining and environmental resilience',
  },
  {
    name: 'University of Ranchi',
    type: 'Public University',
    city: 'Ranchi',
    completedProjects: 16,
    activeResearchers: 14,
    labs: ['Civic Innovation Cell', 'Prototype Lab', 'Community Design Studio'],
    match: 91,
    focus: 'Community innovation and civic tech',
  },
  {
    name: 'Ranchi University',
    type: 'Research University',
    city: 'Ranchi',
    completedProjects: 13,
    activeResearchers: 11,
    labs: ['Sustainability Lab', 'Rural Health Lab', 'Data Lab'],
    match: 89,
    focus: 'Policy, public systems and social impact',
  },
]

const industryMatches = [
  { name: 'Tata Steel CSR', support: 'Funding + pilot support' },
  { name: 'Jindal Foundation', support: 'Mentorship + deployment' },
  { name: 'Aarohan Labs', support: 'IoT prototyping' },
]

const startupDirectory = [
  {
    name: 'Aarohan Labs',
    type: 'Deep-tech startup',
    sector: 'Water Tech',
    stage: 'Pilot ready',
    activePilots: 4,
    funding: '₹48L',
    focus: 'Low-cost sensor networks and analytics',
  },
  {
    name: 'Saarthi Systems',
    type: 'Agri-tech startup',
    sector: 'Agriculture',
    stage: 'Scaling',
    activePilots: 7,
    funding: '₹1.2Cr',
    focus: 'Precision irrigation and farmer advisory',
  },
  {
    name: 'UrbanLoop',
    type: 'Circular economy startup',
    sector: 'Waste Management',
    stage: 'Field testing',
    activePilots: 3,
    funding: '₹32L',
    focus: 'Smart waste segregation and composting',
  },
  {
    name: 'MitraGrid',
    type: 'Social impact startup',
    sector: 'Energy & Inclusion',
    stage: 'Prototype',
    activePilots: 2,
    funding: '₹24L',
    focus: 'Community energy and shared infrastructure',
  },
  {
    name: 'Vayam Ventures',
    type: 'Innovation studio',
    sector: 'Education & skilling',
    stage: 'Market validation',
    activePilots: 5,
    funding: '₹60L',
    focus: 'Digital learning and skilling bootcamps',
  },
]

const impactStats = [
  { title: 'Beneficiaries', value: '12,84,000+', accent: 'bg-sky-50 text-sky-900' },
  { title: 'Solutions Developed', value: '620+', accent: 'bg-emerald-50 text-emerald-900' },
  { title: 'Solutions Deployed', value: '184', accent: 'bg-indigo-50 text-indigo-900' },
  { title: 'Funding Mobilized', value: '₹4.8 Cr', accent: 'bg-amber-50 text-amber-900' },
  { title: 'Industry Partnerships', value: '94', accent: 'bg-rose-50 text-rose-900' },
]

const governmentStats = [
  { label: 'Total Challenges', value: '2,450+' },
  { label: 'Validated', value: '1,862' },
  { label: 'Active Projects', value: '312' },
  { label: 'Deployed Solutions', value: '184' },
  { label: 'Beneficiaries', value: '12.8L+' },
]

const districtHeat = [
  ['Ranchi', 88],
  ['Dumka', 72],
  ['Giridih', 81],
  ['Jamshedpur', 67],
  ['Hazaribagh', 76],
  ['Deoghar', 64],
  ['Bokaro', 82],
  ['Palamu', 69],
]

const defaultForm = {
  title: 'Water quality sensors for rural handpumps',
  description:
    'Residents in remote hamlets face inconsistent access to clean drinking water due to contamination and delayed reporting from handpumps during monsoon months.',
  category: 'Water & Sanitation',
  district: 'Dumka',
  village: 'Kudda Gram',
  urgency: 'High',
}

const validationLayers = [
  { name: 'Authenticity Validation', status: 'Approved', fields: ['Genuine problem?', 'Evidence sufficient?', 'Location verified?'] },
  { name: 'Severity & Impact Validation', status: 'Needs Revision', fields: ['Urgency', 'Number of beneficiaries', 'Social impact'] },
  { name: 'Technical Feasibility', status: 'Pending', fields: ['Technical feasibility', 'Resource feasibility', 'Implementation feasibility'] },
  { name: 'Solution Quality Review', status: 'Approved', fields: ['Prototype quality', 'Pilot results', 'Deployment readiness'] },
]

const timelineStages = [
  'Submitted',
  'AI Triage',
  'Expert Validation',
  'University Matched',
  'Solution Development',
  'Pilot',
  'Approval',
  'Deployment',
]

function App() {
  const [currentView, setCurrentView] = useState<ViewName>('landing')
  const [challengeForm, setChallengeForm] = useState(defaultForm)
  const [submissionStep, setSubmissionStep] = useState(1)
  const [challengeSubmitted, setChallengeSubmitted] = useState(false)
  const [challengeId] = useState('CH-JH-1042')
  const [selectedChallenge, setSelectedChallenge] = useState(challengeCards[0])
  const [workspaceTab, setWorkspaceTab] = useState('Code')
  const [selectedUniversity, setSelectedUniversity] = useState<(typeof universityDirectory)[number] | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    Domain: [],
    District: [],
    Priority: [],
    Status: [],
    Impact: [],
    Date: [],
  })

  const handleWorkspaceOpen = () => {
    window.open('https://code-sync-1-t1y2.onrender.com/', '_blank', 'noopener,noreferrer')
  }

  const toggleFilter = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] ?? []
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]

      return { ...prev, [group]: next }
    })
  }

  const filteredChallenges = challengeCards.filter((challenge) => {
    const checks: Array<[string, string]> = [
      ['Domain', challenge.domain],
      ['District', challenge.location],
      ['Priority', challenge.priority],
      ['Status', challenge.status],
      ['Impact', challenge.impact],
      ['Date', challenge.date],
    ]

    return checks.every(([group, value]) => {
      const active = selectedFilters[group] ?? []
      if (active.length === 0) return true

      if (group === 'Date') {
        return active.some((option) => {
          if (option === '2026') return challenge.date.includes('2026')
          if (option === 'Last 90 days') return challenge.date.includes('2026')
          if (option === 'Last 30 days') return challenge.date.includes('2026')
          return option === value
        })
      }

      return active.includes(value)
    })
  })

  const showToast = (text: string) => {
    const toast = document.getElementById('toast')
    if (toast) {
      toast.textContent = text
      toast.classList.remove('opacity-0', 'translate-y-3')
      toast.classList.add('opacity-100', 'translate-y-0')
      window.setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-3')
        toast.classList.remove('opacity-100', 'translate-y-0')
      }, 2300)
    }
  }

  const handleChallengeSelect = (challenge: (typeof challengeCards)[number]) => {
    setSelectedChallenge(challenge)
    setCurrentView('detail')
  }

  const renderLanding = () => (
    <>
      <main className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
        <section>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Impact</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Jharkhand map view</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-bold text-slate-900">Jharkhand district impact map</div>
                <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-700">AI insights</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {districtHeat.map(([district, score]) => (
                  <div key={district} className="rounded-2xl border border-slate-200 p-3" style={{ background: `rgba(14, 116, 144, ${0.08 + Number(score) / 180})` }}>
                    <div className="text-sm font-semibold text-slate-700">{district}</div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">{score}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">impact</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-lg font-bold text-slate-900">Recent AI-generated insight</div>
              <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4 text-slate-700">
                <span className="inline-flex rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-700">AI-assisted</span>
                <p className="mt-3 text-sm leading-7">Water-related challenges increased by 23% this quarter in rural districts, with highest demand for sanitation and groundwater monitoring solutions.</p>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span>Deployment success</span><strong className="text-emerald-700">81%</strong></div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span>Average resolution time</span><strong className="text-slate-800">8.2 months</strong></div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span>Citizen satisfaction</span><strong className="text-sky-700">86%</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Key features</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Purpose-built for challenge-to-solution delivery</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['AI Triage', 'AI-assisted categorization, impact scoring and duplicate analysis to prioritize issues.', 'Bot'],
              ['Expert Validation', 'Multi-layer review by domain experts to verify genuineness and readiness.', 'Users'],
              ['University Matching', 'AI recommends universities and departments based on capability and prior experience.', 'GraduationCap'],
              ['Industry & CSR', 'Funding, pilot support and deployment pathways for scalable models.', 'BriefcaseBusiness'],
            ].map(([title, desc, iconName]) => {
              const Icon = iconName === 'Bot' ? Bot : iconName === 'Users' ? Users : iconName === 'GraduationCap' ? GraduationCap : BriefcaseBusiness
              return (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700"><Icon size={18} /></div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )

  const renderSubmit = () => (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Citizen challenge submission</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Submit a societal challenge</h2>
        </div>
        <button onClick={() => setCurrentView('landing')} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Back to home</button>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-4">
        {['Basic Information', 'Evidence', 'AI Preview', 'Review & Submit'].map((step, idx) => (
          <div key={step} className={`rounded-2xl border p-3 text-sm font-semibold ${submissionStep === idx + 1 ? 'border-sky-200 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-600'}`}>
            <div className="flex items-center justify-between">
              <span>Step {idx + 1}</span>
              {submissionStep > idx + 1 && <CheckCircle2 size={16} className="text-emerald-600" />}
            </div>
            <div className="mt-1">{step}</div>
          </div>
        ))}
      </div>

      {!challengeSubmitted ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          {submissionStep === 1 && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Challenge title</span>
                  <input value={challengeForm.title} onChange={(e) => setChallengeForm({ ...challengeForm, title: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Detailed description</span>
                  <textarea rows={5} value={challengeForm.description} onChange={(e) => setChallengeForm({ ...challengeForm, description: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400" />
                </label>
              </div>
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Category</span>
                    <select value={challengeForm.category} onChange={(e) => setChallengeForm({ ...challengeForm, category: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400">
                      <option>Water & Sanitation</option>
                      <option>Agriculture</option>
                      <option>Waste Management</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">District</span>
                    <select value={challengeForm.district} onChange={(e) => setChallengeForm({ ...challengeForm, district: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400">
                      <option>Dumka</option>
                      <option>Ranchi</option>
                      <option>Giridih</option>
                      <option>Deoghar</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Village/City</span>
                  <input value={challengeForm.village} onChange={(e) => setChallengeForm({ ...challengeForm, village: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400" />
                </label>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Location picker</span>
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center gap-2 text-slate-700"><MapPinned size={16} /> <span>Village cluster · 18.8 km from block office</span></div>
                    <div className="h-32 rounded-xl bg-[radial-gradient(circle_at_center,_rgba(14,116,144,0.08),_rgba(148,163,184,0.1)_50%,_rgba(255,255,255,0.4)_100%)] p-3">
                      <div className="relative h-full w-full rounded-xl border border-slate-200 bg-white/80">
                        <div className="absolute left-[54%] top-[48%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600 shadow-lg shadow-sky-200"></div>
                        <div className="absolute left-[48%] top-[42%] h-10 w-10 rounded-full border-2 border-dashed border-sky-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Urgency</span>
                  <select value={challengeForm.urgency} onChange={(e) => setChallengeForm({ ...challengeForm, urgency: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {submissionStep === 2 && (
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ['Upload photos', 'JPG, PNG, HEIC'],
                ['Upload videos', 'MP4, MOV'],
                ['Upload documents', 'PDF, DOCX'],
              ].map(([label, detail]) => (
                <div key={label} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm"><FileText size={18} /></div>
                  <div className="text-lg font-bold text-slate-900">{label}</div>
                  <div className="mt-2 text-sm text-slate-500">{detail}</div>
                  <button className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Choose file</button>
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Supporting information</span>
                  <textarea rows={4} placeholder="Add local observations, household impact, water sample logs or other evidence..." className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400" />
                </label>
              </div>
            </div>
          )}

          {submissionStep === 3 && (
            <div className="rounded-3xl border border-sky-200 bg-sky-50/80 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><Bot size={20} /></div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">AI-Assisted Analysis</div>
                    <div className="text-sm text-slate-600">AI-assisted recommendation — subject to expert validation.</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Processed</span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ['Category', 'Water & Sanitation'],
                  ['Priority', 'High'],
                  ['Duplicate Probability', '12%'],
                  ['Estimated Impact', 'High'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-sky-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
                    <div className="mt-2 text-lg font-bold text-slate-900">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Suggested expertise</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Environmental Engineering', 'IoT', 'Water Management'].map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Suggested institutions</div>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2"><span>IIT (mock)</span><span className="text-sky-700">94% fit</span></div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2"><span>BIT Mesra (mock)</span><span className="text-sky-700">96% fit</span></div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2"><span>University of Ranchi (mock)</span><span className="text-sky-700">91% fit</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submissionStep === 4 && (
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Challenge summary</div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">{challengeForm.title}</h3>
                  <p className="mt-3 text-slate-600">{challengeForm.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ['Category', challengeForm.category],
                    ['District', challengeForm.district],
                    ['Location', challengeForm.village],
                    ['Urgency', challengeForm.urgency],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
                      <div className="mt-2 text-lg font-bold text-slate-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Declaration</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>I confirm the information provided is accurate to the best of my knowledge.</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>I consent to AI-assisted screening and expert validation by relevant institutions.</span></div>
                  <div className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>I understand this submission is subject to review and may be prioritized based on evidence.</span></div>
                </div>
                <button onClick={() => { setChallengeSubmitted(true); showToast('Challenge submitted successfully'); }} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white">
                  Submit Challenge
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <button onClick={() => setSubmissionStep((step) => Math.max(1, step - 1))} disabled={submissionStep === 1} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50">
              Previous
            </button>
            {!challengeSubmitted && (
              <button onClick={() => setSubmissionStep((step) => Math.min(4, step + 1))} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                {submissionStep === 4 ? 'Review' : 'Continue'}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={28} />
          </div>
          <h3 className="mt-5 text-3xl font-bold text-slate-900">Challenge submitted successfully</h3>
          <p className="mt-3 text-slate-600">Your challenge has been queued for AI-assisted triage and expert review.</p>
          <div className="mt-6 inline-flex rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-lg font-bold text-emerald-700">Challenge ID: {challengeId}</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={() => setCurrentView('explorer')} className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Explore challenges</button>
            <button onClick={() => setCurrentView('gov')} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">View dashboard</button>
          </div>
        </div>
      )}
    </div>
  )

  const renderExplorer = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Challenge explorer</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Discover validated societal challenges</h2>
        </div>
        <button onClick={() => setCurrentView('submit')} className="rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white">Submit a challenge</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500"><Search size={16} /> Filters</div>
          {([
            ['Domain', ['Water & Sanitation', 'Agriculture', 'Waste Management', 'Education']],
            ['District', ['Dumka', 'Giridih', 'Ranchi', 'Jamshedpur']],
            ['Priority', ['High Priority', 'Medium Priority', 'Low Priority']],
            ['Status', ['Expert Validation', 'University Matched', 'Prototype']],
            ['Impact', ['High', 'Medium', 'Low']],
            ['Date', ['Last 30 days', 'Last 90 days', '2026']],
          ] as Array<[string, string[]]>).map(([title, options]) => (
            <div key={title} className="mb-5">
              <div className="mb-2 text-sm font-semibold text-slate-700">{title}</div>
              <div className="space-y-2">
                {options.map((option) => {
                  const checked = selectedFilters[title]?.includes(option) ?? false

                  return (
                    <label key={option} className="flex items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFilter(title, option)}
                        className="h-4 w-4 rounded border-slate-300 text-sky-600"
                      />
                      {option}
                    </label>
                  )
                })}
              </div>
            </div>
          ))}
        </aside>

        <div className="space-y-5">
          {filteredChallenges.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
              No challenges match the selected filters.
            </div>
          ) : (
            filteredChallenges.map((challenge) => (
              <button key={challenge.id} onClick={() => handleChallengeSelect(challenge)} className="w-full rounded-[28px] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-sky-200 hover:shadow-md">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">{challenge.id}</div>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{challenge.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1"><MapPinned size={14} /> {challenge.location}</span>
                      <span>{challenge.domain}</span>
                      <span>{challenge.date}</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                    <div className="font-semibold">{challenge.status}</div>
                    <div className="mt-1 text-sky-700">AI Match: {challenge.aiMatch}%</div>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-4">
                  <div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Priority</div><div className="mt-1 font-bold text-slate-900">{challenge.priority}</div></div>
                  <div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Impact</div><div className="mt-1 font-bold text-slate-900">{challenge.impact}</div></div>
                  <div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Submitted</div><div className="mt-1 font-bold text-slate-900">{challenge.date}</div></div>
                  <div><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Status</div><div className="mt-1 font-bold text-slate-900">{challenge.status}</div></div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )

  const renderDetail = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Challenge detail</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{selectedChallenge.title}</h2>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setCurrentView('explorer')} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Back to explorer</button>
          <button onClick={() => setCurrentView('expert')} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white">View validation</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-sky-100 px-2.5 py-1 font-semibold text-sky-700">{selectedChallenge.id}</span>
              <span className="rounded-full bg-amber-50 px-2.5 py-1 font-semibold text-amber-700">{selectedChallenge.priority}</span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">{selectedChallenge.status}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Problem statement</div>
                <p className="mt-2 text-slate-600">{selectedChallenge.problem}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</div>
                <div className="mt-2 text-slate-900 font-semibold">{selectedChallenge.location}</div>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">Community Information</div>
                <div className="mt-2 text-slate-600">{selectedChallenge.beneficiaries} across 7 village clusters</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xl font-bold text-slate-900">Evidence and impact</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Evidence</div>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {selectedChallenge.evidence.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Expected impact</div>
                <p className="mt-3 text-slate-600">{selectedChallenge.expectedImpact}</p>
                <div className="mt-5 rounded-2xl bg-sky-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold">AI insight</div>
                  <div className="mt-2">Potential to save 26% on water wastage and improve household health outcomes over a six-month pilot.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xl font-bold text-slate-900">AI analysis panel</div>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between"><span>Domain classification</span><strong className="text-slate-900">{selectedChallenge.domain}</strong></div>
              <div className="flex justify-between"><span>Priority score</span><strong className="text-slate-900">92/100</strong></div>
              <div className="flex justify-between"><span>Duplicate analysis</span><strong className="text-slate-900">12% risk</strong></div>
              <div className="flex justify-between"><span>Suggested expertise</span><strong className="text-slate-900">IoT + Water Monitoring</strong></div>
              <div className="flex justify-between"><span>AI confidence</span><strong className="text-sky-700">94%</strong></div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xl font-bold text-slate-900">Validation timeline</div>
            <div className="mt-5 space-y-3">
              {timelineStages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 3 ? 'bg-sky-600 text-white' : index < 3 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 text-sm text-slate-700">{stage}</div>
                  {index < timelineStages.length - 1 && <ArrowRight size={14} className="text-slate-400" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderExpert = () => (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Expert validation</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Challenge awaiting validation</h2>
        </div>
        <button onClick={() => setCurrentView('matching')} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Proceed to matching</button>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <div className="mb-6 rounded-2xl border border-sky-200 bg-sky-50 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Challenge ID</div>
              <div className="mt-1 text-xl font-bold text-slate-900">CH-JH-1042</div>
            </div>
            <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">High priority</div>
          </div>
        </div>

        <div className="space-y-5">
          {validationLayers.map((layer) => (
            <div key={layer.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="text-lg font-bold text-slate-900">{layer.name}</div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${layer.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : layer.status === 'Needs Revision' ? 'bg-amber-100 text-amber-700' : layer.status === 'Pending' ? 'bg-slate-200 text-slate-700' : 'bg-rose-100 text-rose-700'}`}>
                  {layer.status}
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {layer.fields.map((field) => (
                  <div key={field} className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="text-sm font-semibold text-slate-700">{field}</div>
                    <select defaultValue="Pending" className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none">
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                      <option>Needs Revision</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Expert comments</span>
              <textarea rows={5} defaultValue="Evidence is strong and field verification appears genuine. Need a more detailed beneficiary count and water sampling data for final approval." className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400" />
            </label>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700">Recommendation</div>
            <div className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">Approve with targeted revision in beneficiary count and sampling evidence before university onboarding.</div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={() => showToast('Challenge approved for university matching')} className="rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white">Approve</button>
              <button onClick={() => showToast('Revision requested from citizen and expert panel')} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">Request Revision</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMatching = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Intelligent university matching</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Affordable Smart Irrigation for Small Farmers</h2>
      </div>

      <div className="mb-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Challenge requirements</div>
            <div className="mt-2 text-lg font-bold text-slate-900">Agriculture + IoT + Water efficiency + Farmer outreach</div>
          </div>
          <button onClick={() => setCurrentView('university')} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white">Open university dashboard</button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3 text-slate-500">
          <div className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">Challenge requirements</div>
          <ArrowRight size={14} />
          <div className="rounded-full bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">AI capability matching</div>
          <ArrowRight size={14} />
          <div className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">University + expert + industry</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {universityMatches.map((match) => (
          <div key={match.name} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-slate-900">{match.name}</div>
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">{match.match}%</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div><span className="font-semibold text-slate-700">Relevant departments:</span> {match.departments}</div>
              <div><span className="font-semibold text-slate-700">Faculty expertise:</span> {match.expertise}</div>
              <div><span className="font-semibold text-slate-700">Previous projects:</span> {match.projects}</div>
              <div><span className="font-semibold text-slate-700">Infrastructure:</span> {match.infrastructure}</div>
              <div className="rounded-xl bg-slate-50 p-3 font-semibold text-slate-800">Match: {match.match}%</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xl font-bold text-slate-900">Industry matches</div>
        <div className="grid gap-4 md:grid-cols-3">
          {industryMatches.map((industry) => (
            <div key={industry.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-lg font-bold text-slate-900">{industry.name}</div>
              <div className="mt-2 text-sm text-slate-600">{industry.support}</div>
              <button onClick={() => showToast(`${industry.name} interest recorded`)} className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Express interest</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderUniversity = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Assigned Challenges', '24'],
            ['Active Projects', '12'],
            ['Pending Reviews', '08'],
            ['Completed Solutions', '41'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
              <div className="mt-2 text-3xl font-black text-slate-900">{value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xl font-bold text-slate-900">Recommended Challenges</div>
            <button onClick={() => setCurrentView('matching')} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700">View AI match</button>
          </div>
          <div className="space-y-4">
            {[
              ['Affordable Smart Irrigation for Small Farmers', '96%', 'Agriculture', 'High', 'Soil sensors, IoT, analytics'],
              ['School Waste Segregation and Composting', '88%', 'Waste Management', 'High', 'Waste audits, civic design'],
              ['Rural Water Testing Network', '92%', 'Water & Sanitation', 'High', 'Sensor calibration, portable labs'],
            ].map(([title, score, domain, priority, expertise]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{title}</div>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span>Match score: <strong className="text-sky-700">{score}</strong></span>
                      <span>Domain: {domain}</span>
                      <span>Priority: {priority}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Expertise</div>
                    <div className="mt-2 text-sm text-slate-700">{expertise}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div className="text-xl font-bold text-slate-900">University ecosystem</div>
            <button onClick={() => showToast('University directory opened')} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white">View universities</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {universityDirectory.map((university) => (
              <div key={university.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{university.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{university.type} · {university.city}</div>
                  </div>
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">{university.match}% match</span>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-600">
                  <div className="flex justify-between"><span>Completed projects</span><strong className="text-slate-800">{university.completedProjects}</strong></div>
                  <div className="flex justify-between"><span>Active researchers</span><strong className="text-slate-800">{university.activeResearchers}</strong></div>
                  <div className="flex justify-between"><span>Focus area</span><strong className="text-slate-800">{university.focus}</strong></div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Labs & capabilities</div>
                  <div className="flex flex-wrap gap-2">
                    {university.labs.map((lab) => (
                      <span key={lab} className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 border border-slate-200">{lab}</span>
                    ))}
                  </div>
                </div>

                <button onClick={() => setSelectedUniversity(university)} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                  View university
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedUniversity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">University profile</div>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">{selectedUniversity.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{selectedUniversity.type} · {selectedUniversity.city}</p>
              </div>
              <button onClick={() => setSelectedUniversity(null)} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">Close</button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Match score</div>
                <div className="mt-2 text-3xl font-black text-slate-900">{selectedUniversity.match}%</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus area</div>
                <div className="mt-2 text-base font-semibold text-slate-800">{selectedUniversity.focus}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-4"><span className="font-semibold text-slate-800">Completed projects:</span> {selectedUniversity.completedProjects}</div>
              <div className="rounded-2xl border border-slate-200 p-4"><span className="font-semibold text-slate-800">Active researchers:</span> {selectedUniversity.activeResearchers}</div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Labs & capabilities</div>
              <div className="flex flex-wrap gap-2">
                {selectedUniversity.labs.map((lab) => (
                  <span key={lab} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">{lab}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => { showToast(`${selectedUniversity.name} shortlisted`); setSelectedUniversity(null); }} className="rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white">Shortlist university</button>
              <button onClick={() => setSelectedUniversity(null)} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">Back to list</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderWorkspace = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Collaboration workspace</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Solution development workspace</h2>
        </div>
        <button onClick={() => setCurrentView('project')} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white">Project lifecycle</button>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 p-4">
          {['Code', 'Documents', 'Tasks', 'Discussion'].map((tab) => (
            <button key={tab} onClick={() => setWorkspaceTab(tab)} className={`rounded-lg px-3 py-2 text-sm font-semibold ${workspaceTab === tab ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {workspaceTab === 'Code' && (
          <div className="grid gap-0 lg:grid-cols-[220px_1fr_220px]">
            <div className="border-r border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Explorer</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="rounded-lg bg-white p-2 font-semibold">src</div>
                <div className="rounded-lg bg-white p-2">solution.py</div>
                <div className="rounded-lg bg-white p-2">sensor.h</div>
                <div className="rounded-lg bg-white p-2">README.md</div>
              </div>
            </div>

            <div className="bg-[#0f172a] p-4 text-slate-200">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>solution.py</span>
                <span>Saved</span>
              </div>
              <pre className="overflow-x-auto text-sm leading-7">
                {`def monitor_water_quality():
    threshold = 0.4
    if sensor.turbidity > threshold:
        trigger_alert()
        log_event("monsoon_alert")
    return optimize_pump_cycle()`}
              </pre>
            </div>

            <div className="border-l border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Active team</div>
              <div className="space-y-3">
                {[
                  ['Priya', 'editing solution.py'],
                  ['Rahul', 'joined the workspace'],
                  ['Aditi', 'reviewing validation'],
                ].map(([name, action]) => (
                  <div key={name} className="rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800">{name}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {workspaceTab === 'Documents' && (
          <div className="grid gap-6 p-6 md:grid-cols-2">
            {[
              ['Field Notes', 'District validation and community mapping'],
              ['Pilot Plan', 'Deployment, baseline metrics and outreach plan'],
              ['Mentor Feedback', 'Key revision points for technical design'],
              ['Impact Framing', 'Outcome metrics and district uplift model'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-slate-900"><BookOpen size={16} /> <span className="font-bold">{title}</span></div>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        )}

        {workspaceTab === 'Tasks' && (
          <div className="p-6">
            <div className="space-y-3">
              {[
                ['Water quality sensor calibration', 'Due today'],
                ['Farmer onboarding checklist', 'Due in 2 days'],
                ['Pilot deployment readiness', 'In review'],
              ].map(([task, due]) => (
                <div key={task} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3"><ClipboardCheck className="text-sky-700" size={18} /> <span className="font-medium text-slate-800">{task}</span></div>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">{due}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {workspaceTab === 'Discussion' && (
          <div className="p-6">
            <div className="space-y-4">
              {[
                ['Priya', 'The sensor range looks aligned to the pilot. Need one more field calibration run before we finalize the threshold.'],
                ['Rahul', 'I have shared the farmer adoption notes from Giridih; the low-cost design may be easier to scale.'],
                ['Mentor', 'Make sure the prototype includes offline alert logic for remote villages with intermittent network access.'],
              ].map(([person, msg]) => (
                <div key={person} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 font-semibold text-slate-900">{person}</div>
                  <div className="text-sm text-slate-600">{msg}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderProject = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Project lifecycle</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">From challenge to deployment</h2>
        </div>
        <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Progress: 68%</div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          {['Challenge', 'Team Formation', 'Mentor Assignment', 'Prototype', 'Pilot', 'Testing', 'Quality Gate', 'Approval', 'Deployment', 'Impact Measurement'].map((step, idx) => (
            <div key={step} className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 ${idx < 5 ? 'bg-emerald-100 text-emerald-700' : idx === 5 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{step}</span>
              {idx < 9 && <ChevronRight size={14} className="text-slate-400" />}
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              ['Problem validation', 'Completed'],
              ['Team formation', 'Completed'],
              ['Prototype', 'Completed'],
              ['Pilot', 'Completed'],
              ['Quality review', 'In progress'],
              ['Deployment', 'Pending'],
            ].map(([label, status]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  {status === 'Completed' ? <CheckCircle2 className="text-emerald-600" size={18} /> : status === 'In progress' ? <CircleDashed className="text-amber-600" size={18} /> : <AlertCircle className="text-slate-500" size={18} />}
                  <span className="font-medium text-slate-800">{label}</span>
                </div>
                <span className="text-sm text-slate-600">{status}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Deliverables', 'Prototype build, system design, field test notes'],
              ['Documents', 'Technical specification, field surveys, compliance checklist'],
              ['Tasks', 'Sensor calibration, UI integration, validation test cycle'],
              ['Timeline', '12 weeks planned · 8 weeks completed'],
              ['Team members', 'Priya, Rahul, Aditi, Sneha'],
              ['Faculty mentor', 'Dr. Anupama Sinha'],
              ['Industry mentor', 'Tata Steel CSR'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
                <div className="mt-2 text-sm font-semibold text-slate-800">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderIndustry = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Industry partner portal</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Support scalable, mission-driven innovation</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {[
          ['Recommended Challenges', '4 high-fit opportunities'],
          ['Collaboration Requests', '12 pending'],
          ['Active Partnerships', '8 partnerships'],
          ['Funding Opportunities', '₹2.1 Cr open'],
          ['Mentorship Requests', '6 team briefs'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
            <div className="mt-2 text-2xl font-black text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900">Startup & industry ecosystem</div>
          <button onClick={() => showToast('Industry directory opened')} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white">Explore startups</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {startupDirectory.map((startup) => (
            <div key={startup.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-bold text-slate-900">{startup.name}</div>
                  <div className="mt-1 text-sm text-slate-500">{startup.type} · {startup.sector}</div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{startup.stage}</span>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-slate-600">
                <div className="flex justify-between"><span>Active pilots</span><strong className="text-slate-800">{startup.activePilots}</strong></div>
                <div className="flex justify-between"><span>Funding</span><strong className="text-slate-800">{startup.funding}</strong></div>
                <div className="flex justify-between"><span>Focus</span><strong className="text-slate-800">{startup.focus}</strong></div>
              </div>

              <div className="mt-4 rounded-xl bg-white p-3 text-sm text-slate-600 border border-slate-200">
                {startup.focus}
              </div>

              <div className="mt-5 flex gap-2">
                <button onClick={() => showToast(`${startup.name} profile opened`)} className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">View startup</button>
                <button onClick={() => showToast(`${startup.name} partnership request sent`)} className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">Partner</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 text-xl font-bold text-slate-900">Industry support offerings</div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {['Express interest', 'Offer mentorship', 'Provide funding', 'Offer infrastructure', 'Support prototyping', 'Support pilot deployment'].map((item) => (
            <button key={item} onClick={() => showToast(`${item} noted`)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-sm font-semibold text-slate-700 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderGov = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Government dashboard</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Public innovation analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {governmentStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            <div className="mt-2 text-3xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xl font-bold text-slate-900">Challenges by domain</div>
          <div className="space-y-4 text-sm text-slate-600">
            {[
              ['Water & Sanitation', 88],
              ['Agriculture', 74],
              ['Waste Management', 58],
              ['Education', 48],
              ['Healthcare', 36],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1 flex justify-between"><span>{label}</span><span>{value}%</span></div>
                <div className="h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-sky-600" style={{ width: `${value}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xl font-bold text-slate-900">District-wise challenges</div>
          <div className="space-y-4 text-sm text-slate-600">
            {[['Ranchi', 78], ['Dumka', 73], ['Giridih', 67], ['Deoghar', 61], ['Bokaro', 59]].map(([district, value]) => (
              <div key={district}>
                <div className="mb-1 flex justify-between"><span>{district}</span><span>{value}%</span></div>
                <div className="h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-emerald-500" style={{ width: `${value}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xl font-bold text-slate-900">Impact across Jharkhand</div>
        <div className="grid gap-3 md:grid-cols-4">
          {districtHeat.map(([district, score]) => (
            <div key={district} className="rounded-2xl border border-slate-200 p-3" style={{ background: `rgba(6, 182, 212, ${0.06 + Number(score) / 200})` }}>
              <div className="text-sm font-semibold text-slate-800">{district}</div>
              <div className="mt-2 text-2xl font-black text-slate-900">{score}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">district score</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderImpact = () => (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Impact dashboard</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Measurable outcomes and social value</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {impactStats.map((stat) => (
          <div key={stat.title} className={`rounded-2xl border border-slate-200 p-4 ${stat.accent}`}>
            <div className="text-xs uppercase tracking-[0.2em]">{stat.title}</div>
            <div className="mt-3 text-3xl font-black">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xl font-bold text-slate-900">Before and after impact</div>
          <div className="space-y-4">
            {[
              ['Water Access', '62%', '89%'],
              ['Citizen Satisfaction', '54%', '86%'],
              ['School Attendance', '71%', '84%'],
              ['Income resilience', '48%', '72%'],
            ].map(([label, before, after]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between"><span className="font-semibold text-slate-800">{label}</span><span className="text-sm text-slate-500">Before → After</span></div>
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-slate-200 px-2.5 py-1 text-slate-700">Before: {before}</span>
                  <ArrowRight size={14} className="text-slate-400" />
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700">After: {after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xl font-bold text-slate-900">Beneficiary feedback</div>
          <div className="space-y-4 text-sm text-slate-600">
            {[
              ['“The new water monitoring system helped us detect contamination earlier and saved time for families.”', 'Rural household, Dumka'],
              ['“Our school waste segregation model is now running without additional staff burden.”', 'School leader, Ranchi'],
              ['“Smart irrigation guidance reduced our water use while maintaining crop yield.”', 'Farmer collective, Giridih'],
            ].map(([quote, person]) => (
              <div key={quote} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 text-slate-700">“{quote}”</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{person}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case 'submit':
        return renderSubmit()
      case 'explorer':
        return renderExplorer()
      case 'detail':
        return renderDetail()
      case 'expert':
        return renderExpert()
      case 'matching':
        return renderMatching()
      case 'university':
        return renderUniversity()
      case 'workspace':
        return renderWorkspace()
      case 'project':
        return renderProject()
      case 'industry':
        return renderIndustry()
      case 'gov':
        return renderGov()
      case 'impact':
        return renderImpact()
      default:
        return renderLanding()
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div id="toast" className="fixed right-5 top-5 z-50 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg opacity-0 transition-all duration-300"> </div>
      <div className="min-h-screen bg-white">
        <div className="mb-8 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => setCurrentView('landing')} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-700 text-white shadow-sm shadow-sky-200">
                  <Landmark size={20} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">SamadhanSetu</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">AI-driven innovation</div>
                </div>
              </button>

              <nav className="hidden items-center gap-5 lg:flex">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.label === 'Home') setCurrentView('landing')
                      else if (item.label === 'Challenges') setCurrentView('explorer')
                      else if (item.label === 'Universities') setCurrentView('university')
                      else if (item.label === 'Industry Partners') setCurrentView('industry')
                      else if (item.label === 'Impact') setCurrentView('impact')
                      else setCurrentView('landing')
                    }}
                    className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <button onClick={handleWorkspaceOpen} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700">Workspace</button>
                <button onClick={() => setCurrentView('submit')} className="rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-200">Submit a Challenge</button>
              </div>
            </div>
          </div>
        </div>

        {renderCurrentView()}
      </div>
    </div>
  )
}

export default App
