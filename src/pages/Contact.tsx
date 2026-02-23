import { useState } from "react";

const WHATSAPP_NUMBER = "917842213679";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `*New Enquiry – FURAISE*%0A` +
      `-----------------------------%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Company:* ${form.company || "N/A"}%0A` +
      `*Category:* ${form.product}%0A` +
      `*Quantity Required:* ${form.quantity || "N/A"}%0A` +
      `*Message:* ${form.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decorative grain/texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Accent blob */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(var(--secondary))" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: "hsl(var(--primary))", fontFamily: "var(--font-body, sans-serif)" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            Contact{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Us</span>
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Reach out for bulk enquiries, pricing, or export documentation support.
            We respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* ── LEFT: Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Brand block */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: "hsl(var(--card, var(--background)))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <p
                className="text-2xl font-black tracking-widest mb-1"
                style={{
                  fontFamily: "var(--font-heading, Georgia, serif)",
                  color: "hsl(var(--primary))",
                }}
              >
                FURAISE
              </p>
              <p
                className="text-xs text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                India-based agricultural commodity export enterprise specialising in
                industrial turmeric supply and premium rice exports.
              </p>
            </div>

            {/* Contact details */}
            <div
              className="rounded-2xl p-7 border flex flex-col gap-6"
              style={{
                background: "hsl(var(--card, var(--background)))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <h3
                className="text-sm font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  color: "hsl(var(--primary))",
                }}
              >
                Contact Details
              </h3>

              {/* Phone */}
              <a
                href="tel:+917842213679"
                className="flex items-start gap-4 group"
              >
                <span
                  className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base transition-colors"
                  style={{
                    background: "hsl(var(--primary) / 0.12)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  📞
                </span>
                <div>
                  <p
                    className="text-xs text-muted-foreground mb-0.5"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-sm font-semibold text-foreground group-hover:underline transition"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    +91 78422 13679
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:exports@furaise.com"
                className="flex items-start gap-4 group"
              >
                <span
                  className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base"
                  style={{
                    background: "hsl(var(--primary) / 0.12)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  ✉️
                </span>
                <div>
                  <p
                    className="text-xs text-muted-foreground mb-0.5"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-sm font-semibold text-foreground group-hover:underline transition"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    exports@furaise.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-base"
                  style={{
                    background: "hsl(var(--primary) / 0.12)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  📍
                </span>
                <div>
                  <p
                    className="text-xs text-muted-foreground mb-0.5"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-sm font-semibold text-foreground leading-relaxed"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    3/175, Dhurjati Nagar, Gudur,<br />
                    Andhra Pradesh – 524101
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: "hsl(var(--card, var(--background)))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <h3
                className="text-sm font-bold tracking-widest uppercase mb-5"
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  color: "hsl(var(--primary))",
                }}
              >
                Business Hours
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM", open: true },
                  { day: "Saturday", hours: "10:00 AM – 5:00 PM", open: true },
                  { day: "Sunday", hours: "Closed", open: false },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between">
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {row.day}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={
                        row.open
                          ? {
                              background: "hsl(var(--primary) / 0.12)",
                              color: "hsl(var(--primary))",
                              fontFamily: "var(--font-body, sans-serif)",
                            }
                          : {
                              background: "hsl(var(--muted))",
                              color: "hsl(var(--muted-foreground))",
                              fontFamily: "var(--font-body, sans-serif)",
                            }
                      }
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp direct CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-body, sans-serif)",
                boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.427a.75.75 0 0 0 .921.921l5.624-1.464A11.945 11.945 0 0 0 12 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 22c-1.885 0-3.653-.51-5.17-1.402l-.37-.22-3.338.869.882-3.32-.24-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* ── RIGHT: Enquiry Form ── */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl border p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "hsl(var(--card, var(--background)))",
                borderColor: "hsl(var(--border))",
              }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full"
                style={{ background: "hsl(var(--primary))" }}
              />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                  <span className="text-5xl">✅</span>
                  <h3
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                  >
                    Enquiry Sent!
                  </h3>
                  <p
                    className="text-sm text-muted-foreground max-w-xs"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Your message has been forwarded to WhatsApp. We'll get back to you
                    within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", product: "", quantity: "", message: "" }); }}
                    className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold border transition hover:opacity-80"
                    style={{
                      borderColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary))",
                      fontFamily: "var(--font-body, sans-serif)",
                    }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl md:text-2xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                  >
                    Send an Enquiry
                  </h3>
                  <p
                    className="text-xs text-muted-foreground mb-8"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Fill in the form below and your message will be sent directly to our WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                          style={{ fontFamily: "var(--font-body, sans-serif)" }}
                        >
                          Full Name <span style={{ color: "hsl(var(--primary))" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2"
                          style={{
                            borderColor: "hsl(var(--border))",
                            fontFamily: "var(--font-body, sans-serif)",
                            // @ts-ignore
                            "--tw-ring-color": "hsl(var(--primary) / 0.4)",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                          style={{ fontFamily: "var(--font-body, sans-serif)" }}
                        >
                          Email Address <span style={{ color: "hsl(var(--primary))" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2"
                          style={{
                            borderColor: "hsl(var(--border))",
                            fontFamily: "var(--font-body, sans-serif)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Company + Product */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                          style={{ fontFamily: "var(--font-body, sans-serif)" }}
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company (optional)"
                          value={form.company}
                          onChange={handleChange}
                          className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2"
                          style={{
                            borderColor: "hsl(var(--border))",
                            fontFamily: "var(--font-body, sans-serif)",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                          style={{ fontFamily: "var(--font-body, sans-serif)" }}
                        >
                          Category <span style={{ color: "hsl(var(--primary))" }}>*</span>
                        </label>
                        <select
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2 cursor-pointer"
                          style={{
                            borderColor: "hsl(var(--border))",
                            fontFamily: "var(--font-body, sans-serif)",
                          }}
                        >
                          <option value="" disabled>Select a category</option>
                          <option value="Industrial Turmeric (Extraction)">Industrial Turmeric – Extraction</option>
                          <option value="Export Turmeric (EU/UAE/USA)">Export Turmeric – EU / UAE / USA</option>
                          <option value="Rice Export (Sona Masuri / IR64 / Basmati 1121)">Rice Export – Sona Masuri / IR64 / Basmati</option>
                          <option value="Quality Assurance & Compliance">Quality Assurance & Compliance</option>
                          <option value="Other">Other / General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Quantity */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-body, sans-serif)" }}
                      >
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        placeholder="e.g. 20 MT, 1 container load, etc."
                        value={form.quantity}
                        onChange={handleChange}
                        className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2"
                        style={{
                          borderColor: "hsl(var(--border))",
                          fontFamily: "var(--font-body, sans-serif)",
                        }}
                      />
                    </div>

                    {/* Row 4: Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-body, sans-serif)" }}
                      >
                        Message <span style={{ color: "hsl(var(--primary))" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your requirements, destination port, preferred terms, or any specific questions..."
                        value={form.message}
                        onChange={handleChange}
                        className="rounded-xl px-4 py-3 text-sm border bg-background text-foreground outline-none transition focus:ring-2 resize-none"
                        style={{
                          borderColor: "hsl(var(--border))",
                          fontFamily: "var(--font-body, sans-serif)",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-bold text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] mt-2"
                      style={{
                        background: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground, #fff))",
                        fontFamily: "var(--font-body, sans-serif)",
                        boxShadow: "0 4px 24px hsl(var(--primary) / 0.3)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.427a.75.75 0 0 0 .921.921l5.624-1.464A11.945 11.945 0 0 0 12 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 22c-1.885 0-3.653-.51-5.17-1.402l-.37-.22-3.338.869.882-3.32-.24-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      Send via WhatsApp
                    </button>

                    <p
                      className="text-center text-xs text-muted-foreground"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      Clicking the button will open WhatsApp with your message pre-filled.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;