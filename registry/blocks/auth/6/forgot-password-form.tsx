"use client";

import { ArrowLeft, MailIcon } from "lucide-react";
import { Plus } from "@/components/plus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPasswordForm() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/5">
          <MailIcon className="size-6 text-primary/60" />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-2xl tracking-tight">
            Forgot Password?
          </h2>
          <p className="max-w-[280px] text-muted-foreground text-sm">
            No worries, we&apos;ll send you reset instructions via email.
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2 text-start">
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="h-10"
            id="email"
            placeholder="name@example.com"
            type="email"
          />
        </div>

        <Button
          className="mt-2 h-11 w-full font-semibold shadow-sm transition-all active:scale-[0.98]"
          type="submit"
        >
          Send Reset Link
        </Button>

        <a
          className="mt-6 flex items-center justify-center gap-2 font-medium text-muted-foreground text-xs transition-colors hover:text-primary"
          href="#"
        >
          <ArrowLeft className="size-3" />
          Back to Sign In
        </a>
      </form>
    </div>
  );
}
