"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function RegisterPage() {
    return (
        <div className="w-full max-w-[400px] space-y-6 p-4">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your information to create an account
                </p>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Max" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Robinson" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Create an account
                </Button>
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={async () => await signIn("google")}
                >
                    Sign up with Google
                </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/auth/login"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Sign in
                </Link>
            </div>
        </div>
    );
}
