import Nav from '@/components/Nav';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <section
          className="container"
          style={{ paddingBlock: 'clamp(6rem, 15vw, 12rem)' }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            Creative Technology Studio
          </p>

          <h1 className="display">
            We engineer <em>bold</em> software
            <br />
            for ambitious brands.
          </h1>

          <p className="lede" style={{ marginTop: '2rem' }}>
            Tifex by Tifelabz builds web platforms, developer tools, and
            automation engines — crafted with precision, shipped with intent.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            <a className="btn btn-accent" href="#work">
              View our work →
            </a>
            <a className="btn" href="#contact">
              Start a project
            </a>
          </div>
        </section>

        <Marquee />

        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Work />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}