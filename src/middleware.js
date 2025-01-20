import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  console.log("middleware hits");
  
  const cookieStore =  await cookies();
  const token = cookieStore.get('token');

  if (request.nextUrl.pathname.startsWith('/admin/login') && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));  
  }

  if (!token && request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));  
  }

  return NextResponse.next();  
}