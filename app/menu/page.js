"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const mockGlutenFree = [
  {
    isAttention: false,
    name: "TOAST",
    price: 7,
    description: "Two toasted bread slices with the choice of butter, vegemite or nutella.",
  },
  {
    isAttention: false,
    name: "SUNRISE EGG ON TOAST",
    price: 12.9,
    description: "Free range egg your way on sourdough bread.",
  },
  {
    isAttention: false,
    name: "BACON EGG ROLL",
    price: 11.9,
    description: "Crispy bacon, one fried egg and tasty cheese serve with burger buns.",
  },
  {
    isAttention: true,
    name: "THE BIG BREAKFAST (GF)",
    price: 24.9,
    description: "Scrambled eggs, mushroom, chorizo, juicy cherry tomato, crispy bacon, haloumi cheese, avocado.",
  },
  {
    isAttention: true,
    name: "WAKE UP BURRITO",
    price: 16.9,
    description:
      "Scrambled egg, hashbrown, shredded cheese and choice of sauce: BBQ, tomato, relish, chilli mayo or aioli.",
    options: ["Crispy Bacon", "Salted Chorizo", "Mushroom & Spinach"],
  },
  {
    isAttention: false,
    name: "EGG BENNY (GF)",
    price: 19.9,
    description: "Two free range poached eggs serve on sourdough toast, topped with fresh in-house salad.",
    options: ["Crispy Bacon", "Mushroom & Spinach", "Chicken Karaage", "Smoked Salmon"],
  },
  {
    isAttention: false,
    name: "B.L.A.T",
    price: 14.9,
    description: "Crispy bacon, lettuce, avocado and tomato serve on sourdough bread.",
  },
  {
    isAttention: true,
    name: "AVO SMASH",
    price: 16.9,
    description: "Smashed avocado on sourdough toast, feta cheese, juicy cherry tomato and free range poached egg.",
  },
];

const mockVegeterian = [
  {
    isAttention: false,
    name: "RICOTTA PANCAKE",
    price: 16.9,
    description: "Ricotta pancake with vanilla ice-cream, oreo, fresh seasonal fruit with delicious maple syrup.",
  },
  {
    isAttention: false,
    name: "LOADED MEDITERRANEAN OMELETTE",
    price: 19.9,
    description:
      "Satisfying fluffy omelette with full of mediterranean flavour, tomato, olives, onions, parsley, topped with feta cheese and serve on sourdough bread.",
    options: ["Crispy Bacon", "Mushroom & Spinach", "Ham"],
  },
  {
    isAttention: true,
    name: "CHILLI PRAWN CROISSANT",
    price: 16.9,
    description:
      "Charred oyster sauce, prawn, chilli scrambled eggs, hash brown, bonito flakes, chilli mayo on toasted croissant, garnished with fresh cilantro.",
  },
  {
    isAttention: true,
    name: "FRIED CHICKEN KARAAGE BURGER",
    price: 18.9,
    description: "Japanese style fried chicken, lettuce, tomato, kale, serve with tasty special Japanese sauce.",
    addOns: "Add chips +3",
  },
  {
    isAttention: false,
    name: "CHEESE BURGER",
    price: 18.9,
    description: "Grass fed beef patty, crispy bacon, lettuce, tomato, melted cheese, serve with burger sauce.",
    addOns: "Add chips +3",
  },
  {
    isAttention: false,
    name: "HALOUMI BURGER",
    price: 18.9,
    description: "Grilled haloumi, hash brown, avocado, caramelized onion, spinach, serve with home-made sauce.",
    addOns: "Add chips +3",
  },
  {
    isAttention: true,
    name: "CREAMY TOM-YUM PASTA",
    price: 19.9,
    description: "Tasty pasta coated in spicy tom yum cream sauce, mushroom, shrimp paste and prawn.",
  },
  {
    isAttention: true,
    name: "SOBA NOODLES SALAD",
    price: 17.9,
    description:
      "Healthy and delicious soba noodles on a bed of fresh in-house salad and free range poached egg topped with sesame crumbed avocado.",
  },
];

const mockSmoothie = [
  {
    isAttention: true,
    name: "MATCHA MANGO SMOOTHIE",
    price: 10,
    description: "Mango, matcha, vanilla yogurt, mango juice, lemon sorbet.",
  },
  {
    isAttention: false,
    name: "MIXED BERRIES SMOOTHIE",
    price: 10,
    description: "Mixed berries, vanilla yogurt, honey, milk, ice.",
  },
  {
    isAttention: true,
    name: "OREO CHOCO SMOOTHIE",
    price: 10,
    description: "Oreo, 33% cacao chocolate, vanilla ice cream, banana, milk, ice.",
  },
  {
    isAttention: false,
    name: "BANANA SMOOTHIE",
    price: 10,
    description: "Banana, vanilla yogurt, honey, ice.",
  },
];

