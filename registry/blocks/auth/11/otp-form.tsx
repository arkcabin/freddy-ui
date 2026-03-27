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

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MailIcon className="size-8" />
            </div>
            <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We've sent a 6-digit verification code to <br />
              <span className="font-semibold text-foreground">v***k@example.com</span>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center gap-2 sm:gap-3">
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
                className="h-12 w-10 text-center text-lg font-bold sm:h-14 sm:w-12 rounded-xl focus:ring-2 focus:ring-primary/20"
              />
            ))}
          </div>

          <Button className="w-full h-11 font-bold text-base shadow-lg shadow-primary/10" size="lg">
            Verify Code
          </Button>

          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <button className="font-semibold text-primary hover:underline underline-offset-4">
              Resend
            </button>
          </p>
        </div>

        <button className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to sign in
        </button>
      </div>
    </div>
  );
}
