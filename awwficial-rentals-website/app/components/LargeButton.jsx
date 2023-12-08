import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function LargeButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='flex px-[18px] py-3.5 rounded-lg	bg-primary text-white text-xl leading-7 	not-italic' style={{ fontFamily: lato.className }}>
        {name}
      </button>
    </Link>
  )
}