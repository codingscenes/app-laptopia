'use server';

export async function createProduct(formData) {
  const product = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
  };
}
