const WHATSAPP_URL =
  'https://wa.me/917550223044?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 32 32" width={26} height={26} fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13s-.7.88-.86 1.06c-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.84c.13.18 1.94 2.97 4.71 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.62.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32zM16.02 5C9.93 5 5 9.93 5 16.01c0 1.93.5 3.81 1.45 5.47L5 27l5.66-1.48a11.01 11.01 0 0 0 5.36 1.37h.01c6.07 0 11.01-4.93 11.01-11.01 0-2.94-1.14-5.71-3.21-7.79A10.94 10.94 0 0 0 16.02 5z" />
      </svg>
    </a>
  )
}
