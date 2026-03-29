"use client";

import { EyeIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "@/components/plus";
import React from "react";

export function ResetPasswordForm() {
  return (
    <div className="relative w-full max-w-md bg-background p-8 rounded-2xl border shadow-lg overflow-hidden group">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="flex flex-col items-center gap-4 mb-8">
        <LogoIcon className="size-8" />
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Reset Password</h2>
          <p className="text-sm text-muted-foreground">
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
                id="new-password"
                type="password"
                placeholder="••••••••"
                className="h-10 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                title="Toggle password visibility"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="grid gap-2 text-start">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="h-10 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                title="Toggle password visibility"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <Button
          className="w-full h-11 font-semibold transition-all active:scale-[0.98] shadow-sm mt-4"
          type="submit"
        >
          Reset Password
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Suddenly remembered?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Back to Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
