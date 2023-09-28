import myImg from '@/app/assets/myself-photo.webp'
import Image from "next/image";
import './MyImg.css'
export function MyImg() {
    return (
        <Image className="my-img" src={myImg} alt="una mia foto" loading="eager" />
    )
}
