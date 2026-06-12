import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  artists: [],
  keyword: "",

  setKeyword: (keyword) => set({ keyword }),

  fetchArtists: async () => {
    const { keyword } = get();

    try {
      const response = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${keyword}&api_key=${
          import.meta.env.VITE_LASTFM_API_KEY
        }&format=json`
      );

      set({
        artists: response.data.results.artistmatches.artist,
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;