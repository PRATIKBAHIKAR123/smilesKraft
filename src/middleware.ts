import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle www redirects to ensure consistent canonical URLs
  if (request.nextUrl.hostname === "www.tulipdentalnj.com") {
    // Ensure HTTPS
    if (!request.nextUrl.protocol.startsWith("https")) {
      const newUrl = request.nextUrl.clone();
      newUrl.protocol = "https:";
      return NextResponse.redirect(newUrl, 301);
    }
  }

  // Handle non-www to www redirects for consistency
  if (request.nextUrl.hostname === "tulipdentalnj.com") {
    const newUrl = request.nextUrl.clone();
    newUrl.protocol = "https:";
    newUrl.hostname = "www.tulipdentalnj.com";
    return NextResponse.redirect(newUrl, 301);
  }

  // Remove trailing slashes for consistency (except for root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
