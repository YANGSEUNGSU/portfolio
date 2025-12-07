"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Instagram, Youtube, Globe } from "lucide-react"

// 소셜 링크 데이터
const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/username" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@username" },
]

// Hero 섹션 데이터
const heroData = {
  greeting: "안녕하세요,",
  name: "양승수",
  title: "미래 부동산 개발 전문가",
  description: "오늘의 도시를 분석하고 내일의 가치를 개발하는 미래형 부동산 디벨로퍼",
  profileImage: "/images/user/profile.jpg",
  projectButton: "프로젝트 보기",
}

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 내용 */}
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              {heroData.greeting}
            </h2>
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {heroData.name}
            </h1>
            <p 
              className="text-2xl mb-4 text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {heroData.title}
            </p>
            <p 
              className="text-lg mb-8 text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {heroData.description}
            </p>

            {/* 프로젝트 보기 버튼 */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="500">
              {heroData.projectButton && (
                <Button onClick={scrollToProjects} size="lg" className="justify-center">
                  {heroData.projectButton}
                </Button>
              )}
            </div>

            {/* 소셜 링크 */}
            <div className="flex gap-4 flex-wrap items-center" data-aos="fade-up" data-aos-delay="600">
              {socialLinks.map((link, index) => {
                const Icon = link.icon || Globe
                if (!link.url) return null
                
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border bg-background/50 dark:bg-card/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* 오른쪽: 프로필 이미지 */}
          <div 
            className="order-1 md:order-2 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted dark:bg-card overflow-hidden shadow-2xl dark:shadow-primary/5">
                <img 
                  src={heroData.profileImage} 
                  alt="프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 - 3개의 화살표가 아래로 흘러가는 애니메이션 */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0 group cursor-pointer overflow-hidden h-16"
        data-aos="fade-up"
        data-aos-delay="800"
        aria-label="스크롤 다운"
      >
        <div className="relative flex flex-col items-center h-full">
          <ChevronDown className="absolute h-6 w-6 text-muted-foreground/70 animate-arrow-1 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
          <ChevronDown className="absolute h-6 w-6 text-muted-foreground/80 animate-arrow-2 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
          <ChevronDown className="absolute h-6 w-6 text-muted-foreground animate-arrow-3 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
        </div>
      </button>
    </section>
  )
}
