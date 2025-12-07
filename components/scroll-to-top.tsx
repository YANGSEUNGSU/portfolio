"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px 이상 스크롤하면 버튼 표시
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "w-12 h-12 rounded-full",
        "bg-red-500 dark:bg-red-600",
        "backdrop-blur-sm",
        "flex items-center justify-center",
        "cursor-pointer",
        "shadow-lg shadow-black/20 dark:shadow-black/40",
        "transition-all duration-300",
        "hover:scale-110 hover:shadow-xl hover:bg-red-600 dark:hover:bg-red-700",
        "active:scale-95",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="상단으로 이동"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </button>
  )
}

