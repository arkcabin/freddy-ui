"use client";

import { CheckIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export function CompactSignupForm() {
  return (
    <div className="w-full max-w-sm bg-background p-6 rounded-3xl border shadow-2xl relative">
      <div className="absolute -top-3 -right-3 size-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
        <CheckIcon className="size-6 text-primary-foreground" />
      </div>

      <div className="mb-8">
        <LogoIcon className="size-6 mb-4" />
        <h2 className="text-2xl font-bold tracking-tight">Join Freddy</h2>
        <p className="text-sm text-muted-foreground">
          Start building beautiful interfaces today.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="signup-email-compact">Email</Label>
            <Input
              id="signup-email-compact"
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-xl"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="signup-password-compact">Secure Password</Label>
            <Input
              id="signup-password-compact"
              type="password"
              placeholder="••••••••"
              className="h-11 rounded-xl"
            />
          </div>
        </div>

        <Button
          className="w-full h-11 rounded-xl font-semibold transition-all active:scale-[0.98] shadow-md mt-2"
          type="submit"
        >
          Create Account
        </Button>

        <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 px-1 mt-4">
          <div className="size-1 rounded-full bg-primary" />
          <p>By creating an account, you agree to our Terms of Service.</p>
        </div>

        <p className="text-center text-xs text-muted-foreground pt-4 border-t border-dashed mt-4">
          Already a member?{" "}
          <a href="#" className="text-primary hover:underline font-bold">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
