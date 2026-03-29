"use client";

import { CheckIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CompactSignupForm() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border bg-background p-6 shadow-2xl">
      <div className="-top-3 -right-3 -rotate-12 absolute flex size-12 items-center justify-center rounded-2xl bg-primary shadow-lg transition-transform group-hover:rotate-0">
        <CheckIcon className="size-6 text-primary-foreground" />
      </div>

      <div className="mb-8">
        <LogoIcon className="mb-4 size-6" />
        <h2 className="font-bold text-2xl tracking-tight">Join Freddy</h2>
        <p className="text-muted-foreground text-sm">
          Start building beautiful interfaces today.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="signup-email-compact">Email</Label>
            <Input
              className="h-11 rounded-xl"
              id="signup-email-compact"
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="signup-password-compact">Secure Password</Label>
            <Input
              className="h-11 rounded-xl"
              id="signup-password-compact"
              placeholder="••••••••"
              type="password"
            />
          </div>
        </div>

        <Button
          className="mt-2 h-11 w-full rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]"
          type="submit"
        >
          Create Account
        </Button>

        <div className="mt-4 flex items-center gap-2 px-1 text-[10px] text-muted-foreground/60">
          <div className="size-1 rounded-full bg-primary" />
          <p>By creating an account, you agree to our Terms of Service.</p>
        </div>

        <p className="mt-4 border-t border-dashed pt-4 text-center text-muted-foreground text-xs">
          Already a member?{" "}
          <a className="font-bold text-primary hover:underline" href="#">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
