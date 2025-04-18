import Accordion from "./Accordion"

const Faqs = ({ title, description, items, id }) => {
  return (
    <section id={id} className=" bg-white">
      <div className='max-w-7xl py-16 lg:py-32 px-4 mx-auto lg:px-0'>
        <h2 className="bg-gradient-to-b from-[#0a2a54] via-blue-900 to-blue-950 bg-clip-text text-transparent text-center font-zen uppercase font-semibold text-3xl md:text-5xl pb-8">{title}</h2>
        <p className="font-inter text-[#5a6065] text-left lg:text-center md:text-xl pb-8">{description}</p>
        <Accordion items={items} />
       

      </div>
    </section >
  )
}

export default Faqs