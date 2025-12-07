"use client"

import { motion } from "framer-motion"
import { ExternalLink, Instagram } from "lucide-react"
import { Activity } from "./activitiesData"

interface ActivityCardProps {
  activity: Activity
  index: number
}

export function ActivityCard({ activity, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative h-full bg-card dark:bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 dark:border-border/30 shadow-lg dark:shadow-black/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* 번호 배지 - 좌측 상단 */}
        <div className="absolute top-6 left-6 z-10">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.logoColor || "from-primary to-primary/80"} flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-xl">{activity.number}</span>
          </div>
        </div>

        {/* 그라데이션 배경 효과 */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activity.logoColor || "from-primary/20 to-transparent"} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

        <div className="relative p-8 pt-20 space-y-6">
          {/* 조직명 및 직책 */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {activity.title}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium">
                {activity.position}
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                {activity.period}
              </span>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-muted-foreground leading-relaxed text-base">
            {activity.description}
          </p>

          {/* 인스타그램 링크 */}
          {activity.instagramUrl && (
            <a
              href={activity.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 group/link"
            >
              <Instagram className="w-4 h-4" />
              <span>인스타그램 바로가기</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}

          {/* 하단 장식 라인 */}
          <div className={`h-1 bg-gradient-to-r ${activity.logoColor || "from-primary to-primary/50"} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </div>
    </motion.div>
  )
}

