import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({
        ...prev,
        message: `Gostaria de um orçamento baseado no projeto: ${initialProjectType}`,
      }));
    }
  }, [initialProjectType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `Olá, borgesgalvao.site! Gostaria de um orçamento sem compromisso para criação de site:
• *Nome:* ${formData.name}
• *E-mail:* ${formData.email}
${formData.message ? `• *Detalhes:* ${formData.message}` : ''}`;

    const encoded = encodeURIComponent(messageText);
    const link = `https://wa.me/5531992141182?text=${encoded}`;
    setWhatsappLink(link);
    setSubmitted(true);

    // Open WhatsApp in new tab automatically
    window.open(link, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-transparent text-slate-100 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Compelling Contact Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Atendimento Direto & Ágil
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
              Pronto para dar o próximo passo?{' '}
              <span className="text-emerald-400">Fale com a gente.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Preencha o formulário rápido ao lado ou envie uma mensagem direta no nosso WhatsApp. Responderemos em poucos minutos com uma proposta sob medida para a sua empresa.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp Oficial</div>
                  <a
                    href="https://wa.me/5531992141182"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +55 (31) 99214-1182
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Horário de Atendimento</div>
                  <div className="text-sm font-bold text-white">Segunda a Sábado • 08h às 20h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] border border-white/15 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div id="contact-success-box" className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Obrigado, {formData.name}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Seu pedido de orçamento foi estruturado com sucesso. Uma conversa no WhatsApp foi aberta para agilizar seu atendimento.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp Novamente</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all cursor-pointer"
                    >
                      Enviar outro orçamento
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      Solicitar Orçamento Gratuito
                    </h3>
                    <p className="text-xs text-slate-400">
                      Preencha os campos abaixo para receber nossa proposta personalizada.
                    </p>
                  </div>

                  {/* Field: Nome */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ex: Dr. Roberto Silva ou Amanda Souza"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all placeholder:text-slate-500 backdrop-blur-md"
                    />
                  </div>

                  {/* Field: E-mail */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Seu E-mail *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Ex: contato@minhaempresa.com.br"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all placeholder:text-slate-500 backdrop-blur-md"
                    />
                  </div>

                  {/* Field: Mensagem / Detalhes */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Mensagem ou Detalhes do Projeto (Opcional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="Conte um pouco sobre o que você deseja para o seu site ou se já tem um prazo em mente..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all placeholder:text-slate-500 resize-none backdrop-blur-md"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Quero meu orçamento sem compromisso</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 Seus dados estão seguros e não enviamos spam. Resposta em até 30 minutos em horário comercial.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
