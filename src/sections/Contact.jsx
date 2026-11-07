import { useState } from "react";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
import { validate } from "../utils/mailto";
import { btnPrimary, field, fieldLabel, inkLink } from "../ui/classes";

const empty = { name: "", email: "", subject: "", message: "" };

function Field({ id, label, error, children, className = "" }) {
  return (
    <div className={`border-fg ${className}`}>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="px-3 pb-2 font-mono text-sm font-bold text-accent"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length) {
      setSubmitted(false);
      setSubmitError("");
      return;
    }

    setLoading(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      const data = {
        ...values,
        access_key: "e531d982-107d-41a8-bead-6eabefeb4f5b",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setValues(empty);
        setErrors({});
      } else {
        setSubmitError(
          result.message || "Failed to send your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const input = (name) => `${field} ${errors[name] ? "bg-accent/10" : ""}`;
  const aria = (name) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <Section id="contact" className="!border-t-[6px] border-double !pb-24">
      <div className="overflow-hidden">
        <h2
          id="contact-title"
          className="max-w-[16ch] font-display text-[clamp(3rem,10vw,9.5rem)] font-black uppercase leading-[.84] tracking-[-.015em] [text-wrap:balance]"
        >
          Let’s Build Something Great Together.
        </h2>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ul className="space-y-5 text-xl">
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`break-all font-mono text-lg font-bold ${inkLink}`}
              >
                {site.email}
              </a>
            </li>
            <li className="font-mono text-muted">{site.location}</li>
          </ul>
          <SocialLinks className="mt-8" />
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="border-2 border-fg bg-surface shadow-hard lg:col-span-8 lg:-mt-6"
        >
          <div className="grid sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              error={errors.name}
              className="border-b-2 sm:border-r-2"
            >
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                required
                className={input("name")}
                {...aria("name")}
              />
            </Field>
            <Field
              id="email"
              label="Email"
              error={errors.email}
              className="border-b-2"
            >
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                required
                className={input("email")}
                {...aria("email")}
              />
            </Field>
          </div>
          <Field
            id="subject"
            label="Subject"
            error={errors.subject}
            className="border-b-2"
          >
            <input
              id="subject"
              name="subject"
              value={values.subject}
              onChange={onChange}
              required
              className={input("subject")}
              {...aria("subject")}
            />
          </Field>
          <Field
            id="message"
            label="Message"
            error={errors.message}
            className="border-b-2"
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={onChange}
              required
              className={`${input("message")} resize-y`}
              {...aria("message")}
            />
          </Field>
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`${btnPrimary} w-full disabled:opacity-50 sm:w-auto`}
            >
              {loading
                ? "Sending..."
                : submitted
                  ? "✓ Message Sent!"
                  : "Send Message"}
            </button>
            <p className="font-mono text-sm text-muted" role="status">
              {loading
                ? "Sending your message..."
                : submitted
                  ? "Your message has been sent successfully!"
                  : submitError
                    ? submitError
                    : "Fill out the form and send your message directly."}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
