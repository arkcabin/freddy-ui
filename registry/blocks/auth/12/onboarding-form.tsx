"use client";

import {
  BuildingIcon,
  CheckIcon,
  ChevronRight,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
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
        <div className="mb-16 flex items-center gap-2">
          <LogoIcon className="size-6" />
          <span className="font-bold text-lg tracking-tight">Freddy</span>
        </div>

        <div className="space-y-12">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                className="group relative flex items-center gap-6"
                key={step.id}
              >
                {step.id !== 3 && (
                  <div
                    className={cn(
                      "absolute top-10 left-[19px] h-12 w-px bg-border transition-colors duration-500",
                      isCompleted && "bg-primary/50"
                    )}
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 flex size-10 items-center justify-center rounded-full border bg-background transition-all duration-500",
                    "relative z-10 flex size-10 items-center justify-center rounded-full border bg-background transition-all duration-500",
                    isActive &&
                      "border-primary shadow-sm ring-4 ring-primary/10",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    !(isActive || isCompleted) &&
                      "border-muted text-muted-foreground"
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
                      "font-bold text-xs uppercase tracking-[0.2em] transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground/60"
                    )}
                  >
                    Step 0{step.id}
                  </span>
                  <span
                    className={cn(
                      "font-semibold text-base tracking-tight transition-colors",
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
            <div className="mb-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  className="size-3 fill-orange-400 text-orange-400"
                  key={i}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="font-medium text-sm text-zinc-600 italic leading-relaxed dark:text-zinc-400">
              "Freddy UI has been a game changer for our team. We've built our
              entire dashboard in weeks instead of months."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-10 rounded-full border border-border bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900" />
              <div>
                <p className="font-bold text-xs uppercase leading-none tracking-widest">
                  Alex Rivera
                </p>
                <p className="mt-1 font-medium text-[10px] text-muted-foreground uppercase tracking-wider">
                  Product Lead @ Acme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex flex-col bg-background p-6 lg:p-12 xl:p-24">
        <div className="mb-16 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-5" />
            <span className="font-bold text-base tracking-tight">Freddy</span>
          </div>
          <span className="font-bold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Step {currentStep} / 03
          </span>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          {/* Header */}
          <div className="mb-12 space-y-3">
            <h2 className="font-bold text-4xl tracking-tightest sm:text-5xl lg:leading-[1.1]">
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "What are you building?"}
              {currentStep === 3 && "Where do you work?"}
            </h2>
            <p className="font-medium text-lg text-muted-foreground">
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
                      className="font-bold text-[10px] text-muted-foreground/80 uppercase tracking-[0.15em]"
                      htmlFor="firstName"
                    >
                      First Name
                    </Label>
                    <Input
                      className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 px-4 transition-all focus:bg-background dark:border-zinc-800 dark:bg-zinc-900/50"
                      id="firstName"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label
                      className="font-bold text-[10px] text-muted-foreground/80 uppercase tracking-[0.15em]"
                      htmlFor="lastName"
                    >
                      Last Name
                    </Label>
                    <Input
                      className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 px-4 transition-all focus:bg-background dark:border-zinc-800 dark:bg-zinc-900/50"
                      id="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label
                    className="font-bold text-[10px] text-muted-foreground/80 uppercase tracking-[0.15em]"
                    htmlFor="displayName"
                  >
                    Display Name
                  </Label>
                  <div className="relative">
                    <span className="-translate-y-1/2 absolute top-1/2 left-4 font-medium text-muted-foreground/60">
                      @
                    </span>
                    <Input
                      className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 pr-4 pl-10 transition-all focus:bg-background dark:border-zinc-800 dark:bg-zinc-900/50"
                      id="displayName"
                      placeholder="janedoe"
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
                    className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-left transition-all hover:border-primary hover:bg-background hover:shadow-primary/5 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-primary"
                    key={option.label}
                    onClick={() => setCurrentStep(3)}
                    type="button"
                  >
                    <span className="mb-1 text-2xl">{option.icon}</span>
                    <span className="font-bold text-lg tracking-tight transition-colors group-hover:text-primary">
                      {option.label}
                    </span>
                    <span className="font-medium text-muted-foreground text-sm leading-snug">
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
                    className="font-bold text-[10px] text-muted-foreground/80 uppercase tracking-[0.15em]"
                    htmlFor="orgName"
                  >
                    Company Name
                  </Label>
                  <Input
                    className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 px-4 transition-all focus:bg-background dark:border-zinc-800 dark:bg-zinc-900/50"
                    id="orgName"
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="font-bold text-[10px] text-muted-foreground/80 uppercase tracking-[0.15em]"
                    htmlFor="role"
                  >
                    Your Role
                  </Label>
                  <Input
                    className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 px-4 transition-all focus:bg-background dark:border-zinc-800 dark:bg-zinc-900/50"
                    id="role"
                    placeholder="Product Designer"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center gap-6 pt-6">
              {currentStep > 1 && (
                <Button
                  className="h-12 px-6 font-bold text-muted-foreground text-xs uppercase tracking-widest transition-all hover:text-foreground"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  variant="ghost"
                >
                  Back
                </Button>
              )}
              <Button
                className="group h-12 flex-1 px-8 font-bold text-sm tracking-tight shadow-primary/20 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] sm:flex-none"
                onClick={() =>
                  currentStep < 3 ? setCurrentStep((prev) => prev + 1) : null
                }
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
