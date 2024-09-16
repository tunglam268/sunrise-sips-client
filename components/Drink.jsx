import {
    imagesCoffee,
    mockCoffee,
    mockCoffee2,
    mockJuice,
    mockMatchaDrink,
    mockMilkshake, mockSmoothie,
    mockTeapot
} from "@/components/Mock";
import ImageList from "@/components/ImageList";
import MenuItem from "@/components/MenuItem";

const Drink = () => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-10 h-[100%] my-6">
            <div className="w-[100%] sm:w-1/2 px-3">
                <div className="pb-3">
                    <ImageList data={imagesCoffee}/>
                </div>
                <div className="font-bold md:text-2xl pb-3 text-xl">SMOOTHIE, ACAI & MORE</div>
                <div className="gap-8">
                    <div className="border p-2 sm:p-5 flex gap-16">
                        <div className="grid grid-cols-2 gap-4 divide-x">
                            <div className="left flex flex-col gap-4">
                                <div className="smoothie">
                                    <div
                                        className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                        SMOOTHIE
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <MenuItem source={mockSmoothie}/>
                                    </div>
                                </div>
                                <div className="milkshake">
                                    <div
                                        className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                        MILKSHAKE
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <MenuItem source={mockMilkshake}/>
                                    </div>
                                </div>
                            </div>
                            <div className="right flex flex-col gap-4">
                                <div className="acaibowl">
                                    <div
                                        className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                        ACAI BOWL ($15)
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <MenuItem
                                            source={[
                                                {
                                                    description:
                                                        "Acai smoothly blended with ripe bananas and a splash of coconut juice, topped with crunchy granola, coconut flakes, a drizzle of honey and fresh seasonal fruit.",
                                                    options: ["Nutella", "Granola", "Peanut butter", "Fruit"],
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="juice">
                                    <div
                                        className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                        ACAI BOWL ($16)
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <MenuItem source={mockJuice}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between w-[100%] sm:w-1/2 px-3">
                <div>
                    <div className="font-bold md:text-2xl pb-3 text-xl text-right">COFFEE, TEA & MATCHA</div>
                    <div className="gap-8">
                        <div className="border p-2 sm:p-5 flex gap-16 justify-center">
                            <div className="grid grid-cols-2 gap-4 divide-x">
                                <div className="left flex flex-col gap-4">
                                    <div className="coffee">
                                        <div className="grid grid-cols-6 gap-4">
                                            <div
                                                className="col-span-4 underline underline-offset-8 decoration-dashed font-semibold pb-4 text-sm md:text-base">
                                                COFFEE
                                            </div>
                                            <div
                                                className="col-start-5 row-start-1 font-semibold text-xs md:text-sm">REG
                                            </div>
                                            <div
                                                className="col-start-6 row-start-1 font-semibold text-xs md:text-sm">LRG
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {mockCoffee?.map((c) => (
                                                <div className="grid grid-cols-6 gap-4">
                                                    <div
                                                        className="col-span-4 font-medium text-xs md:text-sm">{c.name}</div>
                                                    <div
                                                        className="col-start-5 row-start-1 text-center font-medium text-xs md:text-sm">
                                                        {c.reg}
                                                    </div>
                                                    <div
                                                        className="col-start-6 row-start-1 text-center font-medium text-xs md:text-sm">
                                                        {c.lrg}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="coffee-2">
                                        <div className="flex flex-col gap-4">
                                            {mockCoffee2?.map((c) => (
                                                <div className="grid grid-cols-6 gap-4">
                                                    <div
                                                        className="col-span-4 font-light text-xs md:text-sm">{c.name}</div>
                                                    <div
                                                        className="col-start-5 row-start-1 text-center font-medium text-xs md:text-sm">
                                                        {c.reg}
                                                    </div>
                                                    <div
                                                        className="col-start-6 row-start-1 text-center font-light text-xs md:text-sm">
                                                        {c.lrg}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="right flex flex-col gap-4">
                                    <div className="teapot">
                                        <div
                                            className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                            TEA POT ($5)
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <MenuItem source={mockTeapot}/>
                                        </div>
                                    </div>
                                    <div className="teapot">
                                        <div
                                            className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                                            MATCHA DRINKS
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <MenuItem source={mockMatchaDrink}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-3">
                    <ImageList data={imagesCoffee}/>
                </div>
            </div>
        </div>
    )
}

export default Drink;