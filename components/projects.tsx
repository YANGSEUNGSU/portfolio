"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { ProjectTabs } from "./projects/ProjectTabs"
import { ProjectDetail } from "./projects/ProjectDetail"
import { projectsData } from "./projects/projectsData"

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id)
  
  const selectedProject = projectsData.find(p => p.id === selectedProjectId) || projectsData[0]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 - About과 동일한 스타일 */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="text-sm font-semibold text-red-500 dark:text-red-400 mb-2 uppercase tracking-wider">
            PROJECTS & EXPERIENCE
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            프로젝트
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            프로젝트
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            진행한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        {/* 메인 콘텐츠 영역 */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {/* 왼쪽: 탭 메뉴 */}
          <ProjectTabs
            projects={projectsData}
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
          />
          
          {/* 오른쪽: 상세 내용 */}
          <ProjectDetail project={selectedProject} />
        </motion.div>
      </div>
    </section>
  )
}
