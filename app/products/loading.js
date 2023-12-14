import loadingIcon from '@/assets/images/loading.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='container mt-4'>
      <div className='row mx-auto justify-content-center'>
        <div className='col-md-2'>
          <Image src={loadingIcon.src} width={100} height={100} alt='Spinner' />
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card bg-dark'>
            <div className='card-body'>
              <div className='card-title'>Loading...</div>
              <p className='card-text'>Please wait while we load the products...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
