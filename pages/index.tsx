import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../typings";
import fetchTMDBHome from "../utils/fetchTMDBHome";

type Props = {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
};

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const results = await fetchTMDBHome();
  return {
    props: results
  };
};
