import React from "react";

type props = {
  currCustomer: number;
  images: string[];
};
const MainContainer: React.FC<props> = ({ currCustomer, images }) => {
  return (
    <div className="mx-10 py-6 px-10 max-h-screen">
      <h1 className="text-center text-2xl mt-4">
        Customer {currCustomer + 1} Details here
      </h1>
      <p className="text-center mt-5 w-10/12 m-auto text-gray-500 font-medium">
        {currCustomer % 2 == 0
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam, sed est repudiandae amet molestias perferendis optio sint velit repellat ipsam explicabo! Quae animi temporibus et voluptates laudantium, velit architecto ad enim quia natus ab, dolorum nam eveniet, error aliquid."
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur, autem voluptas quibusdam sunt odit vel sint porro omnis, recusandae reiciendis fugit eos nostrum eveniet repellendus ad rerum cumque delectus!"}
      </p>
      <div className="grid grid-cols-3  gap-y-6 gap-x- px-12 transition-all mt-12 duration-1000 ease-in-out w">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              className="rounded-2xl border-2 shadow-lg w-[85%] m-auto h-[180px] p-3 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
