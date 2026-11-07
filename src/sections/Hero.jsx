import { site } from '../data/site'
import SocialLinks from '../components/SocialLinks'
import CodeWindow from '../components/CodeWindow'
import { wrap, btnPrimary, btnGhost, stampBox } from '../ui/classes'

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pb-20 pt-20 sm:pt-24 lg:pb-28">
      <div className={wrap}>
        {/* Form header */}
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b-[6px] border-double border-fg pb-2 font-mono text-sm">
          <span>{site.role}</span>
          <span>{site.location}</span>
        </div>

        {/* Headline dominates; the introduction sits in a narrow side column */}
        <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <p className="text-2xl italic leading-snug lg:col-span-3 lg:pt-4 lg:text-[1.65rem]">
            I’m {site.name}, a <span className="bg-fg px-1.5 not-italic text-bg">{site.tagline}</span>.
          </p>
          <h1 className="animate-wipe font-display text-[clamp(3rem,9.2vw,9.5rem)] font-black uppercase leading-[.84] tracking-[-.015em] [text-wrap:balance] lg:col-span-9">
            {site.headline}
          </h1>
        </div>

        <div className="relative mt-14 grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-12 lg:gap-x-8">
          {/* Passport-style photo, stapled */}
          <div className="relative w-44 sm:w-52 lg:col-span-3 lg:w-full lg:max-w-[16rem]">
            <div className="relative aspect-[4/5] -rotate-2 border-2 border-fg bg-accent shadow-hard">
              {site.profileImage ? (
                <img src={site.profileImage} alt={`Portrait of ${site.name}`} className="size-full object-cover object-[50%_18%] mix-blend-multiply grayscale contrast-125" />
              ) : (
                <div className="grid size-full place-items-center font-display text-6xl font-black text-onaccent" role="img" aria-label="Profile image placeholder">SI</div>
              )}
              <span aria-hidden className="absolute -top-2 left-1/2 h-1.5 w-8 -translate-x-1/2 bg-fg" />
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <p className="max-w-[46ch] text-xl leading-relaxed lg:pt-16">
              {site.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <a href="#projects" className={btnPrimary}>View my work</a>
              <a href={site.resumeUrl} download className={btnGhost}>Download resume</a>
              <a href="#contact" className={btnGhost}>Contact me</a>
            </div>
            <SocialLinks className="mt-7" />
            {/* The one big moment: a rubber stamp that slams onto the form */}
            <p className={`mt-8 inline-block animate-stamp text-2xl sm:text-3xl lg:absolute lg:-top-10 lg:right-0 lg:mt-0 lg:text-4xl ${stampBox}`}>{site.status}</p>
          </div>

          <div className="min-w-0 lg:col-span-4 lg:mt-10">
            <div className="rotate-1 transition-transform duration-300 hover:rotate-0"><CodeWindow /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
