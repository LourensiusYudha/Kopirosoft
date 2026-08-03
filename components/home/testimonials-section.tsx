import { DownloadButton } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

export function TestimonialsSection() {
  return (
    <section id="pricing" className="pt-10">
      <div className="container-wide text-center">
        <Reveal>
          <h2 className="text-[34px] font-bold leading-none tracking-[-.02em] sm:text-[42px]">Join the 70+ million using Finance</h2>
          <div className="mt-8"><DownloadButton label="Download the app" /></div>
          <p className="mx-auto mt-9 max-w-[750px] text-[15px] leading-[19.5px] text-[#999]">
            Prices and fees displayed on this page are estimates based on our most common and standard cost structure, available to most account types in most regions where we provide our services. Different prices and fees may apply in different regions, for different account types. The prices and fees that apply to you are available for review during account registration and are also available at any time from the Fees link in your Finance App account. Log in to your account to review the latest fees. Please note that making payments with currency conversion is only available in permitted jurisdictions.
          </p>
        </Reveal>
      </div>
      <TestimonialCarousel />
    </section>
  );
}
