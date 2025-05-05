import Image from "next/image"
import familyHorn from "@/public/images/about-us/familyHorn.webp"

const AfterOffice = () => {
  return (
    <section className=" bg-white">
        <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">

        <header className='pb-8 space-y-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
          Outside the Office: Meet Dr. Horn
          </h2>
          <p className='text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center'>
          Dr. Horn's Hobbies and interests.
          </p>
        </header>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2  text-[#5a6065] font-inter md:text-xl">
            <div className="flex flex-col gap-6">
              <p className="text-lg text-brand-secondary">
                Beyond his dedication to dentistry, Dr. Horn enjoys spending time with his wife, Leslie, and their three
                children, Miles, Audrey, and Parker. He is an avid baseball fan, cheering for the Texas Rangers, and has
                a passion for gardening—especially native Texas plants. He also cares for a variety of exotic pets and
                orchids.
              </p>
              <p className="text-lg text-brand-secondary">
                Dr. Horn believes in giving back to the community and regularly participates in dental outreach
                programs. His experience living in Argentina gave him a deep appreciation for different cultures.
              </p>
              <p className="text-lg text-brand-secondary">
                When not in the office, you might find Dr. Horn at a local baseball game, tending to his garden, or
                exploring Fort Worth's vibrant cultural scene with his family.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src={familyHorn}
                alt="Dr. Neal Horn with his family"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AfterOffice