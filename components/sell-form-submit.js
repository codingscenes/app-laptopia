'use client';

import { useFormStatus } from 'react-dom';

export default function SellFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className='btn btn-dark mt-4' type='submit'>
      {pending ? 'PLEASE WAIT!' : 'PUBLISH'}
    </button>
  );
}
