import Image from "next/image";
import { Reveal } from "@/components/reveal";

const features = [
  {
    image: "/images/city.webp",
    title: "Banking redefined for the modern era.",
    body: "Our app provides advanced tools tailored to your spending habits, promoting informed financial choices and effortless achievement of your objectives.",
  },
  {
    image: "/images/insights.webp",
    title: "Real-time financial insights at your fingertips.",
    body: "Gain a clear perspective of your earnings, outgoings, and investments through interactive dashboards that deliver actionable insights for superior money management.",
  },
  {
    image: "/images/automation.webp",
    title: "Automate savings and payments effortlessly.",
    body: "Configure automated transfers and reminders ensuring timely bill payments and consistent savings growth without any manual intervention.",
  },
  {
    image: "/images/investment.webp",
    title: "Investment strategies simplified.",
    body: "Leverage AI-driven recommendations to construct a diversified portfolio aligned with your risk appetite and financial aspirations, all within an intuitive interface.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container-wide px-3 pb-14 pt-[60px]">
      <Reveal>
        <h2 className="mx-auto max-w-[470px] text-center text-[30px] font-bold leading-none tracking-[-.02em]">
          Finance is revolutionizing<br />money management<br />for high solutions
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {features.map((feature) => (
          <Reveal key={feature.title}>
            <article>
              <div className="relative aspect-[.832] overflow-hidden rounded-lg bg-[#ececec]">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px" />
              </div>
              <h3 className="mt-5 min-h-[46px] text-lg font-semibold leading-[23px] tracking-[-.02em]">{feature.title}</h3>
              <p className="mt-3 text-[15px] leading-[19.5px] text-[#858585]">{feature.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
