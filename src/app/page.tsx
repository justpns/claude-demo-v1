import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import WhatYouLearn from '@/components/sections/WhatYouLearn'
import ForWho from '@/components/sections/ForWho'
import HowItWorks from '@/components/sections/HowItWorks'
import Curriculum from '@/components/sections/Curriculum'
import Instructor from '@/components/sections/Instructor'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WhatYouLearn />
      <ForWho />
      <HowItWorks />
      <Curriculum />
      <Instructor />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
