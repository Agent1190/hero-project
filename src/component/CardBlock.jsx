// components/CardBlock.jsx
import Image from "next/image";

export default function CardBlock({
  iconSrc,
  title,
  imageSrc,
  altText = "Card Image",
  textWhite,
}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden mx-2 xl:mx-0 mb-4">
      {/* Image container with overlay */}
      <div className="relative w-full h-[500px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        {/* Main Image */}
        <Image
          src={imageSrc}
          alt={altText}
          priority
          fill
          className="object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-start p-4">
          {/* Icon */}
          <div className="w-10 h-10 mb-3">
            <Image
              src={iconSrc}
              alt="Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <h2
            className={`text-lg lg:text-xl font-sfpro-medium py-1 rounded-md  ${
              textWhite ? "text-white" : "text-prime"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
