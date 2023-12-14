const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const userData = [
    {
      username: 'Rohit Sharma',
      password: '123456',
      email: 'rohit@xyz.com',
    },
    {
      username: 'Mohit Sharma',
      password: '123456',
      email: 'mohit@xyz.com',
    },
  ];

  for (let user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  const products = [
    {
      name: 'Apple MacBook Pro',
      description: `Apple's MacBook Air is the entry-level model into Apple's world of notebooks. We've tested the latest 2020 iteration and compared it to the MacBook Pro 13, both of which are equipped with Apple's new M1 SoC.
    <ul>
      <li>Apple M1 chip with 8‑core CPU</li>
      <li>8 GB unified memory</li>
      <li>256 GB SSD storage</li>
    </ul>
    `,
      price: 1200,
      image: '/images/mac.jpg',
      slug: 'apple-macBook-pro',
      userId: 1,
    },
    {
      name: 'Lenovo Yoga 9i',
      description: `Lenovo's Yoga 9i takes the company's top-of-the-line 14-inch ultraportable two-in-one and adds active pen support, a 4K display, and a unique rotating soundbar speaker hinge resulting in one the best multimode laptops available.
     <ul>
      <li>11th Gen Intel Core i7-1185G7 Processor</li>
      <li>Intel Iris Xe Graphics</li>
      <li>16 GB DDR4 3200MHz (Soldered) Memory; 512 GB PCIe SSD Storage</li>
    </ul>
    `,
      price: 500,
      image: '/images/lenovo.jpg',
      slug: 'lenovo-yoga-9i',
      userId: 1,
    },
    {
      name: 'Dell XPS 13',
      description: `The Dell XPS 13 has been a regular of our best laptops list for years, and the 2021 model is no exception. It retains everything we've come to love from Dell's flagship 13-incher, from the gorgeous and light design, to the powerful modern components that power it.
     <ul>
      <li>11th Generation Intel Core i7-1185G7 Processor</li>
      <li>Intel Iris Xe Graphics with shared graphics memory</li>
      <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
    </ul>
    `,
      price: 900,
      image: '/images/dell.jpg',
      slug: 'dell-xps-13',
      userId: 1,
    },
    {
      name: 'HP Spectre x360',
      description: `The HP Spectre x360 2-in-1 laptop has had a big refresh for 2021, and the boost in specs, with 11th-generation Intel Core processors and Intel Iris Xe graphics, along with the impeccable 2-in-1 design and pristine gem-cut chassis, means that the new version has a well-deserved spot towards the top of our best laptops list
     <ul>
      <li>11th Generation Intel Core i7-1185G7 Processor</li>
      <li>Intel Iris Xe Graphics with shared graphics memory</li>
      <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
    </ul>
    `,
      price: 435,
      image: '/images/hp.jpg',
      slug: 'hp-spectre-x360',
      userId: 1,
    },
    {
      name: 'Sony Vaio i7',
      description: `Sony Vaio is an impressive laptop on every front. It has excellent performance from its AMD Ryzen 4000 processors and a Nvidia RTX 2060 Max-Q GPU, blisteringly fast SSDs and a great display, all packed into a stylish chassis.
     <ul>
      <li>11th Generation Intel Core i7-1185G7 Processor</li>
      <li>Intel Iris Xe Graphics with shared graphics memory</li>
      <li>16GB 4267MHz LPDDR4x Memory Onboard; 512GB M.2 PCIe NVMe Solid State Drive</li>
    </ul>
    `,
      price: 899,
      image: '/images/sony.jpg',
      slug: 'sony-vaio-i7',
      userId: 1,
    },
  ];

  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

seed()
  .then(() => console.log('success!'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
