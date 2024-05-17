/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

interface Way {
  id: number;

  title1: string;
  title2: string;
  image: string;
}

export default function WayWorking() {
  const [data, setData] = useState<Way[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/wayWorking/")
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching users data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-2xl text-ikea-darker my-4">
          The IKEA way of working
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 lg:grid-rows-1 grid-rows-3 grid-cols-2 lg:h-96">
          {data.map((way) => (
            <div
              key={way.id}
              className={`${
                way.id === 1
                  ? "lg:col-span-1 lg:row-span-1 col-span-2 row-span-2"
                  : "lg:col-span-1 lg:row-span-1 col-span-1 row-span-1"
              }`}
            >
              <img src={way.image} className="rounded-lg w-full h-full" />
              <p className="mt-4 flex flex-col ">
                <span>{way.title1}</span>

                <span className="text-base font-bold">{way.title2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
