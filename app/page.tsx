import { GallerySection } from '@/components/GallerySection';
import { LandingSection } from '@/components/LandingSection';
import { LoveLetterSection } from '@/components/LoveLetterSection';
import { TimelineSection } from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <TimelineSection />
      <GallerySection />
      <LoveLetterSection />
    </>
  );
}
