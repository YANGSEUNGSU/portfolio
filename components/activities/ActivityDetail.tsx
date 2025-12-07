"use client"

import { motion } from "framer-motion"
import { ExternalLink, Instagram } from "lucide-react"
import { Activity } from "./activitiesData"

interface ActivityDetailProps {
  activity: Activity
}

export function ActivityDetail({ activity }: ActivityDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="flex-1 p-6"
    >
      <div className="rounded-2xl shadow-sm bg-card/70 dark:bg-card/90 backdrop-blur border border-border/50 p-8 space-y-6">
        {/* 이미지 영역 */}
        {activity.image ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-64 rounded-xl overflow-hidden bg-muted dark:bg-muted/50 flex items-center justify-center"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-64 rounded-xl bg-muted dark:bg-muted/50 flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground">
              <div className="text-sm mb-2">이미지를 추가해주세요</div>
              <div className="text-xs opacity-70">public/images/activities/ 폴더에 이미지를 넣고<br />activitiesData.ts의 image 필드에 경로를 입력하세요</div>
            </div>
          </motion.div>
        )}

        {/* 헤더 */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded-md bg-muted dark:bg-muted/70 text-muted-foreground text-xs font-bold">
                  {activity.number}
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  {activity.title}
                </h2>
              </div>
              <div className="flex items-center gap-3 flex-wrap mt-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium">
                  {activity.position}
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  {activity.period}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 설명 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <p className="text-muted-foreground leading-relaxed text-base">
            {activity.description}
          </p>
        </motion.div>

        {/* 인스타그램 링크 */}
        {activity.instagramUrl && (
          <motion.a
            href={activity.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground dark:bg-foreground text-background dark:text-background hover:bg-foreground/90 dark:hover:bg-foreground/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md group"
          >
            <Instagram className="w-4 h-4" />
            <span>인스타그램 바로가기</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

