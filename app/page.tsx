import Hero from '@/components/hero';
import About from '@/components/about';
import OtherInfo1 from '@/components/other_info1';
import OtherInfo2 from '@/components/other_info2';
import Shop from '@/components/shop';

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <OtherInfo1/>
      <OtherInfo2/>
      <Shop/>
    </>
  );
}
