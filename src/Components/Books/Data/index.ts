import Sera from './Sera'
import Feqh_Hanbaly from './FeqhHanbaly'
import Osol_Feqh from './Osol_Feqh'
import Aqeda from './Aqeda'
import Kadaya_Manhagea from './Kadaya_Manhajea';
import Keywaed_feqh from './Kawaeed_Feqhya';
import Mostalh_Hadith from './Mostalh';
import Hadith from './Hadith';
export default function BooksData(){
    return [
        Sera(),
        Osol_Feqh(),
        Keywaed_feqh(),
        Mostalh_Hadith(),
        Feqh_Hanbaly(),
        Kadaya_Manhagea(),
        Aqeda(),
        Hadith()
    ]
}