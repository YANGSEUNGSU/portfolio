"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useMotionValueEvent, useTransform } from "framer-motion"

interface SkillItemProps {
  title: string
  percent: number
  description: string
  delay?: number
}

export function SkillItem({ title, percent, description, delay = 0 }: SkillItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayCount, setDisplayCount] = useState(0)
  
  const progress = useMotionValue(0)
  const count = useMotionValue(0)
  
  // Progress bar spring
  const progressSpring = useSpring(progress, {
    stiffness: 100,
    damping: 30,
  })
  
  // Count spring
  const countSpring = useSpring(count, {
    stiffness: 100,
    damping: 30,
  })
  
  // Update display count when motion value changes
  useMotionValueEvent(countSpring, "change", (latest) => {
    setDisplayCount(Math.round(latest))
  })
  
  useEffect(() => {
    if (isInView) {
      // Progress bar animation
      progress.set(percent)
      
      // Count-up animation with spring
      count.set(percent)
    } else {
      progress.set(0)
      count.set(0)
      setDisplayCount(0)
    }
  }, [isInView, percent, progress, count])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card/70 dark:bg-card/90 backdrop-blur-md shadow-md rounded-2xl p-6 border border-border/50"
    >
      {/* 헤더: 제목과 퍼센트 */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-2 flex-1 pr-4">
          {title}
        </h3>
        <div className="text-right">
          <motion.span className="text-foreground font-bold text-lg">
            {displayCount}%
          </motion.span>
        </div>
      </div>
      
      {/* 설명 */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Progress Bar */}
      <div className="w-full h-3 bg-muted dark:bg-muted/50 rounded-full overflow-hidden mt-2">
        <motion.div
          style={{
            width: useTransform(progressSpring, (value) => `${value}%`),
          }}
          className="h-full bg-primary rounded-full shadow-inner"
        />
      </div>
    </motion.div>
  )
}

