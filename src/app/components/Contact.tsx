import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Generate new CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validate CAPTCHA
    if (parseInt(captchaInput) !== captcha.answer) {
      setErrorMessage(t('contact.error.captcha'));
      generateCaptcha();
      return;
    }

    // Rate limiting - prevent multiple submissions within 30 seconds
    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < 30000) {
      setErrorMessage(t('contact.error.rate'));
      return;
    }

    // Simulate sending
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSuccessMessage(t('contact.success'));
      setFormData({ name: '', email: '', message: '' });
      setLastSubmitTime(currentTime);
      setIsSubmitting(false);
      generateCaptcha();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.info')}
              </h3>
              <p className="text-gray-400 mb-8">
                {t('contact.intro')}
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.email')}</h4>
                  <a
                    href="mailto:skayllebarreto@outlook.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    skayllebarreto@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.phone')}</h4>
                  <a
                    href="tel:+5561993815525"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    (61) 99381-5525
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.location')}</h4>
                  <p className="text-gray-400">
                    Brasília, DF
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all disabled:opacity-50"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all disabled:opacity-50"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none disabled:opacity-50"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              {/* CAPTCHA */}
              <div>
                <label className="block text-white font-medium mb-2">
                  {t('contact.form.captcha')}
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-slate-700 px-4 py-3 rounded-lg text-white font-mono text-lg">
                    {captcha.num1} + {captcha.num2} = ?
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-3 bg-slate-700 text-cyan-400 rounded-lg hover:bg-slate-600 transition-colors"
                    title="Gerar novo CAPTCHA"
                  >
                    <RefreshCw size={20} />
                  </button>
                </div>
                <input
                  type="number"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all mt-2 disabled:opacity-50"
                  placeholder={t('contact.form.captcha.answer')}
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400">
                  {errorMessage}
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-400">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t('contact.form.send')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}