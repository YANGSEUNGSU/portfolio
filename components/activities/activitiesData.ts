export interface Activity {
  id: string
  number: string
  title: string
  position: string
  period: string
  description: string
  instagramUrl: string
  logoColor?: string
  image?: string
}

export const activitiesData: Activity[] = [
  {
    id: "klc",
    number: "1",
    title: "KLC",
    position: "서울지부 봉사팀장 역임",
    period: "2021 ~ 2024",
    description: "노인의 \"밥\" 문제 해결에 우선순위를 두고, 한국의 노인 빈곤 문제를 청년들과 함께 알리고, 행동으로 변화를 만들어가고자 합니다.",
    instagramUrl: "https://www.instagram.com/korealegacy/",
    logoColor: "from-yellow-400 to-amber-500",
    image: "/images/activities/1.png",
  },
  {
    id: "edufordonation",
    number: "2",
    title: "대한민국대학생교육기부단",
    position: "중앙사무국 행사운영부 부장 역임",
    period: "2025 ~",
    description: "대교단은 한국 최대 규모의 대학생 교육기부 단체로, 학생 교육기부 문화를 확산시키고자 합니다. 중앙사무국과 7개 지역본부(강원, 광주, 대구, 대전, 부산, 서울, 제주)로 구성되어 있으며, 교육기부 프로젝트 및 프로그램 기획·운영과 지역본부의 직접 교육기부 활동을 진행하고 있습니다.",
    instagramUrl: "https://www.instagram.com/edufordonation/",
    logoColor: "from-orange-400 to-amber-500",
    image: "/images/activities/2.jpg",
  },
  {
    id: "animalmate",
    number: "3",
    title: "애니멀메이트",
    position: "봉사팀장, 홍보부장 역임",
    period: "2021 ~ 2025",
    description: "2010년에 설립된 애니멀메이트는 동물을 사랑하고 동물을 위해 봉사하고자 하는 서울 및 수도권 지역 대학생 및 대학원생들이 모인 서울 및 수도권 최대 규모의 동물보호 연합 동아리입니다.",
    instagramUrl: "https://www.instagram.com/animalmate_?igsh=aWpzd3doNGN4cGx1",
    logoColor: "from-green-400 to-emerald-500",
    image: "/images/activities/3.jpg",
  },
]

