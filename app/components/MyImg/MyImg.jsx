import myImg from '@/app/assets/myself-photo.webp'
import Image from "next/image";
export function MyImg() {
    return (
        <Image src={myImg} alt="una mia foto" />
    )
}
