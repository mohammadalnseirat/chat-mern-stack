import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`cursor-pointer gap-2 label`}>
                <span className='label-text text-gray-300'>Male</span>
                <input type="checkbox"  className="checkbox checkbox-info" />

            </label>
        </div>
        <div className='form-control'>
            <label className={`cursor-pointer gap-2 label`}>
                <span className='label-text text-gray-300'>Female</span>
                <input type="checkbox"  className="checkbox checkbox-secondary" />

            </label>
        </div>

    </div>
  )
}

export default GenderCheckBox