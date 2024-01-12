import { NextResponse } from "next/server";

const protectedRoutes = ['/dashboard', '/dashboard/users']

export default function middleware(request) {
    const islogin = request.cookies.get('token');
    if (!islogin && protectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteURL = new URL("/login", request.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}

