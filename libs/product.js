const { PrismaClient } = require('@prisma/client');
const fs = require('node:fs');
const xss = require('xss');
const slugify = require('slugify');

// intialize PrismaClient;
const prisma = new PrismaClient();

export async function getAllProducts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const products = await prisma.product.findMany();
    return products;
    // throw new Error('Loading products failed!');
  } catch (error) {
    console.error('Error retrieving products data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductBySlug(slug) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      include: {
        User: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });
    if (!product) return null;
    const { email: userEmail, username: userName } = product.User;
    return { ...product, userEmail, userName };
  } catch (error) {
    console.error('Error retrieving product data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function saveProduct(product) {
  const slug = slugify(product.name, { lower: true });
  const description = xss(product.description);
  // hp-laptop.png ['hp-laptop, 'png']
  const extension = product.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;
  // image -> stream -> public/images/my-hp-laptop.jpg
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await product.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image has been failed!');
    }
  });

  const imageUrl = `/images/`;
  // saving data to database
  try {
    await prisma.product.create({
      data: {
        name: product.name,
        description: description,
        userId: 1,
        price: parseFloat(product.price),
        image: `/images/${fileName}`,
        slug: slug,
      },
    });
  } catch (error) {
    console.error('Error in creating product:', error);
    throw error;
  }
}
