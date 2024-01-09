import { NextResponse } from "next/server";
import { sessionStatus } from "./utils/session";

const protectedRoutes = ['/dashboard', '/dashboard/users']


export default function middleware(request) {
    if (!sessionStatus && protectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteURL = new URL("/", request.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}