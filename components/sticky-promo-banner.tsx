export const StickyPromoBanner = () => {
  return (
    <div className="sticky top-[104px] z-30 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-y border-primary/30 backdrop-blur-sm">
      <div className="container mx-auto py-1.5 px-2.5">
        <div className="flex flex-wrap items-center justify-center text-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <span className="font-pixel text-foreground text-sm">PRINT 3 GET 1 FREE*</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-pixel text-foreground text-lg">WHITE PLA ON SPECIAL</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-pixel text-foreground text-lg">24HR TURNAROUND</span>
          </div>
        </div>
      </div>
    </div>
  )
}
