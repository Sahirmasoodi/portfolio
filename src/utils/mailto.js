import { site } from '../data/site'

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export function validate({ name, email, subject, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Enter your name.'
  if (!email.trim()) errors.email = 'Enter your email address.'
  else if (!isEmail(email)) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!subject.trim()) errors.subject = 'Enter a subject.'
  if (!message.trim()) errors.message = 'Enter a message.'
  return errors
}

export function buildMailto({ name, email, subject, message }) {
  const body = `Hi Sahir,\n\n${message}\n\nFrom: ${name} (${email})`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
