const db = require('./client');
const { createUser } = require('./users');
const{createProduct} = require('./products');
const{createCategory} = require('./categories');
const{createCartItems} = require('./cartItems');


const products =[
  {
    title:"Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)",
    img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    brand: "Beats",
    price: "129.00",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:1,
    description: "High-performance wireless Bluetooth headphones.Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity.With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone.Compatible with iOS and Android devices.With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low.",
    
  },
  {
    title: "Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black",
    img:"https://i.pinimg.com/736x/d9/c6/97/d9c697e5d3fc891bd3e01cb6d1be5821.jpg",
    brand: "Beats",
    price: "349.95",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:1,
    description: "BEATS' CUSTOM ACOUSTIC PLATFORM delivers rich, immersive sound whether you’re listening to music or taking calls.LOSSLESS AUDIO via USB-C plus three distinct built-in sound profiles to enhance your listening experience.HEAR WHAT YOU WANT with two distinct listening modes: fully-adaptive Active Noise Cancelling (ANC) and Transparency mode.",
  },
  {
    title: "Beats Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip, Class 1 Bluetooth Headphones, 9 Hours of Listening Time, Sweat Resistant, Built-in Microphone - Black",
    img:"https://img.freepik.com/premium-photo/pink-headphones-used-for-casual-listener_487986-1937.jpg?w=2000",
    brand: "Beats",
    price: "199.95",
    quantity: 10,
    color: "Pink",
    size: "S",
    categories_id:1,
    description:"Totally wireless high-performance earphones.Up to 9 hours of listening time (more than 24 hours with charging case).Adjustable, secure-fit earhooks for lightweight comfort and stability.Reinforced design for sweat & water resistance during tough workouts",
  },
  {
    title: "Beats EP Wired On-Ear Headphones - Battery Free for Unlimited Listening, Built in Mic and Controls - Black",
    img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41f4b127abb830be13728d2ffeb665b5.jpg?imageView2/2/w/800/q/70",
    brand:"Beats",
    price:"94.95",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:1,
    description:"Beats EP wired on-ear headphone in black delivers masterfully tuned sound.Durable, lightweight design reinforced with stainless steel.Take calls and control music on your iOS and Android devices with the microphone in the RemoteTalk cable",
  },
  {
    title: "Beats Flex Wireless Earbuds – Apple W1 Headphone Chip, Magnetic Earphones, Class 1 Bluetooth, 12 Hours of Listening Time, Built-in Microphone - Smoke Gray",
    img: "https://i.ebayimg.com/images/g/AMIAAOSwFEFkgGn0/s-l1600.jpg",
    brand:"Beats",
    price: "49.00",
    quantity: 10,
    color: "Pink",
    size: "S",
    categories_id:1,
    description:"BATTERY LIFE - Up to 12 hours of listening time.CUSTOMIZED FIT - All-day comfort with Flex-Form cable and four eartip options.APPLE HEADPHONE CHIP - Powered by the Apple W1 headphone chip for seamless connectivity.THE MUSIC STOPS WHEN YOU DO - Magnetic earbuds with Auto-Play/Pause",
  },
  {
    title: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Defiant Black-Red",
    img: "https://i.pinimg.com/originals/b0/fc/58/b0fc58f337b2eff9589ae7e36eb5d33b.jpg",
    brand:"Beats",
    price: "253.99",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:1,
    description: "High-performance wireless noise cancelling headphones.Compatible with iOS and Android devices.Pure adaptive noise canceling (pure ANC) actively blocks external noise.Real-time Audio calibration preserves a Premium listening experience.",

  },
  { 
    title:"Sony LinkBuds S Truly Wireless Noise Canceling Earbud Headphones with Alexa Built-in, Bluetooth Ear Buds Compatible with iPhone and Android, Black",
    img: "https://i.ebayimg.com/images/g/fM4AAOSw1SlkQPPL/s-l1600.png",
    brand:"Sony",
    price: "169.99",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:2,
    description:"SMART SOUND- Smart features and settings learn from your behavior and automatically adjust sound settings to provide the right sound for the moment.Specific uses for product : Audio.Communication system : Bluetooth Specification version 5.NEVER OFF- Automatically switches between superlative noise canceling or optimized ambient sound for listening without distractions. Sony's best transparent ambient sound in truly wireless headphones (As of May 9th 2022. Excluding Open style.)",

  },
  {
    title:"Sony LinkBuds S Truly Wireless Noise Canceling Earbud Headphones with Alexa Built-in, Bluetooth Ear Buds Compatible with iPhone and Android, White",
    img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3FWmIyGshzti7sArBmcqocHyjdXBuk9p5iAfFrQjxnR2R-Towtmsw0o__TEilRNRumTsuSgheBA29-rcYCg45wiYO5VYvsssvkYUOuUjn4Raa0g4RbPEz&usqp=CAE",
    brand:"Sony",
    price: "198.00",
    quantity: 10,
    color: "Pink",
    size: "S",
    categories_id:2,
    description:"SMART SOUND- Smart features and settings learn from your behavior and automatically adjust sound settings to provide the right sound for the moment.Specific uses for product : Personal, Business.NEVER OFF- Automatically switches between superlative noise canceling or optimized ambient sound for listening without distractions. Sony's best transparent ambient sound in truly wireless headphones (As of May 9th 2022. Excluding Open style.)",

  },
  {
    title:"Sony LinkBuds Truly Wireless Earbud Headphones with an Open-Ring Design for Ambient Sounds and Alexa Built-in, Bluetooth Ear Buds Compatible with iPhone and Android, White",
    img:"https://i5.walmartimages.com/seo/Welling-Y08-Wireless-Bluetooth-compatible-HiFi-Stereo-Over-Ear-Headphone-Headset-with-Microphone_85ca9c61-a0b6-44be-8a4c-aace1f36052f.6a977cd351301e323fe8852d8d68b207.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    brand:"Sony",
    price: "178.00",
    quantity: 10,
    color: "Pink",
    size: "S",
    categories_id:2,
    description: "High-performance wireless noise cancelling headphones.Compatible with iOS and Android devices.Pure adaptive noise canceling (pure ANC) actively blocks external noise.Real-time Audio calibration preserves a Premium listening experience.",

  },
  {
    title:"Sony WH-CH520 Wireless Headphones Bluetooth On-Ear Headset with Microphone, Black New",
    img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTz5fWERx_YaD31Cvhr_8nld9mhii7i1inZtxRioxxILDRJPjJKNmxdLlG_BkOsVy-Z6WZPbjDUw1sIUFm9gtbbX3PKs1L60oNfDhKqHEy1",
    brand:"Sony",
    price: "258.00",
    quantity: 10,
    color: "White",
    size: "M",
    categories_id:2,
    description:"With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.Control Type:Media.Great sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App."

  },  
  {
    title:"Sony Extra Bass Bluetooth Headphones, Wireless Sports Earbuds with Mic/Microphone, IPX4 Splashproof Stereo Comfort Gym Running Workout up to 8.5 Hour Battery, White (International Version)",
    img:"https://m.media-amazon.com/images/I/61-WTTrYSrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    brand:"Sony",
    price: "139.99",
    quantity: 10,
    color: "White",
    size: "S",
    categories_id:2,
    description:"Connect wirelessly - Bluetooth connectivity lets you listen for up to 8.5 hours without wires getting in your way.Be ready for splashes - Durable IPX4 design keeps the music going, even when you run in light rain.Hear the beat, feel the power - EXTRA BASS sound gives you more motivation, whether you’re at the gym or on the street. Enhanced low frequencies make music sound more powerful, so you feel energized and driven."

  },
  {
    title:"Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",
    img:"https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/9d31bd5c-0554-46a3-ad5e-3ee2cedf5a8c-1_c9b44ad4-0e49-4d21-b328-64702842e811.jpg",
    brand:"Sony",
    price: "128.00",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:2,
    description:"Sony’s lightest Wireless Noise-canceling headband ever.Specific uses for product : Entertainment.Take noise canceling to the next level with Sony’s Integrated Processor V1, so you can fully immerse yourself in the music.Super comfortable and lightweight design.",

  },
  {
    title:"Sony MDREX15AP In-Ear Earbud Headphones with Mic, Black (MDREX15AP/B)",
    img:"https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/cf377bed-fff9-402b-99f7-1eb9a1a8f342-1_328abfb3-a813-477a-b017-a6782f8f30cc.jpg",
    brand:"Sony",
    price: "99.99",
    quantity: 10,
    color: "White",
    size: "S",
    categories_id:2,
    description:"Hybrid silicone earbuds provide long lasting comfort; small, medium and large earbuds are included to fine tune your fitment.Specific uses for product : Music.Product Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears",

  },
  {
    title:"Apple Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones H1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, Transparency, 22 Hours of Listening Time - Black",
    img:"https://img.kwcdn.com/product/1e78ea3ada/1458208b-bd52-4c72-b386-dece5dfb7a08_800x800.jpeg?imageView2/2/w/800/q/70",
    brand:"Apple",
    price: "329.99",
    quantity: 10,
    color: "Pink",
    size: "M",
    categories_id:3,
    description:"High-performance wireless noise cancelling headphones in black.Active Noise Cancelling (ANC) blocks external noise.Transparency helps you stay aware of your surroundings while listening",

  },
  {
    title:"Apple EarPods Headphones with USB-C Connector. Microphone with Built-in Remote to Control Music, Phone Calls, and Volume. Wired Earbuds for iPhone",
    img:"https://i5.walmartimages.com/seo/Onn-On-Ear-Wired-Headphones-Pink_ce78d9e4-0d6e-463e-a0c6-fdb312b0ab04.37192113705d8be4959eb943154b4a5b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    brand:"Apple",
    price: "119.00",
    quantity: 10,
    color: "Pink",
    size: "S",
    categories_id:3,
    description:"Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear. Which makes them more comfortable for more people than any other earbud-style headphones.The speakers inside the EarPods have been engineered to maximize sound output and minimize sound loss, which means you get high-quality audio.",
  },
  {
    title:"Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone",
    img:"https://m.media-amazon.com/images/I/61Zh467pKjL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    brand:"Apple",
    price: "99.00",
    quantity: 10,
    color: "white",
    size: "S",
    categories_id:3,
    description:"Quick access to Siri by saying “ Hey Siri ”.More than 24 hours total listening time with the Charging Case.Effortless setup, in-ear detection, and automatic switching for a magical experience.Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV",

  },
  { 
    title:"Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone - Silver",
    img:"https://m.media-amazon.com/images/I/71xEVEjRHWL._AC_SX679_.jpg",
    brand:"Apple",
    price: "479.99",
    quantity: 10,
    color: "white",
    size: "M",
    categories_id:3,
    description:" Apple-designed dynamic driver provides high-fidelity audio.Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.Transparency mode for hearing and interacting with the world around you.Spatial audio with dynamic head tracking provides theater-like sound that surrounds you",

  },
  {
    title:"Apple AirPods (3rd Generation) Wireless Earbuds with Lightning Charging Case. Spatial Audio, Sweat and Water Resistant, Up to 30 Hours of Battery Life. Bluetooth Headphones for iPhone",
    img:"https://m.media-amazon.com/images/I/61jcsHsFN8L._AC_SX679_.jpg",
    brand:"Apple",
    price: "149.99",
    quantity: 10,
    color: "white",
    size: "S",
    categories_id:3,
    description:"Personalized Spatial Audio with dynamic head tracking places sound all around you.Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear",

  },
];
const users = [
  { 
    role:'Admin',
    name: 'xuan00',
    email: 'xuan00@gmail.com',
    password: '1234',
  },
  { 
    role: 'Customer',
    name: 'Liu Wei',
    email: 'liu@example.com',
    password: 'strongpass',
  },
  {
    role: 'Customer',
    name: 'Isabella García',
    email: 'bella@example.com',
    password: 'pass1234',
  },
  {
    role: 'Customer',
    name: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    password: 'mysecretpassword',
  },
  { 
    role: 'Customer',
    name: 'xuan08',
    email: 'xuan08@gmail.com',
    password: '1234',
  },
  // Add more user objects as needed
];  

const categories = [
  {
    brand: "Beats",
  },
  { 
    brand: "Sony",
  },
  {
    brand: "Apple",
  },

]

const cartItems = [
{
    users_id : 5,
    products_id:1,
    quantityincart : 3,
},
{
  users_id : 5,
  products_id:2,
  quantityincart : 3,
},
{
  users_id : 5,
  products_id:3,
  quantityincart: 3,
},
{
  users_id : 5,
  products_id:4,
  quantityincart : 3,
},
{
  users_id : 2,
  products_id:7,
  quantityincart : 3,
},
{
  users_id : 2,
  products_id:10,
  quantityincart: 3,
},
{
  users_id : 2,
  products_id:11,
  quantityincart : 3,
},
]

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS users cascade;
        DROP TABLE IF EXISTS categories;
        DROP TABLE IF EXISTS products cascade;
        DROP TABLE IF EXISTS cartItems;
        `)
    }
    catch(err) {
      console.log("1234",err);
        throw err;
    }
}



const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            role VARCHAR(10) NOT NULL,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )    
       `)
       await db.query(`
        CREATE TABLE categories(
            id SERIAL PRIMARY KEY,
            brand VARCHAR(255) NOT NULL

        )
       `)
       await  db.query(`
       CREATE TABLE products(
         id SERIAL PRIMARY KEY, 
         title VARCHAR(255) NOT NULL,
         img VARCHAR(255) NOT NULL,
         brand VARCHAR(255) NOT NULL,
         price VARCHAR(255) NOT NULL,
         quantity INTEGER,
         color VARCHAR(255) NOT NULL,
         size VARCHAR(255) NOT NULL,
         description TEXT NOT NULL,
         categories_id INTEGER      
       )
     `) 
     await db.query(`
       CREATE TABLE cartItems(
           id SERIAL PRIMARY KEY,
           quantityincart INTEGER,
           users_id INTEGER NOT NULL REFERENCES users(id),
           products_id INTEGER NOT NULL REFERENCES products(id)
       )
      `)
    }
   
    catch(err) {
      console.log("12345",err);
        throw err;
    }
}

// CREATE TABLE site_user(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) DEFAULT 'name',
//   email VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL

// CREATE TABLE Orders (
//   OrderID int NOT NULL,
//   OrderNumber int NOT NULL,
//   PersonID int,
//   PRIMARY KEY (OrderID),
//   FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// ); 

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({role:user.role,name: user.name, email: user.email, password: user.password});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const insertProducts = async () => {
  try {
    for (const product of products) {
      await createProduct({ title: product.title, img:product.img, brand:product.brand , quantity:product.quantity,color: product.color,
        size:product.size,price:product.price, categories_id: product.categories_id,description:product.description});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};
const insertCartItems = async () => {
  try {
    for (const cartItem of cartItems) {
      await createCartItems({users_id:cartItem.users_id, products_id:cartItem.products_id, quantityincart:cartItem.quantityincart});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};
const insertCategories = async () => {
  try {
    for (const category of categories) {
      await createCategory({brand:category.brand});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertCategories();
        await insertProducts();
        await insertUsers();
        await insertCartItems();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()
