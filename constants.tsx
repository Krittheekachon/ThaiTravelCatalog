
import { Tour } from './types';

export const TOURS: Tour[] = [
  {
    id: 'japan-winter',
    title: 'Japan Winter Wonderland',
    titleTh: 'มหัศจรรย์ฤดูหนาวในญี่ปุ่น',
    description: 'Experience the perfect balance of Japans futuristic cities and ancient traditions. From the neon lights of Shinjuku to the golden reflections of Kinkaku-ji in Kyoto.',
    descriptionTh: 'สัมผัสเสน่ห์ของญี่ปุ่นในมุมมองที่แตกต่าง ตั้งแต่ความล้ำสมัยของกรุงโตเกียว ไปจนถึงความงดงามทางวัฒนธรรมที่เป็นเอกลักษณ์ของเกียวโตและโอซาก้า',
    price: 29900,
    duration: '6 Days 5 Nights',
    days: 6,
    nights: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhWLrmozD4MXInms1Ghbu6DBrGViC_c_n8jD6jFbEaWXcyazs0_4VczfW13OA8NUza_Msjy1TB2YLaTgQQECeRGr2y4JYeWSwocXkB-_uO6_DGvn1UO7CniSn3axis-lJcUXMGOMGV2K8zgW081EPWM1cUXDdS90-zWKDye3q651uLPJaPkSMm444UYspzF8iHfenX2Clm7qE91NKq07yVqbvUPZg1sdG8bIgVyHO7DPpNLqqcLd-Q_ZQoZ5wQcdmuozT-DKuI-Bo',
    category: 'International',
    badge: 'Most Popular',
    groupSize: 'Max 15 Pax',
    language: 'Thai & English',
    accommodation: '4-Star Hotels',
    included: [
      '6 Nights in 4-Star Hotels (Double/Twin)',
      'Daily Breakfast & 5 Lunch Meals',
      'Professional Thai-Speaking Guide',
      'Ground transportation as per itinerary',
      'Travel Insurance coverage'
    ],
    excluded: [
      'International Flight Tickets',
      'Personal Expenses / Tips for Guide',
      'Single Supplement (Option available)'
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzkYyLXiN9DcQ0vnYoBe72tjxhPF6cVK_Xxi22LyvLfZH18kEB-qrjHL1WjcnStHUKop7oufDgr_NhZzhkpkWNliI9y4TO8QaCGefmV4Z3pJL26wujL56Hz8uE-fXT5KcxBrwWrOOnib9-9BeFn1_mrpj8Vt-Z8pe-IwqgCAWFBkFJktnUPQyVjspHDnCVtoMysdGaywXOQULgDxGLisvo1vR5UDkauNF2nBPjhlOQRAU38IgLBHqPD4IAg6hz5nUmM-dNzYuXC8g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWIcy9qRJQsRPc6DLoIKthgLU-OGSHHXz3o-8efbIDs2kqCJsuqE6hEf-lP25etGnKzOZtgm9bHuVt6omvZ_VU77ZDwcimVjfmKzdVgtmkZNxHnfRJoyF_eLBNgUDbIrE_gH-HjJyyTXkhZ250LV2-dIWFxqO2UW_17yX1kdPqNtc1RVFABIgueRzb8TfsmwAAv4ybzJ6OHY5frHHMWWMSFdUUvE5rvkvS5VjZ6QVm9SRiFYU5JayWG0ZohY88aHw6cksli4-qjlI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNc4FHsLi5fdc1bOJOyIJggSSohbuqrWqDRaUCpMHHlAgWNTp5dQ8Gv0EiwkDVYgw1oBx2CHmYXUCqnuDe_U7Had7E9InDqGlw6DS3FvzW_1YtVlwuVdI7_BOXZxmyACQo8SDXZpjt4Cx8zCrnDDSgcPhYsmdCxhZfOvyVlhcLvOF4VCnzt0tWml1ZBYI9jq7vx6RoQFnP1HvFJjxczcF63jvqK7kb0ELPtTrhdKSRY1wPJaYuGvck8ShA8HAF_Cu0oUZEt9L_Ivo'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Tokyo Night Life', titleTh: 'เดินทางถึงโตเกียว - ท่องราตรีชินจูกุ', description: 'Meet your guide at Narita Airport. Private transfer to your hotel. Evening exploration of Shinjukus vibrant neon streets.' },
      { day: 2, title: 'Old & New Tokyo Explore', titleTh: 'วัดอาซากุสะ - ฮาราจูกุ - ชิบูย่า', description: 'Visit historic Senso-ji Temple. Enjoy a lunch of traditional Tempura. Stroll through Harajuku and Shibuya Crossing.' },
      { day: 3, title: 'Mt. Fuji & Lake Kawaguchi', titleTh: 'ภูเขาไฟฟูจิ - ทะเลสาบคาวากุจิ', description: 'Full day trip to iconic Mt. Fuji area. Panoramic views from Chureito Pagoda.' },
      { day: 4, title: 'Bullet Train to Kyoto', titleTh: 'รถไฟชินคันเซ็นสู่เกียวโต', description: 'Experience the high-speed Shinkansen. Discover the wooden stage of Kiyomizu-dera.' }
    ]
  },
  {
    id: 'maldives-luxury',
    title: 'Luxury Maldives Getaway',
    titleTh: 'มัลดีฟส์ สวรรค์แห่งการพักผ่อนระดับพรีเมียม',
    description: 'Escape to crystal clear waters and white sandy beaches. Stay in premium overwater bungalows with all-inclusive amenities.',
    descriptionTh: 'หนีความวุ่นวายสู่สวรรค์กลางมหาสมุทร พักผ่อนในวิลล่ากลางน้ำสุดหรูพร้อมบริการระดับ 5 ดาวแบบครบวงจร',
    price: 45000,
    duration: '5 Days 4 Nights',
    days: 5,
    nights: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVR0gXEUA7_OezsCHWRrgxOgHYMThQYq6-270nSPtRUGe2EGtJjOcmG7F0AhK2oKONMhG70r0kQM6qgbFMoSJLBo6BBEQ3554NkN6j5yTGkc82doxBtJ6Naq0TmGQtKkDXzD01yc3nNyZi3T8jG8QSU6MZ5wAGKT1fXULwz3jzDNpGmJ2VunD_GonO1W8bguqN85VtpzKQGmgzonhxRN1m-s5fk_JJD1EE_tVqye6PoCn3Va36bbQj0IWmBSVdxxarZUHS4s9pSoI',
    category: 'International',
    badge: 'Best Seller',
    groupSize: 'Max 10 Pax',
    language: 'English',
    accommodation: 'Luxury Resorts',
    included: ['Round-trip Seaplane', 'All-inclusive Dining', 'Snorkeling Gear'],
    excluded: ['Visa Fees', 'Personal Spa treatments'],
    gallery: [],
    itinerary: []
  },
  {
    id: 'europe-grand',
    title: 'European Grand Tour',
    titleTh: 'ยุโรปแกรนด์ทัวร์: อารยธรรมแห่งโลกตะวันตก',
    description: 'Discover the heart of Europe. Visit Paris, Rome, and Switzerland in one magnificent journey.',
    descriptionTh: 'สำรวจหัวใจแห่งยุโรป ตั้งแต่ความโรแมนติกในปารีส มนต์ขลังแห่งโรม ไปจนถึงความงามของเทือกเขาแอลป์',
    price: 89000,
    duration: '10 Days 9 Nights',
    days: 10,
    nights: 9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnWHpCgHZeWlb0jp6kaMleONovyq_mCz9ySgiSPcULbT56qQAn1tzY_eikNbWcCpIG-Yd8_IY4srzX1Cd4DmnT4GowhQ-KHZp_mhHnbjF7U8KkFNBE_m4SNCrk-qTCONXKHS329852SZHScR8ySrzmu7zW8ZrnPoKaO6cT92vr-S6rLVGdcKwpL0uY06QaPyiGfSBPxo0QJ1E9gg08alyUio0COIrW_mABALnKgJeumjgGIxZbwwFWTrRnsEO6leA4Px3PyObnVNU',
    category: 'International',
    badge: 'Experience',
    groupSize: 'Max 20 Pax',
    language: 'Thai & English',
    accommodation: '4-5 Star Hotels',
    included: ['Flight tickets included', 'All Entrance Fees'],
    excluded: ['Driver Gratuities'],
    gallery: [],
    itinerary: []
  }
];
