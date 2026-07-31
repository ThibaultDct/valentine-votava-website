import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-neutral-700 mb-2">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={254}
          className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
          rows={4}
          className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 ${
          status === 'sending'
            ? 'bg-amber-400 cursor-wait'
            : 'bg-amber-600 hover:bg-amber-700 text-white'
        }`}
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Votre message a été envoyé avec succès !</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center">Une erreur est survenue. Veuillez réessayer plus tard.</p>
      )}
    </form>
  );
}