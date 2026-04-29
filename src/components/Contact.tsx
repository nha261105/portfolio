import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { personalInfo } from '../constants/data';

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

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#232323]">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#f0f0f0]">Contact</h2>
          <p className="text-[#c0c0c0] text-xl mb-12">Let's build something meaningful.</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="space-y-4"
            >
              {[
                { href: `mailto:${personalInfo.email}`, icon: <i className="ci ci-gmail ci-2xl" />, label: 'Email', value: personalInfo.email },
                { href: 'https://www.reddit.com/user/Unlikely-Football-53/', icon: <i className="ci ci-reddit ci-2xl" />, label: 'Reddit', value: 'reddit.com/u/Unlikely-Football-53', external: true },
                { href: 'https://www.facebook.com/hoang.anh.182242/', icon: <i className="ci ci-facebook ci-2xl" />, label: 'Facebook', value: 'facebook.com/hoang.anh.182242', external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg
                             transition-all duration-300 group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
                    borderColor: 'rgba(192, 192, 192, 0.3)',
                    border: '1px solid rgba(192, 192, 192, 0.3)',
                  }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center
                                  group-hover:bg-[#3B82F6]/10 transition-colors text-[#3B82F6]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-[#888888]">{item.label}</div>
                    <div className="text-[#f0f0f0] font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-[#888888] mb-2">
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
                      className="w-full px-4 py-3 rounded-lg text-[#f0f0f0]
                                 focus:outline-none focus:border-[#3B82F6] transition-colors"
                      style={{
                        background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
                        border: '1px solid rgba(192, 192, 192, 0.3)',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#888888] mb-2">
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
                    className="w-full px-4 py-3 rounded-lg text-[#f0f0f0]
                               focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
                      border: '1px solid rgba(192, 192, 192, 0.3)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3
                             bg-linear-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg font-medium
                             transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105"
                >
                  <FiSend /> Send Message
                </button>

                {status && <p className="text-center text-[#3B82F6] text-sm">{status}</p>}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
