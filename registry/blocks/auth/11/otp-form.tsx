"use client";

import { ArrowLeft, MailIcon } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DIGIT_REGEX = /^\d*$/;
const OTP_FIELDS = [0, 1, 2, 3, 4, 5];

export function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    let newValue = value;
    if (newValue.length > 1) {
      newValue = newValue.slice(-1);
    }
    if (!DIGIT_REGEX.test(newValue)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (newValue && index < 5) {
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
            <div className="flex size-20 items-center justify-center rounded-[2.5rem] bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10 transition-transform duration-500 hover:scale-105">
              <MailIcon className="size-10" />
            </div>
            <div className="-right-1 -top-1 absolute flex size-6 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20">
              <span className="size-1.5 animate-pulse rounded-full bg-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold text-4xl tracking-tightest sm:text-5xl">
              Verify email
            </h1>
            <p className="mx-auto max-w-sm font-medium text-lg text-muted-foreground leading-relaxed">
              We've sent a 6-digit verification code to
              <span className="mt-1 block font-bold text-foreground">
                v***k@example.com
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex justify-between gap-3 sm:gap-4">
            {OTP_FIELDS.map((index) => (
              <Input
                className="h-14 w-full rounded-2xl border-zinc-200 bg-zinc-50/50 text-center font-bold text-2xl outline-none transition-all focus:bg-background focus:ring-4 focus:ring-primary/5 dark:border-zinc-800 dark:bg-zinc-900/50"
                inputMode="numeric"
                key={`otp-digit-${index}`}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                pattern="\d*"
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                value={otp[index]}
              />
            ))}
          </div>

          <div className="space-y-4">
            <Button
              className="h-14 w-full rounded-2xl font-bold text-base shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              size="lg"
            >
              Verify Account
            </Button>

            <p className="font-medium text-muted-foreground text-sm">
              Didn't receive the code?{" "}
              <button
                className="font-bold text-primary underline-offset-4 transition-all hover:underline"
                type="button"
              >
                Resend code
              </button>
            </p>
          </div>
        </div>

        <button
          className="inline-flex items-center gap-2.5 font-bold text-muted-foreground/60 text-xs uppercase tracking-widest transition-all hover:text-foreground"
          type="button"
        >
          <ArrowLeft className="size-4" />
          Back to sign in
        </button>
      </div>
    </div>
  );
}
