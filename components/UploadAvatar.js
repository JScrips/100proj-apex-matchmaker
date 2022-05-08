import React from 'react'

const UploadAvatar = () => {
  return (
    <div>
      <Image
        src={userData.photoURL}
        height={100}
        width={100}
        className="rounded-full"
        objectFit="cover"
      ></Image>
      <div className="flex items-center gap-20">
        <label htmlFor="avatar"> Upload a new avatar </label>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="text-[12px]"
        ></input>
      </div>
    </div>
  )
}

export default UploadAvatar
