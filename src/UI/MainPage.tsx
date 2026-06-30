import { useTrackSelection } from "../bll/useTrackSelection";
import PageTitle from "./PageTitle";
import PlayList from "./PlayList";
import TrackDetails from "./TrackDetails";




export function MainPage() {

  const {selectedTrackId, handleTrackSelect} = useTrackSelection();

  return (
      <>
          <PageTitle value={'Music Player'}/>
          <PlayList selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect} />
          <hr/>
          <TrackDetails selectedTrackId={selectedTrackId}/>
      </>
  );
}

