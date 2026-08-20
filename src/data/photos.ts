export type Category = "All" | "Weddings" | "Portraits" | "Landscapes" | "Street" | "Editorial";

export interface Photo {
  id: number;
  src: string;
  category: Exclude<Category, "All">;
  title: string;
  location: string;
  year: string;
  /** rough aspect to drive masonry sizing: "tall" | "wide" | "square" */
  shape: "tall" | "wide" | "square";
}

// Curated Unsplash images chosen for editorial feel.
export const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
    category: "Weddings",
    title: "Vows at Dusk",
    location: "Tuscany, IT",
    year: "2024",
    shape: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop",
    category: "Landscapes",
    title: "Quiet Water",
    location: "Banff, CA",
    year: "2023",
    shape: "wide",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80&auto=format&fit=crop",
    category: "Portraits",
    title: "Marlowe",
    location: "Studio, NY",
    year: "2024",
    shape: "square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&q=80&auto=format&fit=crop",
    category: "Landscapes",
    title: "Ridge Light",
    location: "Dolomites, IT",
    year: "2023",
    shape: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=1400&q=80&auto=format&fit=crop",
    category: "Street",
    title: "Crossing",
    location: "Tokyo, JP",
    year: "2024",
    shape: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&q=80&auto=format&fit=crop",
    category: "Portraits",
    title: "Daylight Study",
    location: "Lisbon, PT",
    year: "2023",
    shape: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80&auto=format&fit=crop",
    category: "Weddings",
    title: "First Light",
    location: "Big Sur, US",
    year: "2024",
    shape: "wide",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80&auto=format&fit=crop",
    category: "Editorial",
    title: "Issue 04",
    location: "Paris, FR",
    year: "2024",
    shape: "square",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80&auto=format&fit=crop",
    category: "Landscapes",
    title: "Harvest",
    location: "Provence, FR",
    year: "2022",
    shape: "wide",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1000&q=80&auto=format&fit=crop",
    category: "Street",
    title: "Underground",
    location: "Berlin, DE",
    year: "2023",
    shape: "tall",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80&auto=format&fit=crop",
    category: "Editorial",
    title: "After Hours",
    location: "London, UK",
    year: "2024",
    shape: "square",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80&auto=format&fit=crop",
    category: "Weddings",
    title: "Quiet Vows",
    location: "Hudson Valley, US",
    year: "2023",
    shape: "wide",
  },
];

export const categories: Category[] = [
  "All",
  "Weddings",
  "Portraits",
  "Landscapes",
  "Street",
  "Editorial",
];
