"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

interface AOSProviderProps {
  children: React.ReactNode
}

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      // 애니메이션 기본 설정
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
      // 모바일에서도 활성화
      disable: false,
      // 앵커 설정
      anchorPlacement: "top-bottom",
    })

    // 윈도우 리사이즈 시 AOS 새로고침
    const handleResize = () => {
      AOS.refresh()
    }

    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <>{children}</>
}

