import TrustCard from "@/app/components/TrustCard";


const WhyTrustUs = ( {title,
  subtitle,
  cards = [],
  bgColor,
  mdCols }) => {
  return (

    <section className={`${bgColor}`}>
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
            {title}
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center">
            {subtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-${mdCols}`}>
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

  );
};

export default WhyTrustUs;
