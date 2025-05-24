
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { FilterSidebar } from "@/components/marketplace/FilterSidebar";
import { ListingCard } from "@/components/marketplace/ListingCard";
import { FloatingChat } from "@/components/ui/floating-chat";
import { Grid, List, SlidersHorizontal } from "lucide-react";

// Mock data for listings
const mockListings = [
  {
    id: "1",
    title: "MacBook Pro 13-inch 2021",
    price: "$1,200",
    condition: "Like New",
    description: "Perfect condition MacBook Pro with M1 chip. Comes with original charger and box. Used for only 6 months.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    seller: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      university: "University of Dhaka",
      rating: 4.9
    },
    category: "Electronics"
  },
  {
    id: "2",
    title: "Calculus Textbook - Stewart",
    price: "$45",
    condition: "Good",
    description: "8th Edition Stewart Calculus textbook. Some highlighting but all pages intact. Great for MATH 101.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    seller: {
      name: "Ahmed Rahman",
      avatar: "/placeholder.svg",
      university: "BUET",
      rating: 4.7
    },
    category: "Textbooks"
  },
  {
    id: "3",
    title: "Math Tutoring Services",
    price: "$15",
    condition: "N/A",
    description: "Experienced math tutor offering help with calculus, algebra, and statistics. 3+ years experience.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    seller: {
      name: "Maria Santos",
      avatar: "/placeholder.svg",
      university: "NSU",
      rating: 4.95
    },
    category: "Services",
    isService: true
  },
  {
    id: "4",
    title: "Study Desk with Drawers",
    price: "$80",
    condition: "Good",
    description: "Wooden study desk with 3 drawers. Perfect for dorm room. Easy to assemble.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    seller: {
      name: "John Doe",
      avatar: "/placeholder.svg",
      university: "IUT Dhaka",
      rating: 4.6
    },
    category: "Furniture"
  },
  {
    id: "5",
    title: "Gaming Laptop - ASUS ROG",
    price: "$950",
    condition: "Good",
    description: "ASUS ROG Strix gaming laptop. RTX 3060, 16GB RAM, 512GB SSD. Great for gaming and projects.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    seller: {
      name: "David Kim",
      avatar: "/placeholder.svg",
      university: "BRAC University",
      rating: 4.8
    },
    category: "Electronics"
  },
  {
    id: "6",
    title: "Organic Chemistry Lab Kit",
    price: "$65",
    condition: "New",
    description: "Complete organic chemistry lab kit with all necessary equipment. Never used, still in packaging.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    seller: {
      name: "Lisa Park",
      avatar: "/placeholder.svg",
      university: "University of Dhaka",
      rating: 4.9
    },
    category: "Academic Supplies"
  }
];

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isAuthenticated={true} />
      
      <div className="flex">
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
        
        <div className="flex-1 flex">
          {/* Filters Sidebar */}
          <div className="w-80 border-r bg-white p-6">
            <FilterSidebar />
          </div>
          
          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold">Marketplace</h1>
                  <p className="text-gray-600">Discover items and services from your university community</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center border rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-sm">
                    Showing {mockListings.length} results
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    University of Dhaka
                  </Badge>
                </div>
                
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
            
            {/* Listings Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {mockListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  {...listing}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="secondary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>
      
      <FloatingChat />
    </div>
  );
}
