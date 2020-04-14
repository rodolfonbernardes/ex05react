import React from "react";
import { MoviesService } from "../services/MoviesService";

import Link from "next/link";
import Head from "next/head";

function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">The Movie DB</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {props.films.map(filme => (
              <tr key={filme.id}>
                <td>
                  <Link href={"/movie-detail/" + filme.id}>
                    <a>{filme.title}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <style jsx>{`
        th {
          color: #d5dde5;
          background: green;                    
          font-size: 30px;
          font-weight: 100;
          padding: 50px;
          text-align: center;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          vertical-align: middle;       
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async () => {
  const results = await MoviesService.getPopularMovies();
  return { films: results.data.results };
};

export default Home;
