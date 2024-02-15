import Image from 'next/image'

export default function Story({imgSrc, username}) {
  return (
    <figure>
      <div className='rounded-full border-red-500 border-2 p-[1.5px] h-14 hover:scale-110 relative overflow-hidden cursor-pointer transition-transform duration-200 ease-out'>
        <Image src={imgSrc} alt={username} fill={true} className='object-contain' />
      </div>
      <figcaption className='w-14 text-xs truncate'>{username}</figcaption>
    </figure>
  );
}