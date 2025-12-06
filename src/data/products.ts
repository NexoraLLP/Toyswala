export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Silicone Realistic Dildo",
    description: "Medical-grade soft silicone dildo with realistic texture. Safe, flexible and easy to clean.",
    price: 1599,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/492463254/GN/IG/HJ/213050881/waterproof-realistic-dildo-sex-toy-500x500.jpg",
    category: "Dildos",
  },
  {
    id: 101,
    name: "Batman 10 Inch Realistic Silicone Dildo With Suction Cup",
    description: "A powerful suction cup base allows for hands-free play on any smooth surface — perfect for bed or solo sessions.Enjoy the ride on the floor! A powerful suction cup cock masturbator can be adsorbed to most smooth surfaces and bring an exciting new man into the bedroom risk-free! The toy for women can stick to your shower door or tub wall for the wettest, wildest intercourse you have ever experienced! Have powerful solo orgasms or invite your lover's partner to join in the fun!",
    price: 2000,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/10/555418625/EI/LA/GE/213050881/batman10-500x500.jpg",
    category: "Dildos",
  },
  {
    id: 102,
    name: "Soft Dotted Silicone Crystal Condom",
    description: "Pioneers in the industry, we offer soft dotted silicone crystal condom, silicone reusable condom male extender 8 inch dragon jumbo condom for men, sleeves with non-slip thickened silicon testicle ring sex toy for men with dragon condom, 7 inch dragon condom for men for extra time long lasting, washable reusable silicone extra dotted condom and 8 inch wonder dragon condom for men from India.",
    price: 1000,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/504759569/YJ/NI/PB/213050881/whatsapp-image-2025-04-21-at-22-26-53-500x500.jpeg",
    category: "Dildos",
  },
  {
    id: 103,
    name: "8 Inch Jumbo Extender Penis Sleeve",
    description: "This 8 Inch Jumbo Extender Penis Sleeve provides increased length and girth, allowing for more intensely pleasurable sensations. Its unique stretchy material provides a comfortable and secure fit, allowing you to enjoy a much more intense intimate experience..",
    price: 1000,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/10/555418900/GC/RJ/MT/213050881/jumbo-f1a3dea2-533f-4125-bfb2-193e3c3cd04b-500x500.jpg",
    category: "Dildos",
  },
  {
    id: 2,
    name: "2 In 1 Realistic Tongue Massager",
    description: "Leading of 2 in 1 realistic tongue massager, white waterproof full body electric massager, women air pulse stimulator penguin massager, women silicon 8 speed waterproof massager, women silicone airwave stimulator massager and woman silicone finger cover vaginal massager from Surat.",
    price: 2300,
    image: "https://5.imimg.com/data5/IOS/Default/2024/11/467064775/VY/ZK/YM/213050881/product-jpeg-500x500.png",
    category: "Vibrators",
  },
  {
    id: 3,
    name: "Massager Wand",
    description: "High-intensity personal massager for  solo use. Quiet motor with deep vibrations.",
    price: 2499,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/501990306/AQ/LG/UN/213050881/belt-dragon-condom-for-men-and-women-brawn-1000x1000.jpg",
    category: "Massagers",
  },




  
  // {
  //   id: 4,
  //   name: "Anal Training Plug Set",
  //   description: "Set of 3 beginner to advanced silicone anal plugs with smooth tapered design.",
  //   price: 1399,
  //   image: "/products/plug-1.jpg",
  //   category: "Anal Toys",
  // },
  // {
  //   id: 5,
  //   name: "Premium Lubricant Gel",
  //   description: "Water-based intimate lubricant for smooth and safe pleasure. Non-sticky, skin-safe formula.",
  //   price: 499,
  //   image: "/products/lube-1.jpg",
  //   category: "Lubricants",
  // },
  // {
  //   id: 6,
  //   name: "Male Masturbator Cup",
  //   description: "Soft inner textured masturbator with tight grip and realistic feel.",
  //   price: 1899,
  //   image: "/products/masturbator-1.jpg",
  //   category: "Male Toys",
  // },
  // {
  //   id: 7,
  //   name: "Remote Control Vibrator",
  //   description: "Wireless remote control vibrator with long battery life and strong vibration patterns.",
  //   price: 2799,
  //   image: "/products/remote-vibe-1.jpg",
  //   category: "Couple Toys",
  // },
  // {
  //   id: 8,
  //   name: "Strap-On Harness Set",
  //   description: "Adjustable strap-on harness with detachable dildo for couple play.",
  //   price: 3499,
  //   image: "/products/strapon-1.jpg",
  //   category: "Couple Toys",
  // },
  // {
  //   id: 9,
  //   name: "Delay Spray for Men",
  //   description: "Herbal delay spray for longer performance and better control.",
  //   price: 699,
  //   image: "/products/delay-spray-1.jpg",
  //   category: "Wellness",
  // },
  // {
  //   id: 10,
  //   name: "Clitoral Suction Vibrator",
  //   description: "Air-pulse technology vibrator for intense stimulation with 10 modes.",
  //   price: 2999,
  //   image: "/products/suction-vibe-1.jpg",
  //   category: "Vibrators",
  // },
  // {
  //   id: 11,
  //   name: "Inflatable Love Doll",
  //   description: "Soft-touch inflatable love doll with realistic body shape and easy storage.",
  //   price: 3999,
  //   image: "/products/doll-1.jpg",
  //   category: "Love Dolls",
  // },
  // {
  //   id: 12,
  //   name: "Couple Ring Vibrator",
  //   description: "Stretchable couple ring with bullet vibration for mutual pleasure.",
  //   price: 999,
  //   image: "/products/ring-1.jpg",
  //   category: "Couple Toys",
  // },
];

export const categories = [
  "All",
  "Dildos",
  "Vibrators",
  "Massagers",
  // "Anal Toys",
  // "Lubricants",
  // "Male Toys",
  // "Couple Toys",
  // "Wellness",
  // "Love Dolls",
];
