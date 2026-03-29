"use client";

import { EyeIcon } from "lucide-react";
import type React from "react";
import { LogoIcon } from "@/components/logo";
import { Plus } from "@/components/plus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Google Icon</title>
    <g>
      <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
    </g>
  </svg>
);

export function SignupForm() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="mb-8 flex flex-col items-center gap-4">
        <LogoIcon className="size-8" />
        <div className="text-center">
          <h2 className="font-bold text-2xl tracking-tight">
            Create an Account
          </h2>
          <p className="text-muted-foreground text-sm">
            Welcome! Create an account to get started
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Button
          className="h-11 w-full font-medium transition-all hover:bg-muted"
          type="button"
          variant="outline"
        >
          <GoogleIcon className="mr-2 size-4" />
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-muted-foreground/20 border-t" />
          </div>
          <div className="relative flex justify-center font-bold text-[10px] uppercase tracking-wider">
            <span className="bg-background px-2 text-muted-foreground">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2 text-start">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                className="h-10"
                id="first-name"
                placeholder="John"
                type="text"
              />
            </div>
            <div className="grid gap-2 text-start">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                className="h-10"
                id="last-name"
                placeholder="Doe"
                type="text"
              />
            </div>
          </div>
          <div className="grid gap-2 text-start">
            <Label htmlFor="email">Email</Label>
            <Input
              className="h-10"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="grid gap-2 text-start">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                className="h-10 pr-10"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
              <button
                className="-translate-y-1/2 absolute top-1/2 right-3 text-muted-foreground transition-colors hover:text-foreground"
                title="Toggle password visibility"
                type="button"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <Button
          className="h-11 w-full font-semibold shadow-sm transition-all active:scale-[0.98]"
          type="submit"
        >
          Continue
        </Button>

        <p className="mt-6 text-center text-muted-foreground text-xs">
          Have an account?{" "}
          <a className="font-medium text-primary hover:underline" href="#">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
