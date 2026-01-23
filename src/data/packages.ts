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
        image: "https://images.unsplash.com/photo-1714401809468-f9744144efc0?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1714401809468-f9744144efc0?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1695902116446-e32c44a1feb3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1695902116446-e32c44a1feb3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1759167631426-a1242a61da7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1759167631426-a1242a61da7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1759167631426-a1242a61da7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1759167631426-a1242a61da7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1718320350273-9ff309792b49?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://plus.unsplash.com/premium_photo-1694475360082-ddd496b750d4?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1763377220339-de687c3efad4?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1566838345788-db81125cef85?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
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
        image: "https://plus.unsplash.com/premium_photo-1754251250739-a7efc9c24301?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        rating: 5.0,
        reviews: 89,
        tag: "premium"
    }
];
