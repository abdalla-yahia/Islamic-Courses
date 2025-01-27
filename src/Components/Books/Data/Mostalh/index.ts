import Bayqonya from './Bayqonya.json';
import Elbaeeth_Elhathis from './Elbaeas_Elhathis.json';
import Taesseer_Mostalah from './Taeseer_Mostalah.json';
import Nozhat_Elnazar from './Nozhat_Elnazar.json';

export default function Mostalh_Books(){
    return {
        id:7,
        title:"مصطلح حديث",
        description:"مصطلح حديث",
        books:[
            Bayqonya,
            Elbaeeth_Elhathis,
            Taesseer_Mostalah,
            Nozhat_Elnazar
        ]
    }
}