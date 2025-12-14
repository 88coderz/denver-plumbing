import Hero from '@/app/components/Hero';
import Testimonials from '@/app/components/Testimonials';
import Services from '@/app/components/Services';
import CallToAction from '@/app/components/CallToAction';
import ArticleCarousel from '@/app/components/ArticleCarousel';

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Testimonials />
        <Services />
        <section id="blog" className="py-5">
          <ArticleCarousel />
        </section>
        <section id="contact" className="py-5">
          <CallToAction />
        </section>
      </div>
    </>
  );
}
