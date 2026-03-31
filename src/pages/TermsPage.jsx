import { FileCheck, ShieldAlert, Scale, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { useAccessibility } from '../context/AccessibilityContext';
import { getLocalSystemSettings } from '../services/orderService';

function TermsPage() {
  const { language = 'en' } = useAccessibility();
  const { role, isApproved } = useAuth();
  const navigate = useNavigate();
  const es = language === 'es';

  const systemSettings = getLocalSystemSettings();
  const isStoreOn = systemSettings?.store_mode !== 'OFF';
  const isGuestOrPending = !role || ['GUEST', 'PENDING'].includes(role);
  const showRequestAccess = isGuestOrPending && isStoreOn;

  const sections = es ? [
    {
      title: 'Restricciones de Uso del Producto',
      points: [
        'Todos los productos estan destinados estrictamente a investigacion y educacion.',
        'Los productos no son para uso humano ni veterinario.',
        'Los productos no estan destinados a aplicaciones terapeuticas, diagnosticas o clinicas.',
        'Los materiales deben usarse solo en entornos institucionales de investigacion aprobados.',
      ],
    },
    {
      title: 'Elegibilidad del Comprador',
      points: [
        'Los compradores deben tener 21 anios o mas.',
        'Los compradores deben representar un entorno institucional de investigacion aprobado.',
        'Todas las credenciales institucionales estan sujetas a verificacion y aprobacion.',
        'PEPTQ se reserva el derecho de rechazar servicio a su discrecion.',
      ],
    },
    {
      title: 'Terminos de Pedido y Pago',
      points: [
        'Todas las solicitudes estan sujetas a revision de credenciales institucionales y verificacion de cumplimiento.',
        'El pago se acepta solo por metodos de factura aprobados (ACH y Zelle).',
        'Todas las facturas se emiten despues de verificacion y aprobacion institucional.',
        'Los terminos de pago estandar son Net 30 desde la fecha de factura.',
      ],
    },
    {
      title: 'Responsabilidad y Deber',
      points: [
        'Los compradores son responsables de cumplir con todas las regulaciones federales, estatales y locales aplicables.',
        'PEPTQ no asume responsabilidad por mal uso, manejo inadecuado o incumplimiento regulatorio del comprador.',
        'Al enviar una solicitud, certificas que los materiales se usaran solo para fines de investigacion aprobados.',
      ],
    },
  ] : [
    {
      title: 'Product Use Restrictions',
      points: [
        'All products are intended strictly for research and educational purposes only.',
        'Products are not for human or veterinary use.',
        'Products are not intended for therapeutic, diagnostic, or clinical applications.',
        'Materials must be used only within approved institutional research environments.',
      ],
    },
    {
      title: 'Purchaser Eligibility',
      points: [
        'Purchasers must be 21 years of age or older.',
        'Purchasers must represent an approved institutional research environment.',
        'All institutional credentials are subject to verification and approval.',
        'PEPTQ reserves the right to refuse service at its discretion.',
      ],
    },
    {
      title: 'Order and Payment Terms',
      points: [
        'All inquiries are subject to institutional credential review and compliance verification.',
        'Payment is accepted via approved invoiced methods only (ACH and Zelle).',
        'All invoices are issued following institutional verification and approval.',
        'Standard payment terms are Net 30 from invoice date.',
      ],
    },
    {
      title: 'Liability and Responsibility',
      points: [
        'Purchasers are responsible for compliance with all applicable federal, state, and local regulations.',
        'PEPTQ assumes no liability for misuse, improper handling, or purchaser regulatory non-compliance.',
        'By submitting an inquiry, you certify materials will be used only for approved research purposes.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">
            <div className="xl:w-5/12 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black text-brand-navy dark:text-white uppercase tracking-tight leading-tight">
                  {es ? 'Terminos' : 'Terms'} <span className="text-brand-orange block">{es ? 'Estructura' : 'Framework'}</span>
                </h1>

                {showRequestAccess && (
                  <div className="py-2">
                    <button
                      type="button"
                      onClick={() => navigate('/apply')}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-[#e06d00]"
                    >
                      {es ? 'Solicitar Acceso de Investigacion' : 'Request Research Access'}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                <p className="text-lg md:text-xl text-brand-navy/70 dark:text-gray-400 font-medium leading-relaxed">
                  {es
                    ? 'El acceso institucional de investigacion esta regido por restricciones claras de uso, requisitos de verificacion y responsabilidades de cumplimiento.'
                    : 'Institutional research access is governed by clear usage restrictions, verification requirements, and compliance responsibilities.'}
                </p>
              </div>

              <div className="space-y-6 pt-3">
                <div className="flex gap-4">
                  <FileCheck className="text-brand-orange shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-brand-navy dark:text-white uppercase tracking-widest text-sm">{es ? 'Acuerdo Documentado' : 'Documented Agreement'}</h3>
                    <p className="text-sm text-brand-navy/60 dark:text-gray-500">{es ? 'Los terminos definen las obligaciones para el acceso institucional de investigacion.' : 'Terms define the obligations for institutional research access.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldAlert className="text-brand-orange shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-brand-navy dark:text-white uppercase tracking-widest text-sm">{es ? 'Restricciones de Uso' : 'Use Restrictions'}</h3>
                    <p className="text-sm text-brand-navy/60 dark:text-gray-500">{es ? 'Los materiales estan restringidos a contextos aprobados de investigacion y educacion.' : 'Materials are restricted to approved research and educational contexts.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Scale className="text-brand-orange shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-brand-navy dark:text-white uppercase tracking-widest text-sm">{es ? 'Deber de Cumplimiento' : 'Compliance Duty'}</h3>
                    <p className="text-sm text-brand-navy/60 dark:text-gray-500">{es ? 'Los compradores son responsables del cumplimiento legal y regulatorio.' : 'Purchasers are responsible for legal and regulatory adherence.'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-7/12 w-full bg-white dark:bg-white/5 border-2 border-brand-navy dark:border-white/10 rounded-3xl p-7 md:p-10 shadow-2xl">
              <div className="space-y-7">
                <div className="rounded-2xl border border-brand-orange/40 bg-brand-orange/10 p-5">
                  <p className="text-sm font-bold text-brand-navy dark:text-gray-200 leading-relaxed">
                    {es ? 'Solo para Uso en Investigacion: todos los materiales PEPTQ se suministran exclusivamente para entornos de laboratorio e investigacion educativa.' : 'Research Use Only: all PEPTQ materials are supplied solely for laboratory and educational research environments.'}
                  </p>
                </div>

                {sections.map((section, index) => (
                  <div key={section.title} className="rounded-2xl border border-brand-navy/15 dark:border-white/15 bg-white dark:bg-black/20 p-5">
                    <h2 className="text-sm md:text-base font-black uppercase tracking-wider text-brand-navy dark:text-white mb-3">
                      {index + 1}. {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.points.map((point) => (
                        <li key={point} className="text-sm text-brand-navy/75 dark:text-gray-300 leading-relaxed">• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div id="privacy-policy" className="rounded-2xl border border-brand-navy/15 dark:border-white/15 bg-white dark:bg-black/20 p-5 scroll-mt-24">
                  <h2 className="text-sm md:text-base font-black uppercase tracking-wider text-brand-navy dark:text-white mb-3">
                    {es ? 'Privacidad y Comunicaciones' : 'Privacy and Communications'}
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-sm text-brand-navy/75 dark:text-gray-300 leading-relaxed">• {es ? 'Los datos de contacto enviados por formularios PEPTQ se usan solo para lista de espera, verificacion y comunicacion de lanzamiento.' : 'Contact details submitted through PEPTQ forms are used for waitlist, verification, and launch communication only.'}</li>
                    <li className="text-sm text-brand-navy/75 dark:text-gray-300 leading-relaxed">• {es ? 'Al optar por participar, aceptas recibir actualizaciones de cuenta y acceso por correo y telefono cuando corresponda.' : 'By opting in, you agree to receive account and launch-access updates by email and phone where permitted.'}</li>
                    <li className="text-sm text-brand-navy/75 dark:text-gray-300 leading-relaxed">• {es ? 'PEPTQ no vende datos enviados y mantiene salvaguardas administrativas, tecnicas y fisicas sobre los registros.' : 'PEPTQ does not sell submitted contact data and maintains administrative, technical, and physical safeguards over submitted records.'}</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-brand-navy/15 dark:border-white/15 bg-gray-50 dark:bg-black/20 p-5">
                  <p className="text-xs text-brand-navy/70 dark:text-gray-400">
                    <strong>{es ? 'Ultima Actualizacion:' : 'Last Updated:'}</strong> {es ? 'Febrero 2026. PEPTQ puede actualizar estos terminos periodicamente. El uso continuo del portal indica aceptacion de los terminos vigentes.' : 'February 2026. PEPTQ may update these terms from time to time. Continued use of portal services indicates acceptance of current terms.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
