import { useEffect, useState } from "react";
import type { Track } from "../dal/Types";
import { getTracks } from "../dal/api";


export function useMultiTracks() {

  const [tracks, setTracks] = useState<Track[] | null>(null);

/* useEffect(() =>
  useEffect(() => {

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'a421922d-a29a-4691-8721-ee605a2f6380'
      }
    })
      .then(res => res.json())
      .then(json => {
        setTracks(json.data);
      })

  }, []);*/


  useEffect(() => {

    const fetchMusic = async () => {

      const resp = await getTracks();

      if(!resp) {
        setTracks([]);
        return;
      }
      
      setTracks(resp.data);
    };

    fetchMusic();

  },[]);

  return tracks;
}
