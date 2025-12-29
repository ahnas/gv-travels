import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <div className="sticky top-[120px] z-40 -mt-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-card shadow-elevated border border-border p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="packages">Package Search</TabsTrigger>
              <TabsTrigger value="activities">Activity Search</TabsTrigger>
              <TabsTrigger value="destinations">Destination Finder</TabsTrigger>
            </TabsList>

            <TabsContent value="packages" className="mt-0">
              <div className="grid gap-4 md:grid-cols-4 md:gap-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Destination" className="pl-10" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="date" placeholder="Check-in" className="pl-10" />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Guests" className="pl-10" />
                </div>
                <Button className="bg-accent hover:bg-accent/90 h-11">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="activities" className="mt-0">
              <div className="grid gap-4 md:grid-cols-4 md:gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Activity name" className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Location" className="pl-10" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="date" placeholder="Date" className="pl-10" />
                </div>
                <Button className="bg-accent hover:bg-accent/90 h-11">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="destinations" className="mt-0">
              <div className="grid gap-4 md:grid-cols-4 md:gap-2">
                <Input placeholder="Budget (AED)" type="number" />
                <Input placeholder="Travel style" />
                <Input placeholder="Duration (days)" type="number" />
                <Button className="bg-accent hover:bg-accent/90 h-11">
                  <Search className="mr-2 h-4 w-4" />
                  Find Destinations
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
