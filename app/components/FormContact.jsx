
//  'use client'
//  import { useState } from "react"
//  import Image from "next/image"
//  import office from "@/public/images/about-us/office.webp"
//  import { usePathname } from 'next/navigation'
//  import { Phone } from "lucide-react"

//  const FormContact = () => {

//      const pathname = usePathname()
//      const isSpanishPage = pathname.includes('/endodoncista-de-habla-hispana')

//      const [status, setStatus] = useState("")
//      const [formValues, setFormValues] = useState({
//          firstname: '',
//          lastname: '',
//          email: '',
//          phone: '',
//          timeOfDay: [],
//          preferredDays: [],
//          message: ''
//      })

//      const handleChange = (e) => {
//          const { name, value, type, checked } = e.target

//          if (type === 'checkbox') {
//              if (name === 'entry.1864441499') {
//                  setFormValues((prev) => {
//                      const updated = checked
//                          ? [...prev.timeOfDay, value]
//                          : prev.timeOfDay.filter((v) => v !== value)
//                      return { ...prev, timeOfDay: updated }
//                  })
//              } else if (name === 'entry.574738630') {
//                  setFormValues((prev) => {
//                      const updated = checked
//                          ? [...prev.preferredDays, value]
//                          : prev.preferredDays.filter((v) => v !== value)
//                      return { ...prev, preferredDays: updated }
//                  })
//              }
//          } else {
//              setFormValues((prev) => ({
//                  ...prev,
//                  [name]: value
//              }))
//          }
//      }

//      const handleSubmit = async (e) => {
//          e.preventDefault()
//          const formData = new FormData()

//          formData.append('entry.1110121502', formValues.firstname)  //First name
//          formData.append('entry.771061880', formValues.lastname)    //Last name
//          formData.append('entry.378735544', formValues.email)       // Email
//          formData.append('entry.1270848604', formValues.phone)      //Phone

//          formValues.timeOfDay.forEach((value) => {
//              formData.append('entry.1864441499', value)
//          })

//          formValues.preferredDays.forEach((value) => {
//              formData.append('entry.574738630', value)
//          })

//          formData.append('entry.682431526', formValues.message)     //Message

//          try {
//              await fetch(
//                  'https://docs.google.com/forms/d/1MYIhtaxribpRIKCx_PB0psXDw2xaXksabAnn5Zo4nrk/formResponse'
// ,
//                  {
//                      method: 'POST',
//                      mode: 'no-cors',
//                      body: formData,
//                  }
//              )
//              alert('Formulario enviado correctamente')
//              setFormValues({
//                  firstname: '',
//                  lastname: '',
//                  email: '',
//                  phone: '',
//                  timeOfDay: [],
//                  preferredDays: [],
//                  message: ''
//              })
//          } catch (error) {
//              console.error('Error al enviar formulario:', error)
//          }
//      }



//      return (
//          <section id='contact' className='bg-[#0a2a54]'>
//              <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center'>
//                  <header className='pb-8 space-y-8'>
//                      <h2 className='text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
//                          {isSpanishPage ? 'Contáctenos' : 'Contact Us'}
//                      </h2>
//                      <p className='text-xl font-semibold font-inter text-center text-white md:text-2xl'>
//                          {isSpanishPage
//                              ? 'Póngase en contacto con nosotros. Estamos aquí para ayudarle.'
//                              : "Get in touch with us. We're here to assist you."}
//                      </p>
//                  </header>

//                  <div className="lg:w-7xl flex flex-col-reverse lg:space-y-0 lg:flex-row lg:items-center lg:space-x-16">
//                      <div className="lg:w-1/2 mt-8 lg:mt-0">
//                          <div id="appointment" className="rounded-lg bg-white p-6 shadow-sm">
//                              <h3 className="mb-4 text-xl font-zen font-bold text-[#0a2a54] uppercase text-center md:text-left">{isSpanishPage ? 'Solicitar una cita' : 'Request an Appointment'}</h3>
//                              <p className="mb-4 text-[#5a6065] font-inter text-lg text-center md:text-left">
//                                  {isSpanishPage ? 'Rellene el siguiente formulario y nos pondremos en contacto con usted para concertar su cita.' : "Fill out the form below and we'll contact you to schedule your appointment."}
//                              </p>
//                              <form onSubmit={handleSubmit} className="space-y-4">
//                                  <div className="grid gap-4 md:grid-cols-2">
//                                      <div className="space-y-2">

//                                          <input
//                                              name="firstname"
//                                              value={formValues.firstname}
//                                              onChange={handleChange}
//                                              className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
//                                              placeholder={isSpanishPage ? "Ingrese su nombre" : "Enter your first name"}
//                                          />
//                                      </div>
//                                      <div className="space-y-2">

