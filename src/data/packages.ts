import pkgImage1 from "../assets/packages/package-image-1.jpg";
import pkgImage2 from "../assets/packages/package-image-2.jpg";
import pkgImage3 from "../assets/packages/package-image-3.jpg";
import pkgImage4 from "../assets/packages/package-image-4.jpg";
import pkgImage5 from "../assets/packages/package-image-5.jpg";
import pkgImage6 from "../assets/packages/package-image-6.jpg";
import pkgImage7 from "../assets/packages/package-image-7.jpg";
import pkgImage8 from "../assets/packages/package-image-8.jpg";
import pkgImage9 from "../assets/packages/package-image-9.jpg";
import pkgImage10 from "../assets/packages/package-image-10.jpg";
import pkgImage11 from "../assets/packages/package-image-11.jpg";
import pkgImage12 from "../assets/packages/package-image-12.jpg";
import pkgImage13 from "../assets/packages/package-image-13.jpg";
import pkgImage14 from "../assets/packages/package-image-14.jpg";
import pkgImage15 from "../assets/packages/package-image-15.jpg";
import pkgImage16 from "../assets/packages/package-image-16.jpg";
import pkgImage17 from "../assets/packages/package-image-17.jpg";
import pkgImage18 from "../assets/packages/package-image-18.jpg";
import pkgImage19 from "../assets/packages/package-image-19.jpg";
import pkgImage20 from "../assets/packages/package-image-20.jpg";
import pkgImage21 from "../assets/packages/package-image-21.jpg";
import pkgImage22 from "../assets/packages/package-image-22.jpg";

export interface TourPackage {
    id: string;
    country: string;
    title: string;
    group: string;
    departureDate: string;
    nights: number;
    days: number;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    tag?: "featured" | "bestseller" | "premium" | "new";
}

