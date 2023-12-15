'use client';

export default function Error({ error }) {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='fancy'>Product creation failed!</h1>
          <p>Invalid input recived!</p>
        </div>
      </div>
    </div>
  );
}
