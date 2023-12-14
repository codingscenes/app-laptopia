import { getProductBySlug } from '@/libs/product';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// const product = {
//   id: 1,
//   name: 'Galaxy Book3 Pro 360',
//   description: `Galaxy Book Pro 360 is a PC that lives up to its name. With the versatility of a 360° hinge, the beauty of a Super AMOLED touchscreen, a powerful Intel® processor, and Windows 10, it’s a convertible 2-in-1 that transforms from laptop to tablet with ease.
//    <ul>
//     <li>Galaxy Book Pro 360 is a PC that lives up to its name. With the versatility of a 360° hinge, the beauty of a Super AMOLED touchscreen, a powerful Intel® processor, and Windows 10, it’s a convertible 2-in-1 that transforms from laptop to tablet with ease.</li>
//   </ul>`,
//   price: 300,
//   image: '/images/sony.jpg',
//   userId: 1,
//   userName: 'Rohit Sharma',
//   userEmail: 'rohit@xyz.com',
//   createdAt: '1702389895598',
// };

export default async function ProductDetailPage({ params }) {
  const product = await getProductBySlug(params.productSlug);
  if (!product) {
    notFound();
  }
  const createdAtDate = new Date(+product.createdAt).toLocaleString();
  const description = product?.description?.replace(/\n/g, '<br/>');
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4 offset-md-2 offset-lg-2'>
          <Image
            className='image'
            src={product.image}
            width={400}
            height={500}
            layout='responsive'
            alt={`${product.image} image`}
          />
        </div>
        <div className='col-12, col-md-6 col-lg-5 ms-2'>
          <div className='row mt-2'>
            <div className='col-12'>
              <h1 className='fancy'>{product?.name}</h1>
            </div>
          </div>

          <div className='row mt-2'>
            <div className='col-12'>
              <h2>${product?.price}</h2>
            </div>
          </div>

          <div className='row mt-2'>
            <div className='col-12'>Posted on {createdAtDate}</div>
          </div>

          <div className='row mt-2'>
            <div className='col-12'>
              Posted by{' '}
              <a href={`mailto: ${product?.userEmail}`} style={{ color: '#fff', fontStyle: 'italic' }}>
                {product?.userName}
              </a>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-12'>
              <h3>Product Highlights:</h3>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>

          <div className='row mt-4'>
            <div>
              <h3>Contact with Seller:</h3>
            </div>
            <h5>{product.userEmail}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
