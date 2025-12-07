"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Project } from "./projectsData"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="flex-1 p-6"
    >
      <div className="rounded-2xl shadow-sm bg-card/70 dark:bg-card/90 backdrop-blur border border-border/50 p-8 space-y-6">
        {/* 이미지 영역 */}
        {project.image ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-56 rounded-lg overflow-hidden bg-muted dark:bg-muted/50 flex items-center justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : (
          <div className="w-full h-56 bg-muted dark:bg-muted/50 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-sm mb-2">프로젝트 이미지</div>
              <div className="text-xs opacity-70">public/images/projects/ 폴더에 이미지를 넣고<br />projectsData.ts의 image 필드에 경로를 입력하세요</div>
            </div>
          </div>
        )}
        
        {/* 제목 */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-2xl font-bold text-foreground"
        >
          {project.title}
        </motion.h2>
        
        {/* 상세 설명 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed"
        >
          {project.description}
        </motion.p>
        
        {/* 태그 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 rounded-full bg-muted dark:bg-muted/70 text-muted-foreground text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
        
        {/* PDF 버튼 */}
        <motion.a
          href={project.pdfURL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-foreground dark:bg-foreground text-background dark:text-background rounded-lg hover:bg-foreground/90 dark:hover:bg-foreground/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
        >
          <FileText className="w-4 h-4" />
          PDF 보기
        </motion.a>
      </div>
    </motion.div>
  )
}