//                                          <input
//                                              name="lastname"
//                                              value={formValues.lastname}
//                                              onChange={handleChange}
//                                              className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
//                                              placeholder={isSpanishPage ? "Ingrese su apellido" : "Enter your last name"}
//                                          />
//                                      </div>
//                                  </div>
//                                  <div className="space-y-2">

//                                      <input
//                                          type="email"
//                                          name="email"
//                                          value={formValues.email}
//                                          onChange={handleChange}
//                                          className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
//                                          placeholder={isSpanishPage ? "Ingrese su correo electrónico" : "Enter your email"}
//                                      />
//                                  </div>
//                                  <div className="space-y-2">

//                                      <input
//                                          type="tel"
//                                          name="phone"
//                                          value={formValues.phone}
//                                          onChange={handleChange}
//                                          className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
//                                          placeholder={isSpanishPage ? "Ingrese su número de teléfono" : "Enter your phone number"}
//                                      />
//                                  </div>

//                                  {/* Best Time of Day */}
//                                  <div className="space-y-2">
//                                      <label className="text-sm font-inter text-[#0a2a54]">{isSpanishPage ? 'Mejor horario del día' : 'Best time of day'}</label>
//                                      <div className="flex gap-4">
//                                          <div className="flex items-center">
//                                              <input
//                                                  type="checkbox"
//                                                  name="entry.1864441499"
//                                                  value="Morning"
//                                                  id="Morning"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
//                                              />
//                                              <label htmlFor="Morning" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'Mañana' : 'Morning'}
//                                              </label>
//                                          </div>
//                                          <div className="flex items-center">
//                                              <input
//                                                  type="checkbox"
//                                                  name="entry.1864441499"
//                                                  value="Afternoon"
//                                                  id="Afternoon"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 font-inter rounded border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
//                                              />
//                                              <label htmlFor="Afternoon" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'Tarde' : 'Afternoon'}
//                                              </label>
//                                          </div>
//                                      </div>
//                                  </div>

//                                  {/* Preferred Days */}

//                                  <div className="space-y-2">
//                                      <label className="text-sm text-[#0a2a54] font-inter">{isSpanishPage ? 'Día(s) de la semana preferido(s)' : 'Preferred day(s) of week'}</label>
//                                      <div className="flex flex-wrap gap-4">
//                                          <div className="flex items-center">
//                                              <input
//                                                  type="checkbox"
//                                                  name="entry.574738630"
//                                                  value='Monday'
//                                                  id="Monday"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
//                                              />
//                                              <label htmlFor="Monday" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'L' : 'M'}
//                                              </label>
//                                          </div>
//                                          <div className="flex items-center">
//                                              <input
//                                                  type="checkbox"
//                                                  name="entry.574738630"
//                                                  value='Tuesday'
//                                                  id="Tuesday"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
//                                              />
//                                              <label htmlFor="Tuesday" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'M' : 'T'}
//                                              </label>
//                                          </div>
//                                          <div className="flex items-center">
//                                              <input
//                                                  type="checkbox"
//                                                  name="entry.574738630"
//                                                  value='Wednesday'
//                                                  id="Wednesday"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
//                                              />
//                                              <label htmlFor="Wednesday" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'M' : 'W'}
//                                              </label>
//                                          </div>
//                                          <div className="flex items-center">
//                                              <input
//                                                  value="Thursday"
//                                                  type="checkbox"
//                                                  name="entry.574738630"
//                                                  id="Thursday"
//                                                  onChange={handleChange}
//                                                  className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
//                                              />
//                                              <label htmlFor="Thursday" className="ml-2 font-inter text-sm text-[#5a6065]">
//                                                  {isSpanishPage ? 'J' : 'Th'}
//                                              </label>
//                                          </div>

//                                      </div>
//                                  </div>

//                                  {/* Message */}
//                                  <div className="space-y-2">

//                                      <textarea
//                                          name="message"
//                                          value={formValues.message}
//                                          onChange={handleChange}
//                                          className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
//                                          placeholder={isSpanishPage ? "Cuéntenos sus inquietudes dentales" : "Tell us about your dental concerns"}
//                                          rows={3}
//                                      ></textarea>
//                                  </div>

//                                  <p className="text-sm text-[#5a6065] italic font-inter text-center md:text-left">
//                                      {isSpanishPage ? 'Le responderemos en el plazo de un día laborable en relación con su cita.' : 'We will reply within one business day regarding your appointment.'}
//                                  </p>
//                                  <div className="text-center lg:text-left">
//                                      <button type="submit" className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
//                                          {isSpanishPage ? 'Enviar solicitud' : 'Submit Request'}
//                                      </button></div>
//                              </form>
//                              <div id="response-message"></div>
//                          </div>
//                      </div>
                     

