import ProductItem from '@/components/products/product-item';
import { getAllProducts } from '@/libs/product';
import { Suspense } from 'react';

// const PRODUCTS = [
//   {
//     id: 1,
//     name: 'Apple MacBook Pro',
//     description: `Apple's MacBook Air is the entry-level model into Apple's world of notebooks. We've tested the latest 2020 iteration and compared it to the MacBook Pro 13, both of which are equipped with Apple's new M1 SoC.
//     <ul>
//       <li>Apple M1 chip with 8‑core CPU</li>
//       <li>8 GB unified memory</li>
//       <li>256 GB SSD storage</li>
//     </ul>
//     `,
//     price: 1200,
//     image: '/images/mac.jpg',
//     slug: 'apple-macBook-pro',
//     sellerId: 1,
//   },
//   {
//     id: 2,
//     name: 'Lenovo Yoga 9i',
//     description: `Lenovo's Yoga 9i takes the company's top-of-the-line 14-inch ultraportable two-in-one and adds active pen support, a 4K display, and a unique rotating soundbar speaker hinge resulting in one the best multimode laptops available.
//      <ul>
//       <li>11th Gen Intel Core i7-1185G7 Processor</li>
//       <li>Intel Iris Xe Graphics</li>
//       <li>16 GB DDR4 3200MHz (Soldered) Memory; 512 GB PCIe SSD Storage</li>
//     </ul>
//     `,
//     price: 500,
//     image: '/images/lenovo.jpg',
//     slug: 'lenovo-yoga-9i',
//     sellerId: 1,
//   },
//   {
//     id: 3,
//     name: 'Dell XPS 13',
//     description: `The Dell XPS 13 has been a regular of our best laptops list for years, and the 2021 model is no exception. It retains everything we've come to love from Dell's flagship 13-incher, from the gorgeous and light design, to the powerful modern components that power it.
//      <ul>
//       <li>11th Generation Intel Core i7-1185G7 Processor</li>
//       <li>Intel Iris Xe Graphics with shared graphics memory</li>
//       <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
//     </ul>
//     `,
//     price: 900,
//     image: '/images/dell.jpg',
//     slug: 'dell-xps-13',
//     sellerId: 1,
//   },
//   {
//     id: 4,
//     name: 'HP Spectre x360',
//     description: `The HP Spectre x360 2-in-1 laptop has had a big refresh for 2021, and the boost in specs, with 11th-generation Intel Core processors and Intel Iris Xe graphics, along with the impeccable 2-in-1 design and pristine gem-cut chassis, means that the new version has a well-deserved spot towards the top of our best laptops list
//      <ul>
//       <li>11th Generation Intel Core i7-1185G7 Processor</li>
//       <li>Intel Iris Xe Graphics with shared graphics memory</li>
//       <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
//     </ul>
//     `,
//     price: 435,
//     image: '/images/hp.jpg',
//     slug: 'hp-spectre-x360',
//     sellerId: 1,
//   },
//   {
//     id: 4,
//     name: 'Sony Vaio i7',
//     description: `Sony Vaio is an impressive laptop on every front. It has excellent performance from its AMD Ryzen 4000 processors and a Nvidia RTX 2060 Max-Q GPU, blisteringly fast SSDs and a great display, all packed into a stylish chassis.
//      <ul>
//       <li>11th Generation Intel Core i7-1185G7 Processor</li>
//       <li>Intel Iris Xe Graphics with shared graphics memory</li>
//       <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
//     </ul>
//     `,
//     price: 899,
//     image: '/images/sony.jpg',
//     slug: 'sony-vaio-i7',
//     sellerId: 1,
//   },
// ];

export const metadata = {
  title: 'All Products ~ Wide range of laptops for sale',
  description: 'All the products are working out of the box.',
};

async function Products() {
  const products = await getAllProducts();
  return products.map((product) => <ProductItem product={product} key={product.id} />);
}
export default async function ProductsPage() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <h3>All Products</h3>
        <Suspense fallback={'Loading the products!'}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
