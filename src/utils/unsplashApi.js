import { API_CONFIG } from './utils';

const { URL, KEY, COUNT } = API_CONFIG;

export const getPhotos = async (query, page) => {
  let response = await fetch(
    `${URL}/search/photos?query=${query}&page=${page}&cliento_id=${KEY}`
  );
  if (response.ok) {
    let photos = await response.json();
    return photos.results;
  } else {
    return Promise.reject({
      error: response.status,
    });
  }
};

export const getStartRandomPhotos = async () => {
  let response = await fetch(
    `${URL}/photos/random?content_filter=low&count=${COUNT}&client_id=${KEY}`
  );
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject({
      error: response.status,
    });
  }
};
export const getSizeCategorie = (workWidth)=>{

  if(workWidth<2.5 ) 
    return 'XS'
  else if(workWidth<6.5 && workWidth>=2.5)   
    return 'S'
  else if( workWidth<10 && workWidth>=6.5)
      return 'M'
  else if(workWidth>=10 && workWidth<16.1)  
      return 'L'
  else if(workWidth>=16.1)   
      return 'XL'
  else
      return 'N/A'
  
 }

 export const getSizePrice= (workWidth)=>{

  if(workWidth<3 ) 
    return 6
  else if(workWidth<6.5 && workWidth>=3)   
    return 8
  else if( workWidth<10 && workWidth>=6.5)
      return 10
  else if(workWidth>=10 && workWidth<16.1)  
      return 12
  else if(workWidth>=16.1)   
      return 15
  else
      return 'N/A'
  
 }