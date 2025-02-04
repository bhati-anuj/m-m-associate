import Image from "next/image";
// import Link from "next/link";
import construction from "@/utils/services/construction.jpg";
import interior from "@/utils/services/interior.jpg";
import lift from "@/utils/services/lift.jpg";


export default function ServiceSection() {
  const cards = [
    {
      id: 1,
      image: construction,
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the content."
    },
    {
      id: 2,
      image: interior,
      title: "Card Title 2",
      text: "This is another card with some different example text to showcase content."
    },
    {
      id: 3,
      image: lift,
      title: "Card Title 3",
      text: "Yet another card with additional example text for demonstration purposes."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-hidden group">
          <div className="relative w-full h-96 overflow-hidden">
            <Image
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              src={card.image}
              alt="Card Image"
              width={320}
              height={400}
            />
          </div>
          <div className="absolute top-0 start-0 end-0">
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              {/* <p className="mt-1 text-gray-800">{card.text}</p> */}
              {/* <Link href="#" className="mt-4 inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
               View Service
              </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

