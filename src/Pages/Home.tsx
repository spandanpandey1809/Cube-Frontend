import React, { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Home = () => {
  const [customers, setCustomers] = useState<number>(10);
  const [currCustomer, setCurrCustomer] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const handleCusomer = (i: number) => {
    setCurrCustomer(i);
  };

  const fetchImages = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const shuffledData = res?.data.sort(() => 0.5 - Math.random());
        const imageDatas: string[] = shuffledData.slice(0, 9).map((curr: any) => curr?.image);
        setImages(imageDatas);
      })
      .catch((err) => console.log(err));
  };

  const handleScroll = () => {
    setCustomers(customers + 10);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    fetchImages();
    const intervalId = setInterval(fetchImages, 10000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full flex mt-10   justify-center m-auto border border-black-500 rounded">
      <div className="w-3/12 h-screen">
        <Sidebar
          customers={customers}
          handleScroll={handleScroll}
          currCustomer={currCustomer}
          handleCustomer={handleCusomer}
        />
      </div>
      <div className="w-9/12">
        <MainContainer currCustomer={currCustomer} images={images} />
      </div>
    </div>
  );
};

export default Home;
