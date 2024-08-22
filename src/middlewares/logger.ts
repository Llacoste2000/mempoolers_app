import { type NextRequest } from "next/server";

export function loggingMiddleware(request: NextRequest) {
    console.log(`Incoming request: ${request.method} ${request.url}`);
}
