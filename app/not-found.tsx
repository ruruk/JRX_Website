import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 pt-[146px]">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="space-y-3">
          <h1 className="font-pixel text-8xl md:text-9xl text-primary pixel-glow-red">404</h1>
          <h2 className="font-pixel text-3xl md:text-4xl text-foreground">PAGE NOT FOUND</h2>
          <p className="font-mono text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full border-2 border-primary bg-primary text-background font-pixel text-base hover:pixel-glow-red transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  )
}
