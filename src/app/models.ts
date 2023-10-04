export interface Parking {
    nbre_places : number,
    nbre_places_dispo : number,
    en_service : boolean,
    tarif : number
}
export interface Place {
    occupied : boolean,
    temps_occup : number
}