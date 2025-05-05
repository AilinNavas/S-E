
import Image from "next/image";
import Link from "next/link";
import star from '@/public/icons/star.svg';
import google from '@/public/icons/google.svg';

const Testimonials = ({ data = [], title, subtitle, showCTA = true }) => {
  return (
    <section className='bg-[#0a2a54] '>
      <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center'>
        {title && (
          <header className='mb-8 space-y-8'>
            <h2 className='text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
              {title}
            </h2>
            <p className='text-xl font-semibold font-inter text-center text-white md:text-2xl'>{subtitle}</p>
          </header>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-[0px_2px_10px_0px_rgba(255,_255,_255,_0.5)] transition-opacity duration-500"
            >
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full bg-[#3c8dbc]/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#3c8dbc]">
                      {testimonial.initials}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-inter font-semibold text-[#0a2a54]">{testimonial.name}</h3>
                  <p className="text-sm text-[#5a6065] font-inter">{testimonial.role}</p>
                </div>
              </div>

              <p className="flex items-center h-6">
                {[...Array(5)].map((_, i) => (
                  <Image key={i} src={star} alt="star" className="w-6" />
                ))}
              </p>

              <p className="italic text-[#5a6065] font-inter">"{testimonial.text}"</p>

              <p className="text-left">
                <Image src={google} alt="google icon" className="w-8 inline-block mr-2" />
              </p>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="mt-8 text-center">
            <p className="text-lg text-white mb-4">Join our +240 reviews on Google!</p>
            <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter text-white border-2 border-white bg-[#0a2a54] hover:bg-white hover:text-[#0a2a54] ease-in duration-300">
              <Link
                href="https://g.page/r/southside-endodontics/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review
              </Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