//                      <div className="lg:w-1/2">
//                          <Image src={office} alt="office" className="rounded-t-md" />

//                          <div className="bg-white p-6 rounded-b-md font-inter text-[#0a2a54] text-lg text-center lg:text-left">
//                              <p>
//                                  {isSpanishPage
//                                      ? 'Leslie Horn, nuestra directora de oficina, se pondrá en contacto con usted para responder a sus preguntas y concertar una cita.'
//                                      : 'Leslie Horn, our office manager will contact you to answer your questions and schedule an appointment.'}
//                              </p>

//                              {/* Botón de llamada visible solo en móvil */}
//                              <div className="mt-4 block lg:hidden">
//                                  <a
//                                      href="tel:+8173869007"
//                                      className="inline-block  rounded-md bg-[#267E60] px-6 py-3 text-white text-center font-semibold text-lg hover:bg-[#267E60]/75 transition duration-300"
//                                  ><Phone className="inline mr-1" /> 817-386-9007</a>


//                              </div>
//                          </div>
//                      </div>
//                  </div>
//              </div>
//          </section>
//      )
//  }

//  export default FormContact

"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import office from "@/public/images/about-us/office.webp"
import { usePathname, useRouter } from "next/navigation"
import { Phone, CheckCircle } from "lucide-react"

