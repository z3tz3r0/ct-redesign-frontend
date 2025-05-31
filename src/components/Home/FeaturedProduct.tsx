import type { FC } from "react";
import { Link } from "react-router";
import { products } from "../../data/products";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const featuredProduct = products.filter((item) => item.isFeature);

const FeaturedProduct: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular and innovative machinery solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProduct.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent>
                <h3 className="text-xl font-bold text-primary">
                  {product.name}
                </h3>
                <p className="ext-gray-600 text-sm">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                  <Link to="/product/1">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
