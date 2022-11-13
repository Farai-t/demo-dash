import { useState, useSyncExternalStore } from "react"

const Profile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherName, setOtherName] = useState('')
  const [industry, setIndustry] = useState('')
  const [education, setEducation] = useState('')
  const [location, setLocation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <form className='w-11/12 mx-auto min-h-screen justify-between'>
        <div className='w-full lg:w-5/6'>
          <h2 className='text-3xl py-4 my-2'>Personal information</h2>
          <div className="p-1 my-5 bg-slate-50 rounded shadow-md">
            <div className='py-1'>
              <div className="py-1">
                <label className='text-md'>First Name</label>
              </div>
              <input type="text" value={firstName} onChange={() => setFirstName()} className='w-full rounded border border-gray-600 h-8'/>
            </div>
            <div className='py-2'>
              <div className="py-1">
                <label className='text-md'>Last Name</label>
              </div>
              <input type="text" value={lastName} onChange={setLastName} className='w-full rounded border border-gray-600 h-8'/>
            </div>
            <div className='py-2'>
              <div className="py-1">
                <label className='text-md'>Other name(s)</label>
              </div>
              <input type="text" value={otherName} onChange={setOtherName} className='w-full rounded border border-gray-600 h-8'/>
            </div>
          </div>
          <div className="p-1 my-5 bg-slate-50 rounded shadow-md">
            <div className='py-2'>
              <div className="py-1">
                <label className='text-md'>Industry</label>
              </div>
              <input type="text" value={industry} onChange={setIndustry} className='w-full rounded border border-gray-600 h-8'/>
            </div>
            <div className='py-2'>
              <div className="py-1">
                <label className='text-md'>Education</label>
              </div>
              <input type="text" value={education} onChange={setEducation} className='w-full rounded border border-gray-600 h-8'/>
            </div>
          </div>
          <div className='py-2'>
            <div className="py-1">
              <label className='text-md'>Location</label>
            </div>
            <input type="text" value={location} onChange={setLocation} className='w-full rounded border border-gray-600 h-8'/>
          </div>
          <div className='py-2'>
            <div className="py-1">
              <label className='text-md'>Contact Info</label>
            </div>
            <input type="text" value={phoneNumber} onChange={setPhoneNumber} placeholder="07-- --- ---" className='w-full rounded border border-gray-600 h-8'/>
          </div>
          <button type='button' className='w-full  bg-red-50 rounded py-2 mt-12 border border-gray-600'>Save</button>
          <button type='button' className='w-full  underline py-2 my-3'>Discard</button>
        </div>
    </form>
  )
}

export default Profile