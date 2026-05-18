import { NextRequest, NextResponse } from "next/server";

const WWW_HOST = "www.magicmathslearning.com";

export function middleware(request: NextRequest): NextResponse {
  const { hostname, pathname } = request.nextUrl;

  // 1. Enforce www — redirect non-www to www with a permanent 301.
  //    Googlebot following the non-www URL gets a single clean hop.
  if (hostname === "magicmathslearning.com") {
    const url = request.nextUrl.clone();
    url.hostname = WWW_HOST;
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Noindex Vercel preview deployments so they never compete
  //    with the production domain in Google's index.
  const isPreview =
    hostname.endsWith(".vercel.app") ||
    hostname.endsWith(".vercel.sh");

  if (isPreview) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  // 3. Remove trailing slashes (belt-and-suspenders alongside next.config).
  //    Canonical mismatch between /programs and /programs/ causes duplicate
  //    content entries in GSC.
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on every page route; skip API routes, static files, and Next internals.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js|woff2?|ttf|otf)).*)",
  ],
};
