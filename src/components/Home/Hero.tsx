import { Link } from "react-router";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-primary -mt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 19, 43, 0.8), rgba(7, 19, 43, 0.8)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920&h=1080')`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Precision Engineering for
            <span className="text-primary block">
              Polymer & Food Processing
            </span>
          </h1>
          <p className="md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Reliable machinery solutions since 2004. Leading manufacturer of
            industrial equipment for polymer and food processing industries.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg"
          >
            <Link to="/products">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
