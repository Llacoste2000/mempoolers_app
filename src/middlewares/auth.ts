import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";
import { type Middleware } from ".";

export const authMiddleware: Middleware = async (req: NextRequest) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/auth")) {
        if (token) {
            return NextResponse.redirect(new URL("/", req.url));
        }
        if (pathname === "/auth" || pathname === "/auth/") {
            console.log(
                "new URL('/auth/login', req.url)",
                new URL("/auth/login", req.url),
            );

            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    } else if (pathname === "/" || pathname === "") {
        if (!token) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    }

    return undefined;
};
