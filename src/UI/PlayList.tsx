import { useMultiTracks } from "../bll/useMultiTracks";
import { TrackItem } from "./TrackItem";
import style from "./PlayList.module.css";



type Props = {
    selectedTrackId: string | null,
    onTrackSelect: (id: string) => void
}


function PlayList(props: Props) {

  const tracks = useMultiTracks();

 //console.log('Redrawing PlayList');
  return (
  <div>
    {tracks === null && <span>Loading...</span>}
    {tracks?.length === 0 && <span>No tracks</span>}

    <ul style={{listStyleType: 'none'}} className={style.tracks}>
      {tracks?.map((track) => {
        return (
          <TrackItem key={track.id} track={track} onTrackSelect={props.onTrackSelect} isSelected={track.id === props.selectedTrackId} />
        )
        }//map
      )}
    </ul>
  </div>);
}

export default PlayList;


