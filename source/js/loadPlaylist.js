/**
 * 根据bgmlist.json创建playlist
 * @returns playlist
 */
export async function loadPlaylist() {
  try {
    const bgmList = await fetch("/json/bgmlist.json");
    const bgmListData = await bgmList.json();
    const playlist = bgmListData.map((song) => ({
      name: song.name,
      artist: song.artist,
      src: song.src,
      poster: song.poster,
    }));
    return playlist;
  } catch (error) {
    console.error("Failed to load playlist:", error);
    return [];
  }
}
