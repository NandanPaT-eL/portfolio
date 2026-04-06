"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import LiquidCanvas from "@/components/effects/LiquidCanvas";
import IridescentLine from "@/components/effects/IridescentLine";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const socials = [
    { label: "GitHub", handle: "NandanPaT-eL", href: personalInfo.github },
    { label: "LinkedIn", handle: "patel-nandan", href: personalInfo.linkedin },
    {
      label: "Email",
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  const focusField = (el: HTMLElement) => {
    el.style.background = "var(--accent-dim)";
    el.style.boxShadow = "inset 0 0 0 1px var(--accent-border)";
  };

  const blurField = (el: HTMLElement) => {
    el.style.background = "transparent";
    el.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "var(--gray-900)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: 160,
      }}
    >
      <LiquidCanvas style={{ opacity: 0.5 }} />
      <IridescentLine style={{ top: 0, left: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, overflowX: "hidden" }}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 80 }}
        >
          <p
            className="text-label"
            style={{ color: "var(--accent)", marginBottom: 12 }}
          >
            09 / Contact
          </p>

          <h2
            className="display text-xl"
            style={{ color: "var(--off-white)", marginBottom: 20 }}
          >
            Let's Build
            <br />
            Together
          </h2>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--gray-400)",
              maxWidth: 500,
              lineHeight: 1.8,
            }}
          >
            Open to AI/ML engineering roles, research collaborations, and
            selective freelance projects. Serious inquiries only. I respond
            within 24 hours.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Availability */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                padding: 24,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 8px #4ade80",
                    animation: "pulse 2.5s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#4ade80",
                  }}
                >
                  Available for Work
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--gray-400)",
                  lineHeight: 1.7,
                }}
              >
                AI/ML Engineer roles · MERN Stack · Research work · Freelance
                projects
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    textDecoration: "none",
                    background: "var(--card-bg)",
                    borderBottom:
                      i < socials.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                    wordBreak: "break-word",
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 4,
                      }}
                    >
                      {s.label}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        color: "var(--off-white)",
                        wordBreak: "break-all",
                      }}
                    >
                      {s.handle}
                    </p>
                  </div>

                  <span style={{ color: "var(--accent)", fontSize: 18, flexShrink: 0 }}>
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* LOCATION */}
            <div
              style={{
                marginTop: 32,
                padding: "16px 0",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gray-600)",
                  marginBottom: 6,
                }}
              >
                Location
              </p>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--gray-400)",
                }}
              >
                {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ minWidth: 0, width: "100%" }}
          >
            {!submitted ? (
              <form
                ref={formRef}
                action="https://formsubmit.co/napassociate@gmail.com"
                method="POST"
                onSubmit={(e) => setTimeout(() => setSubmitted(true), 200)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "var(--border-accent)",
                  background:
                    "linear-gradient(180deg, rgba(200,169,110,0.04), transparent)",
                  boxShadow:
                    "0 0 0 1px rgba(200,169,110,0.15), 0 20px 60px rgba(0,0,0,0.6)",
                  width: "100%",
                }}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Portfolio Inquiry — Nandan Patel"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                {[
                  {
                    name: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your@email.com",
                    required: true,
                  },
                  {
                    name: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "What are we building?",
                    required: false,
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor={field.name}
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 20,
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--gray-600)",
                      }}
                    >
                      {field.label}
                      {field.required && " *"}
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        padding: "36px 20px 16px",
                        fontFamily: "var(--font-mono)",
                        fontSize: 14,
                        color: "var(--off-white)",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) =>
                        focusField(e.currentTarget.parentElement!)
                      }
                      onBlur={(e) => blurField(e.currentTarget.parentElement!)}
                    />
                  </div>
                ))}

                {/* MESSAGE */}
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    position: "relative",
                  }}
                >
                  <label
                    htmlFor="message"
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 20,
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gray-600)",
                    }}
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or idea..."
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      padding: "36px 20px 16px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 14,
                      color: "var(--off-white)",
                      resize: "vertical",
                      minHeight: 140,
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => focusField(e.currentTarget.parentElement!)}
                    onBlur={(e) => blurField(e.currentTarget.parentElement!)}
                  />
                </div>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: "var(--accent)" }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "rgba(200,169,110,0.06)",
                    border: "none",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    width: "100%",
                  }}
                >
                  <span>Send Message</span>
                  <span style={{ fontSize: 18 }}>→</span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "64px 20px",
                  textAlign: "center",
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: "clamp(40px, 10vw, 64px)",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  SENT
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--gray-400)",
                    lineHeight: 1.8,
                  }}
                >
                  Message received. I will get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 8px #4ade80;
          }
          50% {
            opacity: 0.5;
            box-shadow: 0 0 4px #4ade80;
          }
        }
      `}</style>
    </section>
  );
}