const mockMilkshake = [
  {
    isAttention: false,
    name: "CHOCOLATE",
    price: 8,
  },
  {
    isAttention: false,
    name: "VANILLA",
    price: 8,
  },
  {
    isAttention: false,
    name: "STRAWBERRY",
    price: 8,
  },
];

const mockJuice = [
  {
    isAttention: false,
    name: "ORANGE JUICE",
    price: 8,
  },
  {
    isAttention: false,
    name: "BOOST JUICE",
    description: "Carrot, orange, ginger.",
    price: 8,
  },
  {
    isAttention: false,
    name: "POWER PUNCH",
    description: "Beetroot, carrot, apple, ginger.",
    price: 9,
  },
  {
    isAttention: false,
    name: "GO GREEN",
    description: "Cucumber, celery, lemon, apple.",
    price: 9,
  },
];

const mockTeapot = [
  {
    name: "CHAMOMILE TEA",
  },
  {
    name: "ENGLISH BREAKFAST TEA",
  },
  {
    name: "FRENCH EARL GREY TEA",
  },
  {
    name: "LEMONGRASS & GINGER TEA",
  },
  {
    name: "PEPPERMINT TEA",
  },
  {
    name: "SENCHA GREEN TEA",
  },
];

const mockMatchaDrink = [
  {
    name: "STRAWBERRY MATCHA",
    description: "Naked matcha, strawberry, milk, ice.",
    price: 10,
  },
  {
    name: "ICED COCONUT MATCHA",
    description: "Naked matcha, coconut, milk, ice.",
    price: 10,
  },
];

const mockCoffee = [
  {
    name: "CAPUCHINO",
    reg: 4.5,
    lrg: 5,
  },
  {
    name: "LATTE",
    reg: 4.5,
    lrg: 5,
  },
  {
    name: "FLAT WHITE ",
    reg: 4.5,
    lrg: 5,
  },
  {
    name: "MOCCA",
    reg: 5,
    lrg: 5.5,
  },
  {
    name: "MATCHA LATTE",
    reg: 5,
    lrg: 5.5,
  },
  {
    name: "HOT CHOCOLATE",
    reg: 5,
    lrg: 5.5,
  },
  {
    name: "STICKY CHAI",
    reg: null,
    lrg: 5.5,
  },
  {
    name: "BABYCHINO ",
    reg: 2,
    lrg: null,
  },
];

const mockCoffee2 = [
  {
    name: "Extra Shot",
    reg: null,
    lrg: "+70¢",
  },
  {
    name: "Extra Flavour | Decaf",
    reg: null,
    lrg: "+70¢",
  },
  {
    name: "Alternative Milk",
    reg: null,
    lrg: "+1$",
  },
  {
    name: "ICED LATTE (12OZ)",
    reg: null,
    lrg: 6.5,
  },
];

const imagesVegan = [
  {
    src: "/menu/chicken-karaage-burger.png",
    alt: "chicken-karaage-burger",
  },
  {
    src: "/menu/chilli-prawn-croissant.png",
    alt: "chilli-prawn-croissant",
  },
  {
    src: "/menu/soba-noodles.png",
    alt: "soba-noodles",
  },
];

const imagesCoffee = [
  {
    src: "/menu/chicken-karaage-burger.png",
    alt: "chicken-karaage-burger",
  },
  {
    src: "/menu/chilli-prawn-croissant.png",
    alt: "chilli-prawn-croissant",
  },
];

