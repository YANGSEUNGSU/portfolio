"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Project } from "./projectsData"

interface ProjectTabsProps {
  projects: Project[]
  selectedProjectId: string
  onSelectProject: (projectId: string) => void
}

export function ProjectTabs({ projects, selectedProjectId, onSelectProject }: ProjectTabsProps) {
  return (
    <div className="w-full lg:w-64 lg:min-w-[220px] lg:border-r lg:border-border lg:pr-6 lg:mb-0 mb-6">
      <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 lg:mx-0 px-4 lg:px-0 scrollbar-hide">
        {projects.map((project, index) => {
          const isSelected = project.id === selectedProjectId
          
          return (
            <motion.button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className={cn(
                "flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-lg transition-all duration-200 relative group whitespace-nowrap lg:whitespace-normal",
                "hover:bg-muted/50",
                isSelected 
                  ? "bg-primary/10 dark:bg-primary/20 text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="relative z-10">
                <div className="text-sm leading-relaxed">{project.title}</div>
              </div>
              
              {/* 선택된 탭 강조 라인 */}
              {isSelected && (
                <motion.div
                  className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              {/* Hover 효과 */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

