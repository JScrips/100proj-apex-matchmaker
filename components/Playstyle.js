import React from 'react'

const Playstyle = () => {
  return (
    <fieldset className="grid grid-cols-4  gap-x-36 gap-y-2  border p-12 text-[12px]">
      <legend className=" border bg-red-800 p-2 text-[14px]">
        Choose Your Playstyle
      </legend>
      <div className="flex items-center gap-4">
        <input type="checkbox" name="aggressive" />
        <label
          htmlFor="aggressive"
          className="rounded-xl bg-red-600 p-1  text-[10px] font-bold"
        >
          {' '}
          Aggressive{' '}
        </label>
      </div>

      <div className="flex items-center gap-4">
        <input type="checkbox" name="tactical" />
        <label
          htmlFor="tactical"
          className="rounded-xl bg-green-500 p-1  font-serif text-[10px]"
        >
          {' '}
          Tactical{' '}
        </label>
      </div>

      <div className="flex items-center gap-4">
        <input type="checkbox" name="patient" />
        <label
          htmlFor="patient"
          className="rounded-xl bg-blue-500 p-1  font-mono text-[10px]"
        >
          {' '}
          Patient{' '}
        </label>
      </div>

      <div className="flex items-center gap-4">
        <input type="checkbox" name="3rdparty" />
        <label
          htmlFor="3rdparty"
          className="whitespace-nowrap rounded-xl bg-black  p-1 font-mono text-[10px]"
        >
          {' '}
          3rd Party{' '}
        </label>
      </div>
    </fieldset>
  )
}

export default Playstyle
