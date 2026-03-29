import type React from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
// https://magicui.design/docs/components/particles
import { Particles } from "@/components/ui/particles";

export function AuthPage() {
  return (
    <div className="relative w-full md:h-screen md:overflow-hidden">
      <Particles
        className="absolute inset-0"
        color="#666666"
        ease={20}
        quantity={120}
      />

      {/* Centered auth card */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm rounded-2xl border border-border/50 bg-background/60 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl">
          {/* Logo + heading */}
          <div className="mb-8 space-y-3">
            <LogoIcon className="size-8" />
            <div>
              <h1 className="font-bold text-2xl text-foreground tracking-tight">
                Welcome back
              </h1>
              <p className="mt-1 text-muted-foreground text-sm">
                Sign in to your account or create a new one.
              </p>
            </div>
          </div>

          {/* OAuth buttons */}
          <div className="space-y-3">
            <Button
              className="w-full gap-2.5 transition-all hover:shadow-md"
              size="lg"
              type="button"
              variant="outline"
            >
              <GoogleIcon className="size-4 shrink-0" />
              <span>Continue with Google</span>
            </Button>
            <Button
              className="w-full gap-2.5 transition-all hover:shadow-md"
              size="lg"
              type="button"
              variant="outline"
            >
              <GithubIcon className="size-4 shrink-0" />
              <span>Continue with GitHub</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-medium text-[11px] text-muted-foreground/60 uppercase tracking-wider">
              or
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Email CTA */}
          <Button className="w-full" size="lg" type="button">
            Continue with Email
          </Button>

          {/* Terms */}
          <p className="mt-6 text-center text-[11px] text-muted-foreground/70 leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              className="underline underline-offset-4 transition-colors hover:text-foreground"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 transition-colors hover:text-foreground"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Google</title>
    <g>
      <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
    </g>
  </svg>
);

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <title>GitHub</title>
    <path
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      fill="currentColor"
      fillRule="evenodd"
      transform="scale(64)"
    />
  </svg>
);
