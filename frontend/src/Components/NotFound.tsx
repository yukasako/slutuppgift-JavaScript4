import notFoundImg from '../assets/sub/NotFound.webp';

function NotFound() {
  return (
    <div className='flex flex-col gap-10 items-center justify-center m-10'>
      <h1 className='text-4xl font-bold'>Page doesn't exist</h1>
      <img
        src={notFoundImg}
        alt='notFoundImg'
        className='w-1/4 h-auto object-contain'
      />
    </div>
  );
}

export default NotFound;
