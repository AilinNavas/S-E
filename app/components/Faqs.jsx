import Accordion from "./Accordion"

const Faqs = ({ title, description, items, id }) => {
  return (
    <section id={id} className=" bg-white">
      <div className='max-w-7xl py-16 lg:py-32 px-4 mx-auto lg:px-0'>
        <h2 className="text-[#0a2a54] text-center font-zen uppercase font-semibold text-3xl md:text-5xl pb-8">{title}</h2>
        <p className="text-xl font-semibold font-inter text-[#5a6065] md:text-2xl font-inter text-left lg:text-center pb-8">{description}</p>
        <Accordion items={items} />


      </div>
    </section >
  )
}

export default Faqs