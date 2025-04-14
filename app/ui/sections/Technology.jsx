
import Image from 'next/image'
import lock from '@/public/icons/lock.svg'
import world from '@/public/icons/world.svg'
import clipboard from '@/public/icons/clipboard.svg'

const Technology = () => {
  const OurTechnology = [
    {
      title: 'HIPAA Compliance',
      icon: lock,
      detail: 'Your information is secure with our HIPAA-compliant electronic records system.'
    },
    {
      title: 'Efficient Workflow',
      icon: clipboard,
      detail: 'Our streamlined processes ensure quick and efficient appointments.'
    },
    {
      title: 'Global Community',
      icon: world,
      detail: "We're connected to a global network of endodontists for the latest techniques and knowledge."
    }
  ];


  return (

    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center'>
        <header className='pb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>State-of-the-Art Care with TDO Software</h2>
        </header>
        <div className="pb-8">
         <p className='text-[#5a6065] font-inter md:text-xl text-center'>
         Our practice uses TDO, the gold standard in endodontic electronic records, to streamline patient care. With HIPAA-compliant records, efficient workflows, and integration with the global community of endodontists, TDO ensures the highest level of care for our patients.
         </p>
         </div>
        <div className="grid gap-6 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3">
          {OurTechnology.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white enter p-6 rounded-lg  max-w-sm h-[280px] shadow shadow-gray-300 transition-all ease-linear duration-300 `}

            >
              <div className="flex flex-col space-y-2 items-center justify-center mb-4">
                <div className='rounded-full w-20 h-20 bg-accent/20 flex items-center justify-center'>
                  <Image src={value.icon} alt='icon' className='h-12 w-12' />
                </div>
                <h3 className="text-xl text-center lg:text-2xl text-[#0a2a54] font-inter">{value.title}</h3>
              </div>
              <p className="text-[#5a6065] text-center font-inter text-lg ">{value.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Technology