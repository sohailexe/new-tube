import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/protected'])

export default clerkMiddleware(async (auth, req) => {
  // Restrict admin routes to users with specific permissions
  if (isProtectedRoute(req)) {
    await auth.protect((has) => {
      return has({ permission: 'org:admin:example1' }) || has({ permission: 'org:admin:example2' })
    })
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}