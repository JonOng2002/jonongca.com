import React, { useState, useEffect } from 'react';

interface SongData {
  title: string;
  artist: string;
  albumArt: string;
  artistImage?: string;
  spotifyUrl: string;
}

type SongType = 'currently-playing' | 'recently-played' | null;

export const SpotifyWidget: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState<SongData | null>(null);
  const [songType, setSongType] = useState<SongType>(null);

  const fetchSongData = async () => {
    try {
      // Assuming backend handles auth as per instructions
      const res = await fetch("/api/now-playing");
      if (!res.ok) {
        setSong(null);
        setSongType(null);
        return;
      }
      const data = await res.json();
      if (data.song) {
        setSong({
          title: data.song,
          artist: data.artist,
          albumArt: data.albumArt,
          artistImage: data.artistImage,
          spotifyUrl: data.spotifyUrl,
        });
        setSongType(data.type || "recently-played");
      } else {
        setSong(null);
        setSongType(null);
      }
    } catch (err) {
      console.error("Error fetching now-playing data:", err);
      setSong(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongData();

    // Poll every 30s
    const pollInterval = setInterval(fetchSongData, 30000);

    return () => clearInterval(pollInterval);
  }, []);

  const openSpotify = () => {
    if (song?.spotifyUrl) {
      window.open(song.spotifyUrl, '_blank');
    }
  };

  const isCurrent = songType === 'currently-playing';

  return (
    <div
      onClick={openSpotify}
      className={`relative rounded-[2rem] overflow-hidden transition-all duration-300 hover:scale-[1.03] cursor-pointer group glass h-full bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl min-h-[300px]
        ${isCurrent ? 'ring-2 ring-transparent hover:ring-green-500' : 'ring-2 ring-transparent hover:ring-blue-500'}
        ${loading ? 'bg-zinc-100 dark:bg-[#0c1a10]' : ''}
      `}
    >
      {/* Background Layer */}
      {song && (
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
          <img
            src={song.artistImage || song.albumArt}
            alt="Background"
            className={`w-full h-full object-cover transition-opacity duration-500 ${song.artistImage ? 'opacity-90' : 'opacity-60'}`}
          />
          <div
            className={`absolute inset-0 transition-all duration-300
              ${isCurrent
                ? 'bg-gradient-to-br from-green-900/40 to-black/80 group-hover:from-green-900/60'
                : 'bg-gradient-to-br from-blue-900/60 to-black/90 group-hover:from-blue-900/80'}
            `}
          ></div>
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex flex-col p-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
            <div className="spinner"></div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-forest/40 dark:text-emerald-400/40">Syncing Track...</p>
          </div>
        ) : song ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-display font-bold text-white uppercase tracking-widest">
                  {isCurrent ? 'Now Playing' : 'Last Played'}
                </h3>
                <div className={`w-8 h-1 rounded-full ${isCurrent ? 'bg-green-500' : 'bg-blue-500'}`}></div>
              </div>
            </div>

            {/* Song Info */}
            <div className="flex items-center mt-6">
              <div className="relative shrink-0">
                <img
                  src={song.albumArt}
                  alt="Album Cover"
                  className="w-16 h-16 rounded-xl shadow-2xl border border-white/10"
                />
                {isCurrent && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <div className="ml-4 overflow-hidden">
                <p className="font-display font-bold text-white text-md leading-tight truncate mb-0.5">{song.title}</p>
                <p className="text-xs text-white/70 truncate">{song.artist}</p>
                <div
                  className={`mt-2 px-2.5 py-1 rounded-lg text-[9px] font-bold inline-flex items-center uppercase tracking-tighter
                    ${isCurrent ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}
                  `}
                >
                  {isCurrent ? 'LIVE Now' : 'Synced Recently'}
                </div>
              </div>
            </div>

            {/* Hover Action */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-[11px] font-bold shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Open Spotify
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
            <svg className="w-8 h-8 text-forest dark:text-emerald-500/50 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
            <p className="text-[10px] font-mono uppercase tracking-widest text-forest dark:text-emerald-300">Playlist Idle</p>
          </div>
        )}
      </div>
    </div>
  );
};
