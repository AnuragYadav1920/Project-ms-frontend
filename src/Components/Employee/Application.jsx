import React from 'react'

const Application = () => {
  return (
    <>
      <div className='min-h-96 backdrop-brightness-90  py-8 mt-4 text-md font-thin text-slate-400 '>
        <div className='application-leave-div grid w-2/3 px-6 py-2 space-y-2 mx-auto'>
          <label htmlFor="min-w-24" className=''>Reason :</label>
          <input type="text" placeholder='reason for applying leave' className='px-4 py-2 w-full outline-none' />
        </div>
        <div className='application-leave-div grid w-2/3 mx-auto px-6 py-2 space-y-2'>
          <label htmlFor="" className='min-w-24'>From :</label>
          <input type="date" className='px-4 py-2 w-full outline-none' />
        </div>
        <div className='application-leave-div grid w-2/3 mx-auto px-6 py-2 space-y-2'>
          <label htmlFor="">To :</label>
          <input type="date" className='px-4 py-2 w-full outline-none'/>
        </div>
        <div className='application-leave-div grid w-2/3 mx-auto px-6 py-2 space-y-2'>
          <label htmlFor="">Description :</label>
          <textarea name="" id="" className='px-4 py-2 w-full outline-none' rows={8} placeholder='tell us about your applying leave'></textarea>
        </div>
        <div className='text-center m-4'>
          <button className='px-6 py-2 border-2 border-slate-400 hover:bg-slate-950'>Apply Leave</button>
        </div>
        
      </div>
    </>
  )
}

export default Application