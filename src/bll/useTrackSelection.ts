import { useState } from "react";


export function useTrackSelection() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  //console.log('Redrawing MainPage');

  function handleTrackSelect(id: string) {
    setSelectedTrackId(id);
  }

  return {
    selectedTrackId, handleTrackSelect
  }
}
