import { NextResponse, type NextRequest } from "next/server";
import { authMiddleware } from "./auth";
import { loggingMiddleware } from "./logger";

export type Middleware = (
    req: NextRequest,
) => Promise<NextResponse<unknown> | void | undefined> | void | undefined;

const chainMiddlewares = (...middlewares: Middleware[]) => {
    return async (request: NextRequest) => {
        for (const middleware of middlewares) {
            const response = await middleware(request);
            if (response) return response;
        }
        return NextResponse.next();
    };
};

export const middleware = chainMiddlewares(loggingMiddleware, authMiddleware);
