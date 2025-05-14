import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const enterPage = "/magazine";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const auth = (await cookies()).get("auth")?.value;
  const path = request.nextUrl.pathname;

  // const beforeLoginPage = ["/login"];

  if (path === "/") {
    const url = request.nextUrl.clone();

    url.pathname = auth ? enterPage : "/login";
    return NextResponse.redirect(url, {
      headers: requestHeaders,
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public|api).*)"],
};
