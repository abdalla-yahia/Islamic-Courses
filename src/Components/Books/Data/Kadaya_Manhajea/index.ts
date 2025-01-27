import Khelaf from './Elkhelaf.json'
import Eman_We_Kofr from './Eman_Kofr.json';
import Masalaeh_We_Mafased from './Masaleh_Mafased.json';
import Walaa_We_Baeaa from './Walaa_Baraa.json';
import Kada_We_Kadar from './Kadaa_Kadar.json';
import Elamal_Gamaee from './Elamal_ElGamaee.json';
import Amr_Maroof from './Amr_Maroof.json';
import Elhakmea from './Elhakmea.json';
import ElJehad from './ElJehad.json';
import Derasat_Fe_Elnasranya from './Derasat_Nasranya.json';
export default function Kadaya_Books(){
    return {
        id:5,
        title:"قضايا فكرية ",
        description:"قضايا فكرية ",
        books:[
            Khelaf,
            Eman_We_Kofr,
            Masalaeh_We_Mafased,
            Walaa_We_Baeaa,
            Kada_We_Kadar,
            Elamal_Gamaee,
            Amr_Maroof,
            Elhakmea,
            ElJehad,
            Derasat_Fe_Elnasranya
        ]
    }
}