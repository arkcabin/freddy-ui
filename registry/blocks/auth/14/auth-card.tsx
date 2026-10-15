"use client";

import { ArrowUpRight, Fingerprint, Mail, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedGradient } from "./animated-gradient";
import { LightRays } from "./light-rays";

type AuthMode = "passkey" | "email";

export function AuthCard() {
  const [mode, setMode] = useState<AuthMode>("passkey");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <main className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-background px-4 py-20 text-foreground selection:bg-foreground selection:text-background sm:px-6">
      {/* Background: Spell UI Animated Gradient + Light Rays */}
      <div
        aria-hidden="true"
        className="-z-10 pointer-events-none absolute inset-0 overflow-hidden"
      >
        <AnimatedGradient
          className="absolute inset-0 opacity-70 dark:opacity-50"
          config={{ preset: "Vortex", speed: 12 }}
          noise={{ opacity: 0.12 }}
        />
        <LightRays
          animation={{ animate: true, speed: 6 }}
          backgroundColor="transparent"
          className="absolute inset-0 opacity-60 dark:opacity-40"
          intensity={14}
          rays={26}
          raysColor={{ mode: "single", color: "#66b3ff" }}
          reach={22}
        />
        {/* Optical edge vignette so rays dissolve seamlessly */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,var(--background)_90%)]" />
      </div>

      {/* Outer Shell (Doppelrand / Double-Bezel Hardware Enclosure) */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-[2.25rem] bg-background/60 p-2 shadow-2xl ring-1 ring-border/60 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] dark:bg-background/40 dark:ring-white/10"
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Inner Core */}
        <div className="relative rounded-[calc(2.25rem-0.5rem)] border border-border/70 bg-background/90 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] sm:p-9 dark:bg-card/75 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          {/* Top Brand Header using official Freddy UI branding */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoIcon className="size-8" />
              <div className="flex flex-col">
                <span className="font-bold font-heading text-foreground text-sm tracking-tight">
                  Freddy UI
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Authentication
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
              Secure
            </span>
          </div>

          {/* Heading */}
          <div className="mt-8 space-y-1.5">
            <h1 className="font-bold font-heading text-2xl text-foreground tracking-tight sm:text-3xl">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
              Hardware-grade passkey and zero-friction enterprise access.
            </p>
          </div>

          {/* Mode Switcher (Double-Bezel Pill Tabs) */}
          <div className="mt-6 rounded-full bg-muted/60 p-1 ring-1 ring-border/50">
            <div className="grid grid-cols-2 gap-1 font-medium text-xs">
              <button
                className={`relative flex items-center justify-center gap-2 rounded-full py-2 transition-colors duration-300 ${
                  mode === "passkey"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMode("passkey")}
                type="button"
              >
                {mode === "passkey" && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-background shadow-xs"
                    layoutId="active-auth-tab"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
                <Fingerprint className="relative z-10 size-3.5 stroke-[1.5]" />
                <span className="relative z-10">Passkey / Biometric</span>
              </button>

              <button
                className={`relative flex items-center justify-center gap-2 rounded-full py-2 transition-colors duration-300 ${
                  mode === "email"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMode("email")}
                type="button"
              >
                {mode === "email" && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-background shadow-xs"
                    layoutId="active-auth-tab"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
                <Mail className="relative z-10 size-3.5 stroke-[1.5]" />
                <span className="relative z-10">Magic Link</span>
              </button>
            </div>
          </div>

          {/* Auth Action Body */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {mode === "passkey" ? (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                  exit={{ opacity: 0, y: -6 }}
                  initial={{ opacity: 0, y: 6 }}
                  key="passkey"
                  transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                >
                  {/* Biometric Interactive Scanner Card */}
                  <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-border/80 border-dashed bg-muted/20 px-4 py-8 text-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-foreground/30 hover:bg-muted/40">
                    <div className="relative flex size-14 items-center justify-center rounded-full bg-foreground/5 text-foreground ring-1 ring-foreground/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                      <Fingerprint className="size-7 stroke-[1.25] text-foreground transition-all duration-300 group-hover:text-foreground" />
                      <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <span className="mt-3 font-medium text-foreground text-xs">
                      WebAuthn & YubiKey Ready
                    </span>
                    <span className="mt-0.5 text-[11px] text-muted-foreground">
                      Touch biometric sensor or hardware security key
                    </span>
                  </div>

                  {/* Nested CTA & Button-in-Button */}
                  <button
                    className="group relative flex w-full items-center justify-between rounded-full bg-foreground px-6 py-3 font-medium text-background text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-95 active:scale-[0.98]"
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 1200);
                    }}
                    type="button"
                  >
                    <span>
                      {isLoading
                        ? "Verifying Token..."
                        : "Authenticate with Passkey"}
                    </span>
                    <span className="group-hover:-translate-y-0.5 flex size-7 items-center justify-center rounded-full bg-background/20 text-background transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                      <ArrowUpRight className="size-3.5 stroke-[1.5]" />
                    </span>
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                  exit={{ opacity: 0, y: -6 }}
                  initial={{ opacity: 0, y: 6 }}
                  key="email"
                  onSubmit={handleSubmit}
                  transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="space-y-1.5 text-left">
                    <Label
                      className="font-medium text-foreground text-xs"
                      htmlFor="freddy-auth-email"
                    >
                      Work Email
                    </Label>
                    <Input
                      autoComplete="email"
                      className="h-11 rounded-full border-border/80 bg-muted/30 px-4 text-xs transition-colors focus-visible:ring-1 focus-visible:ring-foreground"
                      id="freddy-auth-email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@acme.com"
                      required
                      type="email"
                      value={email}
                    />
                  </div>

                  {/* Nested CTA & Button-in-Button */}
                  <button
                    className="group relative flex w-full items-center justify-between rounded-full bg-foreground px-6 py-3 font-medium text-background text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-95 active:scale-[0.98]"
                    disabled={isLoading}
                    type="submit"
                  >
                    <span>
                      {isLoading ? "Sending Magic Token..." : "Send Magic Link"}
                    </span>
                    <span className="group-hover:-translate-y-0.5 flex size-7 items-center justify-center rounded-full bg-background/20 text-background transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                      <ArrowUpRight className="size-3.5 stroke-[1.5]" />
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border/60" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              enterprise sso
            </span>
            <span className="h-px flex-1 bg-border/60" />
          </div>

          {/* Social Single Sign-On (Precision Minimalist Buttons) */}
          <div className="grid grid-cols-2 gap-2.5">
            <Button
              className="h-10 rounded-full border-border/80 font-medium text-xs transition-all duration-300 hover:border-foreground/30 hover:bg-muted/30 active:scale-[0.98]"
              type="button"
              variant="outline"
            >
              <GoogleIcon />
              Google SSO
            </Button>
            <Button
              className="h-10 rounded-full border-border/80 font-medium text-xs transition-all duration-300 hover:border-foreground/30 hover:bg-muted/30 active:scale-[0.98]"
              type="button"
              variant="outline"
            >
              <GithubIcon />
              GitHub
            </Button>
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <ShieldCheck className="size-3.5 stroke-[1.5] text-emerald-500" />
            <span className="text-[11px] leading-none">
              FIDO2 Certified • 256-bit End-to-End Encryption
            </span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5 shrink-0" viewBox="0 0 24 24">
      <title>Google</title>
      <path
        d="M21.35 12.27c0-.78-.07-1.54-.22-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.42h3.14c1.84-1.69 2.93-4.18 2.93-7.38Z"
        fill="#4285F4"
      />
      <path
        d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.42c-.87.58-1.98.93-3.31.93-2.55 0-4.7-1.72-5.47-4.03H3.28v2.5A9.74 9.74 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.53 14.13a5.86 5.86 0 0 1 0-3.76v-2.5H3.28a9.98 9.98 0 0 0 0 8.76l3.25-2.5Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.34c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.43 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.72 5.37l3.25 2.5c.77-2.31 2.92-4.03 5.47-4.03Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <title>GitHub</title>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.37-1.3-1.74-1.3-1.74-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 5.77c.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
