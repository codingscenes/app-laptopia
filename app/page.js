import brandLogo from '@/assets/images/brandIcon.png';
import reviewLogo from '@/assets/images/review.png';
import serviceLogo from '@/assets/images/services.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <div className='row mt-4 mx-auto justify-content-center'>
        <div className='col-md-2'>
          <Image src={brandLogo.src} width={100} height={100} alt='Brand logo' />
        </div>

        <div className='col-md-6'>
          <h1>Welcome to Laptopia!</h1>
          <p>
            Laptopia is your one-stop destination for buying and selling used laptops. Whether you are a student,
            Laptopia is your one-stop destination for buying and selling used laptops. Whether you are a student,
            professional, or tech enthusiast, we have a wide range of laptops to meet your needs.
          </p>
        </div>
      </div>

      <div className='row mt-4 mx-auto justify-content-center'>
        <div className='col-md-2'>
          <Image src={serviceLogo.src} width={100} height={100} alt='service logo' />
        </div>
        <div className='col-md-6'>
          <h2>Our Services</h2>
          <ul>
            <li>Buy high-quality used laptops at affordable prices</li>
            <li>Sell your old laptops and get the best value</li>
            <li>Trade-in your current laptop for an upgrade</li>
            <li>Explore our collection of accessories and peripherals</li>
            <li>Get expert advice and support from our team</li>
          </ul>
        </div>
      </div>

      <div className='row mt-4 mx-auto justify-content-center'>
        <div className='col-md-2'>
          <Image src={reviewLogo.src} width={100} height={100} alt='Review Logo' />
        </div>
        <div className='col-md-6'>
          <h2>User Feedback and Reviews</h2>
          <p className='card bg-dark p-2 mt-4'>
            I recently purchased a laptop from Laptopia and I am extremely satisfied with my purchase. The laptop was in
            excellent condition and the price was very reasonable. The customer service was also top-notch, with the
            staff being knowledgeable and helpful throughout the process. ~ Ravi
          </p>
          <p className='card bg-dark  p-2'>
            I sold my old laptop to Laptopia and I could not be happier with the experience. The process was quick and
            hassle-free, and I received a fair price for my laptop. I would highly recommend Laptopia to anyone looking
            to buy or sell used laptops. ~ Anne
          </p>
          <p className='card bg-dark  p-2'>
            Laptopia has a great selection of laptops and accessories. I was able to find the perfect laptop for my
            needs at a great price. The website is easy to navigate and the ordering process was smooth. I would
            definitely shop at Laptopia again. ~ Rohit
          </p>
        </div>
      </div>
    </div>
  );
}
