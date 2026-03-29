"use client";

import { ArrowLeft, MailIcon } from "lucide-react";
import type React from "react";
import { useState, useRef, useEffect } from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-[440px] space-y-12 text-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <div className="flex size-20 items-center justify-center rounded-[2.5rem] bg-primary/5 text-primary ring-1 ring-primary/10 shadow-sm transition-transform hover:scale-105 duration-500">
              <MailIcon className="size-10" />
            </div>
            <div className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tightest sm:text-5xl">
              Verify email
            </h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-sm mx-auto">
              We've sent a 6-digit verification code to
              <span className="block font-bold text-foreground mt-1">
                v***k@example.com
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex justify-between gap-3 sm:gap-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="h-14 w-full text-center text-2xl font-bold rounded-2xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background focus:ring-4 focus:ring-primary/5 transition-all outline-none"
              />
            ))}
          </div>

          <div className="space-y-4">
            <Button
              className="w-full h-14 rounded-2xl font-bold text-base shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              size="lg"
            >
              Verify Account
            </Button>

            <p className="text-sm text-muted-foreground font-medium">
              Didn't receive the code?{" "}
              <button className="font-bold text-primary hover:underline underline-offset-4 transition-all">
                Resend code
              </button>
            </p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 transition-all hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to sign in
        </button>
      </div>
    </div>
  );
}
