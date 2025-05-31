import { BadgeCheck, Binoculars, Cog, type LucideIcon } from "lucide-react";

interface features {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: features[] = [
  {
    title: "20+ Years of Experience",
    description: "Proven expertise in industrial machinery since 2004",
    icon: Binoculars,
  },
  {
    title: "Expertise in Polymer & Food",
    description: "Specialized knowledge in both polymer and food processing",
    icon: Cog,
  },
  {
    title: "Quality & Satisfaction Guaranteed",
    description: "Our company policy: To make satisfactory products",
    icon: BadgeCheck,
  },
];

const WhyUs = () => {
  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose <span className="text-primary">CHAREON TUT?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Excellence in industrial machinery manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-2xl">
                  <feature.icon size={32} className="text-white" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
