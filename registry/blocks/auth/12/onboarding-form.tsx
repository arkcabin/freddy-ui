"use client";

import {
  CheckIcon,
  ChevronRight,
  UserIcon,
  BuildingIcon,
  SparklesIcon,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Personal Details", icon: UserIcon },
  { id: 2, title: "Your Goals", icon: SparklesIcon },
  { id: 3, title: "Organization", icon: BuildingIcon },
];

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[400px_1fr]">
      {/* Sidebar Progress Tracker */}
      <div className="hidden flex-col border-r bg-zinc-50/50 p-10 lg:flex dark:bg-zinc-950/20">
        <div className="flex items-center gap-2 mb-16">
          <LogoIcon className="size-6" />
          <span className="font-bold text-lg tracking-tight">Freddy</span>
        </div>

        <div className="space-y-12">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                key={step.id}
                className="relative flex items-center gap-6 group"
              >
                {step.id !== 3 && (
                  <div
                    className={cn(
                      "absolute left-[19px] top-10 h-12 w-[1px] bg-border transition-colors duration-500",
                      isCompleted && "bg-primary/50"
                    )}
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 flex size-10 items-center justify-center rounded-full border bg-background transition-all duration-500",
                    isActive
                      ? "border-primary ring-4 ring-primary/10 shadow-sm"
                      : isCompleted
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <CheckIcon className="size-5" strokeWidth={3} />
                  ) : (
                    <step.icon
                      className={cn("size-4", isActive && "text-primary")}
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground/60"
                    )}
                  >
                    Step 0{step.id}
                  </span>
                  <span
                    className={cn(
                      "text-base font-semibold tracking-tight transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-auto">
          <div className="rounded-3xl border bg-background/50 p-8 shadow-sm backdrop-blur-sm">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="size-3 text-orange-400 fill-orange-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 italic">
              "Freddy UI has been a game changer for our team. We've built our
              entire dashboard in weeks instead of months."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 border border-border" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest leading-none">
                  Alex Rivera
                </p>
                <p className="text-[10px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">
                  Product Lead @ Acme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex flex-col p-6 lg:p-12 xl:p-24 bg-background">
        <div className="flex items-center justify-between mb-16 lg:hidden">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-5" />
            <span className="font-bold text-base tracking-tight">Freddy</span>
          </div>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Step {currentStep} / 03
          </span>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          {/* Header */}
          <div className="space-y-3 mb-12">
            <h2 className="text-4xl font-bold tracking-tightest sm:text-5xl lg:leading-[1.1]">
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "What are you building?"}
              {currentStep === 3 && "Where do you work?"}
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              {currentStep === 1 &&
                "Personalize your experience to get the most out of Freddy."}
              {currentStep === 2 &&
                "Choose your primary goal to help us suggest the right blocks."}
              {currentStep === 3 &&
                "Connect your team or create a new workspace."}
            </p>
          </div>

          {/* Form Content */}
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            {currentStep === 1 && (
              <div className="grid gap-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="firstName"
                      className="font-bold text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label
                      htmlFor="lastName"
                      className="font-bold text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label
                    htmlFor="displayName"
                    className="font-bold text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80"
                  >
                    Display Name
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 font-medium">
                      @
                    </span>
                    <Input
                      id="displayName"
                      placeholder="janedoe"
                      className="h-12 pl-10 pr-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  {
                    label: "SaaS Application",
                    description: "Dashboards, forms, settings",
                    icon: "🚀",
                  },
                  {
                    label: "Ecommerce Store",
                    description: "Product pages, checkout",
                    icon: "🛍️",
                  },
                  {
                    label: "Marketing Site",
                    description: "Landing pages, waitlists",
                    icon: "✨",
                  },
                  {
                    label: "Internal Tools",
                    description: "Admin panels, data tables",
                    icon: "🛠️",
                  },
                ].map((option) => (
                  <button
                    key={option.label}
                    className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-left transition-all hover:border-primary hover:bg-background hover:shadow-xl hover:shadow-primary/5 group dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-primary"
                    onClick={() => setCurrentStep(3)}
                    type="button"
                  >
                    <span className="text-2xl mb-1">{option.icon}</span>
                    <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium leading-snug">
                      {option.description}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid gap-8">
                <div className="grid gap-3">
                  <Label
                    htmlFor="orgName"
                    className="font-bold text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="orgName"
                    placeholder="Acme Inc."
                    className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    htmlFor="role"
                    className="font-bold text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80"
                  >
                    Your Role
                  </Label>
                  <Input
                    id="role"
                    placeholder="Product Designer"
                    className="h-12 px-4 rounded-xl border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 focus:bg-background transition-all"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center gap-6 pt-6">
              {currentStep > 1 && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="h-12 px-6 font-bold text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={() =>
                  currentStep < 3 ? setCurrentStep((prev) => prev + 1) : null
                }
                className="group h-12 px-8 font-bold text-sm tracking-tight shadow-xl shadow-primary/20 flex-1 sm:flex-none transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {currentStep === 3 ? "Complete Setup" : "Continue"}
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
