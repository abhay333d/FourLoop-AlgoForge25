import recliner1 from '../../Product/recliner1.jpg'
import recliner2 from '../../Product/recliner2.jpg'
import recliner3 from '../../Product/recliner3.jpg'
import recliner4 from '../../Product/recliner4.jpg'

import lamp1 from '../../Product/lamp1.jpg'
import lamp2 from '../../Product/lamp2.jpg'
import lamp3 from '../../Product/lamp3.jpg'
import lamp4 from '../../Product/lamp4.jpg'

import DoubleBed1 from '../../Product/DoubleBed1.jpg'
import DoubleBed2 from '../../Product/DoubleBed2.jpg'
import DoubleBed3 from '../../Product/DoubleBed3.jpg'
import DoubleBed4 from '../../Product/DoubleBed4.jpg'

import TV1 from '../../Product/TV1.jpg'
import TV2 from '../../Product/TV2.jpg'
import TV3 from '../../Product/TV3.jpg'

import StorageBench1 from '../../Product/Storage-Bench1.png'
import StorageBench2 from '../../Product/Storage-Bench2.png'
import StorageBench3 from '../../Product/Storage-Bench3.png'
import StorageBench4 from '../../Product/Storage-Bench4.png'

import TableLamp1 from '../../Product/Table-lamp1.jpg'
import TableLamp2 from '../../Product/Table-lamp2.jpg'
import TableLamp3 from '../../Product/Table-lamp3.jpg'
import TableLamp4 from '../../Product/Table-lamp4.jpg'

import RoundSideTable1 from '../../Product/RoundSideTable1.jpg'
import RoundSideTable2 from '../../Product/RoundSideTable2.jpg'
import RoundSideTable3 from '../../Product/RoundSideTable3.jpg'

import wardrobe1 from '../../Product/wardrobe1 .jpg'
import wardrobe2 from '../../Product/wardrobe2.jpg'
import wardrobe3 from '../../Product/wardrobe3.jpg'
import wardrobe4 from '../../Product/wardrobe4.jpg'

import WoodenShoeRack1 from '../../Product/WoodenShoeRack1 .jpg'
import WoodenShoeRack2 from '../../Product/WoodenShoeRack2.jpg'
import WoodenShoeRack3 from '../../Product/WoodenShoeRack3.jpg'
import WoodenShoeRack4 from '../../Product/WoodenShoeRack4.jpg'

import Floor1 from '../../Product/Floor1.jpg'
import Floor2 from '../../Product/Floor2.jpg'
import Floor3 from '../../Product/Floor3.jpg'

import wall1 from '../../Product/wall1.png'
import wall2 from '../../Product/wall2.png'
import Wall3 from '../../Product/Wall3.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Luxury Recliner Chair",
        description: "A comfortable recliner chair with premium fabric and adjustable positions for ultimate relaxation.",
        price: 12990,
        image: [recliner1, recliner2, recliner3, recliner4],
        category: "Living Room",
        subCategory: "Chairs",
        sizes: ["Standard"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Modern Floor Lamp",
        description: "Elegant contemporary floor lamp with adjustable height and warm lighting for your living space.",
        price: 8990,
        image: [lamp1, lamp2, lamp3, lamp4],
        category: "Lighting",
        subCategory: "Floor Lamps",
        sizes: ["Standard"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Premium Double Bed",
        description: "Luxurious double bed with sturdy frame and elegant design for a comfortable night's sleep.",
        price: 14950,
        image: [DoubleBed1, DoubleBed2, DoubleBed3, DoubleBed4],
        category: "Bedroom",
        subCategory: "Beds",
        sizes: ["Queen", "King"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Smart TV Console",
        description: "Modern TV console with clean lines and integrated cable management for a sleek entertainment setup.",
        price: 12500,
        image: [TV1, TV2, TV3],
        category: "Living Room",
        subCategory: "Entertainment Units",
        sizes: ["Standard"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Multifunctional Storage Bench",
        description: "Versatile storage bench that offers seating and hidden storage for organizing your space.",
        price: 7800,
        image: [StorageBench1, StorageBench2, StorageBench3, StorageBench4],
        category: "Living Room",
        subCategory: "Storage",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Designer Table Lamp",
        description: "Artistic table lamp with unique design and warm lighting perfect for bedside or living room.",
        price: 5990,
        image: [TableLamp1, TableLamp2, TableLamp3, TableLamp4],
        category: "Lighting",
        subCategory: "Table Lamps",
        sizes: ["Standard"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Round Side Table",
        description: "Elegant round side table with marble top and metal base for a sophisticated accent piece.",
        price: 3490,
        image: [RoundSideTable1, RoundSideTable2, RoundSideTable3],
        category: "Living Room",
        subCategory: "Tables",
        sizes: ["Standard"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Modern Wardrobe",
        description: "Spacious wardrobe with contemporary design offering ample storage for all your clothing needs.",
        price: 13250,
        image: [wardrobe1, wardrobe2, wardrobe3, wardrobe4],
        category: "Bedroom",
        subCategory: "Storage",
        sizes: ["Standard"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Wooden Shoe Rack",
        description: "Stylish and practical wooden shoe rack to organize your footwear collection with ease.",
        price: 4790,
        image: [WoodenShoeRack1, WoodenShoeRack2, WoodenShoeRack3, WoodenShoeRack4],
        category: "Storage",
        subCategory: "Shoe Storage",
        sizes: ["Standard"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Premium Flooring",
        description: "High-quality flooring options to elevate the look and feel of your space with durability and style.",
        price: 12000,
        image: [Floor1, Floor2, Floor3],
        category: "Home Decor",
        subCategory: "Flooring",
        sizes: ["Per sq.ft"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Designer Wall Panels",
        description: "Contemporary wall panels to add texture and visual interest to any wall in your home.",
        price: 8490,
        image: [wall1, wall2, Wall3],
        category: "Home Decor",
        subCategory: "Wall Decor",
        sizes: ["Standard"],
        date: 1716623345448,
        bestseller: false
    }
]