export const packages: TourPackage[] = [
    // ARMENIA
    {
        id: "armenia-group-1",
        country: "Armenia",
        title: "Armenia Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 3299,
        image: pkgImage1,
        rating: 4.8,
        reviews: 124,
        tag: "featured"
    },
    {
        id: "armenia-group-2",
        country: "Armenia",
        title: "Armenia Group Departure",
        group: "Group 2",
        departureDate: "March 18",
        nights: 3,
        days: 4,
        price: 2999,
        image: pkgImage2,
        rating: 4.8,
        reviews: 98
    },
    // AZERBAIJAN
    {
        id: "azerbaijan-group-1",
        country: "Azerbaijan",
        title: "Azerbaijan Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 2999,
        image: pkgImage3,
        rating: 4.7,
        reviews: 85
    },
    {
        id: "azerbaijan-group-2",
        country: "Azerbaijan",
        title: "Azerbaijan Group Departure",
        group: "Group 2",
        departureDate: "Feb 12",
        nights: 3,
        days: 4,
        price: 2199,
        image: pkgImage4,
        rating: 4.9,
        reviews: 156,
        tag: "bestseller"
    },
    // GEORGIA
    {
        id: "georgia-group-1",
        country: "Georgia",
        title: "Georgia Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 3,
        days: 4,
        price: 2999,
        image: pkgImage5,
        rating: 4.8,
        reviews: 210,
        tag: "featured"
    },
    {
        id: "georgia-group-2",
        country: "Georgia",
        title: "Georgia Group Departure",
        group: "Group 2",
        departureDate: "March 18",
        nights: 3,
        days: 4,
        price: 3099,
        image: pkgImage6,
        rating: 4.8,
        reviews: 180
    },
    // KAZAKHSTAN
    {
        id: "kazakhstan-group-1",
        country: "Kazakhstan",
        title: "Kazakhstan Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 3499,
        image: pkgImage7,
        rating: 4.7,
        reviews: 95
    },
    {
        id: "kazakhstan-group-2",
        country: "Kazakhstan",
        title: "Kazakhstan Group Departure",
        group: "Group 2",
        departureDate: "Mar 17",
        nights: 4,
        days: 5,
        price: 3499,
        image: pkgImage8,
        rating: 4.7,
        reviews: 88
    },
    {
        id: "kazakhstan-group-3",
        country: "Kazakhstan",
        title: "Kazakhstan Group Departure",
        group: "Group 3",
        departureDate: "Mar 17",
        nights: 5,
        days: 6,
        price: 3749,
        image: pkgImage9,
        rating: 4.9,
        reviews: 112,
        tag: "premium"
    },
    {
        id: "kazakhstan-group-4",
        country: "Kazakhstan",
        title: "Kazakhstan Group Departure",
        group: "Group 4",
        departureDate: "Mar 17",
        nights: 3,
        days: 4,
        price: 3099,
        image: pkgImage10,
        rating: 4.6,
        reviews: 75
    },
    // KYRGYZSTAN
    {
        id: "kyrgyzstan-group-1",
        country: "Kyrgyzstan",
        title: "Kyrgyzstan Group Departure",
        group: "Group 1",
        departureDate: "March 17",
        nights: 4,
        days: 5,
        price: 3449,
        image: pkgImage11,
        rating: 4.8,
        reviews: 45
    },
    // UZBEKISTAN
    {
        id: "uzbekistan-group-1",
        country: "Uzbekistan",
        title: "Uzbekistan Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 2999,
        image: pkgImage12,
        rating: 4.7,
        reviews: 67
    },
    // KENYA
    {
        id: "kenya-group-1",
        country: "Kenya",
        title: "Kenya Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 5499,
        image: pkgImage13,
        rating: 4.9,
        reviews: 156,
        tag: "premium"
    },
    // SINGAPORE - MALAYSIA
    {
        id: "singapore-malaysia-group-1",
        country: "Singapore - Malaysia",
        title: "Singapore & Malaysia Group",
        group: "Group 1",
        departureDate: "March 16",
        nights: 5,
        days: 6,
        price: 4499,
        image: pkgImage14,
        rating: 4.9,
        reviews: 234,
        tag: "bestseller"
    },
    // OMAN
    {
        id: "oman-group-1",
        country: "Oman",
        title: "Oman Group Departure",
        group: "Group 1",
        departureDate: "March 19",
        nights: 4,
        days: 5,
        price: 999,
        image: pkgImage15,
        rating: 4.6,
        reviews: 89,
        tag: "new"
    },
    // PATTAYA + BANGKOK
    {
        id: "pattaya-bangkok-group-1",
        country: "Pattaya + Bangkok",
        title: "Pattaya & Bangkok Group",
        group: "Group 1",
        departureDate: "March 19",
        nights: 3,
        days: 4,
        price: 3999,
        image: pkgImage16,
        rating: 4.7,
        reviews: 178
    },
    // PHUKET
    {
        id: "phuket-group-1",
        country: "Phuket",
        title: "Phuket Group Departure",
        group: "Group 1",
        departureDate: "March 19",
        nights: 3,
        days: 4,
        price: 4499,
        image: pkgImage17,
        rating: 4.8,
        reviews: 145
    },
    // SRILANKA
    {
        id: "srilanka-group-1",
        country: "Sri Lanka",
        title: "Sri Lanka Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 3,
        days: 4,
        price: 3149,
        image: pkgImage18,
        rating: 4.7,
        reviews: 92
    },
    // RUSSIA
    {
        id: "russia-group-1",
        country: "Russia",
        title: "Russia Group Departure",
        group: "Group 1",
        departureDate: "March 17",
        nights: 5,
        days: 6,
        price: 5099,
        image: pkgImage19,
        rating: 4.9,
        reviews: 110,
        tag: "premium"
    },
    // EGYPT
    {
        id: "egypt-group-1",
        country: "Egypt",
        title: "Egypt Group Departure",
        group: "Group 1",
        departureDate: "March 19",
        nights: 3,
        days: 4,
        price: 3299,
        image: pkgImage20,
        rating: 4.8,
        reviews: 245,
        tag: "bestseller"
    },
    // JORDAN
    {
        id: "jordan-group-1",
        country: "Jordan",
        title: "Jordan Group Departure",
        group: "Group 1",
        departureDate: "March 18",
        nights: 4,
        days: 5,
        price: 3499,
        image: pkgImage21,
        rating: 4.9,
        reviews: 134
    },
    // JAPAN
    {
        id: "japan-group-1",
        country: "Japan",
        title: "Japan Group Departure",
        group: "Group 1",
        departureDate: "March 16",
        nights: 8,
        days: 9,
        price: 13000,
        image: pkgImage22,
        rating: 5.0,
        reviews: 89,
        tag: "premium"
    }
];
