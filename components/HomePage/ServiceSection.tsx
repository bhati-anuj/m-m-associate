import Image from "next/image";
import Link from "next/link";
import construction from "@/utils/services/construction.jpg";
import interior from "@/utils/services/interior.jpg";
import lift from "@/utils/services/lift.jpg";

export default function ServiceSection() {
  const cards = [
    {
      id: 1,
      image: construction,
      title: "M&M ArcCon",
      text: "delivers world-class & Seamless Architectural design & Construction solutions.",
      link: "mnm-construction",
    },
    {
      id: 2,
      image: interior,
      title: "M&M Interio",
      text: "blending Creativity & Functionality to craft Aesthetically Stunning Environment.",
      link: "mnm-interior",
    },
    {
      id: 3,
      image: lift,
      title: "M&M Lifts",
      text: " provides state-of-the-art elevator solutions designed for you needs specifically.",
      link: "mnm-lifts",
    },
  ];

  return (
    <section className="py-16 px-4 m-auto  ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-muted-foreground">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-hidden group"
          >
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                src={card.image}
                alt="Card Image"
                width={320}
                height={400}
              />
            </div>

            <div className="flex justify-center items-center ">
              <div className="p-4 md:p-5 ">
                <h3 className="text-2xl text-textBlue font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="mt-1 text-gray-800">{card.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
