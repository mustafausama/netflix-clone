import Image from "next/image";
import { Movie } from "../typings";

type Props = {
  movie: Movie /*| DocumentData*/;
};

export default function Thumbnail({ movie }: Props) {
  return (
    <div className="relative duration-200 transition ease-out cursor-pointer h-28 md:h-36 min-w-[180px] md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="object-cover rounded-sm md:rounded"
        layout="fill"
        alt={movie.title || movie.original_name || movie.name}
      />
    </div>
  );
}
