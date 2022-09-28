import Image from "next/image";
import { Movie } from "../typings";
import { useSetRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

type Props = {
  movie: Movie /*| DocumentData*/;
};

export default function Thumbnail({ movie }: Props) {
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovie = useSetRecoilState(movieState);

  return (
    <div
      className="relative duration-200 transition ease-out cursor-pointer h-28 md:h-36 min-w-[180px] md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
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
