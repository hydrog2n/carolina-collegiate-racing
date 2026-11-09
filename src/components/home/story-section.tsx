import { CcrLogo } from "@/components/brand/ccr-logo";
import { Eyebrow } from "@/components/ui/eyebrow";
import { storyContent } from "@/content/home";
import { site } from "@/content/site";

export function StorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative scroll-mt-24 overflow-hidden bg-white text-black"
    >
      <div
        aria-hidden="true"
        className="checkers absolute right-0 top-0 h-24 w-24 text-red opacity-10"
      />

      <div className="shell py-20 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Eyebrow index={storyContent.index} tone="light">
              {storyContent.label}
            </Eyebrow>
            <p className="mt-8 max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-black/60">
              {site.name}
              <br />
              {site.university}
            </p>
            <div className="mt-16 hidden lg:block">
              <CcrLogo
                variant="light"
                sizes="180px"
                className="h-auto w-[180px]"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2
              id="story-title"
              className="font-display text-[clamp(3.5rem,7vw,7.25rem)] uppercase leading-[0.85] tracking-[0.005em]"
            >
              <span className="block">{storyContent.heading[0]}</span>
              <span className="block text-red">{storyContent.heading[1]}</span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg/8 text-black/75">{storyContent.intro}</p>
              <div className="border-l-2 border-red pl-5">
                <p className="text-sm/7 text-black/60">{storyContent.note}</p>
              </div>
            </div>

            <div className="mt-14">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-black/60">
                What we are here to do
              </p>
              <div className="mt-3 border-t-2 border-black">
                {storyContent.commitments.map((commitment, index) => (
                  <div
                    key={commitment.title}
                    className="group grid gap-3 border-b border-black/15 py-5 sm:grid-cols-[4.5rem_1fr] sm:py-6"
                  >
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="max-w-2xl text-lg font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-red sm:text-xl">
                        {commitment.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm/6 text-black/55">
                        {commitment.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
