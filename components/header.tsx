"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Home, User, Briefcase, Mail, X, Menu, type LucideIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// 네비게이션 아이템
const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
]

export function Header() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // 활성 섹션 감지 - 간단하고 확실한 로직
      const scrollY = window.scrollY
      const offset = 200 // 헤더 높이 + 여유 공간
      
      // 모든 섹션의 위치 확인
      const sections = navItems.map(item => {
        const sectionId = item.url.substring(1)
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const top = rect.top + scrollY
          return {
            name: item.name,
            top,
            element
          }
        }
        return null
      }).filter(Boolean) as Array<{ name: string; top: number; element: HTMLElement }>
      
      // 현재 스크롤 위치보다 위에 있는 섹션 중 가장 가까운 섹션 찾기
      let activeSection = "Home" // 기본값
      
      // 맨 위에 있을 때
      if (scrollY < 100) {
        activeSection = "Home"
      } else {
        // 역순으로 확인하여 현재 위치보다 위에 있는 섹션 찾기
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section.top <= scrollY + offset) {
            activeSection = section.name
            break
          }
        }
        
        // 마지막 섹션에 도달했을 때
        if (sections.length > 0) {
          const lastSection = sections[sections.length - 1]
          const lastSectionBottom = lastSection.top + lastSection.element.offsetHeight
          if (scrollY + window.innerHeight >= lastSectionBottom - 100) {
            activeSection = lastSection.name
          }
        }
      }
      
      // activeTab이 변경될 때만 업데이트 (불필요한 리렌더링 방지)
      setActiveTab(prev => prev !== activeSection ? activeSection : prev)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // 초기 실행
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (url: string) => {
    const element = document.querySelector(url)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }
  
  return (
    <>
      {/* 헤더 - 이미지 스타일 */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border/50" 
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* 왼쪽: 로고 */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setActiveTab("Home")
                }}
                className="flex items-center gap-2 min-h-0 min-w-0"
              >
                <span className="text-lg font-bold text-foreground tracking-tight">YSS Portfolio</span>
              </button>
            </div>
            
            {/* 중앙: 데스크톱 네비게이션 */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeTab === item.name
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(item.name)
                      scrollToSection(item.url)
                    }}
                    className={cn(
                      "relative text-sm font-medium transition-colors min-h-0 min-w-0",
                      isActive 
                        ? "text-red-500 dark:text-red-400" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 dark:bg-red-400"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>
            
            {/* 오른쪽: 다크모드 토글 + 모바일 메뉴 */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* 모바일 메뉴 버튼 */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors min-h-0 min-w-0"
                aria-label="메뉴 열기"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
            >
              <nav className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon as LucideIcon
                  const isActive = activeTab === item.name
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setActiveTab(item.name)
                        scrollToSection(item.url)
                      }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left min-h-0",
                        isActive 
                          ? "bg-red-500/10 text-red-500 dark:text-red-400" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
