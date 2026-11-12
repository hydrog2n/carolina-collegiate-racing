import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { galleryPage } from "@/content/pages";
import { contact, gallerySectionLinks, mailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Approved team and vehicle photography from Carolina Collegiate Racing, published as it becomes available.",
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={gallerySectionLinks} />
      <PageIntro
        index={galleryPage.index}
        label={galleryPage.label}
        title={galleryPage.title}
        intro={galleryPage.intro}
        tone = "garnet"
        actions={
          <ArrowLink href={contact.instagramUrl} variant="outline">
            Follow on Instagram
          </ArrowLink>
        }
      />

      <PageSection
        id="gallery"
        tone="smoke"
        label={galleryPage.emptyLabel}
        title={galleryPage.emptyHeading}
        intro={galleryPage.emptyBody}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {galleryPage.categories.map((category) => (
            <PhotoPlaceholder
              key={category.title}
              label={category.title}
              aspectClassName="aspect-[4/3]"
            />
          ))}
        </div>
      </PageSection>

      <CtaSection
        id="follow-cta"
        tone="garnet"
        label="Instagram"
        heading="Connect with CCR."
        body="Find Carolina Collegiate Racing on Instagram."
      >
        <ArrowLink
          href={contact.instagramUrl}
          variant="inverse"
        >
          Follow on Instagram
        </ArrowLink>
        <ArrowLink href={mailto(contact.generalSubject)} variant="outline">
          Email CCR
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
