'use client'

import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import BranchCard from '@/components/BranchCard'
import api from '@/lib/axios'

const BRANCHES = ['Santhosapuram', 'Rajakilpakkam']

type FormState = {
  parentName: string
  phone: string
  email: string
  course: string
  branch: string
  message: string
}

const EMPTY: FormState = {
  parentName: '',
  phone: '',
  email: '',
  course: 'abacus',
  branch: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.parentName.trim() || !form.phone.trim()) return

    setStatus('loading')
    setErrorMsg('')

    try {
      await api.post('/leads', {
        applicantName: form.parentName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        course: form.course,
        branch: form.branch,
        notes: form.message.trim(),
        status: 'pending',
      })
      setStatus('success')
      setForm(EMPTY)
    } catch (err: unknown) {
      setStatus('error')
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: { error?: string } } }
        setErrorMsg(axiosErr.response?.data?.error || 'Something went wrong. Please try again.')
      } else {
        setErrorMsg('Could not reach the server. Please try again later.')
      }
    }
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-20 text-center">
        <h1 className="font-monument-700 text-4xl sm:text-5xl lg:text-6xl text-indigo-700 tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-montserrat-400 leading-relaxed">
          Have questions about our programs? Want to book a free demo?
          We&apos;ll guide you to the right starting point for your child.
        </p>
      </section>

      {/* BRANCHES + CONTACT INFO */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BranchCard
              name="Santhosapuram Branch"
              image="/magic_maths_sembakkam.webp"
              address="Chandra Villa, 28/2 Ponniyamman Kovil Street, Rajakilpakkam, Chennai - 600073"
              phone="7200757754"
              mapLink="https://share.google/2PtXrwgGvJl5q7Abs"
              email="magicmathslearning@gmail.com"
            />
            <BranchCard
              name="Rajakilpakkam Branch"
              image="/magic_maths_sembakkam.webp"
              address="Rajakilpakkam, Chennai - 600073"
              phone="7200757754"
              mapLink="#"
              email="magicmathslearning@gmail.com"
            />
          </div>

          <div className="space-y-8 bg-gray-100 p-8 rounded-2xl">
            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Call Us</p>
                  <p className="text-slate-600 text-sm mt-1">+91 7200757754</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Email</p>
                  <p className="text-slate-600 text-sm mt-1">magicmathslearning@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Location</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Chandra Villa, Rajakilpakkam, Chennai - 600073
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Clock className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Timings</p>
                  <p className="text-slate-600 text-sm mt-1">Mon–Sat: 4 PM – 8 PM</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">

            {/* FORM CARD */}
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
              <h2 className="font-monument-700 text-2xl text-indigo-700">Book a Free Demo</h2>
              <p className="text-sm text-slate-500 mt-2">Takes less than 30 seconds</p>

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <CheckCircle className="text-emerald-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat-600 text-emerald-800 text-sm">We received your request!</p>
                    <p className="text-emerald-700 text-xs mt-1">Our team will call you within 24 hours to confirm your free demo session.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <AlertCircle className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500">Parent Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={form.parentName}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition text-sm"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500">Phone <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500">Program</label>
                    <Select value={form.course} onValueChange={(v) => setForm(p => ({ ...p, course: v }))}>
                      <SelectTrigger className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-200 text-sm">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abacus">Abacus</SelectItem>
                        <SelectItem value="rubiks-cube">Rubik&apos;s Cube</SelectItem>
                        <SelectItem value="vedic-maths">Vedic Maths</SelectItem>
                        <SelectItem value="tuition">Tuition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500">Preferred Branch</label>
                  <Select value={form.branch} onValueChange={(v) => setForm(p => ({ ...p, branch: v }))}>
                    <SelectTrigger className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-200 text-sm">
                      <SelectValue placeholder="Select branch (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {BRANCHES.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-slate-500">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition text-sm resize-none"
                    placeholder="Any specific requirement..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-indigo-700 text-white py-3 rounded-lg font-medium hover:bg-indigo-800 transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'loading' ? 'Booking…' : 'Book Free Demo'}
                </button>

              </form>
            </div>

            {/* CTA SIDE */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white p-8 shadow-2xl flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="font-monument-700 text-2xl mt-4 leading-snug">
                  See How Your Child Can Improve in Just 1 Session
                </h3>
                <p className="mt-4 text-white/80 text-sm leading-relaxed">
                  Speak with our expert trainers and experience our teaching method —
                  no commitment, just clarity.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  {['Free 1-on-1 demo session', 'Personalized learning plan', 'Improve speed & confidence'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 space-y-3">
                <a
                  href="tel:+917200757754"
                  className="block w-full text-center bg-white text-indigo-700 py-3 rounded-xl font-montserrat-500 shadow-md hover:scale-[1.02] hover:bg-gray-100 transition"
                >
                  Call &amp; Book Now
                </a>
                <a
                  href="https://wa.me/917200757754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-white/30 py-3 rounded-xl font-montserrat-500 bg-green-600 text-white transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
