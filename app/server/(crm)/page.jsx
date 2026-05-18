'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import api from '@/lib/axios'
import { UserCheck } from 'lucide-react'

const STATUS_CONFIG = {
  pending:   { label: 'Pending',   bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200',   dot: 'bg-amber-400'   },
  contacted: { label: 'Contacted', bg: 'bg-sky-50',     text: 'text-sky-600',     border: 'border-sky-200',     dot: 'bg-sky-400'     },
  converted: { label: 'Converted', bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', dot: 'bg-emerald-400' },
}
const STATUSES = ['pending', 'contacted', 'converted']

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
  </svg>
)
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const IconTrash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
)
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>
)
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const IconShare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
  </svg>
)
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

// ── Avatar colors ─────────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  'bg-blue-100 text-blue-700', 'bg-violet-100 text-violet-700',
  'bg-rose-100 text-rose-700', 'bg-amber-100 text-amber-700',
  'bg-emerald-100 text-emerald-700', 'bg-sky-100 text-sky-700',
  'bg-pink-100 text-pink-700', 'bg-indigo-100 text-indigo-700',
]

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, accent, dotColor, textColor, loading }) {
  return (
    <div className={`bg-white dark:bg-[#111111] rounded-2xl border ${accent} p-5 shadow-sm dark:shadow-[0_1px_4px_rgba(0,0,0,0.7)]`}>
      {loading
        ? <div className="h-8 w-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg animate-pulse mb-2" />
        : <p className="text-3xl font-black text-gray-900 dark:text-gray-50 font-monument">{value ?? '—'}</p>
      }
      <div className="flex items-center gap-2 mt-2">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        <p className={`text-xs font-monument uppercase tracking-widest ${textColor}`}>{label}</p>
      </div>
    </div>
  )
}

