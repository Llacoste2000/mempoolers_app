import { middleware } from "./middlewares";

export { middleware };

export const config = {
    matcher: ["/((?!api/).*)"],
};
