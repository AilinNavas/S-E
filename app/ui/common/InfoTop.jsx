import Image from 'next/image'
import hour from '@/public/icons/hour.svg'
import local from '@/public/icons/local2.svg'


const InfoTop = () => {
    return (
        <div className='h-10 w-full bg-primary hidden lg:block font-assistant top-0 fixed z-50'>
            <div className="px-4 max-w-7xl mx-auto border-2 border-y-amber-400">
                <div className='text-white flex items-center lg:justify-between border-2 border-red-700'>
                    <p className='hidden lg:flex border-2 border-green-400'>
                        <span className='flex items-center'><Image src={hour} alt='icon-hour' className='h-6' />Monday to Thursday from 8:00am to 5:00pm</span>
                    </p>
                    <p className='items-center hidden lg:flex'>
                        <Image src={local} alt='icon-local' className='h-5' /><span className='border-2'>1307 8th Avenue, Suite 303 Fort Worth, TX</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoTop