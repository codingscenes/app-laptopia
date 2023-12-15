'use server';
import { redirect } from 'next/navigation';

import { saveProduct } from './product';
import { revalidatePath } from 'next/cache';

function isInvalidInput(inputValue) {
  return !inputValue || inputValue.trim() === '';
}
// This is server action
export async function createProduct(prev, formData) {
  const product = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
  };

  // server side input validations
  if (
    isInvalidInput(product.name) ||
    isInvalidInput(product.description) ||
    isInvalidInput(product.price) ||
    !product.image ||
    product.image.size === 0
  ) {
    // throw new Error('Invalid input received!');
    return {
      message: 'Invalid input received',
    };
  }
  await saveProduct(product);
  // revalidate the cache
  revalidatePath('/products', 'layout');
  redirect('/products');
}
