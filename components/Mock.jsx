export const mockGlutenFree = [
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

export const mockVegeterian = [
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

export const mockSmoothie = [
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

export const mockMilkshake = [
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

export const mockJuice = [
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

export const mockTeapot = [
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

export const mockMatchaDrink = [
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

export const mockCoffee = [
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
        name: "ICED LATTE (12OZ)",
        reg: null,
        lrg: 6.5,
    },
    {
        name: "BABYCHINO ",
        reg: 2,
        lrg: null,
    },
];

export const mockCoffee2 = [
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
];

export const imagesVegan = [
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

export const imagesCoffee = [
    {
        src: "/menu/chicken-karaage-burger.png",
        alt: "chicken-karaage-burger",
    },
    {
        src: "/menu/chilli-prawn-croissant.png",
        alt: "chilli-prawn-croissant",
    },
];

