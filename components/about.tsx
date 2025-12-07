"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Sparkles, Globe } from "lucide-react"

// 경험 카드 데이터
const experienceCards = [
  { icon: GraduationCap, title: "단국대학교 도시계획부동산학부", period: "2020 - 2026 (졸업예정)", description: "전공: 도시계획, 부동산 복수전공", color: "from-purple-500 to-pink-500" },
  { icon: Award, title: "도시계획기사 자격증 취득", period: "2025", description: "자격증", color: "from-amber-500 to-orange-500" },
  { icon: Globe, title: "OPIC Intermediate High(IH)", period: "2025", description: "영어 성적", color: "from-indigo-500 to-blue-500" },
]


// 자기소개 데이터
const storyData = {
  title: "나의 이야기",
  paragraphs: [
    "저는 어렸을 때부터 도시가 가진 잠재력을 발견하고 새로운 가치를 만드는 일에 매력을 느껴 미래 부동산 개발 전문가를 목표로 성장하고 있습니다.",
    "다양한 봉사활동과 팀 프로젝트를 통해 사람들의 실제 생활 환경을 가까이에서 바라보며 도시의 문제와 불편함이 곧 개발의 출발점이 될 수 있음을 깨달았습니다.",
    "단순히 건물을 짓는 것이 아니라 사람·지역·경제를 연결하는 종합적인 시각이 필요하다는 것을 현장에서 체감했습니다.",
    "이러한 경험을 바탕으로 다양한 주체가 함께 참여하는 부동산 개발에 있어서 앞으로도 데이터와 시장 분석을 바탕으로 도시의 잠재력을 찾고 사람 중심의 공간을 기획해 도시 변화에 기여하는 디벨로퍼로 성장하겠습니다!"
  ],
  image: "/images/user/title_zgloe8CfXj.jpg",
}


export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 제목 - 이미지 스타일 적용 */}
        <div 
          className="text-center mb-20" 
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="text-sm font-semibold text-red-500 dark:text-red-400 mb-2 uppercase tracking-wider">
            ABOUT ME
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            소개
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            소개
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            당신의 전문성과 열정을 소개해주세요.
          </p>
        </div>

        {/* 경험 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experienceCards.map((card, index) => {
            const Icon = card.icon
            return (
              <Card 
                key={index} 
                className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out bg-card/80 dark:bg-card/90 backdrop-blur-sm dark:border dark:border-border/50 hover:-translate-y-2 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={150 + index * 100}
                data-aos-easing="ease-out-cubic"
              >
                {/* 카드 상단 그라데이션 라인 */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-80`} />
                
                <CardContent className="p-6 pt-8">
                  <div className="flex items-start space-x-4">
                    {/* 아이콘 - 그라데이션 배경 */}
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} p-[1px] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out`}>
                      <div className="w-full h-full bg-card dark:bg-card rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 text-lg">{card.title}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-2`}>
                        {card.period}
                      </p>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 자기소개 상세 - 그림자 강화 */}
        <div 
          className="relative rounded-3xl overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {/* 그라데이션 테두리 효과 */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl p-[1px]">
            <div className="w-full h-full bg-card dark:bg-card rounded-3xl" />
          </div>
          
          <div className="relative bg-card dark:bg-card rounded-3xl shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  My Story
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {storyData.title}
                </h3>
                <div className="space-y-4">
                  {storyData.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="relative w-full min-h-[400px] lg:min-h-full bg-gradient-to-br from-muted to-muted/50 dark:from-muted/30 dark:to-muted/10">
                {storyData.image ? (
                  <img 
                    src={storyData.image} 
                    alt="소개 이미지"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50 dark:bg-muted/30 rounded-xl">
                    <div className="text-center text-muted-foreground">
                      <div className="text-sm mb-2">이미지를 추가해주세요</div>
                      <div className="text-xs opacity-70">public/ 폴더에 이미지를 넣고<br />storyData.image에 경로를 입력하세요</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
