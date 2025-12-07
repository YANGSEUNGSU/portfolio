"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

// 연락처 데이터
const contactData = {
  name: "양승수",
  title: "단국대학교/도시계획부동산학부",
  experience: "4학년",
  phone: "010-0000-0000",
  email: "yboy1234@naver.com",
  location: "성동구,서울시",
  workTime: "평일 09:00 - 18:00",
  responseTime: "",
  profileEmoji: "👤",
  sectionTitle: "연락처",
  sectionSubtitle: "프로젝트 문의나 협업 제안을 기다리고 있습니다. 편하신 방법으로 연락주세요!",
  bottomMessage: "함께 성장하는 파트너가 되겠습니다.",
  bottomSubMessage: "고객님의 성공적인 프로젝트를 위해 최선을 다하겠습니다.",
  qrContent: ["name", "phone", "email", "location"],
}


export function Contact() {
  // QR 코드 생성
  const generateVCard = () => {
    let vCard = 'BEGIN:VCARD\nVERSION:3.0\n'
    
    vCard += `FN:${contactData.name}${contactData.title ? ` (${contactData.title})` : ''}\n`
    vCard += `N:${contactData.name};;;;\n`
    vCard += `TEL;TYPE=CELL:${contactData.phone}\n`
    vCard += `EMAIL:${contactData.email}\n`
    if (contactData.location) vCard += `ADR;TYPE=WORK:;;${contactData.location};;;;\n`
    
    vCard += 'END:VCARD'
    return vCard
  }
  
  const vCardString = generateVCard()
  const encodedVCard = encodeURIComponent(vCardString.trim())
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodedVCard}`

  return (
    <section id="contact" className="py-24 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 - About과 동일한 스타일 */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="text-sm font-semibold text-red-500 dark:text-red-400 mb-2 uppercase tracking-wider">
            CONTACT
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            연락처
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {contactData.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {contactData.sectionSubtitle}
          </p>
        </div>

        {/* 메인 좌우 분할 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 왼쪽: 연락처 정보 */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-foreground mb-4">프로필 정보</h3>
            
            {/* 프로필 카드 */}
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 dark:from-card dark:to-muted/10 dark:border dark:border-border/50 dark:shadow-black/30">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{contactData.profileEmoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {contactData.name}
                  </h3>
                  <p className="text-lg text-primary mb-2">
                    {contactData.title}
                  </p>
                  <p className="text-muted-foreground">
                    {contactData.experience}
                    {contactData.responseTime && ` | ${contactData.responseTime}`}
                  </p>
                </div>
              </div>
            </Card>

            {/* 주요 연락 수단 그리드 */}
            <div className="grid grid-cols-2 gap-4">
              {/* 전화 카드 */}
              <a href={`tel:${contactData.phone}`} className="group" data-aos="fade-up" data-aos-delay="100">
                <Card className="p-5 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer bg-card dark:bg-card dark:border dark:border-border/50 dark:shadow-black/20 dark:hover:shadow-green-500/10 dark:hover:border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">전화</p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {contactData.phone}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* 이메일 카드 */}
              <a href={`mailto:${contactData.email}`} className="group" data-aos="fade-up" data-aos-delay="200">
                <Card className="p-5 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer bg-card dark:bg-card dark:border dark:border-border/50 dark:shadow-black/20 dark:hover:shadow-blue-500/10 dark:hover:border-blue-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">이메일</p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {contactData.email}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* 위치 카드 */}
              <Card className="p-5 border-0 shadow-lg bg-card dark:bg-card dark:border dark:border-border/50 dark:shadow-black/20" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">위치</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {contactData.location}
                    </p>
                  </div>
                </div>
              </Card>

              {/* 업무시간 카드 */}
              <Card className="p-5 border-0 shadow-lg bg-card dark:bg-card dark:border dark:border-border/50 dark:shadow-black/20" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">업무시간</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {contactData.workTime}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* 오른쪽: QR 코드 */}
          <div className="space-y-6" data-aos="fade-left">
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 dark:from-card dark:to-muted/10 dark:border dark:border-border/50 dark:shadow-black/30">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  QR 코드로 연락처 저장
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  스캔하면 연락처가 자동으로 저장됩니다
                </p>
              </div>
              
              <div className="flex justify-center mb-6">
                <Image 
                  src={qrCodeUrl}
                  alt="연락처 QR 코드"
                  width={280}
                  height={280}
                  className="w-[280px] h-[280px] rounded-lg"
                  style={{ imageRendering: 'crisp-edges' }}
                  unoptimized
                />
              </div>
              
              <div className="bg-muted/50 dark:bg-muted/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground text-center">
                  📱 스캔하면 연락처가 자동 저장됩니다
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* 하단 메시지 */}
        <div className="mt-16 text-center p-8 bg-primary/5 dark:bg-primary/10 rounded-2xl dark:border dark:border-primary/20" data-aos="fade-up">
          <p className="text-lg font-medium text-foreground mb-2">
            {contactData.bottomMessage}
          </p>
          <p className="text-muted-foreground">
            {contactData.bottomSubMessage}
          </p>
        </div>
      </div>
    </section>
  )
}
