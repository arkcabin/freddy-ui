"use client";

import { EyeIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MinimalLoginForm() {
  return (
    <div className="group w-full max-w-sm bg-transparent p-4">
      <div className="mb-8 flex flex-col gap-2">
        <LogoIcon className="mb-2 size-8" />
        <h2 className="font-bold text-3xl tracking-tighter">Sign In</h2>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4">
          <div className="grid gap-1.5 text-start">
            <Label
              className="font-bold text-[11px] text-muted-foreground/70 uppercase tracking-widest"
              htmlFor="email-minimal"
            >
              Identifier
            </Label>
            <Input
              className="h-12 rounded-xl border-white/10 bg-white/5 transition-all focus:bg-white/10"
              id="email-minimal"
              placeholder="Username or Email"
              type="text"
            />
          </div>
          <div className="grid gap-1.5 text-start">
            <div className="flex items-center justify-between">
              <Label
                className="font-bold text-[11px] text-muted-foreground/70 uppercase tracking-widest"
                htmlFor="password-minimal"
              >
                Security
              </Label>
              <a
                className="text-[10px] text-primary/60 transition-colors hover:text-primary"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Input
                className="h-12 rounded-xl border-white/10 bg-white/5 pr-12 transition-all focus:bg-white/10"
                id="password-minimal"
                placeholder="Password"
                type="password"
              />
              <button
                className="-translate-y-1/2 absolute top-1/2 right-4 text-muted-foreground/40 transition-colors hover:text-foreground"
                title="Toggle visibility"
                type="button"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <Button
          className="h-12 w-full rounded-xl bg-primary font-bold text-base text-primary-foreground shadow-xl transition-all hover:opacity-90 active:scale-[0.98]"
          type="submit"
        >
          Continue
        </Button>

        <div className="mt-8 flex flex-col items-center gap-4 border-white/5 border-t pt-8">
          <p className="text-muted-foreground text-xs">
            New here?{" "}
            <a className="font-bold text-white hover:underline" href="#">
              Create an account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
