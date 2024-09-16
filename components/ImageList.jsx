import {imagesCoffee} from "@/components/Mock";
import Image from "next/image";

const ImageList = ({ data }) => {
    return (
        <div className="flex gap-4">
            <div className="w-1/2 h-[150px]">
                <Image
                    src={imagesCoffee[0].src}
                    width={150}
                    height={50}
                    alt={imagesCoffee[0].alt}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-1/2 h-[150px]">
                <Image
                    src={imagesCoffee[1].src}
                    width={150}
                    height={50}
                    alt={imagesCoffee[1].alt}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default ImageList;