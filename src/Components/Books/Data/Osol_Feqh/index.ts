import Alosol_Mn_Alosol from './AlOsol_Mn_Alosol.json';
import Ghayat_Elsawl from './Gkayat_Elsawl.json';
import Elwadeh from './Elwadeh.json';
import Elwadeh_Nabile from './Elwadeh_Nabile.json';
import Rawdat_Elnazar from './Rawdat_Elnazar.json';

export default function Osol_Books(){
    return {
        id:3,
        title:"أصول فقه",
        description:"أصول فقه",
        books:[
            Alosol_Mn_Alosol,
            Ghayat_Elsawl,
            Elwadeh,
            Elwadeh_Nabile,
            Rawdat_Elnazar
        ]
    }
}