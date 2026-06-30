//import type { CSSProperties } from "react";
import type { Track } from "../dal/Types";
import moduleStyles from "./TrackItem.module.css";
import clsx from "clsx";


//npm install clsx


type TrackProps = {
  track: Track,
  isSelected: boolean,
  onTrackSelect: (id: string) => void
}

export function TrackItem(props: TrackProps) {

  const {track, isSelected} = props;

  //const liStyle: CSSProperties = {};

  /*if (isSelected) {
    liStyle.border = '1px solid orange';
    liStyle.color = 'green';npm
  }*/

  //style={{marginTop:'4px', marginBottom:'10px'}}

  
/*
  let classes = moduleStyles.track;

  if(isSelected)
    classes += ' ' + moduleStyles.selected;
*/

  const classes = clsx({
    [moduleStyles.track]: true,
    [moduleStyles.selected]: isSelected
  });

  return (
    <li className={classes}>
      <div onClick={()=>{ props.onTrackSelect(track.id) }}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls  />
    </li>);
}