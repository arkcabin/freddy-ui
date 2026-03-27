"use client";

import { CheckIcon, ChevronRight, UserIcon, BuildingIcon, SparklesIcon } from "lucide-react";
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
    <div className="grid min-h-screen w-full lg:grid-cols-[1fr_2.5fr]">
      {/* Sidebar Progress Tracker */}
      <div className="hidden flex-col border-r bg-muted/30 p-10 lg:flex dark:bg-zinc-950/20">
        <LogoIcon className="size-6 mb-12" />
        
        <div className="space-y-10">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="group relative flex items-start gap-4">
                <div className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                  isActive ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-110" : 
                  isCompleted ? "bg-primary/10 border-primary/20 text-primary" : "bg-card border-border text-muted-foreground"
                )}>
                  {isCompleted ? <CheckIcon className="size-5" /> : <step.icon className="size-5" />}
                </div>
                
                <div className="flex flex-col gap-0.5 pt-1">
                  <p className={cn(
                    "font-bold tracking-tight transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.title}
                  </p>
                  <p className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground/60"
                  )}>
                    Step {step.id} of 3
                  </p>
                </div>
                
                {step.id !== 3 && (
                  <div className={cn(
                    "absolute left-5 top-12 h-6 w-px bg-border",
                    isCompleted && "bg-primary/30"
                  )} />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-auto space-y-4 pt-10">
          <div className="rounded-2xl border bg-card/50 p-6 shadow-sm">
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              "Freddy UI has been a game changer for our team. We've built our entire dashboard in weeks instead of months."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <div>
                <p className="text-xs font-bold font-heading uppercase tracking-widest leading-none">Alex Rivera</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">Product Lead at Acme Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex flex-col p-4 md:p-12 lg:p-24 bg-background">
        <div className="flex items-center justify-between mb-12 lg:hidden">
          <LogoIcon className="size-6" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step {currentStep} of 3</span>
        </div>

        <div className="mx-auto w-full max-w-xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-black font-heading tracking-tight sm:text-5xl">
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "What are you building?"}
              {currentStep === 3 && "Where do you work?"}
            </h2>
            <p className="text-lg font-medium text-muted-foreground">
              {currentStep === 1 && "This information helps us personalize your dashboard Experience."}
              {currentStep === 2 && "Choose your primary goal to help us suggest the right blocks."}
              {currentStep === 3 && "Connect your team or create a new workspace."}
            </p>
          </div>

          {/* Form Content */}
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {currentStep === 1 && (
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">First Name</Label>
                    <Input id="firstName" placeholder="Jane" className="h-12 border-muted-foreground/10 bg-muted/5 focus:bg-background transition-all" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="h-12 border-muted-foreground/10 bg-muted/5 focus:bg-background transition-all" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="displayName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Display Name</Label>
                  <Input id="displayName" placeholder="janedoe" className="h-12 border-muted-foreground/10 bg-muted/5 focus:bg-background transition-all" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "SaaS App", description: "Dashboards, forms, settings" },
                  { label: "Ecommerce", description: "Product pages, checkout" },
                  { label: "Marketing", description: "Landing pages, waitlists" },
                  { label: "Other", description: "Something unique" }
                ].map((option) => (
                  <button
                    key={option.label}
                    className="flex flex-col gap-2 rounded-2xl border bg-card p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg group"
                    onClick={() => setCurrentStep(3)}
                    type="button"
                  >
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">{option.label}</span>
                    <span className="text-sm text-muted-foreground">{option.description}</span>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="orgName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Company Name</Label>
                  <Input id="orgName" placeholder="Acme Inc." className="h-12 border-muted-foreground/10 bg-muted/5 focus:bg-background transition-all" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Your Role</Label>
                  <Input id="role" placeholder="Product Designer" className="h-12 border-muted-foreground/10 bg-muted/5 focus:bg-background transition-all" />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 pt-4">
              {currentStep > 1 && (
                <Button variant="ghost" onClick={() => setCurrentStep(prev => prev - 1)} className="h-12 px-6">
                  Back
                </Button>
              )}
              <Button onClick={() => currentStep < 3 ? setCurrentStep(prev => prev + 1) : null} className="h-12 px-8 font-bold text-base shadow-xl shadow-primary/20 flex-1 sm:flex-none">
                {currentStep === 3 ? "Complete Setup" : "Continue"}
                <ChevronRight className="ml-2 size-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
