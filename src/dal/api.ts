const apiKey = 'a421922d-a29a-4691-8721-ee605a2f6380';

const headers = {
        headers: {
        'api-key': apiKey
      }
}



export const getTrackDetails = (trackId: string) => {
    
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, headers).then(res => res.json());
}


export const getTracks = async () =>  {

    const resp = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=2&pageSize=5', headers);

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