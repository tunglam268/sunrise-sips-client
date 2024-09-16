import {imagesVegan, mockGlutenFree, mockVegeterian} from "./Mock";
import Image from "next/image";
import MenuItem from "@/components/MenuItem";

const ImageGrid = () => {
    return (
        <div className="flex h-[300px] ml-4">
            {/* Cột 1: Hình 1 */}
            <div className="w-1/2">
                <Image
                    src={imagesVegan[0].src}
                    width={150}
                    height={100}
                    alt={imagesVegan[0].alt}
                    className="object-center w-full h-full"
                />
            </div>

            {/* Cột 2: 2 Hình chồng nhau */}
            <div className="w-1/2 flex flex-col h-[300px]">
                <div className="flex-1 h-[150px]">
                    <Image
                        src={imagesVegan[1].src}
                        width={150}
                        height={50}
                        alt={imagesVegan[1].alt}
                        className="object-center w-full h-full"
                    />
                </div>
                <div className="flex-1 h-[150px]">
                    <Image
                        src={imagesVegan[2].src}
                        width={150}
                        height={50}
                        alt={imagesVegan[2].alt}
                        className="object-center w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};


const Food = () => {
    return (
        <div className="md:px-5 px-4 pt-1">
            <div className="flex flex-wrap md:justify-between justify-center gap-4 px-2 md:px-0">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <MenuItem source={mockGlutenFree}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <MenuItem source={mockVegeterian}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <ImageGrid/>
                    <div className="flex flex-col gap-2">
                        <div className="px-4 font-bold underline underline-offset-4">KIDS MENU</div>
                        <MenuItem
                            source={[
                                {
                                    isAttention: false,
                                    name: "KIDS FISH AND CHIPS",
                                    price: 13.9,
                                    description: "Golden crispy battered fish and tasty chips.",
                                },
                                {
                                    isAttention: false,
                                    name: "KIDS CHEESE BURGER",
                                    price: 13.9,
                                    description: "Milk bun, beef patty, tomato sauce.",
                                },
                            ]}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="px-4 font-bold underline underline-offset-4">TO SHARE</div>
                        <MenuItem
                            source={[
                                {isAttention: false, name: "POTATO CHIPS (V) (GF)", price: 8.5},
                                {isAttention: false, name: "SWEET POTATO CHIPS (V) (GF)", price: 9.5},
                            ]}
                        />
                    </div>
                    <div className="max-w-[500px] text-wrap px-4 italic text-sm mt-10">
                        Please let us know prior to ordering if you have any allergies, we will try our best to
                        accommodate.
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center m-auto pt-8 font-semibold text-xl">PLEASE ORDER AT THE COUNTER</div>
            </div>
        </div>
    )
}

export default Food;
