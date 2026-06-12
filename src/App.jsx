import useStore from "./store/store";

function App() {
  const { artists, keyword, setKeyword, fetchArtists } = useStore();

  const handleSearch = async () => {
    await fetchArtists();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
        <h2 className="mb-6 text-center text-3xl font-bold">
          음악 아티스트 검색
        </h2>

        <div className="mb-8 flex gap-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="가수 이름 검색"
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-lg"
          />

          <button
            onClick={handleSearch}
            className="rounded-xl bg-black px-6 py-3 text-lg font-bold text-white"
          >
            검색
          </button>
        </div>

        {artists.map((artist) => (
          <div
            key={artist.mbid || artist.name}
            className="mb-4 flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-bold text-white">
              {artist.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-xl font-bold">{artist.name}</h3>

              <p className="mt-1 text-gray-500">
                {Number(artist.listeners).toLocaleString()} listeners
              </p>

              <a
                href={artist.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue-600"
              >
                Last.fm에서 보기 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
