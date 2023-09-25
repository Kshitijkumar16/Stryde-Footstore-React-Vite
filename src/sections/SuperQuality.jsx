import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="Super-product"
      className=" flex justify-between items-center gap-10 w-full max-container max-lg:flex-col "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize lg:max-w-lg font-bold">
          We Provide You 
          <span className="text-coral-red"> Super</span> <span className="text-coral-red"> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.{" "}
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center ">
        <img
          src={shoe8}
          alt="Super Product Image"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
