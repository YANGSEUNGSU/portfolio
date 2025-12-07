"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { ActivityTabs } from "./ActivityTabs"
import { ActivityDetail } from "./ActivityDetail"
import { activitiesData } from "./activitiesData"

interface StarData {
  left: number
  delay: number
  duration: number
  opacity: number
}

interface ParticleData {
  left: number
  top: number
  delay: number
  duration: number
  opacity: number
}

export function ActivitiesSection() {
  const [selectedActivityId, setSelectedActivityId] = useState(activitiesData[0].id)
  const [stars, setStars] = useState<StarData[]>([])
  const [particles, setParticles] = useState<ParticleData[]>([])
  const [isMounted, setIsMounted] = useState(false)
  
  const selectedActivity = activitiesData.find(a => a.id === selectedActivityId) || activitiesData[0]

  useEffect(() => {
    setIsMounted(true)
    // 클라이언트에서만 랜덤 값 생성하여 Hydration 에러 방지
    setStars(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    )
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 3,
        opacity: 0.2 + Math.random() * 0.3,
      }))
    )
  }, [])

  return (
    <section id="activities" className="py-24 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* 다크모드: 별 떨어지는 애니메이션 */}
      {isMounted && (
        <div className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="absolute star-fall"
              style={{
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                opacity: star.opacity,
              }}
            >
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-white to-white rounded-full blur-[1px]" />
            </div>
          ))}
        </div>
      )}

      {/* 라이트모드: 파티클 효과 */}
      {isMounted && (
        <div className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full particle-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                background: `radial-gradient(circle, rgba(59, 130, 246, ${particle.opacity}) 0%, transparent 70%)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 제목 */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-semibold text-red-500 dark:text-red-400 mb-2 uppercase tracking-wider">
            ACTIVITIES
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            대외활동
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            대외활동
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            다양한 대외활동을 통해 리더십과 협업 능력을 키워왔습니다.
          </p>
        </motion.div>

        {/* 메인 콘텐츠 영역 */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {/* 왼쪽: 탭 메뉴 */}
          <ActivityTabs
            activities={activitiesData}
            selectedActivityId={selectedActivityId}
            onSelectActivity={setSelectedActivityId}
          />
          
          {/* 오른쪽: 상세 내용 */}
          <ActivityDetail activity={selectedActivity} />
        </motion.div>
      </div>
    </section>
  )
}
