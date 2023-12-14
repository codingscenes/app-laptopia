'use client';

export default function Error({ error }) {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='fancy'>An Error Occured!</h1>
          <p>Failed to fetch products. Please try again!</p>
        </div>
      </div>
    </div>
  );
}
