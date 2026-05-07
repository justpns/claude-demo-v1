import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import AIWorkflow from '@/components/sections/AIWorkflow'
import WhatYouLearn from '@/components/sections/WhatYouLearn'
import HowItWorks from '@/components/sections/HowItWorks'
import Curriculum from '@/components/sections/Curriculum'
import ProjectShowcase from '@/components/sections/ProjectShowcase'
import ForWho from '@/components/sections/ForWho'
import CourseFormat from '@/components/sections/CourseFormat'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import RegistrationCTA from '@/components/sections/RegistrationCTA'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero />
      {/* 2 — Problem */}
      <PainPoints />
      {/* 3 — New AI-native workflow */}
      <AIWorkflow />
      {/* 4 — What students will build */}
      <WhatYouLearn />
      {/* 5 — Course framework */}
      <HowItWorks />
      {/* 6 — Curriculum */}
      <Curriculum />
      {/* 7 — Live project showcase */}
      <ProjectShowcase />
      {/* 8 — Who this is for */}
      <ForWho />
      {/* 9 — Course format + instructor */}
      <CourseFormat />
      {/* 10 — Testimonials */}
      <Testimonials />
      {/* 11 — FAQ */}
      <FAQ />
      {/* 12 — Registration CTA */}
      <RegistrationCTA />
      {/* 13 — Lead capture form */}
      <FinalCTA />
    </>
  )
}
