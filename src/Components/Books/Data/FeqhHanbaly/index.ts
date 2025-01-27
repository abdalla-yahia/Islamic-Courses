import Manhaj_Salkeen from './Manhaj_salkeen.json';
import Akhsar_Mokhtasarat from './Akhsar_Mokhtasarat.json';
import Manar_Elsabil from './Manar_Elsabil.json';
import Elrawd_ElMorbeaa from './Elrawd_Elmorbea.json';
import Zad_ElMostaqneaa from './Zad_Elmostaqneaa.json';
import Mokhtasr_ElKheraky from './Mokhtasar_Elkheraky.json';
import Elrahabia from './AlRahbia.json';
import Blogh_Almaram from './Blogh_Almaram.json';
export default function Feqh_Hanbalyan(){
    return {
        id:2,
        title:"فقه حنبلي",
        description:"فقه حنبلي",
        books:[
            Manhaj_Salkeen,
            Akhsar_Mokhtasarat,
            Elrahabia,
            Manar_Elsabil,
            Elrawd_ElMorbeaa,
            Blogh_Almaram,
            Zad_ElMostaqneaa,
            Mokhtasr_ElKheraky
        ]
    }
}