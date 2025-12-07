"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { SkillItem } from "./SkillItem"
import { coreSkillsData } from "./coreSkillsData"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function CoreSkillsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
            CORE SKILLS
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            핵심 역량
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            핵심 역량
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            다양한 프로젝트 경험을 통해 쌓은 전문 역량들입니다.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {coreSkillsData.map((skill, index) => (
            <SkillItem
              key={skill.id}
              title={skill.title}
              percent={skill.percent}
              description={skill.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