// ── Status Cycle Button ───────────────────────────────────────────────────────
function StatusCycleButton({ currentStatus, onChange, loading }) {
  const nextMap = { pending: 'contacted', contacted: 'converted', converted: 'pending' }
  const cfg = STATUS_CONFIG[currentStatus]
  return (
    <button
      onClick={() => onChange(nextMap[currentStatus])}
      disabled={loading}
      title={`Click to mark as ${nextMap[currentStatus]}`}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs dark:bg-gray-950 font-bold border transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap ${cfg.bg} ${cfg.text} ${cfg.border} ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-sm'}`}
    >
      {loading
        ? <span className="w-2 h-2 rounded-full border-2 border-current border-t-transparent animate-spin" />
        : <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
      }
      {cfg.label}
    </button>
  )
}

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditModal({ lead, onClose, onSave }) {
  const [form, setForm] = useState({
    notes: lead.notes || '',
    followUpDate: lead.followUpDate ? lead.followUpDate.slice(0, 10) : '',
    assignedTo: lead.assignedTo || 'admin',
    status: lead.status,
  })
  const [saving, setSaving] = useState(false)
  const handle = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const submit = async () => {
    setSaving(true)
    await onSave(lead._id, form)
    setSaving(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#262626] rounded-2xl shadow-2xl dark:shadow-[0_16px_48px_rgba(0,0,0,0.9)] p-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-gray-50">{lead.applicantName}</h2>
            <p className="text-xs font-semibold text-gray-400 mt-0.5">{lead.phone} · {lead.course} · {lead.branch}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <IconClose />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Status</label>
            <select name="status" value={form.status} onChange={handle}
              className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626] rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-800 dark:text-[#f5f5f5] focus:outline-none focus:border-gray-400 transition-colors dark:placeholder-[#525252]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {STATUSES.map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Follow-up Date</label>
            <input type="date" name="followUpDate" value={form.followUpDate} onChange={handle}
              className="w-full bg-gray-50 dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gray-400 transition-colors" />
          </div>
          <div>
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Assigned To</label>
            <input type="text" name="assignedTo" value={form.assignedTo} onChange={handle}
              className="w-full bg-gray-50 dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] dark:placeholder-[#525252] border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors" />
          </div>
          <div>
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handle} rows={3}
              placeholder="Add notes about this lead…"
              className="w-full bg-gray-50 dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] dark:placeholder-[#525252] border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }} />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-[#262626] text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 transition-colors">
            Cancel
          </button>
          <button onClick={submit} disabled={saving}
            className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-black hover:bg-gray-700 transition-colors disabled:opacity-50">
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Lead Card ─────────────────────────────────────────────────────────────────
function LeadCard({ lead, onStatusChange, onEdit, onDelete, index }) {
  const [statusLoading, setStatusLoading] = useState(false)

  const handleStatusChange = async (next) => {
    setStatusLoading(true)
    await onStatusChange(lead._id, next)
    setStatusLoading(false)
  }

  const waLink   = `https://wa.me/91${lead.phone.replace(/\D/g, '')}`
  const buildShareLink = () => {
    const STATUS_LABEL = { pending: 'Pending', contacted: 'Contacted', converted: 'Converted' }
    const lines = [' *Lead Info — Magic Maths*', '']
    lines.push(`*Name:* ${lead.applicantName}`)
    if (lead.isForChild && lead.parentName) lines.push(`*Parent:* ${lead.parentName}`)
    lines.push(`*Phone:* ${lead.phone}`)
    if (lead.email) lines.push(`*Email:* ${lead.email}`)
    lines.push(`*Program:* ${lead.course}`)
    if (lead.branch) lines.push(`*Branch:* ${lead.branch}`)
    if (lead.timing) lines.push(`*Timing:* ${lead.timing}`)
    if (lead.locality) lines.push(`*Area:* ${lead.locality}`)
    if (lead.age) lines.push(`*Age:* ${lead.age}`)
    lines.push('')
    lines.push(`*Status:* ${STATUS_LABEL[lead.status] || lead.status}`)
    if (lead.followUpDate) {
      const d = new Date(lead.followUpDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      lines.push(`*Follow-up:* ${d}`)
    }
    if (lead.assignedTo) lines.push(`*Assigned:* ${lead.assignedTo}`)
    if (lead.notes) { lines.push(''); lines.push(`*Notes:* ${lead.notes}`) }
    return `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const callLink = `tel:${lead.phone}`
  const followUp = lead.followUpDate
    ? new Date(lead.followUpDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' })
    : null
  const isPast    = lead.followUpDate && new Date(lead.followUpDate) < new Date()
  const createdAt = new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  const initials  = lead.applicantName?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const avatarCls = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <div className="group bg-white dark:bg-[#111111] border border-gray-100 dark:border-[#1f1f1f] rounded-2xl p-4 sm:px-5 sm:py-4 hover:border-gray-300 dark:hover:border-[#303030] hover:shadow-md dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.8)] transition-all duration-200">

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col gap-3 sm:hidden">
        <div className="flex items-center gap-3">
          <div className={`flex-shrink-0 w-11 h-11 rounded-xl font-black text-sm flex items-center justify-center select-none dark:bg-gray-900 ${avatarCls}`}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-gray-900 dark:text-white text-sm truncate">{lead.applicantName}</p>
            {lead.isForChild && lead.parentName && (
  <p className="text-xs text-gray-600 dark:text-white font-bold truncate flex items-center space-x-2">
    <span className='mr-1'>
    <UserCheck className="w-3 h-3" />
    </span>
    {lead.parentName}
  </p>
)}
            <p className="text-xs font-semibold text-gray-400">{lead.phone}</p>
          </div>
          <StatusCycleButton currentStatus={lead.status} onChange={handleStatusChange} loading={statusLoading} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold">{lead.course}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold">{lead.branch}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold">{lead.timing}</span>
          {lead.age && <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold">Age {lead.age}</span>}
        </div>
        <div className="flex items-center justify-between text-xs">
          {lead.locality && (
            <p className="flex items-center gap-1 text-gray-500 font-semibold truncate"><IconPin />{lead.locality}</p>
          )}
          <div className="flex items-center gap-3 ml-auto">
            {followUp && (
              <p className={`flex items-center gap-1 font-bold ${isPast ? 'text-red-500' : 'text-sky-600'}`}>
                <IconCalendar />{followUp}
              </p>
            )}
            <p className="text-gray-300 dark:text-gray-500 font-semibold">{createdAt}</p>
          </div>
        </div>
        {lead.notes && (
          <p className="text-xs text-gray-400 italic font-medium border-t border-gray-100 dark:border-[#1f1f1f] pt-2 line-clamp-2">"{lead.notes}"</p>
        )}
        <div className="flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-[#1f1f1f]">
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 dark:text-green-100 dark:bg-green-900 text-xs font-bold hover:bg-emerald-100 transition-colors">
            <IconWhatsapp /> WhatsApp
          </a>
          <a href={callLink}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-600  dark:bg-sky-700  dark:text-sky-100 text-xs font-bold hover:bg-sky-100 transition-colors">
            <IconPhone /> Call
          </a>
          <a href={buildShareLink()} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-900 border border-violet-100 dark:border-violet-800 text-violet-500 dark:text-violet-200 hover:bg-violet-100 transition-colors" title="Share lead details">
            <IconShare />
          </a>
          <button onClick={() => onEdit(lead)}
            className="p-2.5 rounded-xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-[#1f1f1f] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#222222] transition-colors">
            <IconEdit />
          </button>
          <button onClick={() => onDelete(lead._id)}
            className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-300 dark:bg-red-900 hover:text-red-500 hover:bg-red-100 transition-colors">
            <IconTrash />
          </button>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:flex items-center gap-4">
        <div className={`flex-shrink-0 w-12 h-12  dark:bg-gray-900 rounded-xl font-black text-sm flex items-center justify-center select-none ${avatarCls}`}>
          {initials}
        </div>
        <div className="flex-shrink-0 w-44">
          <p className="font-black text-gray-900 text-sm truncate dark:text-white">{lead.applicantName}</p>
          {lead.isForChild && lead.parentName && (
  <p className="text-xs text-gray-600 dark:text-gray-300 font-bold truncate flex items-center space-x-2">
    <span className='mr-1'>
    <UserCheck className="w-3 h-3" />
    </span>
    {lead.parentName}
  </p>
)}
          <p className="text-xs font-semibold text-gray-400 mt-0.5">{lead.phone}</p>
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0" />
        <div className="flex items-center gap-2 flex-1 flex-wrap min-w-0">
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold whitespace-nowrap">{lead.course}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold whitespace-nowrap">{lead.branch}</span>
          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold whitespace-nowrap">{lead.timing}</span>
          {lead.age && <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-xs font-bold whitespace-nowrap">Age {lead.age}</span>}
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0" />
        <div className="w-40 flex-shrink-0 space-y-1.5">
          {lead.locality && (
            <p className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-semibold truncate"><IconPin />{lead.locality}</p>
          )}
          {followUp && (
            <p className={`flex items-center gap-1.5 text-xs font-bold ${isPast ? 'text-red-500' : 'text-sky-600'}`}>
              <IconCalendar /> {followUp}
            </p>
          )}
          <p className="text-[11px] text-gray-300 dark:text-gray-500 font-semibold">Reg: {createdAt}</p>
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0 hidden xl:block" />
        <div className="w-48 flex-shrink-0 hidden xl:block">
          {lead.notes
            ? <p className="text-xs text-gray-400 italic line-clamp-2 font-medium">"{lead.notes}"</p>
            : <p className="text-xs text-gray-200 dark:text-gray-600 font-semibold">No notes yet</p>
          }
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0" />
        <div className="flex-shrink-0 w-28 flex justify-center">
          <StatusCycleButton currentStatus={lead.status} onChange={handleStatusChange} loading={statusLoading} />
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0" />
        <div className="flex items-center gap-2 flex-shrink-0">
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 border dark:bg-green-600 dark:text-white border-emerald-100 text-emerald-600 text-xs font-bold hover:bg-emerald-100 hover:border-emerald-200 transition-colors whitespace-nowrap">
            <IconWhatsapp /> WA
          </a>
          <a href={callLink}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 dark:bg-sky-700 dark:text-white text-xs font-bold hover:bg-sky-100 hover:border-sky-200 transition-colors whitespace-nowrap">
            <IconPhone /> Call
          </a>
          <a href={buildShareLink()} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-xl bg-violet-50 dark:bg-violet-900 border border-violet-100 dark:border-violet-800 text-violet-500 dark:text-violet-200 hover:bg-violet-100 hover:border-violet-200 transition-colors" title="Share lead details">
            <IconShare />
          </a>
          <button onClick={() => onEdit(lead)}
            className="p-2 rounded-xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-[#1f1f1f] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#222222] hover:border-gray-200 transition-colors">
            <IconEdit />
          </button>
          <button onClick={() => onDelete(lead._id)}
            className="p-2 rounded-xl bg-red-50 border dark:bg-red-800 border-red-100 text-red-300 hover:text-red-500 hover:bg-red-100 hover:border-red-200 transition-colors">
            <IconTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CRMDashboard() {
  // ── Data state ──────────────────────────────────────────────────────────────
  const [leads, setLeads]       = useState([])
  const [stats, setStats]       = useState(null)
  const [meta, setMeta]         = useState({ branches: [], courses: [] })
  const [total, setTotal]       = useState(0)

  // ── UI state ────────────────────────────────────────────────────────────────
  const [leadsLoading, setLeadsLoading]   = useState(true)
  const [statsLoading, setStatsLoading]   = useState(true)
  const [editingLead, setEditingLead]     = useState(null)

  // ── Filter / search state ───────────────────────────────────────────────────
  const [search, setSearch]           = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterBranch, setFilterBranch] = useState('')
  const [filterCourse, setFilterCourse] = useState('')

  // Debounce search so we don't fire on every keystroke
  const searchTimer = useRef(null)
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const handleSearchChange = (val) => {
    setSearch(val)
    clearTimeout(searchTimer.current)
    searchTimer.current = setTimeout(() => setDebouncedSearch(val), 350)
  }

  // ── Fetch leads (called whenever filters/search change) ────────────────────
  const fetchLeads = useCallback(async () => {
    setLeadsLoading(true)
    try {
      const params = {}
      if (filterStatus)    params.status = filterStatus
      if (filterBranch)    params.branch = filterBranch
      if (filterCourse)    params.course = filterCourse
      if (debouncedSearch) params.q      = debouncedSearch

      const res = await api.get('/leads', { params })
      setLeads(res.data.data)
      setTotal(res.data.count)
    } catch (e) {
      console.error('fetchLeads error:', e)
    }
    setLeadsLoading(false)
  }, [filterStatus, filterBranch, filterCourse, debouncedSearch])

  // ── Fetch stats ────────────────────────────────────────────────────────────
  const fetchStats = useCallback(async () => {
    setStatsLoading(true)
    try {
      const res = await api.get('/leads/stats')
      setStats(res.data.data)
    } catch (e) {
      console.error('fetchStats error:', e)
    }
    setStatsLoading(false)
  }, [])

  // ── Fetch meta (branches + courses for dropdowns) ─────────────────────────
  const fetchMeta = useCallback(async () => {
    try {
      const res = await api.get('/leads/meta')
      setMeta(res.data.data)
    } catch (e) {
      console.error('fetchMeta error:', e)
    }
  }, [])

  // ── Initial load ──────────────────────────────────────────────────────────
  useEffect(() => {
    fetchStats()
    fetchMeta()
  }, [])

  // ── Re-fetch leads when filters / search change ───────────────────────────
  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  // ── Refresh everything ────────────────────────────────────────────────────
  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/server/login'
  }

  const refreshAll = () => {
    fetchLeads()
    fetchStats()
    fetchMeta()
  }

  // ── Status change — PATCH lightweight endpoint, refresh stats ─────────────
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await api.patch(`/leads/${id}/status`, { status: newStatus })
      // Optimistically update the lead in list
      setLeads(prev => prev.map(l => l._id === id ? res.data.data : l))
      // Refresh stats so counts stay accurate
      fetchStats()
    } catch (e) {
      console.error('status change error:', e)
    }
  }

  // ── Edit save — PUT, then refresh stats + meta ────────────────────────────
  const handleSave = async (id, data) => {
    try {
      const res = await api.put(`/leads/${id}`, data)
      setLeads(prev => prev.map(l => l._id === id ? res.data.data : l))
      fetchStats()
      fetchMeta()
    } catch (e) {
      console.error('save error:', e)
    }
  }

  // ── Delete — remove from list, refresh stats ──────────────────────────────
  const handleDelete = async (id) => {
    if (!confirm('Delete this lead?')) return
    try {
      await api.delete(`/leads/${id}`)
      setLeads(prev => prev.filter(l => l._id !== id))
      setTotal(prev => prev - 1)
      fetchStats()
    } catch (e) {
      console.error('delete error:', e)
    }
  }

  const clearFilters = () => {
    setFilterStatus('')
    setFilterBranch('')
    setFilterCourse('')
    setSearch('')
    setDebouncedSearch('')
  }

  const hasFilters = filterStatus || filterBranch || filterCourse || search

  return (
    <div className="space-y-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>

        {/* ── Page header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 my-10">
          <div>
            <h1 className="text-center  poy-2 text-2xl lg:text-4xl font-monument-700 text-gray-900 dark:text-gray-50 uppercase">Crm</h1>
            <p className="text-md  text-muted-foreground font-montserrat-medium mt-0.5 text-center">
              {total} lead{total !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64 sm:flex-none">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
              <input
                type="text"
                placeholder="Search name, phone, area…"
                value={search}
                onChange={e => handleSearchChange(e.target.value)}
                className="w-full bg-white dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] dark:placeholder-[#525252] border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <button onClick={refreshAll}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-[#262626] text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-[#0d0d0d] transition-colors whitespace-nowrap">
              <IconRefresh /><span className="hidden sm:inline">Refresh</span>
            </button>
            <button onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-[#262626] text-sm font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-[#1a1a1a] hover:bg-red-50 hover:text-red-500 hover:border-red-200 dark:hover:bg-[#1a0000] transition-colors whitespace-nowrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

          {/* ── Stats (from /api/leads/stats) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Total Leads"  value={stats?.total}     accent="border-gray-200"    dotColor="bg-gray-400"    textColor="text-gray-500"    loading={statsLoading} />
            <StatCard label="Pending"      value={stats?.pending}   accent="border-amber-100"   dotColor="bg-amber-400"   textColor="text-amber-500"   loading={statsLoading} />
            <StatCard label="Contacted"    value={stats?.contacted} accent="border-sky-100"     dotColor="bg-sky-400"     textColor="text-sky-500"     loading={statsLoading} />
            <StatCard label="Converted"    value={stats?.converted} accent="border-emerald-100" dotColor="bg-emerald-400" textColor="text-emerald-600" loading={statsLoading} />
          </div>

          {/* ── Filter Bar (dropdowns from /api/leads/meta) ── */}
          <div className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-[#1f1f1f] rounded-2xl shadow-sm dark:shadow-[0_1px_4px_rgba(0,0,0,0.7)] overflow-x-auto">
            <div className="px-4 sm:px-5 py-3.5 flex items-center gap-3 min-w-max sm:min-w-0 sm:flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex-shrink-0">Filter by</span>
              <div className="w-px h-5 bg-gray-100 dark:bg-[#1f1f1f] flex-shrink-0" />

              {/* Status tabs */}
              <div className="flex gap-1 bg-gray-100 dark:bg-[#1a1a1a] p-1 rounded-xl">
                {['', ...STATUSES].map(s => (
                  <button key={s} onClick={() => setFilterStatus(s)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      filterStatus === s ? 'bg-white dark:bg-[#222222] text-gray-900 dark:text-gray-50 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}>
                    {s === '' ? 'All' : STATUS_CONFIG[s].label}
                  </button>
                ))}
              </div>

              {/* Branch dropdown — populated from /meta */}
              {meta.branches.length > 0 && (
                <select value={filterBranch} onChange={e => setFilterBranch(e.target.value)}
                  className="bg-gray-50 dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <option value="">All Branches</option>
                  {meta.branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              )}

              {/* Course dropdown — populated from /meta */}
              {meta.courses.length > 0 && (
                <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)}
                  className="bg-gray-50 dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:border-[#262626] border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <option value="">All Courses</option>
                  {meta.courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              )}

              {hasFilters && (
                <button onClick={clearFilters}
                  className="text-xs font-black text-red-400 hover:text-red-600 transition-colors ml-1">
                  ✕ Clear all
                </button>
              )}

              <span className="ml-auto text-xs font-bold text-gray-300 pl-4">
                {total} result{total !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* ── Column Headers (desktop) ── */}
          {!leadsLoading && leads.length > 0 && (
            <div className="hidden sm:flex items-center gap-4 px-5 text-[10px] font-black uppercase tracking-widest text-gray-300 select-none">
              <div className="w-12 flex-shrink-0" />
              <div className="w-44 flex-shrink-0">Applicant</div>
              <div className="w-px flex-shrink-0" />
              <div className="flex-1">Details</div>
              <div className="w-px flex-shrink-0" />
              <div className="w-40 flex-shrink-0">Location</div>
              <div className="w-px flex-shrink-0 hidden xl:block" />
              <div className="w-48 flex-shrink-0 hidden xl:block">Notes</div>
              <div className="w-px flex-shrink-0" />
              <div className="w-28 flex-shrink-0 text-center">Status</div>
              <div className="w-px flex-shrink-0" />
              <div className="flex-shrink-0">Actions</div>
            </div>
          )}

          {/* ── Lead List ── */}
          {leadsLoading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-[#262626] border-t-gray-600 dark:border-t-gray-300 animate-spin" />
              <p className="text-sm font-bold text-gray-400">Loading leads…</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-[#1f1f1f] rounded-2xl py-32 text-center shadow-sm dark:shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              <p className="text-5xl mb-4">🌊</p>
              <p className="text-base font-black text-gray-700 dark:text-gray-200">No leads found</p>
              <p className="text-sm font-semibold text-gray-400 mt-1">
                {hasFilters ? 'Try adjusting your search or filters' : 'No leads registered yet'}
              </p>
              {hasFilters && (
                <button onClick={clearFilters}
                  className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-black hover:bg-gray-700 transition-colors">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {leads.map((lead, i) => (
                <LeadCard
                  key={lead._id}
                  lead={lead}
                  index={i}
                  onStatusChange={handleStatusChange}
                  onEdit={setEditingLead}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

        {/* ── Edit Modal ── */}
        {editingLead && (
          <EditModal
            lead={editingLead}
            onClose={() => setEditingLead(null)}
            onSave={handleSave}
          />
        )}
    </div>
  )
}

