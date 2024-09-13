import React from 'react';
import Image from 'next/image'; // se stai usando Next.js
import Link from 'next/link';   // se stai usando Next.js
import Navbar from '../../components/Navbar';

const Eventify: React.FC = () => {
  return (
    <div className="min-h-screen  bg-custom-grey flex flex-col items-center justify-start">
      <Navbar textColor='text-white' />
      <main className="container mx-auto mt-15" style={{ maxWidth: "1500px", padding: 0}}>
        <div className="bg-custom-yellow" style={{ height: "100vh", margin: 0 }}>
          <First
            title="Eventify" 
            subtitle="Event planner"
            details="
              In collaboration with 42 Roma LUISS and Leonardo S.p.A., 
              we developed a comprehensive social event management app designed 
              to enhance the way people organize and coordinate events with 
              friends, family, and colleagues.
              " 
            imageUrl="/images/Component.png"  
            projectUrl='/projects/eventify' 
          />
        </div>
        {/* Nuova sezione aggiunta */}
        <div className="new-section text-white p-8 mt-10 shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-center ">
            Designing Impact: <span className='text-orange'>Human-Centered</span> Tech Solutions
          </h2>

          <div className="text-left max-w-full md:max-w-1/2">
            <h2 className="text-2xl font-semibold leading-relaxed">
              Event <span className='text-orange'>Creation</span>
            </h2>
            <p className="text-lg mb-4 w-full md:w-1/2">
              Users can effortlessly set up events with customizable 
              details such as date, time, location, and event type. 
              The app supports adding descriptions, attaching images, 
              and specifying preferences to fit various needs.
            </p>
          </div>

          <div className="text-right max-w-full md:max-w-1/2 md:ml-auto">
            <h2 className="text-2xl font-semibold leading-relaxed">
              Participation <span className='text-orange'>Management</span>
            </h2>
            <p className="text-lg mb-4 w-full">
              Track RSVPs and manage participant lists with ease. 
              The platform offers a clear overview of attendees, 
              non-attendees, and undecided individuals, simplifying planning and adjustments.
            </p>
          </div>

          <div className="text-left max-w-full md:max-w-1/2">
            <h2 className="text-2xl font-semibold leading-relaxed">
              Communication <span className='text-orange'>Tools</span>
            </h2>
            <p className="text-lg mb-4 w-full md:w-1/2">
              Keep participants engaged with built-in messaging features. 
              Share updates, important information, and facilitate group 
              discussions to ensure everyone is informed and connected.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
};


const First = ({ title, subtitle, details, imageUrl, projectUrl }: { title: string, subtitle: string, details: string, imageUrl: string, projectUrl: string }) => {
  return (
    <Link href={projectUrl}>

      <div className="text-white flex flex-col md:flex-row items-center justify-between w-full mb-6" style={{ height: 'calc(100vh - 8rem)' }}>
        {/* Immagine a sinistra - occupa tutta la larghezza dello schermo solo su desktop */}
        <div className="w-full md:w-1/2 flex-shrink-0 h-1/2 md:h-full mt-8">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          width={500}
          height={500}
        />
      </div>
        {/* Testo a destra - mantiene il margine */}
        <div className="md:w-1/2 w-full lg:w-1/3 text-right md:text-right text-center p-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-2 text-blue">{title}</h1>
          <h2 className="text-3xl font-medium italic mb-4">{subtitle}</h2>
          <p className="text-xl leading-relaxed">{details}</p>
        </div>
      </div>
      <div className="carousel w-full w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="carousel-track">
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
          <div className="carousel-item">VISUAL IDENTITY</div>
          <div className="carousel-item">UX/UI</div>
          <div className="carousel-item">APP ARCHITECTURE</div>
          <div className="carousel-item">FULL-STACK DEV</div>
        </div>
      </div>
    </Link>
  );
};


export default Eventify;