import { useEffect, useState } from "react";
import type { TrackDetailsResource } from "../dal/Types";
import { getTrackDetails } from "../dal/api";



export function useTrack(selectedTrackId: string | null) {

    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {

      if(!selectedTrackId) return;

      //console.log('TrackDetails - useEffect');

      getTrackDetails(selectedTrackId)
        .then(json => setSelectedTrack(json.data));

    }, [selectedTrackId]);

    return selectedTrack;
  }