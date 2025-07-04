import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";

function extractSubdomain(request: NextRequest): string | null {
  const url = request.url;
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  // Local development environment
  if (url.includes("localhost") || url.includes("127.0.0.1")) {
    const fullUrlMatch = url.match(/http:\/\/([^.]+)\.localhost/);
    if (fullUrlMatch && fullUrlMatch[1]) {
      return fullUrlMatch[1];
    }
    if (hostname.includes(".localhost")) {
      return hostname.split(".")[0];
    }
    return null;
  }

  // Production environment
  const rootDomainFormatted = rootDomain.split(":")[0];

  // Handle preview deployment URLs (tenant---branch-name.vercel.app)
  if (hostname.includes("---") && hostname.endsWith(".vercel.app")) {
    const parts = hostname.split("---");
    return parts.length > 0 ? parts[0] : null;
  }

  // Regular subdomain detection
  const isSubdomain =
    hostname !== rootDomainFormatted &&
    hostname !== `www.${rootDomainFormatted}` &&
    hostname.endsWith(`.${rootDomainFormatted}`);

  return isSubdomain ? hostname.replace(`.${rootDomainFormatted}`, "") : null;
}

//Only allow public access to sign-in and sign-up
const isPublicRoute = (pathname: string) =>
  pathname === "/" ||
  pathname.startsWith("/sign-in") ||
  pathname.startsWith("/sign-up") || pathname.startsWith("/s");

export default clerkMiddleware(async (auth, request) => {
  const pathname = request.nextUrl.pathname;
  const subdomain = extractSubdomain(request);

  // Get userId from Clerk
  const { userId } = await auth();

  if (!isPublicRoute(pathname)) {
    await auth.protect()
  }

  // Root page e login thakle dashboard e pathan
  if (pathname === "/" && userId) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (subdomain) {
    return NextResponse.rewrite(new URL(`/s/${subdomain}`, request.url));
  } 
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
