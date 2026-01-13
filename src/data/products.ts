export interface Product {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    video: string;
    alt: string;
    pageClass: string;
}

export const products: Product[] = [
    {
        slug: "flvwer",
        title: "INNEDIT - FLVWER",
        subtitle: "FLVWER",
        image: "/muratravis/FLVWER.webp",
        video: "/muratravis/compress-INNEDIT-VIDEO-1-V2.mp4",
        alt: "Gorra FLVWER",
        pageClass: "flvwer"
    },
    {
        slug: "muratravis",
        title: "INNEDIT - MURATRAVIS UTOPIA",
        subtitle: "MURATRAVIS UTOPIA",
        image: "/muratravis/UTOPIA.webp",
        video: "/muratravis/compress-INNEDIT-VIDEO-2-V2.mp4",
        alt: "Gorra Utopia",
        pageClass: "muratravis"
    },
    {
        slug: "crystalblack",
        title: "INNEDIT - CRYSTAL BLACK",
        subtitle: "CRYSTAL BLACK",
        image: "/muratravis/CRYSTALBLACK.webp",
        video: "/muratravis/compress-INNEDIT-VIDEO-3-V2.mp4",
        alt: "Gorra Crystal Black",
        pageClass: "crystalblack"
    },
    {
        slug: "anymoreandinnedit",
        title: "INNEDIT - ANYMORE AND INNEDIT",
        subtitle: "ANYMORE AND INNEDIT",
        image: "/inneditxanymore/ANYMOREANDINNEDIT.webp",
        video: "/inneditxanymore/compress-INNEDIT-VIDEO-4-V2.mp4",
        alt: "Gorra Anymore and Innedit",
        pageClass: "anymoreandinnedit"
    },
    {
        slug: "lamiribrucewayne",
        title: "INNEDIT - LAMIRI BRUCE WAYNE",
        subtitle: "LAMIRI BRUCE WAYNE",
        image: "/inneditxanymore/LAMIRIBRUCEWAYNE.webp",
        video: "/inneditxanymore/compress-INNEDIT-VIDEO-5-V2.mp4",
        alt: "Gorra Lamiri Bruce Wayne",
        pageClass: "lamiribrucewayne"
    },
    {
        slug: "muratraviselectric",
        title: "INNEDIT - MURATRAVIS ELECTRIC",
        subtitle: "MURATRAVIS ELECTRIC",
        image: "/inneditxanymore/MURATRAVISELECTRIC.webp",
        video: "/inneditxanymore/compress-INNEDIT-VIDEO-6-V2.mp4",
        alt: "Gorra Muratravis Electric",
        pageClass: "muratraviselectric"
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return products.map(p => p.slug);
}
