import Kawaed_Osol_Mansour from './Kawaed_Osol_Feqh_MAnsour.json';
import Al_Warkat_Mansour from './Al_Warkat_Mansour.json';
import Alosol_Mn_Alosol from './AlOsol_Mn_Alosol.json';
import Ghayat_Elsawl from './Gkayat_Elsawl.json';
import Elwadeh from './Elwadeh.json';
import Elwadeh_Nabile from './Elwadeh_Nabile.json';
import Rawdat_Elnazar from './Rawdat_Elnazar.json';
import Al_Resala from './AL_Resala.json';

export default function Osol_Books(){
    return {
        id:3,
        title:"أصول فقه",
        description:"أصول فقه",
        books:[
            Kawaed_Osol_Mansour,
            Al_Warkat_Mansour,
            Alosol_Mn_Alosol,
            Ghayat_Elsawl,
            Elwadeh,
            Elwadeh_Nabile,
            Rawdat_Elnazar,
            Al_Resala
        ]
    }
}