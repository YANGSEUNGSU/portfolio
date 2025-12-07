export interface CoreSkill {
  id: string
  title: string
  percent: number
  description: string
}

export const coreSkillsData: CoreSkill[] = [
  {
    id: "problem-solving",
    title: "문제 해결 및 리스크 관리 능력",
    percent: 95,
    description: "대외 활동을 통해 돌발 상황을 많이 마주치며 이에 대한 대처 능력을 갖게 되었습니다.",
  },
  {
    id: "project-management",
    title: "프로젝트 관리(PM) 역량",
    percent: 100,
    description: "공모전 사업, 다양한 행사 기획 등 여러 프로젝트를 진행하며 일정 및 예산 관리 능력을 갖추었습니다.",
  },
  {
    id: "communication",
    title: "커뮤니케이션 & 협업 능력",
    percent: 100,
    description: "다양한 사람들과의 소통과 협업 경험이 많아 마찰 없이 수월하게 프로젝트를 진행하는 데 강점을 지닙니다.",
  },
  {
    id: "data-analysis",
    title: "데이터 분석 및 활용 능력",
    percent: 95,
    description: "빅데이터 분석과 전처리 과정을 다양한 프로젝트에서 경험하였고 이를 기반으로 결론을 도출하였습니다.",
  },
]

