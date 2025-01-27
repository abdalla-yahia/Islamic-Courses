import Sera from './Sera'
import Feqh_Hanbaly from './FeqhHanbaly'
import Osol_Feqh from './Osol_Feqh'
import Aqeda from './Aqeda'
import Kadaya_Manhagea from './Kadaya_Manhajea';
import Qwaed_feqh from './Qawaed_Feqh.json';
import Mostalh_Hadith from './Mostalh_Hadith.json';
import Hadith from './Hadith.json';
export default function BooksData(){
    return [Sera(),Osol_Feqh(),Qwaed_feqh,Mostalh_Hadith,Kadaya_Manhagea(),Feqh_Hanbaly(),Aqeda(),Hadith]
}