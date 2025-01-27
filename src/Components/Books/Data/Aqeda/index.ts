import Kawaed_Mothla from './Kaqwaed_Mothla.json';
import Tahawya from './Tahawea.json';
import Wastya from './Wastya.json';
import MenaOne from './Mena_Part_one.json';
import MenaTwo from './Mena_Part_two.json';
import Fath_ElMajeed from './Fath_ElMajeed.json';
import MarejOne from './Marej_Part_One.json';
import MarejTwo from './Marej_Part_Two.json';
import MarejThree from './Marej_Part_Three.json';
import MarejFour from './Marej_Part_Four.json';

export default function Aqeda_Books(){
    return {
        id:4,
        title:"عقيدة",
        description:"عقيدة",
        books:[
            Kawaed_Mothla,
            Tahawya,
            Wastya,
            MenaOne,
            MenaTwo,
            Fath_ElMajeed,
            MarejOne,
            MarejTwo,
            MarejThree,
            MarejFour
        ]
    }
}