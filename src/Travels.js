import React from "react";
import Travel from "./Travel";

const travels = [
    
    {
          photo : "https://www.geo.fr/var/geo/storage/images/voyages/guides-de-voyage/amerique/etats-unis/hawai/110119-28-fre-FR/hawai.jpg",
          destination:"Hawai",
          country:"USA",
          distance : "à 12091 km"
    },
               
    {
          photo:"https://media.ceetiz.com/activity/WOWGLO001/thumbnails/642x450/1st-day.jpg",
          destination:"Moscou",
          country:"Russie",
          distance : "à 2484 km"
    },

        {
          photo:"https://i1.wp.com/www.goglasses.fr/wp-content/uploads/2017/02/video-360-voyage-tourisme-vietnam-ho-chi-minh-ville-1257%C3%97750.jpg?zoom=2.625&resize=402%2C201&ssl=1",
          destination:"Ho Chi Minh",
          country:"Vietnam",
          distance : "à 10125 km"
    },

        {
          photo:"https://www.decouvre-le-monde.fr/wp-content/uploads/2015/03/sydney-australie-1024x713.jpg",
          destination:"Sydney",
          country:"Australie",
          distance : "à 16953 km"
    },

        {
          photo:"http://www.directmalaisie.com/wp-content/uploads/2014/03/kl-by-night-5.jpg",
          destination:"Kualalumpur",
          country:"Malaysie",
          distance : "à 1041 km"
    },


];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel photo={travel.photo} destination={travel.destination} country={travel.country} distance={travel.distance} />
)
    )}
  </div>
);

export default Travels;