const MenuItem = ({ source = [], isOption = true }) => {
  return source.map((item) => (
    <div className={`flex gap-2 justify-${"end"} max-w-[400px] w-[100%]`}>
      <div className={`${item?.isAttention ? "z-0" : "-z-10"}`}>*</div>
      <div className="flex flex-col gap-1 w-[100%]">
        <div className="flex justify-between">
          <div className="font-medium text-sm md:text-base">{item?.name}</div>
          <div className="font-medium text-sm md:text-base">{item?.price}</div>
        </div>
        {item?.description && <div className="font-extralight text-xs md:text-sm">{item?.description}</div>}
        {item?.options?.length && (
          <div>
            <div className="flex gap-3">
              <div className="text-xs md:text-sm">{isOption ? "Options" : "Extras (+2)"}:</div>
              <div className="flex flex-wrap gap-x-3 font-light">
                {item?.options?.map?.((option) => (
                  <div className="text-xs md:text-sm">{option}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ));
};

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

const CATEGORIES = {
  FOODS: "FOODS",
  DRINKS: "DRINKS",
};

const menuList = [
  {
    href: "FOODS",
    title: "Foods",
    className: "inline-block p-3",
  },
  {
    href: "DRINKS",
    title: "Drinks",
    className: "inline-block p-3",
  },
];

const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

function Menu() {
  const [hrefSelected, setHrefSelected] = useState(CATEGORIES.FOODS);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    setHrefSelected(hash);
  }, []);

  return (
    <main className={"bg-menu2 w-full bg-cover bg-white mx-auto"}>
      <div class="text-sm font-medium text-center bg-brown-heavy fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200">
        <div className="max-w-[1440px] m-auto relative">
          <div className="absolute left-6 top-[35%]">
            <Link href="/">
              <FaArrowLeft color="white" />
            </Link>
          </div>
          <ul class="flex gap-3 flex-wrap m-auto justify-center pb-1">
            {menuList?.map((menu, index) => (
              <li key={index} onClick={() => setHrefSelected(menu.href)}>
                <a href={`#${menu.href}`} className={`${menu.className} ${hrefSelected === menu.href && "border-b-2"}`}>
                  {menu.title}
                </a>
                 
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gap-10 w-[100%] max-w-[1440px] m-auto py-8 mt-10">
        {hrefSelected === CATEGORIES.FOODS && (
          <div className="md:px-5 px-4 pt-1">
            <div className="flex flex-wrap md:justify-between justify-center gap-4 px-2 md:px-0">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <MenuItem source={mockGlutenFree} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <MenuItem source={mockVegeterian} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <ImageGrid />
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
                      { isAttention: false, name: "POTATO CHIPS (V) (GF)", price: 8.5 },
                      { isAttention: false, name: "SWEET POTATO CHIPS (V) (GF)", price: 9.5 },
                    ]}
                  />
                </div>
                <div className="max-w-[500px] text-wrap px-4 italic text-sm mt-10">
                  Please let us know prior to ordering if you have any allergies, we will try our best to accommodate.
                </div>
              </div>
            </div>
            <div>
              <div className="text-center m-auto pt-8 font-semibold text-xl">PLEASE ORDER AT THE COUNTER</div>
            </div>
          </div>
        )}
        {hrefSelected === CATEGORIES.DRINKS && (
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-10 h-[100%] my-6">
            <div className="w-[100%] sm:w-1/2 px-3">
              <div className="pb-3">
                <ImageList data={imagesCoffee} />
              </div>
              <div className="font-bold md:text-2xl pb-3 text-xl">SMOOTHIE, ACAI & MORE</div>
              <div className="gap-8">
                <div className="border p-2 sm:p-5 flex gap-16">
                  <div class="grid grid-cols-2 gap-4 divide-x">
                    <div className="left flex flex-col gap-4">
                      <div className="smoothie">
                        <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                          SMOOTHIE
                        </div>
                        <div className="flex flex-col gap-4">
                          <MenuItem source={mockSmoothie} />
                        </div>
                      </div>
                      <div className="milkshake">
                        <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                          MILKSHAKE
                        </div>
                        <div className="flex flex-col gap-4">
                          <MenuItem source={mockMilkshake} />
                        </div>
                      </div>
                    </div>
                    <div className="right flex flex-col gap-4">
                      <div className="acaibowl">
                        <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
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
                        <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                          ACAI BOWL ($15)
                        </div>
                        <div className="flex flex-col gap-4">
                          <MenuItem source={mockJuice} />
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
                    <div class="grid grid-cols-2 gap-4 divide-x">
                      <div className="left flex flex-col gap-4">
                        <div className="coffee">
                          <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 underline underline-offset-8 decoration-dashed font-semibold pb-4 text-sm md:text-base">
                              COFFEE
                            </div>
                            <div className="col-start-5 row-start-1 font-semibold text-xs md:text-sm">REG</div>
                            <div className="col-start-6 row-start-1 font-semibold text-xs md:text-sm">LRG</div>
                          </div>
                          <div className="flex flex-col gap-4">
                            {mockCoffee?.map((c) => (
                              <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-4 font-medium text-xs md:text-sm">{c.name}</div>
                                <div className="col-start-5 row-start-1 text-center font-medium text-xs md:text-sm">
                                  {c.reg}
                                </div>
                                <div className="col-start-6 row-start-1 text-center font-medium text-xs md:text-sm">
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
                                <div className="col-span-4 font-light text-xs md:text-sm">{c.name}</div>
                                <div className="col-start-5 row-start-1 text-center font-medium text-xs md:text-sm">
                                  {c.reg}
                                </div>
                                <div className="col-start-6 row-start-1 text-center font-light text-xs md:text-sm">
                                  {c.lrg}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="right flex flex-col gap-4">
                        <div className="teapot">
                          <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                            TEA POT ($5)
                          </div>
                          <div className="flex flex-col gap-4">
                            <MenuItem source={mockTeapot} />
                          </div>
                        </div>
                        <div className="teapot">
                          <div className="underline underline-offset-8 decoration-dashed font-semibold ml-4 pb-4 text-sm md:text-base">
                            MATCHA DRINKS
                          </div>
                          <div className="flex flex-col gap-4">
                            <MenuItem source={mockMatchaDrink} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <ImageList data={imagesCoffee} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Menu;
