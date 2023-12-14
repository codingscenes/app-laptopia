import { stripHtmlTags } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div className='col-md-4 mb-4'>
      <Link className='product-link' href={`/products/${product?.slug}`}>
        <div className='card bg-dark'>
          <Image
            src={product?.image}
            width={325}
            height={430}
            className='card-img-top'
            alt={`${product?.name} images`}
          />
          <div className='card-body'>
            <h5 className='cart-title'>{product?.name}</h5>
            <p className='cart-text product-desc'>{stripHtmlTags(product?.description)}</p>
            <p className='card-text'>${product?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
