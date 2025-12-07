"use client"

import { ArrowUp, Heart, Youtube, Globe, Mail } from "lucide-react"

// 푸터 데이터
const footerData = {
  name: "양승수",
  description: "단국대학교/도시계획부동산학부, 4학년",
  quickLinksTitle: "빠른 링크",
  contactTitle: "연락처",
  phone: "010-0000-0000",
  email: "yboy1234@naver.com",
  location: "성동구,서울시",
  madeWithLocation: "Mrbaeksang",
  templateCreator: {
    email: "qortkdgus95@gmail.com",
    youtube: "https://www.youtube.com/@Mrbaeksang95/videos",
    website: "https://devcom.kr/",
  },
}

// 네비게이션 아이템
const navItems = [
  { name: "홈", url: "#hero" },
  { name: "소개", url: "#about" },
  { name: "프로젝트", url: "#projects" },
  { name: "연락처", url: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (url: string) => {
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border" data-aos="fade-up">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 상단 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 브랜드/이름 */}
              <div>
            <h3 className="font-bold text-foreground mb-3">{footerData.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
              {footerData.description}
                  </p>
              </div>

            {/* 빠른 링크 */}
              <div>
            <h4 className="font-semibold text-foreground mb-3">{footerData.quickLinksTitle}</h4>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                  onClick={() => scrollToSection(item.url)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left min-h-0"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

            {/* 연락처 정보 */}
              <div>
            <h4 className="font-semibold text-foreground mb-3">{footerData.contactTitle}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
              <p>{footerData.phone}</p>
              <p>{footerData.email}</p>
              <p>{footerData.location}</p>
              </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} {footerData.name}. All rights reserved.</p>
          </div>
          
          {/* Made with 메시지 & 템플릿 크레딧 */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center">
                Made with <Heart className="h-3 w-3 mx-1 text-red-500" />
              in {footerData.madeWithLocation}
              </span>
            
            <span className="text-muted-foreground/50">•</span>
                <span className="text-xs text-muted-foreground/70">Template by Mrbaeksang</span>
                <div className="flex items-center gap-1">
                  <a 
                href={`mailto:${footerData.templateCreator.email}`}
                className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-muted transition-colors min-h-0 min-w-0"
                    aria-label="Email"
                  >
                    <Mail className="h-3 w-3 text-muted-foreground/70 hover:text-muted-foreground" />
                  </a>
                  <a 
                href={footerData.templateCreator.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-muted transition-colors min-h-0 min-w-0"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-3 w-3 text-muted-foreground/70 hover:text-muted-foreground" />
                  </a>
                  <a 
                href={footerData.templateCreator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-muted transition-colors min-h-0 min-w-0"
                    aria-label="DevCom"
                  >
                    <Globe className="h-3 w-3 text-muted-foreground/70 hover:text-muted-foreground" />
                  </a>
                </div>
          </div>

          {/* 맨 위로 버튼 */}
            <button
              onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-muted transition-colors min-h-0 min-w-0"
              aria-label="맨 위로"
            >
              <ArrowUp className="h-4 w-4 text-muted-foreground" />
            </button>
        </div>
      </div>
    </footer>
  )
}
