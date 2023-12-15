'use client';
import ImagePicker from '@/components/image-picker';
import SellFormSubmit from '@/components/sell-form-submit';

import { createProduct } from '@/libs/actions';
import { useFormState } from 'react-dom';
const formInitialState = {
  message: null,
};
export default function SellPage() {
  const [state, formAction] = useFormState(createProduct, formInitialState);

  return (
    <div className='container mt-4 mb-5'>
      <div className='row mx-auto justify-content-center'>
        <div className='col-md-8'>
          <h1 className='fancy'>Sell your product</h1>
          <form className='form' action={formAction}>
            <div className='form-group mt-4'>
              <label htmlFor='name' className='label'>
                PRODUCT NAME
              </label>
              <input
                type='text'
                className='form-control bg-dark text-white'
                id='name'
                name='name'
                placeholder='Enter product name'
                required
              />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='description' className='label'>
                DESCRIPTION
              </label>
              <textarea
                name='description'
                id='description'
                rows='3'
                className='form-control bg-dark text-white'
                required
                placeholder='Enter product description'
              ></textarea>
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='price' className='label'>
                PRICE
              </label>
              <input
                type='number'
                className='form-control bg-dark text-white price'
                name='price'
                id='price'
                placeholder='Enter Price'
              />
            </div>
            <ImagePicker label={'IMAGE'} name={'image'} />
            {
            state.message &&
            <p style={{ color: 'red' }}>{state.message}</p>
            }
            <SellFormSubmit />
          </form>
        </div>
      </div>
    </div>
  );
}
