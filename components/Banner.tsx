import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useSetRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

type Props = {
  netflixOriginals: Movie[];
};

export default function Banner({ netflixOriginals }: Props) {
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovie = useSetRecoilState(movieState);

  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    if (netflixOriginals)
      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
          alt={movie?.title || movie?.name || movie?.original_name}
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="text-black bg-white bannerButton">
          <FaPlay className="w-4 h-4 text-black md:h-5 md:w-5" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  );
}
