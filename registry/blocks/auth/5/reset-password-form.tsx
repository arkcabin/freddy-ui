"use client";

import { EyeIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Plus } from "@/components/plus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ResetPasswordForm() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="mb-8 flex flex-col items-center gap-4">
        <LogoIcon className="size-8" />
        <div className="text-center">
          <h2 className="font-bold text-2xl tracking-tight">Reset Password</h2>
          <p className="text-muted-foreground text-sm">
            Please enter your new password below
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4">
          <div className="grid gap-2 text-start">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input
                className="h-10 pr-10"
                id="new-password"
                placeholder="••••••••"
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
          <div className="grid gap-2 text-start">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                className="h-10 pr-10"
                id="confirm-password"
                placeholder="••••••••"
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
          className="mt-4 h-11 w-full font-semibold shadow-sm transition-all active:scale-[0.98]"
          type="submit"
        >
          Reset Password
        </Button>

        <p className="mt-6 text-center text-muted-foreground text-xs">
          Suddenly remembered?{" "}
          <a className="font-medium text-primary hover:underline" href="#">
            Back to Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
