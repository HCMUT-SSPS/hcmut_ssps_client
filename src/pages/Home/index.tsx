import { FC } from 'react';
import { Link } from 'react-router-dom';

import HomepageImg from '../../assets/images/HomepageImg.png';
import { Icon } from '../../components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navabar';
import { Page } from '../../layouts';

const Home: FC = () => {
  return (
    <Page title='Home'>
      <Navbar />
      <div className='flex'>
        <div className='flex w-[50%] flex-col justify-center space-y-6 px-10 lg:px-[52px] xl:px-[64px] 2xl:px-[72px]'>
          <div className='flex flex-col space-y-3'>
            <h1 className='text-xl font-normal text-gray-800  lg:text-2xl xl:text-3xl 2xl:text-[48px]'>
              Print Your Document
            </h1>
            <h1 className='text-xl font-normal text-gray-800  lg:text-2xl xl:text-3xl 2xl:text-[48px]'>
              Right At School! 🏫
            </h1>
          </div>
          <p className='xl:text-lg 2xl:text-2xl'>
            Prepare your lessons thoroughly and effortlessly with our printing service
          </p>
          <Link to='/login' className='flex w-fit space-x-2 rounded-lg bg-green-900 px-10 py-4'>
            <p className='text-white'>Print Now!</p>
            <Icon.ArrowRight className='w-6' />
          </Link>
        </div>
        <div className='flex w-[50%] justify-end'>
          <img src={HomepageImg} alt='Homepage image' />
        </div>
      </div>
      <div className='flex flex-col py-[80px]'>
        <div className='flex w-full flex-col items-center'>
          <h2 className='text-[32px] text-gray-800'>Our Offered Services</h2>
          <p className='w-[50%] text-center'>
            Many services which we can offer so that it helps you on your academic journey. Whether
            your project is large, small, or somewhere in between, we can provide a solution
            tailored for you.
          </p>
        </div>
        <div className='mt-[60px] flex flex-col space-y-5 px-10 lg:flex-row lg:justify-evenly lg:space-y-0 lg:px-[52px] xl:px-[64px] 2xl:px-[72px]'>
          <div className='flex justify-between'>
            <div className='flex justify-start space-x-2'>
              <Icon.NoteBlank className='w-6' />
              <div className='flex flex-col space-y-1'>
                <p className='text-[18px] text-gray-800'>Double-sided Printing</p>
                <p className='max-w-[280px] text-[14px]'>
                  Save the paper with the double-sided printing by our machine.
                </p>
              </div>
            </div>
            <div className='flex justify-start space-x-2'>
              <Icon.CircleHalf className='w-6' />
              <div className='flex flex-col space-y-1'>
                <p className='text-[18px] text-gray-800'>Color Printing</p>
                <p className='max-w-[280px] text-[14px]'>
                  Art project that need vibrant color? No need to worry about it!
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex justify-start space-x-2'>
              <Icon.FilePlus className='w-6' />
              <div className='flex flex-col space-y-1'>
                <p className='text-[18px] text-gray-800'>Free Paper Every Month</p>
                <p className='max-w-[280px] text-[14px]'>
                  We give a free amount of paper monthly to support you academically.
                </p>
              </div>
            </div>
            <div className='flex justify-start space-x-2'>
              <Icon.HourglassHigh className='w-6' />
              <div className='flex flex-col space-y-1'>
                <p className='text-[18px] text-gray-800'>In Hurry? No Worry!</p>
                <p className='max-w-[280px] text-[14px]'>
                  Your document will be process fast and be ready within 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex py-[80px]'>
        <div className='flex w-[40%] flex-col space-y-2 px-10 lg:px-[52px] xl:px-[64px] 2xl:px-[72px]'>
          <p className='text-[32px] text-gray-800'>Common Questions</p>
          <p>
            If you cannot find what you’re looking for, please contact{' '}
            <span className='text-green-900'>
              <b>our support team.</b>
            </span>
          </p>
        </div>
        <div className='flex w-[60%] flex-col space-y-4 pr-10 lg:pr-[52px] xl:pr-[64px] 2xl:pr-[72px]'>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>What is HCMUT-SPSS?</p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                The university is intent to build a Student Smart Printing Service (HCMUT_SSPS) for
                serving students in its campuses to print their documents. The system consists of
                some printers around the campuses. Each printer has ID, brand/manufacturer name,
                printer model, short description, and the location (campus name, building name, and
                room number).
              </p>
            </article>
          </details>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>What is the return policy?</p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien.
                Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus,
                suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>What if I don’t receive my order</p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien.
                Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus,
                suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>
                How many paper will university give a month?
              </p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien.
                Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus,
                suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>
                Can I buy more paper to print more document?
              </p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien.
                Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus,
                suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
          <details className='group'>
            <summary className='flex items-center gap-2 font-medium marker:content-none hover:cursor-pointer'>
              <Icon.ChevronRight className='h-3 w-3 transition group-open:rotate-90' />
              <p className='text-[18px[ text-gray-800'>
                Will the amount of paper stack up after each month?
              </p>
            </summary>

            <article className='ml-5 pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien.
                Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus,
                suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default Home;
