const { PrismaClient } = require('@prisma/client');

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
