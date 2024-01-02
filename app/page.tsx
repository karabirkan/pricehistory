import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 border-2 border-red-500 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Unlock the Power of Smart Shopping with Our Price History Web App
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Empower Your Shopping Experience with
              <span className="text-primary"> PriceHistory</span>
            </h1>
            <p className="mt-6">
              Drive Results with Robust Product and Growth Analytics for
              Enhanced Conversions, Engagement, and Retention.
            </p>
            Search Bar
          </div>
          Hero
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["iphone", "book", "sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
