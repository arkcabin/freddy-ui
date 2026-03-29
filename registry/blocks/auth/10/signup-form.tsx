"use client";

import { CheckIcon, EyeIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Left Side: Marketing/Benefits Panel */}
      <div className="relative hidden flex-col justify-between bg-zinc-950 p-12 text-white lg:flex border-r border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 h-full w-full rounded-full bg-blue-500/10 blur-[160px] animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 h-full w-full rounded-full bg-purple-500/10 blur-[160px] animate-pulse [animation-delay:2s]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-6 invert dark:invert-0" />
            <span className="font-bold text-lg tracking-tight">Freddy UI</span>
          </div>

          <div className="mt-24 space-y-8">
            <h1 className="text-5xl font-bold tracking-tightest leading-[1.1] xl:text-6xl">
              Elevate your <br />
              <span className="text-blue-400">development</span> <br />
              workflow.
            </h1>
            <p className="max-w-md text-lg text-zinc-400 font-medium">
              Join 10,000+ developers building faster with our premium shadcn/ui
              blocks.
            </p>

            <ul className="space-y-5 pt-12">
              {[
                "Access to 100+ premium blocks",
                "Weekly updates & new components",
                "Advanced animation primitives",
                "Component-level accessibility",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-sm font-medium text-zinc-300"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                    <CheckIcon className="size-3" strokeWidth={3} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 pt-10">
          <blockquote className="space-y-4">
            <p className="text-base font-medium leading-relaxed text-zinc-300 italic">
              "The best component library I've used. It saved us months of work
              on our latest SaaS project."
            </p>
            <footer className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-zinc-800 border border-zinc-700" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white">
                  Sarah Chen
                </p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mt-0.5">
                  CTO at TechFlow
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex items-center justify-center bg-background p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-[420px] space-y-10">
          <div className="flex flex-col space-y-3 text-center lg:text-left">
            <LogoIcon className="mx-auto size-8 lg:mx-0 lg:hidden" />
            <h2 className="text-4xl font-bold tracking-tightest">
              Create account
            </h2>
            <p className="text-base text-muted-foreground font-medium">
              Join the future of UI development.
            </p>
          </div>

          {/* Social Grid (Tailark Style 2x2) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Google", icon: GoogleIcon },
              { label: "GitHub", icon: GithubIcon },
              { label: "Apple", icon: AppleIcon },
              { label: "Discord", icon: DiscordIcon },
            ].map((social) => (
              <Button
                key={social.label}
                variant="outline"
                className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 font-bold text-xs uppercase tracking-widest transition-all hover:bg-background hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-zinc-700"
                type="button"
              >
                <social.icon className="mr-2.5 size-4" />
                {social.label}
              </Button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-100 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="bg-background px-4 text-muted-foreground/60">
                Or email signup
              </span>
            </div>
          </div>

          <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-2.5">
              <Label
                htmlFor="full-name"
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1"
              >
                Full Name
              </Label>
              <Input
                id="full-name"
                placeholder="John Doe"
                className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
              />
            </div>
            <div className="grid gap-2.5">
              <Label
                htmlFor="email"
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1"
              >
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
              />
            </div>
            <div className="grid gap-2.5">
              <Label
                htmlFor="password"
                title="password"
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 ml-1"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-12 pl-4 pr-12 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <EyeIcon className="size-4" />
                </button>
              </div>
            </div>
            <Button
              className="mt-4 h-12 rounded-xl text-sm font-bold tracking-tight shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              size="lg"
            >
              Get Started Free
            </Button>
          </form>

          <p className="text-center text-sm font-medium text-muted-foreground">
            Already have an account?{" "}
            <a
              href="#"
              className="font-bold text-primary hover:underline underline-offset-4 transition-all"
            >
              Sign In
            </a>
          </p>

          <footer className="text-center text-[10px] font-medium text-muted-foreground/50 leading-relaxed px-6">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="underline-offset-4 hover:text-primary hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline-offset-4 hover:text-primary hover:underline"
            >
              Privacy Policy
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
}

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Google</title>
    <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
  </svg>
);

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const AppleIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Apple</title>
    <path d="M17.066 3.033c.883-1.072 1.488-2.559 1.326-4.033-1.268.051-2.803.844-3.711 1.905-.815.938-1.528 2.464-1.336 3.896 1.413.111 2.84-.7 3.721-1.768zm3.038 9.721c.023-2.14 1.761-3.161 1.841-3.208-1.002-1.465-2.556-1.666-3.106-1.688-1.319-.133-2.571.776-3.241.776-.668 0-1.693-.759-2.812-.738-1.47.021-2.826.855-3.583 2.171-1.53 2.651-.39 6.581 1.089 8.715.724 1.043 1.583 2.21 2.71 2.167 1.085-.043 1.493-.701 2.805-.701 1.312 0 1.678.701 2.822.68 1.164-.022 1.916-1.053 2.628-2.1 1.127-1.638 1.583-2.923 1.597-2.999-.033-.015-3.04-1.166-3.013-4.711z" />
  </svg>
);

const DiscordIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Discord</title>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.89.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
  </svg>
);
