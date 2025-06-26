// components/InfoCard.jsx

export default function InfoCard({ emoji, title, description }) {
  return (
    <div className="bg-[#F4FAFA] rounded-xl p-3 max-w-md w-full border-3 border-[#F6FBFB] mx-auto">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-sfpro-medium text-prime mb-2">
        <span className="mr-2">{emoji}</span>
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-xl text-prime leading-relaxed font-sfpro-regular">
        {description}
      </p>
    </div>
  );
}
