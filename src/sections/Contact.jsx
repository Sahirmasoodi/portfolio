
import { useState } from 'react'
import { Mail, MapPin, Send, Info } from 'lucide-react'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import { site } from '../data/site'
import { validate } from '../utils/mailto'

const empty = { name: '', email: '', subject: '', message: '' }

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length) {
      setSubmitted(false)
      setSubmitError('')
      return
    }

    setLoading(true)
    setSubmitted(false)
    setSubmitError('')

    try {
      const data = {
        ...values,
        access_key: 'e531d982-107d-41a8-bead-6eabefeb4f5b',
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitted(true)
        setValues(empty)
        setErrors({})
      } else {
        setSubmitError(
          result.message || 'Failed to send your message. Please try again.'
        )
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const input = (name) =>
    `w-full rounded-lg border bg-bg px-4 py-3 text-fg placeholder:text-muted/60 ${
      errors[name] ? 'border-red-500' : 'border-line'
    }`

  const aria = (name) => ({
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <Section id="contact" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2
            id="contact-title"
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Let’s Build Something Great Together.
          </h2>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" aria-hidden />
              <span>{site.location}</span>
            </li>
          </ul>

          <SocialLinks className="mt-8" />
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                required
                className={input('name')}
                {...aria('name')}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                required
                className={input('email')}
                {...aria('email')}
              />
            </Field>
          </div>

          <Field id="subject" label="Subject" error={errors.subject}>
            <input
              id="subject"
              name="subject"
              value={values.subject}
              onChange={onChange}
              required
              className={input('subject')}
              {...aria('subject')}
            />
          </Field>

          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={onChange}
              required
              className={input('message')}
              {...aria('message')}
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full sm:w-auto disabled:opacity-50"
          >
            <Send size={16} aria-hidden />
            {loading
              ? 'Sending...'
              : submitted
                ? '✓ Message Sent!'
                : 'Send Message'}
          </button>

          <p className="flex gap-2 text-sm text-muted" role="status">
            <Info size={16} className="mt-0.5 shrink-0" aria-hidden />
            {loading
              ? 'Sending your message...'
              : submitted
                ? 'Your message has been sent successfully!'
                : submitError
                  ? submitError
                  : 'Fill out the form and send your message directly.'}
          </p>
        </form>
      </div>
    </Section>
  )
}