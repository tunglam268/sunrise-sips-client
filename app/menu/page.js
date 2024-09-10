import dynamic from "next/dynamic";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";

const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

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

const imagesVegan = [
  {
    src: "../../public/menu/chicken-karaage-burger.png",
    alt: "chicken-karaage-burger",
  },
  {
    src: "../../public/menu/chilli-prawn-croissant.png",
    alt: "chilli-prawn-croissant",
  },
  {
    src: "../../public/menu/soba-noodles.png",
    alt: "soba-noodles",
  },
];

const MenuItem = ({ source = [] }) => {
  return source.map((item) => (
    <div className={`flex gap-2 justify-${"end"} w-[500px] max-w-[100%] p-3`}>
      <div className={`${item?.isAttention ? "z-0" : "-z-10"}`}>*</div>
      <div className="flex flex-col gap-1 w-[100%]">
        <div className="flex justify-between">
          <div className="font-medium">{item?.name}</div>
          <div className="font-medium">{item?.price}</div>
        </div>
        {item?.description && <div className="font-extralight">{item?.description}</div>}
        {item?.options?.length && (
          <div>
            <div className="flex gap-3">
              <div>Options:</div>
              <div className="flex flex-wrap gap-x-3 font-light">
                {item?.options?.map?.((option) => (
                  <div>{option}</div>
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
  return data?.map?.((image) => {
    return <Image src={image?.src} width={500} height={500} alt={image?.alt} />;
  });
};

function Menu() {
  return (
    <main className={"bg-menu2 w-full bg-cover bg-white mx-auto overflow-hidden relative"}>
      <div className="p-4">
        <div className="flex flex-wrap  p-1 gap-10  justify-center">
          <div className="flex flex-col gap-4">
            <div>(GF): Gluten Free</div>
            <div className="flex flex-col gap-4">
              <MenuItem source={mockGlutenFree} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>(VE): Vegeterian</div>
            <div className="flex flex-col gap-4">
              <MenuItem source={mockVegeterian} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>(V): Vegan</div>
            {/* <ImageList data={imagesVegan} /> */}
            <Image src={"../../public/menu/chicken-karaage-burger.png"} width={500} height={500} />
            <div className="flex flex-col gap-2">
              <div className="px-4 font-bold">KIDS MENU</div>
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
              <div className="px-4 font-bold">TO SHARE</div>
              <MenuItem
                source={[
                  { isAttention: false, name: "POTATO CHIPS (V) (GF)", price: 8.5 },
                  { isAttention: false, name: "SWEET POTATO CHIPS (V) (GF)", price: 9.5 },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
