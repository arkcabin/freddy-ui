"use client";

import { EyeIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export function MinimalLoginForm() {
  return (
    <div className="w-full max-w-sm bg-transparent p-4 group">
      <div className="flex flex-col gap-2 mb-8">
        <LogoIcon className="size-8 mb-2" />
        <h2 className="text-3xl font-bold tracking-tighter">Sign In</h2>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4">
          <div className="grid gap-1.5 text-start">
            <Label
              htmlFor="email-minimal"
              className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground/70"
            >
              Identifier
            </Label>
            <Input
              id="email-minimal"
              type="text"
              placeholder="Username or Email"
              className="h-12 bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all"
            />
          </div>
          <div className="grid gap-1.5 text-start">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password-minimal"
                className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground/70"
              >
                Security
              </Label>
              <a
                href="#"
                className="text-[10px] text-primary/60 hover:text-primary transition-colors"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password-minimal"
                type="password"
                placeholder="Password"
                className="h-12 bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all pr-12"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-foreground transition-colors"
                title="Toggle visibility"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <Button
          className="w-full h-12 rounded-xl font-bold text-base transition-all active:scale-[0.98] bg-primary text-primary-foreground hover:opacity-90 shadow-xl"
          type="submit"
        >
          Continue
        </Button>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground">
            New here?{" "}
            <a href="#" className="text-white hover:underline font-bold">
              Create an account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
