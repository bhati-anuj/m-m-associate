import Image from "next/image";
import Link from "next/link";
import construction from "@/utils/services/construction.jpg";
import interior from "@/utils/services/interior.jpg";
import lift from "@/utils/services/lift.jpg";

export default function ServicesLifts() {
  const cards = [
    {
      id: 1,
      image: construction,
      title: "Planning",
      text: "Some quick example text to build on the card title and make up the bulk of the content.",
      link: "mnm-construction",
    },
    {
      id: 2,
      image: interior,
      title: "Construction",
      text: "This is another card with some different example text to showcase content.",
      link: "mnm-interior",
    },
    {
      id: 3,
      image: lift,
      title: "M&M Lifts",
      text: "Yet another card with additional example text for demonstration purposes.",
      link: "mnm-lifts",
    },
    {
      id: 2,
      image: interior,
      title: "M&M Interio",
      text: "This is another card with some different example text to showcase content.",
      link: "mnm-interior",
    },
    {
      id: 2,
      image: interior,
      title: "M&M Interio",
      text: "This is another card with some different example text to showcase content.",
      link: "mnm-interior",
    },
  ];

  return (
    <section className="py-16 px-4 m-auto  ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Lifts Services</h2>
        <p className="text-muted-foreground">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {cards.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-hidden group"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                src={card.image}
                alt="Card Image"
                width={220}
                height={300}
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
