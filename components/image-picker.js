'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    // convert file to data url;
    const reader = new FileReader();
    // image content -> data URL -> base64-encoded string(image)
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // image dataUrl
      setPickedImage(reader?.result);
    };
  }

  function handleImageClick() {
    imageInputRef.current.click();
  }
  return (
    <div className='form-group mt-4'>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      <div className='controls'>
        <button type='button' className='button' onClick={handleImageClick}>
          Pick an Image
        </button>
        <div className='preview'>
          {!pickedImage && <p style={{ color: 'grey' }}>No image picked</p>}
          {pickedImage && <Image src={pickedImage} alt='Preview' className='image' fill />}
        </div>
        <input
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg'
          className='input'
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
}
