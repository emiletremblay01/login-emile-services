/**
 * @description Public routes
 * An array of public routes that do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/api/unlock"];

/**
 * @description Auth routes
 * An array of routes that require authentication
 * They will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * @description API auth prefix
 * A string prefix for API routes that require authentication
 * @type {string}
 */
export const apiAuthPrefix = "api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/home";
