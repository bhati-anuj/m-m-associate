import Image from "next/image";
import contact from "@/utils/Contactus/contactus.jpg";

const ContactUsHeroComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 reverse min-h-screen bg-bgGray ">
      {/* Content Section */}
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-textGolden font-semibold mb-4">
            Welcome to Home Builder
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            You Have a Question? Let us Answer it.
          </h1>
          <p className="text-gray-600 mb-8">
            We are passionate about leveraging technology to empower businesses,
            offering comprehensive solutions that drive growth and success in
            the digital era.
          </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative h-[300px] lg:h-screen">
        <Image
          src={contact}
          alt="contact us"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ContactUsHeroComponent;
