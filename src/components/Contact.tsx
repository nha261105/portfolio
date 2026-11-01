import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import clsx from 'clsx';
import { personalInfo } from '../constants/data';
import Section from './ui/Section';
import { cardClass, cardHoverClass } from './ui/card';

interface FormData {
  firstName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ firstName: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.firstName}`;
    const body = `Name: ${formData.firstName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus('Opening email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ firstName: '', email: '', message: '' });
    }, 2000);
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl bg-surface border border-line text-fg placeholder:text-subtle ' +
    'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors';

  const links = [
    { href: `mailto:${personalInfo.email}`, icon: 'ci ci-gmail', label: 'Email', value: personalInfo.email },
    { href: 'https://www.reddit.com/user/Unlikely-Football-53/', icon: 'ci ci-reddit', label: 'Reddit', value: 'reddit.com/u/Unlikely-Football-53', external: true },
    { href: 'https://www.facebook.com/hoang.anh.182242/', icon: 'ci ci-facebook', label: 'Facebook', value: 'facebook.com/hoang.anh.182242', external: true },
  ];

  return (
    <Section id="contact" eyebrow="// contact" title="Contact" subtitle="Let's build something meaningful.">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-3"
        >
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={clsx(cardClass, cardHoverClass, 'flex items-center gap-4 p-4')}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-2 shrink-0">
                <i className={`${item.icon} ci-2xl`} aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-subtle">{item.label}</div>
                <div className="text-fg font-medium truncate">{item.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: 'firstName', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-muted mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id as keyof FormData]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className={fieldClass}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className={clsx(fieldClass, 'resize-none')}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-fg rounded-xl font-medium
                         shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors duration-200"
            >
              <FiSend /> Send Message
            </button>

            {status && <p role="status" className="text-center text-accent text-sm">{status}</p>}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
