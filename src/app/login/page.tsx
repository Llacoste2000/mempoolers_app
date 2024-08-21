/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full dark:bg-background dark:text-foreground">
            <div className="z-10 flex flex-1 items-center justify-center">
                <div className="w-full max-w-[350px] space-y-6 p-4">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-sm text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="space-y-4">
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
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => signIn("google")}
                        >
                            Login with Google
                        </Button>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="#"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src="/imgs/login-bg.svg"
                alt="Login"
                className="absolute bottom-0 right-0 top-0 -z-10 h-full w-1/2 object-cover"
            />
            <img
                src="/imgs/login-bg.svg"
                alt="Login"
                className="absolute bottom-0 left-0 top-0 -z-10 h-full w-1/2 rotate-180 object-cover"
            />
        </div>
    );
}
