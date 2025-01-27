import Manhaj_Salkeen from './Manhaj_salkeen.json';
import Akhsar_Mokhtasarat from './Akhsar_Mokhtasarat.json';
import Manar_Elsabil from './Manar_Elsabil.json';
import Elrawd_ElMorbeaa from './Elrawd_Elmorbea.json';
import Zad_ElMostaqneaa from './Zad_Elmostaqneaa.json';
import Mokhtasr_ElKheraky from './Mokhtasar_Elkheraky.json'
export default function Feqh_Hanbalyan(){
    return {
        id:2,
        title:"فقة حنبلي",
        description:"فقة حنبلي",
        books:[
            Manhaj_Salkeen,
            Akhsar_Mokhtasarat,
            Manar_Elsabil,
            Elrawd_ElMorbeaa,
            Zad_ElMostaqneaa,
            Mokhtasr_ElKheraky
        ]
    }
}