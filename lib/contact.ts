/**
 * Single source of truth for all contact-channel constants.
 * Update the phone number here and every page picks it up.
 */

export const PHONE = '+917550223044' as const
export const PHONE_DISPLAY = '+91 75502 23044' as const

const WHATSAPP_NUMBER = '917550223044'
const WHATSAPP_DEFAULT_MESSAGE = "Hi, I'm interested in a free demo"

export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE,
)}` as const

export const EMAIL = 'magicmathslearning@gmail.com' as const
