import { useTrack } from "../bll/useTrack";
import styles from "./TrackDetails.module.css"


type Props = {
    selectedTrackId: string | null
}



export function TrackDetails(props: Props) {

  const selectedTrack = useTrack(props.selectedTrackId);

  //console.log('Redrawing TrackDetails - ' + props.selectedTrackId);

  return (
  <div className={styles.track}>
      <h2>Track Details</h2>
      
      {!selectedTrack && !props.selectedTrackId && <span>No selected track</span> }
      {selectedTrack?.id === props.selectedTrackId &&
          <div>
          <h4>{selectedTrack.attributes.title}</h4>
          <p>{selectedTrack.attributes.lyrics}</p>
          </div>
      }

      { selectedTrack && props.selectedTrackId !== selectedTrack?.id && <span>Loading...</span> }

  </div>);
}


export default TrackDetails;