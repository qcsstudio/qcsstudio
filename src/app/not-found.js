'use client'

import Link from 'next/link'

import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-24 h-24 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center gap-4">
          <button>
            <Link href="/">Go to Home</Link>
          </button>
          <button>
            <Link href="/contact">Contact Support</Link>
          </button>
        </div>
      </div>
    </div>
  )
}