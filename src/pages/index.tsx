import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

const Home = () => {
  useEffect(() => {
    const split1 = new SplitType('#heading1');
    const split2 = new SplitType('#heading2');
    const split3 = new SplitType('#description');
    const split4 = new SplitType('#description2');

    gsap.to(split1.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.7,
    });

    gsap.to(split2.chars, {
      y: 0,
      stagger: 0.05,
      delay: 1.5, // Delay to start after the first h1 animation
      duration: 0.7,
    });

    gsap.to(split3.chars, {
      y: 0,
      stagger: 0.05,
      delay: 3, // Delay to start after the second h1 animation
      duration: 0.7,
    });

    gsap.fromTo(split4.chars,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        delay: 5,
        duration: 0.05
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Alessandro Tarsi - Portfolio</title>
        <meta name="description" content="Portfolio di Alessandro Tarsi, Designer e Developer." />
        <meta name="keywords" content="Alessandro Tarsi, Portfolio, Designer, Developer" />
        <meta name="author" content="Alessandro Tarsi" />
      </Head>
      <div className="min-h-screen p-4 text-black relative overflow-hidden">
        <Navbar />
        <main className="container mx-auto flex flex-col min-h-screen">
        <div className="text-left md:mb-64 mt-32 px-4" style={{ maxWidth: "1200px", padding: "0 0"}}>
          <h1 id="heading1" className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">Hey there.</h1>
          <h1 id="heading2" className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">I&apos;m Alessandro Tarsi.</h1>
          <h2 id="description" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 ml-2" style={{ lineHeight: '3rem' }}>Designer & Developer</h2>
        </div>
        <div className="text-right mt-16 px-4" style={{ maxWidth: "1200px", padding: "0 0"}}>
          <a id="description2" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 ml-2" style={{ lineHeight: '3rem' }}>
            I was born in the &quot;Brands&quot;, in 1997. <br />
            I am a designer and developer, <br />
            I love to create and design new things.
          </a>
        </div>
          {/* <div className="p-4 bg-white">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold">Last projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-200 p-4 rounded-lg flex items-center justify-center h-40">
                <h1 className="text-2xl font-bold">Project 1</h1>
              </div>
              <div className="bg-yellow-200 p-4 rounded-lg flex items-center justify-center h-40">
                <h1 className="text-2xl font-bold">Project 2</h1>
              </div>
              <div className="bg-green-200 p-4 rounded-lg flex items-center justify-center h-40">
                <h1 className="text-2xl font-bold">Project 3</h1>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </>
  );
};

export default Home;