"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, Github, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
    const [loading, setLoading] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSocialSignUp = async (provider: "github" | "google") => {
        setError(null);
        setLoading(provider);
        try {
            await authClient.signIn.social({
                provider,
                callbackURL: "/dashboard",
            });
        } catch {
            setError("We could not start sign up. Please try again.");
            setLoading(null);
        }
    };

    const handleEmailSignUp = async (formData: FormData) => {
        setError(null);
        setLoading("email");
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        const result = await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL: "/dashboard",
        });

        if (result.error) {
            setError(result.error.message ?? "We could not create your account.");
            setLoading(null);
        }
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-12 text-foreground sm:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.14),transparent_42%)]" />
            <section className="relative w-full max-w-md">
                <div className="mb-8 flex items-center justify-center gap-2 font-semibold text-sm tracking-tight">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                        <Sparkles className="size-4" />
                    </span>
                    Northstar
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
                    <div className="mb-8 space-y-3 text-center">
                        <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                            Start building
                        </p>
                        <h1 className="font-heading text-3xl tracking-tight sm:text-4xl">
                            Create your account
                        </h1>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Join your workspace and bring your best work into focus.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            className="h-11 gap-2"
                            disabled={Boolean(loading)}
                            onClick={() => handleSocialSignUp("google")}
                            type="button"
                            variant="outline"
                        >
                            {loading === "google" ? <Loader2 className="size-4 animate-spin" /> : <GoogleIcon />}
                            Google
                        </Button>
                        <Button
                            className="h-11 gap-2"
                            disabled={Boolean(loading)}
                            onClick={() => handleSocialSignUp("github")}
                            type="button"
                            variant="outline"
                        >
                            {loading === "github" ? <Loader2 className="size-4 animate-spin" /> : <Github className="size-4" />}
                            GitHub
                        </Button>
                    </div>

                    <div className="my-8 flex items-center gap-4">
                        <span className="h-px flex-1 bg-border" />
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.18em]">
                            or use email
                        </span>
                        <span className="h-px flex-1 bg-border" />
                    </div>

                    <form action={handleEmailSignUp} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="sign-up-name">Full name</Label>
                            <Input className="h-12" id="sign-up-name" name="name" placeholder="Alex Morgan" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sign-up-email">Email address</Label>
                            <Input className="h-12" id="sign-up-email" name="email" placeholder="you@company.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sign-up-password">Password</Label>
                            <Input className="h-12" id="sign-up-password" minLength={8} name="password" placeholder="At least 8 characters" required type="password" />
                        </div>
                        {error && <p className="text-destructive text-sm" role="alert">{error}</p>}
                        <Button className="h-12 w-full gap-2" disabled={Boolean(loading)} type="submit">
                            {loading === "email" ? <Loader2 className="size-4 animate-spin" /> : <>Create account <ArrowRight className="size-4" /></>}
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-muted-foreground text-sm">
                        Already have an account?{" "}
                        <Link className="font-semibold text-foreground hover:underline" href="/auth/sign-in">
                            Sign in
                        </Link>
                    </p>
                </div>

                <p className="mt-6 text-center text-muted-foreground text-xs">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </section>
        </main>
    );
}

function GoogleIcon() {
    return (
        <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
            <title>Google</title>
            <path d="M21.35 12.27c0-.78-.07-1.54-.22-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.42h3.14c1.84-1.69 2.93-4.18 2.93-7.38Z" fill="#4285F4" />
            <path d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.42c-.87.58-1.98.93-3.31.93-2.55 0-4.7-1.72-5.47-4.03H3.28v2.5A9.74 9.74 0 0 0 12 22Z" fill="#34A853" />
            <path d="M6.53 14.13a5.86 5.86 0 0 1 0-3.76v-2.5H3.28a9.98 9.98 0 0 0 0 8.76l3.25-2.5Z" fill="#FBBC05" />
            <path d="M12 6.34c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.43 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.72 5.37l3.25 2.5 3.25 2.5c.77-2.31 2.92-4.03 5.47-4.03Z" fill="#EA4335" />
        </svg>
    );
}
