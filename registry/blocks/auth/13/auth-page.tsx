"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <section className="relative hidden overflow-hidden border-border border-r bg-foreground p-10 text-background lg:flex lg:min-h-screen lg:flex-col lg:justify-between xl:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.1),transparent_30%)]" />
        <div className="absolute right-[-12%] bottom-[-20%] size-96 rounded-full border border-background/15" />
        <div className="absolute right-[8%] bottom-[8%] size-56 rounded-full border border-background/10" />

        <div className="relative z-10 flex items-center gap-3 font-semibold text-sm tracking-tight">
          <LogoIcon className="size-8" />
          <span className="font-bold font-heading text-base">Freddy UI</span>
        </div>

        <div className="relative z-10 max-w-xl space-y-8">
          <p className="font-mono text-background/60 text-xs uppercase tracking-[0.22em]">
            A calmer way to build
          </p>
          <h1 className="max-w-lg font-heading text-5xl leading-[0.98] tracking-tight xl:text-7xl">
            Your best work starts with a clear view.
          </h1>
          <p className="max-w-md text-background/65 text-base leading-relaxed">
            Bring projects, people, and momentum into one focused workspace
            built for teams that care about the details.
          </p>
          <div className="flex items-center gap-3 text-background/70 text-sm">
            <div className="-space-x-2 flex">
              {["AL", "MR", "SK"].map((initials) => (
                <span
                  className="flex size-8 items-center justify-center rounded-full border-2 border-foreground bg-background/20 font-semibold text-[10px] text-background"
                  key={initials}
                >
                  {initials}
                </span>
              ))}
            </div>
            <span>Trusted by thoughtful teams worldwide</span>
          </div>
        </div>

        <p className="relative z-10 text-background/45 text-xs">
          Designed for focus. Made to last.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-10 space-y-3">
            <div className="mb-8 flex lg:hidden">
              <LogoIcon className="size-9" />
            </div>
            <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Welcome back
            </p>
            <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
              Sign in to Freddy UI
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enter your details to continue to your workspace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button className="h-11 gap-2" type="button" variant="outline">
              <GoogleIcon />
              Google
            </Button>
            <Button className="h-11 gap-2" type="button" variant="outline">
              <GithubIcon />
              GitHub
            </Button>
          </div>

          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.18em]">
              or continue with email
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="auth-13-email">Email address</Label>
              <Input
                className="h-12"
                id="auth-13-email"
                placeholder="you@company.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="auth-13-password">Password</Label>
                <a
                  className="font-medium text-muted-foreground text-xs underline-offset-4 hover:text-foreground hover:underline"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  className="h-12 pr-11"
                  id="auth-13-password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="-translate-y-1/2 absolute top-1/2 right-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword((visible) => !visible)}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>
            <Button className="h-12 w-full gap-2" type="submit">
              Sign in
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <LockKeyhole className="size-3.5" />
            <span>Your information is encrypted and secure.</span>
          </div>
          <p className="mt-8 text-center text-muted-foreground text-sm">
            New to Freddy UI?{" "}
            <a
              className="font-semibold text-foreground hover:underline"
              href="#"
            >
              Create an account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
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
      className="size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <title>GitHub</title>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.37-1.3-1.74-1.3-1.74-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 5.77c.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
