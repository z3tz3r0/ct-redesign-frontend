import { type FC } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const productCategories = [
  {
    title: "Internal Mixers",
    description: "High-performance mixing solutions for polymer processing",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Extruders",
    description: "Single and twin-screw extruders for various applications",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Molding Machines",
    description: "Precision compression molding for quality production",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Testing Equipment",
    description: "Comprehensive testing solutions for quality assurance",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

const ProductCategory: FC = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-24 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of industrial machinery for polymer and food
            processing applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent>
                <h3 className="text-xl font-bold text-primary">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-accent text-accent bg-primary hover:bg-primary/90 hover:text-white"
                >
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
