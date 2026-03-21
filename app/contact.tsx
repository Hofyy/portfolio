'use client';

import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage } from 'react-icons/fa6';
import AnimateOnScroll from './components/ScrollAnimation';
import Tag from './components/Tag';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // HINWEIS: Aktuell wird der Endpunkt '/api/send' aufgerufen.
    // Soll ich für dich die entsprechende API-Route (z.B. mit Resend oder Nodemailer)
    // in einer neuen Datei unter 'app/api/send/route.ts' erstellen?

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 text-white py-20 border-b border-white/5" id="contact">
      {/* Background Elements consistent with MainPage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">

          <AnimateOnScroll type="fade">
            <Tag text="Kontakt" className="bg-white border text-blue-400 border-blue-500/30 backdrop-blur-md" />
          </AnimateOnScroll>

          <AnimateOnScroll type="fade" delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mt-6 mb-4">
              Lass uns <span className="text-blue-500">zusammenarbeiten</span>
            </h1>
            <p className="text-gray-400 text-center max-w-xl mb-12">
              Hast du eine Projektidee oder möchtest einfach nur Hallo sagen?
              Schreib mir eine Nachricht und ich melde mich so schnell wie möglich bei dir.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade" delay={200} className="w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-950/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-2xl w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <FaUser className="text-blue-500" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <FaEnvelope className="text-blue-500" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-300">Betreff</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <FaMessage className="text-blue-500" /> Nachricht
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Deine Nachricht an mich..."
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 group ${
                  status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-500'
                } disabled:opacity-50`}
              >
                {status === 'loading' ? 'Wird gesendet...' : status === 'success' ? 'Gesendet!' : status === 'error' ? 'Fehler!' : 'Nachricht senden'}
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              {status === 'success' && <p className="text-green-400 text-center mt-4 text-sm">Vielen Dank! Deine Nachricht wurde erfolgreich übermittelt.</p>}
            </form>
          </AnimateOnScroll>

          <div className="mt-12 flex flex-col items-center gap-4 text-gray-400">
            <p>Oder direkt per Mail an:</p>
            <a href="mailto:nilsm@example.com" className="text-blue-400 font-semibold hover:underline">
              nilsmay1103@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
