import React from 'react'

export const ContactDetailCard = ({icon, header, text}) => {
  return (
    <div className='flex flex-row gap-4 items-start'>

        <div className='text-orange text-2xl md:text-3xl'>
            {icon}
        </div>

        <div className='flex flex-col sm:gap-1 md:gap-2'>
            <p className='opacity-70'>
                {header}
            </p>
            {
                header === "CURRENT ADDRESS" ? (
                    <p className='cursor-pointer md:text-base text-sm'>
                        {text}
                    </p>
                ) : (
                    <a className='cursor-pointer z-10 hover:text-orange md:text-base text-sm' 
                    href={`${header === "EMAIL ADDRESS" ? `mailto:${text}` : `tel:${text}`}`}>
                        {text}
                    </a>
                )
            }
        </div>

    </div>
  )
}
