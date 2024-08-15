import Image from "next/image";

// arrow function
const OrganizationCard = ({ image, position, name, description }) => {
  return (
    <div className="shadow-md rounded-md border-2 max-w-[300px] max-h-[300px] h-full">
      <Image src={image} width={300} height={300} alt="card image" />
      <div className="p-4">
        <h1 className="text-4xl font-semibold">{position}</h1>
        <h2 className="text-xl ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OrganizationCard;
