import TrustCard from "@/app/components/TrustCard"

const TrustDoctors = ({ cards = [] }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
          Why Dentists Trust Southside Endodontics
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center ">
          Trusted care and easy collaboration, every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <TrustCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              benefits={card.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustDoctors