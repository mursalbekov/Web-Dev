export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Hansa FS1004.3W 100 л белый',
    price: 89000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h32/hf2/48944781852702/hansa-fs1004-3w-belyj-103863751-1.jpg',
    description: 'Chest freezer Hansa FS1004.3W has mechanical control. Inside the device there is one compartment, but there is also a removable hanging basket for storing small boxes of convenience foods, berries or ice cream. The body of the chest is covered with durable plastic, from which any stains are easily removed. Thanks to the laconic design and universal color, the device will look organic both in the kitchen in the apartment and in the office. You can set the temperature using a mechanical regulator. The stepless adjustment of the cooling power is extremely easy and intuitive, without the need to fine-tune the temperature - just select the pre-set freezing level. In the event of a power outage, the refrigerator will maintain the set temperature for a long time and will not allow your food to spoil quickly.',
    rating: 1
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 MGN63 серый',
    price: 460000,
    description: 'Small chip. Big breakthrough The first chip designed specifically for the Mac. Amazingly, the Apple M1 system-on-a-chip packs 16 billion transistors and integrates a CPU, GPU, Neural Engine, I/O controllers, and a host of other components.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 1
    
  },
  {
    id: 3,
    name: 'Midea FSC-900BX серебристый',
    price: 150000,
    description: 'The gas control safety system stops the gas supply in the event of a flame failure. Grilling allows you to achieve a crispy crust on products. Grilled food inside remains tender and juicy, but with an appetizing and ruddy crust. And thanks to the spit, you do not have to turn the dish over for even frying. Gas stove burners are equipped with automatic ignition, which is activated when the regulator is turned. Width 90 cm. Color stainless steel. 5 burners, cast iron grate, electric ignition. Oven: gas, volume 115 l, double glass door, timer, electric ignition, oven gas control, thermostat (automatic temperature maintenance), grill (top heating), skewer, baking sheet 2 pcs, grate 1 pc. Additional jets included.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h35/32947645612062/midea-fsc-900bx-serebristyj-100899748-1-Container.jpg',
    rating: 1
  },
  {
    id: 4,
    name: 'Медиаплеер Xiaomi Mi Box S 2/8Gb',
    price: 35000,
    description: 'The new Xiaomi Mi TV Box S is easy to use and supports voice search and Chromecast, and provides a world of content that the whole family can enjoy. Mi Box S runs on Android 8.1. Compatible with thousands of apps, giving you access to a variety of premium video services and a constant stream of fresh new content. With Google Assistant, you can quickly access entertainment, get answers, and control devices in your home. Just press the microphone button on the remote control to get started. Features the latest 4K HDR technology and 4K high-speed processing for playback at up to 60fps. Enjoy realistic high definition viewing. High performance, storage capacity. Install tons of amazing apps, watch extended cuts, and play more games while enjoying better performance and stability.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h25/31569249828894/xiaomi-mi-box-s-cernyj-22300003-1-Container.jpg',
    rating: 1
  },
  {
    id: 5,
    name: 'Apple Watch Series 8 45 мм Aluminum черный',
    price: 240000,
    description: 'nice watch!',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 1
  },
  {
    id: 6,
    name: 'POCKET BOOK PB628-P-CIS черный',
    price: 75000,
    description: 'PocketBook 628 received a powerful dual-core processor. Due to this, the speed of work increased by about two times. Screen backlight with adjustable color temperature: the light can be not only white, but also yellow, and even orange. Warm shades calm the visual apparatus and the human nervous system, so PocketBook 628 is able to act as a kind of "sleeping pill"! During the day, you can read with a neutral white backlight, but before going to bed, you should activate a soothing yellow or orange. The PocketBook 628 is housed in an ultra-compact chassis, about 20% smaller than a typical 6-inch reader. And yet - a quarter lighter: only 155 grams. The reader easily fits into the pocket of jeans or a jacket, you can hold it in one hand for hours on end - and it will not get tired. The PocketBook 628 has everything a high-quality modern reader needs: an excellent clear screen of the latest generation E Ink Carta, Internet access via Wi-Fi, support for all common book and document formats, dictionaries and games. You can control the device both from the touch screen and using the keys - each user will choose the most convenient option for himself. And despite the widest range of possibilities. Like all other PocketBook readers, PocketBook 628 can open almost any e-book. Downloaded or bought, uploaded to the reader, read. 20 formats are supported, including comic CBR and CBZ, the maximum among all readers of any manufacturer. No fiddling with converters, no frustration because your new reader cant open the book you want. E Ink screens do not fade in the sun and do not glare: you can read on a fine summer day without peering into the text and without straining your eyesight. For comparison: the color displays of tablets, smartphones and laptops in the sun turn into glaring dark rectangles, the text on which is almost invisible. And E Ink screens are extremely economical. Thanks to this, the reader needs to be charged once every one and a half to two months, subject to reading two to three hours a day. For comparison: a smartphone usually asks for an outlet once every one or two days, a tablet - and even more often.',
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha5/h74/32468692762654/pocketbook-pb628-p-cis-cernyj-100631603-1-Container.jpg',
    rating: 1
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 510000,
    description: 'The Apple iPhone 13 features a 6.1-inch Super Retina XDR display that boasts an incredibly high pixel density — photos, videos, and text look amazingly clear. And thanks to the smaller area of the TrueDepth camera, there is now more room for the image on the display. Apple has developed a completely new camera layout and rotated the lenses 45 degrees. Thanks to this, the best dual camera system with an enlarged wide-angle camera matrix fit inside the case. In addition, space has been freed up for a sensor-shift optical image stabilization system, and the speed of the sensor on the ultra-wide-angle camera has increased. The new ultra-wide-angle camera sees more detail in the dark areas of the picture. The ultra-wide camera also provides a large field of view, even when you are very close to your subject. So you dont have to step back to get everything you need into the frame. Just start recording video. Cinematic Effect mode will keep focus on your subject, creating a beautiful blur effect around it. The Cinematic Effect mode recognizes when to shift focus to another person or object that has entered the frame. Now your videos will look like a real movie.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    rating: 1
  },
  {
    id: 8,
    name: 'Replica Торус 5833 6x15/4x98 D58.6 ET35 серебристый',
    price: 134999,
    description: 'Large and light wheels.',
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h68/hda/34375356579870/replica-torus-5833-6h15-4h98-d58-6-et35-serebristyj-101308142-1-Container.jpg',
    rating: 1
  },
  {
    id: 9,
    name: 'Классический термос DayDays 1 л B10000004 бирюзовый',
    price: 3400,
    description: 'good, warm thermos rack',
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0f/h85/50404368220190/daydays-1-l-b10000004-biruzovyj-104423900-1.jpg',
    rating: 1
  },
  {
    id: 10,
    name: 'ROIDMI EVE Plus Robot Vacuum белый',
    price: 210000,
    description: 'The robot vacuum cleaner is equipped with a high-performance motor that provides suction power of 2700 Pa. The new generation LDS lidar allows you to most accurately scan and map the surrounding space. The charging station with a built-in 3 liter waste bin cleans the dust container of the appliance after each cleaning. Supports remote control from a smartphone or using a voice assistant. The Roidmi EVE Plus charging station can function as a smart trash can. As soon as the robot vacuum cleaner connects to the docking station, it will automatically empty its dust container from the collected debris. The user does not have to remove the contents of the dust container, and the device will always be ready for use. The waste bin of the suction charging station has a capacity of 3 liters. So much space is enough for regular cleaning of the dust box of the robot vacuum cleaner for a month. You can safely go on a trip, and Roidmi EVE Plus will take care of the cleanliness of the house. The device received the fourth generation LDS-lidar, which provides the most accurate scanning and space mapping. The robot vacuum cleaner will perfectly navigate the house and, when the battery is low, will automatically build a route to the charging station. The robot vacuum cleaner is able to detect the height of furniture, so it wont get stuck when cleaning the floor underneath. The gadget can overcome obstacles up to 2 cm high and detect foreign objects in its path.',
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0d/hb1/33199724658718/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-1-Container.jpg',
    rating: 1
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/