import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container text-gray-400'>
      <div className='font-thin text-md py-8'>Contact Us /</div>
      <div className='contact-box-form mx-auto px-2 w-2/3'>
        <div className='grid gap-4 pb-4'>
          <label htmlFor="email" className='input-label'>Email : </label>
          <input type="text" placeholder='enter your email' className='input'/>
        </div>
        <div className='grid gap-4 '>
          <label htmlFor="description" className='input-label'>Message Us :</label>
          <textarea name="" id="" placeholder='feel free to contact us' rows={10} cols={10} className='input'></textarea>
        </div>
        <div className=' my-8 pb-8 text-center'>
          <button className='px-4 py-2 text-black bg-white font-thin hover:bg-green-700 '>Send Message</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact