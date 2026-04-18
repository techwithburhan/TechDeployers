import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Layers3,
  Rocket,
  Wrench,
  Sparkles,
  Tag,
} from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || '');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Rocket size={15} className="text-blue-300" />
                Premium Service Details
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <div className={`mx-auto flex h-28 w-28 items-center justify-center rounded-3xl ${service.color}`}>
                  <Icon className={service.iconColor} size={50} />
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-white/90">
                    <div className="text-sm text-slate-400">Starting Focus</div>
                    <div className="mt-1 text-lg font-semibold">Performance, quality, and business results</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-white/90">
                    <div className="text-sm text-slate-400">Service Coverage</div>
                    <div className="mt-1 text-lg font-semibold">Planning, implementation, launch, and support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <BadgeCheck className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Service Overview</h2>
            </div>
            <p className="text-base leading-8 text-slate-600">{service.overview}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Layers3 className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">What You Get</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Wrench className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Our Process</h2>
            </div>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-2 text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Key Benefits</h2>
            </div>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
                  <p className="text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Ideal For</h2>
            </div>
            <div className="space-y-3">
              {service.idealFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRICING SECTION ============== */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              <Tag size={14} />
              Pricing Plans
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Choose the Right Plan for You
            </h2>
            <p className="text-base text-slate-600 md:text-lg">
              Transparent pricing with no hidden costs. Pick a package that fits your business
              needs, or contact us for a fully custom quote.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border-2 p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-200'
                    : 'border-slate-200 bg-white text-slate-900 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                      <Sparkles size={12} />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`mb-2 text-xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? 'text-white/80' : 'text-slate-600'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-extrabold md:text-5xl ${
                      plan.highlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-white/70' : 'text-slate-500'
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <div
                  className={`mb-6 h-px w-full ${
                    plan.highlighted ? 'bg-white/20' : 'bg-slate-200'
                  }`}
                />

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? 'text-yellow-300' : 'text-blue-600'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-white/90' : 'text-slate-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-700 hover:bg-yellow-300 hover:text-slate-900'
                      : 'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
                >
                  {plan.cta || 'Get Started'}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
            <p className="text-sm text-slate-600 md:text-base">
              <span className="font-bold text-slate-900">Need a custom plan?</span> All packages can
              be tailored to your specific requirements. Get in touch for a personalized quote.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us for Custom Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
