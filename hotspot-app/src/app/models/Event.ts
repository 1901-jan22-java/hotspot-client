export class Event {
    /* The JSON files containts an array called events
    example link to see it in a browser 
          http://api.eventful.com/json/events/search?app_key=cKxPsB44vwSF3z42&location=San+Diego&t=This+Weekend&c=music
          A JSON formatter is highly reccomended to make sence of it all
    Each event has the Following Properties that we will use (there are more that we will not be using)
    */

    category: string;
    id: string;
    postalCode: number;
    latitude: number;
    longitude: number;
    url: String;
    venue_url: String;
    venue_name: String;
    venue_id: number;
    venue_display: boolean; //sometimes venue name isnt very good so it isnt always displayed
    venue_address: String;
    city_name: String;
    country_name: String;
    country_abbr: String;
    start_time : String;
    title: String;
    image: {
        medium : {
            height: String;
            url : String;
            width: String;
        };
    };

    //There is a performers object which contains performer objects that have a name
    // They can be stored in this performers variable seperated by spaces
    //so in the JSON file the name of a performer is at performers[i].name. There could be more than 1 performer
    performers: String;
    image_url: String;
    description: String;

}