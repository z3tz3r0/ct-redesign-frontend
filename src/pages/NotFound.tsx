import { Button } from "@/components/ui/button";
import { Link } from "react-router"; // Assuming you are using react-router-dom

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 -mt-16">
      <div className="bg-white p-8 sm:p-12 md:p-16 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Oops! If you'd like to see{" "}
          <span className="text-primary">more pages</span> or{" "}
          <span className="text-primary">features</span>,<br />
          please consider
          <br />
          hiring me!
        </h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Go Back to Homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
