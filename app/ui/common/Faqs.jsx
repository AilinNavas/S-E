import Accordion from "./Accordion"

const Faqs = ({ title, description, items, id }) => {
  return (
    <section id={id} className=" py-16">
      <div className='max-w-7xl px-4 mx-auto lg:px-0'>
        <h2 className="text-[#0a2a54] mb-4 text-center font-zen uppercase font-semibold text-3xl md:text-5xl pb-8">{title}</h2>
        <p className="font-inter text-[#5a6065] text-center md:text-xl pb-8">{description}</p>
        <Accordion items={items} />
       

      </div>
    </section >
  )
}

export default Faqs