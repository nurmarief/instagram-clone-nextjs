export default function MiniProfile() {
  return (
    <div className='mt-14 ml-10 flex items-center justify-between'>
      <img
        className='border rounded-full h-16 p-[2px]'
        src='https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png'
        alt='user-image'
      />
      <div className='ml-4 flex-1'>
        <h2 className='font-bold'>user-1</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  );
}