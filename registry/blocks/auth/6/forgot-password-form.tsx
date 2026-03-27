"use client";

import { MailIcon, ArrowLeft } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "@/components/plus";
import React from "react";

export function ForgotPasswordForm() {
  return (
    <div className="relative w-full max-w-md bg-background p-8 rounded-2xl border shadow-lg overflow-hidden group">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="size-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
          <MailIcon className="size-6 text-primary/60" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Forgot Password?</h2>
          <p className="text-sm text-muted-foreground max-w-[280px]">No worries, we&apos;ll send you reset instructions via email.</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2 text-start">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="name@example.com" 
            className="h-10" 
          />
        </div>

        <Button 
          className="w-full h-11 font-semibold transition-all active:scale-[0.98] shadow-sm mt-2" 
          type="submit"
        >
          Send Reset Link
        </Button>

        <a 
          href="#" 
          className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mt-6 font-medium"
        >
          <ArrowLeft className="size-3" />
          Back to Sign In
        </a>
      </form>
    </div>
  );
}
