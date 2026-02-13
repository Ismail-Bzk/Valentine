import { GallerySection } from '@/components/GallerySection';
import { LandingSection } from '@/components/LandingSection';
import { TimelineSection } from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <TimelineSection />
      <GallerySection />
    </>
  );
}