const FormContact = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isSpanishPage = pathname.includes("/endodoncista-de-habla-hispana")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    timeOfDay: [],
    preferredDays: [],
    message: "",
  })

  // Efecto para redireccionar después de mostrar el mensaje de éxito
  useEffect(() => {
    let redirectTimer
    if (isSubmitted) {
      redirectTimer = setTimeout(() => {
        router.push("/")
      }, 3000) // Redirecciona después de 3 segundos
    }
    return () => clearTimeout(redirectTimer)
  }, [isSubmitted, router])

  // Efecto para restablecer el estado cuando el componente se monte
  // Esto asegura que el formulario siempre comience en su estado inicial
  useEffect(() => {
    // Restablecer el estado isSubmitted a false cuando el componente se monte
    setIsSubmitted(false)
  }, [pathname]) // Se ejecuta cuando cambia la ruta

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name === "entry.1864441499") {
        setFormValues((prev) => {
          const updated = checked ? [...prev.timeOfDay, value] : prev.timeOfDay.filter((v) => v !== value)
          return { ...prev, timeOfDay: updated }
        })
      } else if (name === "entry.574738630") {
        setFormValues((prev) => {
          const updated = checked ? [...prev.preferredDays, value] : prev.preferredDays.filter((v) => v !== value)
          return { ...prev, preferredDays: updated }
        })
      }
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append("entry.1110121502", formValues.firstname) //First name
    formData.append("entry.771061880", formValues.lastname) //Last name
    formData.append("entry.378735544", formValues.email) // Email
    formData.append("entry.1270848604", formValues.phone) //Phone

    formValues.timeOfDay.forEach((value) => {
      formData.append("entry.1864441499", value)
    })

    formValues.preferredDays.forEach((value) => {
      formData.append("entry.574738630", value)
    })

    formData.append("entry.682431526", formValues.message) //Message

    try {
      await fetch("https://docs.google.com/forms/d/1MYIhtaxribpRIKCx_PB0psXDw2xaXksabAnn5Zo4nrk/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
      // En lugar de mostrar una alerta, cambiamos el estado para mostrar el mensaje de éxito
      setIsSubmitted(true)

      // Reiniciamos los valores del formulario
      setFormValues({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        timeOfDay: [],
        preferredDays: [],
        message: "",
      })
    } catch (error) {
      console.error("Error al enviar formulario:", error)
    }
  }

  return (
    <section id="contact" className="bg-[#0a2a54]">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center">
        <header className="pb-8 space-y-8">
          <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">
            {isSpanishPage ? "Contáctenos" : "Contact Us"}
          </h2>
          <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">
            {isSpanishPage
              ? "Póngase en contacto con nosotros. Estamos aquí para ayudarle."
              : "Get in touch with us. We're here to assist you."}
          </p>
        </header>

        <div className="lg:w-7xl flex flex-col-reverse lg:space-y-0 lg:flex-row lg:items-center lg:space-x-16">
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div id="appointment" className="rounded-lg bg-white p-6 shadow-sm">
              {!isSubmitted ? (
                <>
                  <h3 className="mb-4 text-xl font-zen font-bold text-[#0a2a54] uppercase text-center md:text-left">
                    {isSpanishPage ? "Solicitar una cita" : "Request an Appointment"}
                  </h3>
                  <p className="mb-4 text-[#5a6065] font-inter text-lg text-center md:text-left">
                    {isSpanishPage
                      ? "Rellene el siguiente formulario y nos pondremos en contacto con usted para concertar su cita."
                      : "Fill out the form below and we'll contact you to schedule your appointment."}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <input
                          name="firstname"
                          value={formValues.firstname}
                          onChange={handleChange}
                          className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                          placeholder={isSpanishPage ? "Ingrese su nombre" : "Enter your first name"}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <input
                          name="lastname"
                          value={formValues.lastname}
                          onChange={handleChange}
                          className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                          placeholder={isSpanishPage ? "Ingrese su apellido" : "Enter your last name"}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                        placeholder={isSpanishPage ? "Ingrese su correo electrónico" : "Enter your email"}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="tel"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                        placeholder={isSpanishPage ? "Ingrese su número de teléfono" : "Enter your phone number"}
                        required
                      />
                    </div>

                    {/* Best Time of Day */}
                    <div className="space-y-2">
                      <label className="text-sm font-inter text-[#0a2a54]">
                        {isSpanishPage ? "Mejor horario del día" : "Best time of day"}
                      </label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="entry.1864441499"
                            value="Morning"
                            id="Morning"
                            onChange={handleChange}
                            className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Morning" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "Mañana" : "Morning"}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="entry.1864441499"
                            value="Afternoon"
                            id="Afternoon"
                            onChange={handleChange}
                            className="h-4 w-4 font-inter rounded border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Afternoon" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "Tarde" : "Afternoon"}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Days */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#0a2a54] font-inter">
                        {isSpanishPage ? "Día(s) de la semana preferido(s)" : "Preferred day(s) of week"}
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="entry.574738630"
                            value="Monday"
                            id="Monday"
                            onChange={handleChange}
                            className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Monday" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "L" : "M"}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="entry.574738630"
                            value="Tuesday"
                            id="Tuesday"
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Tuesday" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "M" : "T"}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="entry.574738630"
                            value="Wednesday"
                            id="Wednesday"
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Wednesday" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "M" : "W"}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            value="Thursday"
                            type="checkbox"
                            name="entry.574738630"
                            id="Thursday"
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                          />
                          <label htmlFor="Thursday" className="ml-2 font-inter text-sm text-[#5a6065]">
                            {isSpanishPage ? "J" : "Th"}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <textarea
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                        placeholder={
                          isSpanishPage ? "Cuéntenos sus inquietudes dentales" : "Tell us about your dental concerns"
                        }
                        rows={3}
                        required
                      ></textarea>
                    </div>

                    <p className="text-sm text-[#5a6065] italic font-inter text-center md:text-left">
                      {isSpanishPage
                        ? "Le responderemos en el plazo de un día laborable en relación con su cita."
                        : "We will reply within one business day regarding your appointment."}
                    </p>
                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300"
                      >
                        {isSpanishPage ? "Enviar solicitud" : "Submit Request"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                // Mensaje de éxito que se muestra después de enviar el formulario
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 text-[#3c8dbc]">
                    <CheckCircle size={80} />
                  </div>
                  <h3 className="mb-4 text-2xl font-zen font-bold text-[#0a2a54] uppercase">
                    {isSpanishPage ? "¡Formulario Enviado!" : "Form Submitted!"}
                  </h3>
                  <p className="mb-6 text-[#5a6065] font-inter text-lg">
                    {isSpanishPage
                      ? "Gracias por contactarnos. Nos pondremos en contacto con usted pronto."
                      : "Thank you for contacting us. We will get back to you soon."}
                  </p>
                  <p className="text-sm text-[#5a6065] italic font-inter">
                    {isSpanishPage
                      ? "Redireccionando a la página principal en unos segundos..."
                      : "Redirecting to home page in a few seconds..."}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-1/2">
            <Image src={office || "/placeholder.svg"} alt="office" className="rounded-t-md" />

            <div className="bg-white p-6 rounded-b-md font-inter text-[#0a2a54] text-lg text-center lg:text-left">
              <p>
                {isSpanishPage
                  ? "Leslie Horn, nuestra directora de oficina, se pondrá en contacto con usted para responder a sus preguntas y concertar una cita."
                  : "Leslie Horn, our office manager will contact you to answer your questions and schedule an appointment."}
              </p>

              {/* Botón de llamada visible solo en móvil */}
              <div className="mt-4 block lg:hidden">
                <a
                  href="tel:+8173869007"
                  className="inline-block rounded-md bg-[#267E60] px-6 py-3 text-white text-center font-semibold text-lg hover:bg-[#267E60]/75 transition duration-300"
                >
                  <Phone className="inline mr-1" /> 817-386-9007
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormContact
