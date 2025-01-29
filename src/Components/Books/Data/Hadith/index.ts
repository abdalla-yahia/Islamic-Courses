import Arbaeen_Nawawya from './Arbaeen_Nawawya.json';
import Ryad_El_Salhin from './Ryad_Al_Salheen.json';
import Saheh_Muslem from './Sahih_Muslem.json';
import Saheh_El_Bokhary from './Sahih_El_Bokhary.json';
import Sonan_AL_Nasaee from './Sonn_Al_Nasaee.json';
import Sonan_AL_Termezy from './Sonn_Al_Termezy.json';
export default function Hadith_Books(){
    return {
        id:8,
        title:"شروح الحديث ",
        description:"شروح الحديث ",
        books:[
            Arbaeen_Nawawya,
            Ryad_El_Salhin,
            Sonan_AL_Nasaee,
            Sonan_AL_Termezy,
            Saheh_Muslem,
            Saheh_El_Bokhary,
        ]
    }
}