"use client";

const industries = [
  {
    name: "Roofing",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Electrical",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Painting",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Landscaping",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pool Services",
    image:
      "https://images.unsplash.com/photo-1592345965963-cde4e1c83608?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "General Contracting",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "other Services",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TargetIndustries() {
  return (
    <section className="w-full bg-[#020F1C] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          TARGET INDUSTRIES
        </h2>

        {/* Industry Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-2xl border border-[#263B50] bg-[#0B1927] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex min-h-[58px] items-center justify-center px-3">
                <h3 className="text-center text-base font-semibold text-white sm:text-lg">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}