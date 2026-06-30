const apiKey = import.meta.env.VITE_API_KEY;
/*
const headers = {
        'api-key': apiKey
}*/

const requestParams: RequestInit = {};

if (apiKey) {
  requestParams['headers'] = {'api-key': apiKey}
}


export const getTrackDetails = (trackId: string) => {
    
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, requestParams).then(res => res.json());
}


export const getTracks = async () =>  {

    const resp = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=2&pageSize=5', requestParams);

    if(!resp.ok) {

      const errorData = await resp.json().catch(() => null);

      if(errorData)
        console.log(errorData.message);
      else
        console.log("Error occured.");

      return null;
    }

    return await resp.json();
}