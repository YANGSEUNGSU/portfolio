export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  pdfURL: string
  image?: string
}

export const projectsData: Project[] = [
  {
    id: "smartpole",
    title: "성남시 최적의 스마트폴 위치 선정",
    description: "TAAS, 시군구별 교통사고 등 성남시 빅데이터를 전처리한 후 독창적인 점수화 로직을 통해 성남시 내 최적의 스마트폴 위치를 도출한 프로젝트입니다.",
    tags: ["스마트시티", "빅데이터", "입지선정", "TAAS"],
    pdfURL: "/pdf/smartpole.pdf",
    image: "/images/projects/smartpole.jpg",
  },
  {
    id: "cheonan",
    title: "천안 역세권 혁신지구 도시재생사업 분석",
    description: "천안 역세권 혁신지구 도시재생사업의 의의와 실현 가능성을 분석하고 문제 해결 방향을 제시한 연구 프로젝트입니다.",
    tags: ["도시재생", "역세권", "사업성분석"],
    pdfURL: "/pdf/cheonan.pdf",
    image: "/images/projects/cheonan.jpg",
  },
  {
    id: "fastplan",
    title: "신속통합기획 (9·7 부동산대책 비교)",
    description: "9·7 부동산대책과 신속통합기획을 비교 분석하여 현 부동산 정책에 대한 견해를 제시한 발표 프로젝트입니다.",
    tags: ["부동산정책", "신속통합기획", "정책비교", "9·7대책"],
    pdfURL: "/pdf/fastplan.pdf",
    image: "/images/projects/fastplan.jpg",
  },
  {
    id: "ktrust",
    title: "한국자산신탁 관리형 토지신탁 분석",
    description: "관리형 토지신탁을 분석하고 실제 등기소에서 '장안동 414-2' 신탁 원부를 발급받아 내용을 정리한 프로젝트입니다.",
    tags: ["토지신탁", "자산신탁", "관리형신탁"],
    pdfURL: "/pdf/ktrust.pdf",
    image: "/images/projects/ktrust.jpg",
  },
  {
    id: "contest",
    title: "대단원 공모전 교육기부 프로젝트 기획",
    description: "교육기부 프로그램 공모전을 기획·진행하며 1차 심사부터 시상까지 운영하고, 최종 당선작은 실제 프로그램으로 디벨롭하여 운영한 프로젝트입니다.",
    tags: ["교육기부", "프로그램기획", "공모전"],
    pdfURL: "/pdf/contest.pdf",
    image: "/images/projects/contest.jpg",
  },
  {
    id: "sponsor",
    title: "행사 협찬사 컨택 프로젝트",
    description: "KLC 봉사단체 행사에서 협찬사와 직접 컨택하여 주류·생수·음료·간식 등 다양한 협찬을 성사시킨 프로젝트입니다.",
    tags: ["협찬유치", "커뮤니케이션", "행사운영", "파트너십"],
    pdfURL: "/pdf/sponsor.pdf",
    image: "/images/projects/sponsor.png",
  },
]

