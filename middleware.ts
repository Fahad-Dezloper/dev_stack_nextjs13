import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/api/webhooks', 'question/:id', '/tags', '/tags/:id', '/profile/:id', '/community', '/jobs'])
const ignoredRoute = createRouteMatcher(['/api/webhooks', '/api/chatgpt']);
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request) || !ignoredRoute(request)) {
    auth().protect()
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};