/** @type {import('next-sitemap').IConfig} */

const quraanSuras = [
  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال",
  "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف",
  "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص",
  "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر",
  "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات",
  "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر",
  "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم",
  "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات",
  "النبأ", "النازعات", "عبس", "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق",
  "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق",
  "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل",
  "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"
];

const quraanQaree = [
  "المنشاوي - مرتل",
  "المنشاوي-المعلم",
  "الحصري - مرتل",
  "الحصري-الإذاعة",
  "عبدالباسط - مرتل",
  "محمود علي البنا",
  "مصطفى إسماعيل",
  "أحمد نعينع",
  "محمد محمود الطبلاوي",
  "سعد الغامدي",
  "ناصر القطامي",
  "ياسر الدوسري",
  "ماهر المعيقلي",
  "فارس عبّاد",
  "مشاري راشد",
  "محمد أيوب",
  "محمد جبريل",
  "سعود الشريم",
  "عبدالرحمن السديسي",
  "الحذيفي",
  "أبوبكر الشاطري",
  "عبدالمحسن القاسم",
  "أحمد العجمي",
  "ياسر سلامة",
  "صلاح الهاشم",
  "أكرم العلاقمي",
  "هاني الرفاعي",
  "علي حجاج السويسى",
  "إبراهيم الأخضر",
  "خليفة الطنيجي",
  "عبدالله المطرود",
  "محمد عبدالكريم",
  "شهريار بهريز",
  "المنشاوي - مجود",
  "الحصري - مجود",
  "عبدالباسط - مجود",
  "عبدالله بصفر-مجود",
  "الحصري-ورش",
  "عبدالباسط -ورش",
  "سهل ياسين-ورش",
  "الجزائري - ورش",
  "إبراهيم الدوسري-ورش",
  "الحصري - قالون",
  "الحذيفي-قالون",
  "أحمد خضر الطرابلسي",
  "الحذيفي-شعبة",
  "فؤاد الخامري -شعبة",
  "عبدالحكيم عبداللطيف -شعبة",
  "عبدالرشيد صوفي-السوسي",
  "مفتاح السلطني -الدوري"
];

const radios = [
"إذاعة صور من حياة الصحابة رضوان الله عليهم",
"تراتيل قصيرة متميزة",
"إذاعة آيات السكينة",
"إذاعة القرآن الكريم من القاهرة",
"إذاعة القرآن الكريم من المملكة العربية السعودية",
"إذاعة الحرم المكي",
"إذاعة فتاوى الشيخ ابن عثيمين",
"إذاعة فتاوى الشيخ متولي الشعراوي",
"إذاعة نداء الإسلام",
"تفسير القرآن الكريم",
"سورة البقرة  لعدد من الحفص عن عاصم",
"الإذاعة العامة - اذاعة متنوعة لمختلف الحفص عن عاصم",
"تلاوات خاشعة",
"أحمد الحواشي",
"أحمد الطرابلسي",
"أحمد الطرابلسي  رواية قالون عن نافع",
"أحمد بن علي العجمي",
"أحمد خليل شاهين",
"أحمد ديبان",
"أحمد صابر",
"أحمد عامر",
"أحمد نعينع",
"أذكار الصباح",
"أذكار المساء",
"أكرم العلاقمي",
"إبراهيم الأخضر",
"إدريس أبكر",
"ابراهيم الدوسري  رواية ورش عن نافع",
"الدوكالي محمد العالم  رواية قالون عن نافع",
"الرقية الشرعية",
"الزين محمد أحمد",
"العيون الكوشي  رواية ورش عن نافع",
"الفاتح محمد الزبير رواية الدوري عن أبي عمرو",
"الفتاوى",
"القارئ ياسين رواية ورش عن نافع",
"المختصر في السيرة النبوية  حلقات مختصرة عن سيرة نبيّنا محمد صلى الله عليه وسلم",
"المختصر في تفسير القرآن الكريم",
"بندر بليله",
"ترجمة معاني القرآن الكريم باللغة الأوردية  القارئ عبدالباسط عبدالصمد",
"ترجمة معاني القرآن باللغة الأسبانية",
"ترجمة معاني القرآن باللغة الألبانية",
"ترجمة معاني القرآن باللغة الألمانية",
"ترجمة معاني القرآن باللغة الأمازيغية",
"ترجمة معاني القرآن باللغة الأوردية  القارئ عبدالرحمن السديس و سعود الشريم",
"ترجمة معاني القرآن باللغة الأوردية  القارئ محمد المنشاوي",
"ترجمة معاني القرآن باللغة الإنجليزية   القارئ عبدالباسط عبدالصمد",
"ترجمة معاني القرآن باللغة الإنجليزية   القارئ عبدالله صفر",
"ترجمة معاني القرآن باللغة الإنجليزية  ترجمة والك-  القارئ عبدالباسط عبدالصمد",
"ترجمة معاني القرآن باللغة البرتغالية",
"ترجمة معاني القرآن باللغة البوسنية",
"ترجمة معاني القرآن باللغة التركية",
"ترجمة معاني القرآن باللغة الصينية",
"ترجمة معاني القرآن باللغة الفارسية",
"ترجمة معاني القرآن باللغة الفرنسية",
"ترجمة معاني القرآن باللغة الكردية",
"ترجمة معاني القرآن باللغة المجرية",
"ترجمة معاني القرآن باللغة اليونانية",
"تكبيرات العيد",
"توفيق الصايغ",
"جمال شاكر عبدالله",
"جمعان العصيمي",
"حاتم فريد الواعر",
"خالد الجليل",
"خالد القحطاني",
"خالد المهنا",
"خالد عبدالكافي",
"خليفة الطنيجي",
"زكي داغستاني",
"سعد الغامدي",
"سعود الشريم",
"سهل ياسين",
"سيد رمضان",
"شيخ أبو بكر الشاطري",
"شيرزاد عبدالرحمن طاهر",
"صابر عبدالحكم",
"صلاح البدير",
"صلاح الهاشم",
"صلاح بو خاطر",
"طارق دعوب  رواية قالون عن نافع",
"عادل الكلباني",
"عادل ريان",
"عبدالبارئ الثبيتي",
"عبدالبارئ محمد",
"عبدالباسط عبدالصمد ",
"عبدالباسط عبدالصمد  مجود",
"عبدالباسط عبدالصمد  رواية ورش عن نافع",
"عبدالرحمن السديس",
"عبدالرحمن الماجد",
"عبدالرشيد صوفي  رواية السوسي عن أبي عمرو",
"عبدالرشيد صوفي  رواية خلف عن حمزة",
"عبدالعزيز الأحمد",
"عبدالله الخلف",
"عبدالله الكندري",
"عبدالله المطرود",
"عبدالله الموسى",
"عبدالله بصفر",
"عبدالله خياط",
"عبدالله عواد الجهني",
"عبدالمحسن الحارثي",
"عبدالمحسن العبيكان",
"عبدالمحسن القاسم",
"عبدالهادي أحمد كناكري",
"عبدالودود حنيف",
"علي الحذيفي",
"علي جابر",
"علي حجاج السويسي",
"عماد زهير حافظ",
"عمر القزابري  رواية ورش عن نافع",
"فارس عباد",
"في ظلال السيرة النبوية  400 حلقة عن سيرة نبينا محمد صلى الله عليه وسلم",
"كتاب الاختيارات الفقهية في مسائل العبادات والمعاملات من فتاوى الشيخ الإمام ابن باز رحمه لله",
"ماجد الزامل",
"ماهر المعيقلي",
"ماهر شخاشيرو",
"1 محمد أيوب",
"2 محمد أيوب",
"محمد الطبلاوي",
"محمد اللحيدان",
"محمد جبريل",
"محمد رشاد الشريف",
"محمد صالح عالم شاه",
"محمد صديق المنشاوي",
"محمد صديق المنشاوي  مجود",
"محمد عبدالحكيم العبدالله  رواية البزي وقنبل عن ابن كثير",
"محمد عبدالحكيم العبدالله  رواية الدوري عن الكسائي",
"محمد عبدالكريم",
"محمد عبدالكريم  رواية ورش عن نافع من طريق أبي بكر الأصبهاني",
"محمد عثمان خان ( من الهند )",
"محمود الرفاعي",
"محمود الشيمي  رواية الدوري عن الكسائي",
"محمود خليل الحصري",
"محمود خليل الحصري  مجود",
"محمود خليل الحصري  رواية ورش عن نافع",
"محمود علي البنا",
"محمود علي البنا  مجود",
"مشاري العفاسي",
"مصطفى إسماعيل",
"مصطفى اللاهوني",
"مصطفى رعد العزاوي",
"معيض الحارثي",
"مفتاح السلطني",
"مفتاح السلطني  رواية ابن ذكوان عن ابن عامر",
"مفتاح السلطني  رواية الدوري عن أبي عمرو",
"مفتاح السلطني  رواية الدوري عن الكسائي",
"موسى بلال",
"ناصر العصفور",
"ناصر القطامي",
"ناصر الماجد",
"نبيل الرفاعي",
"نعمة الحسان",
"هاني الرفاعي",
"هيثم الجدعاني",
"وليد النائحي  رواية قالون عن نافع من طريق أبي نشيط",
"ياسر الدوسري",
"ياسر القرشي",
"ياسر المزروعي  حفص عن عاصمة يعقوب الحضرمي بروايتي رويس وروح ",
"يحيى حوا",
"يوسف الشويعي",
"يوسف بن نوح أحمد",
"شهر رمضان المبارك",
"ستة من شوال",
"يوم عاشوراء",
"سورة الملك",
"تفسير القرآن الكريم - الخلاصة من تفسير الطبري",
"عشر ذي الحجة",
    ];

const khotap = {
    "عقيدة": [
        {
            "title": "سُلم الوصول",
            "author": " الشيخ حافظ بن أحمد حكمي",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "عقيدة",
            "audio_count": 14,
            "audio_type": "mp4"
        },
        {
            "title": "الإبانة الصغري",
            "author": " إبن بطه",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 20,
            "audio_type": "mp4"
        },
        {
            "title": "المنظومة الحائية",
            "author": " أبي يكر بن أبي داوود",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 13,
            "audio_type": "mp4"
        },
        {
            "title": "القواعد الكلية    ",
            "author": "  الشيخ إبراهيم بن محمد البريكان",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 12,
            "audio_type": "mp4"
        },
        {
            "title": "فتح المجيد ",
            "author": "  عبدالرحمن بن حسن آل الشيخ",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 98,
            "audio_type": "mp4"
        },
        {
            "title": "القواعد المثلي   ",
            "author": "  الشيخ محمد بن صالح العثيمين",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 14,
            "audio_type": "mp4"
        },
        {
            "title": "معارج الجنة    ",
            "author": "أبو عبدالله محمد بن عبدالسلام بن علي",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 58,
            "audio_type": "mp4"
        },
        {
            "title": "مسألة الإيمان ",
            "author": "  شمس الدين الذهبي",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 33,
            "audio_type": "mp4"
        },
        {
            "title": "مقدمة بن أبي زيد القيرواني   ",
            "author": "  بن أبي زيد القيرواني",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "عقيدة",
            "audio_count": 9,
            "audio_type": "mp4"
        }
    ],
    "فتاوي": [
        {
            "title": "فتاوي",
            "author": " ",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "فتاوي",
            "audio_count": 96,
            "audio_type": "mp4"
        }
    ],
    "فقه": [
        {
            "title": "أخصر المختصرات",
            "author": "محمد بن بدر الدين بن بلبان الدمشقي الحنبلي",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 70,
            "audio_type": "mp4"
        },
        {
            "title": "متن الرحبية",
            "author": "الرحبي",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 8,
            "audio_type": "mp4"
        },
        {
            "title": "الروضة الندية",
            "author": "الشيخ صديق حسن خان",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 154,
            "audio_type": "mp3"
        },
        {
            "title": "الروض المربع",
            "author": "منصور بن يوسف البهوتي الحنبلي",
            "publisher": " بشرح / الشيخ د . خالد منصور",
            "section": "فقه",
            "audio_count": 232,
            "audio_type": "mp4"
        },
        {
            "title": "فروع الفقه لإبن المبرد",
            "author": "إبن المبرد",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 24,
            "audio_type": "mp4"
        },
        {
            "title": "منهج السالكين",
            "author": "عبدالرحمن بن ناصر السعدي",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 33,
            "audio_type": "mp3"
        },
        {
            "title": "منهج السالكين",
            "author": "عبدالرحمن بن ناصر السعدي",
            "publisher": " بشرح / الشيخ د. خالد منصور",
            "section": "فقه",
            "audio_count": 48,
            "audio_type": "mp4"
        }
    ],
    "فرق ومذاهب": [
        {
            "title": "اصول الفرق والمذاهب",
            "author": " الشيخ سفر الحوالي",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "فرق ومذاهب",
            "audio_count": 9,
            "audio_type": "mp4"
        }
    ],
    "شروح الحديث": [
        {
            "title": "كتاب الأدب",
            "author": "  الإمام البخاري",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "شروح الحديث",
            "audio_count": 11,
            "audio_type": "mp4"
        }
        
    ],
    "قضايا فكرية": [

        {
            "title": "دراسات في النصرانية",
            "author": "  د. محمود مزروعة",
            "publisher": "بشرح  الشيخ خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 13,
            "audio_type": "mp3"
        },
        {
            "title": "العمل الجماعي",
            "author": "  الشيخ ياسر برهامي",
            "publisher": "بشرح  د . خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 4,
            "audio_type": "mp4"
        },
        {
            "title": "الإيمان والكفر",
            "author": "  الشيخ ياسر برهامي",
            "publisher": "بشرح الشيخ الدكتور خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 15,
            "audio_type": "mp4"
        },
        {
            "title": "القضاء والقدر",
            "author": "  الشيخ ياسر برهامي",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 4,
            "audio_type": "mp4"
        },
        {
            "title": "ملامح رئيسية للمنهج السلفي",
            "author": "  الشيخ ياسر برهامي",
            "publisher": "بشرح  د . حالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 24,
            "audio_type": "mp4"
        },
        {
            "title": "مناهج الإستدلال عند أهل السنة",
            "author": "  الدكتور مفرح بن سليمان القوسي",
            "publisher": "بشرح الشيخ الدكتور خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 41,
            "audio_type": "mp4"
        },
        {
            "title": "الولاء والبراء",
            "author": "  الشيخ ياسر برهامي",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "قضايا فكرية",
            "audio_count": 4,
            "audio_type": "mp4"
        }
    ],
    "قواعد الفقه": [
     
        {
            "title": "المنظومة السعدية",
            "author": "  سعد بن ناصر بن عبدالعزيز",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "قواعد الفقه",
            "audio_count": 15,
            "audio_type": "mp4"
        }
    ],
    "اللغة العربية": [
        {
            "title": "الأجرومية",
            "author": " أبي عبدالله بن عثمان الصنهاجي",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "اللغة العربية",
            "audio_count": 6,
            "audio_type": "mp4"
        }
    ],

    "اصول البدع": [
        {
            "title": "قواعد معرفة البدع",
            "author": " محمد بن حسين الجيزاني",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "اصول البدع",
            "audio_count": 18,
            "audio_type": "mp4"
        },
        {
            "title": "مناهج الاستدلال عند المبتدعة",
            "author": " مجموعة كتب",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "اصول البدع",
            "audio_count": 82,
            "audio_type": "mp4"
        },
        {
            "title": "معيار البدعة",
            "author": " محمد بن حسين الجيزاني",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "اصول البدع",
            "audio_count": 22,
            "audio_type": "mp3"
        }
    ],
    "أصول فقه": [
       
        {
            "title": "التذكرة",
            "author": " الإمام الحسن بن بدر الدين بن عبدالغني المقدسي الحنبلي.",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "أصول فقه",
            "audio_count": 16,
            "audio_type": "mp4"
        },
        {
            "title": "الورقات",
            "author": " الإمام الجويني",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "أصول فقه",
            "audio_count": 22,
            "audio_type": "mp4"
        },
        {
            "title": "قواعد أصول الفقه ",
            "author": " بن عبدالهادي الحنبلي",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "أصول فقه",
            "audio_count": 10,
            "audio_type": "mp4"
        },
        {
            "title": "قواعد الأصول ",
            "author": "صفي الدين عبدالمؤمن البغدادي",
            "publisher": "بشرح الشيخ د . خالد منصور",
            "section": "أصول فقه",
            "audio_count": 16,
            "audio_type": "mp4"
        }
    ],
    "أصول تفسير": [
        {
            "title": "مقدمة في أصول التفسير",
            "author": "د. مساعد الطيار",
            "publisher": "الشيخ د / خالد منصور",
            "section": "أصول تفسير",
            "audio_count": 16,
            "audio_type": "mp4"
        }
    ],
    "سيرة": [
      
        {
            "title": "الأرجوزة الميئية",
            "author": "إبن أبي العز الحنفي",
            "publisher": "الشيخ د . خالد منصور",
            "section": "سيرة",
            "audio_count": 10,
            "audio_type": "mp4"
        },
        {
            "title": "الشمائل المحمدية",
            "author": "الإمام الترمذي",
            "publisher": "الشيخ د . خالد منصور",
            "section": "سيرة",
            "audio_count": 4,
            "audio_type": "mp4"
        }
        
    ],
    "تفسير": [

        {
            "title": "تفسير السعدي",
            "author": "الشيخ عبدالرحمن بن ناصر السعدي",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تفسير",
            "audio_count": 6,
            "audio_type": "mp4"
        },
        {
            "title": "تفسير جزء عم",
            "author": "ابن كثير",
            "publisher": "بشرح الشيخ  د . خالد منصور",
            "section": "تفسير",
            "audio_count": 39,
            "audio_type": "mp4"
        }
    ],
    "تربية و تزكية": [
        {
            "title": "الداء والدواء",
            "author": " إبن القيم الجوزية",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تربية و تزكية",
            "audio_count": 10,
            "audio_type": "mp4"
        },
        {
            "title": "مشكلات وحلول 1",
            "author": " ",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تربية و تزكية",
            "audio_count": 10,
            "audio_type": "mp4"
        },
        {
            "title": "مشكلات وحلول 2  ",
            "author": " ",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تربية و تزكية",
            "audio_count": 10,
            "audio_type": "mp4"
        },
        {
            "title": "مشكلات وحلول 3  ",
            "author": " ",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تربية و تزكية",
            "audio_count": 15,
            "audio_type": "mp4"
        },
        {
            "title": "رفع الملام عن الائمة الأعلام",
            "author": " إبن تيمية",
            "publisher": "بشرح الشيخ د. خالد منصور",
            "section": "تربية و تزكية",
            "audio_count": 11,
            "audio_type": "mp4"
        }
    ]
}

module.exports = {
  siteUrl: 'https://khaled-mansour.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
//   generateIndexSitemap: false,
  sitemapIndexLastmod: true,
  autoLastmod: true,
  outDir: 'public',
  sitemapSize: 7000,
  sitemapBaseFileName: 'sitemap',
  sitemapPath: '/sitemap.xml',
  indexedDB: true,
  xmlNs: {
    news: 'http://www.google.com/schemas/sitemap-news/0.9',
    xhtml: 'http://www.w3.org/1999/xhtml',
    mobile: 'http://www.google.com/schemas/sitemap-mobile/1.0',
    image: 'http://www.google.com/schemas/sitemap-image/1.1',
    video: 'http://www.google.com/schemas/sitemap-video/1.1',
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    schemaLocation: 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
  },
  additionalPaths: async () => {
    const urls = [
      '/', '/about', '/contact', '/moshaf', '/booksound',

      // Users Dashboard
      '/users/dashboard/articles',
      '/users/dashboard/sections',
      '/users/dashboard/subjects',
      '/users/dashboard/assinments',
      '/users/dashboard/exams',
      '/users/dashboard/profile',

      // Admins Dashboard
      '/admins/dashboard/articles',
      '/admins/dashboard/sections',
      '/admins/dashboard/subjects',
      '/admins/dashboard/assinments',
      '/admins/dashboard/exams',
      '/admins/dashboard/profile',
      '/admins/dashboard/add-article',
      '/admins/dashboard/assinments-results',
      '/admins/dashboard/exams-results',
      '/admins/dashboard/groups',

      // Teachers Dashboard
      '/teachers/dashboard/articles',
      '/teachers/dashboard/sections',
      '/teachers/dashboard/subjects',
      '/teachers/dashboard/assinments',
      '/teachers/dashboard/exams',
      '/teachers/dashboard/profile',
      '/teachers/dashboard/add-article',
      '/teachers/dashboard/assinments-results',
      '/teachers/dashboard/exams-results',
      '/teachers/dashboard/groups',
      '/teachers/dashboard/add-assinment',
      '/teachers/dashboard/add-exam',
      '/teachers/dashboard/add-lesson',

      // Admin-Teacher Dashboard
      '/admin-teacher/dashboard/articles',
      '/admin-teacher/dashboard/sections',
      '/admin-teacher/dashboard/subjects',
      '/admin-teacher/dashboard/assinments',
      '/admin-teacher/dashboard/exams',
      '/admin-teacher/dashboard/profile',
      '/admin-teacher/dashboard/add-article',
      '/admin-teacher/dashboard/assinments-results',
      '/admin-teacher/dashboard/exams-results',
      '/admin-teacher/dashboard/groups',
      '/admin-teacher/dashboard/add-assinment',
      '/admin-teacher/dashboard/add-exam',
      '/admin-teacher/dashboard/add-lesson',
      '/admin-teacher/dashboard/add-group',
      '/admin-teacher/dashboard/admins',
      '/admin-teacher/dashboard/teachers',

      // Managers Dashboard
      '/managers/dashboard/articles',
      '/managers/dashboard/sections',
      '/managers/dashboard/subjects',
      '/managers/dashboard/assinments',
      '/managers/dashboard/exams',
      '/managers/dashboard/profile',
      '/managers/dashboard/add-article',
      '/managers/dashboard/assinments-results',
      '/managers/dashboard/exams-results',
      '/managers/dashboard/groups',
      '/managers/dashboard/add-assinment',
      '/managers/dashboard/add-exam',
      '/managers/dashboard/add-lesson',
      '/managers/dashboard/add-group',
      '/managers/dashboard/admins',
      '/managers/dashboard/teachers',
      '/managers/dashboard/admins-teachers',
      '/managers/dashboard/students',

      // Owner Dashboard
      '/owner/dashboard/articles',
      '/owner/dashboard/sections',
      '/owner/dashboard/subjects',
      '/owner/dashboard/assinments',
      '/owner/dashboard/exams',
      '/owner/dashboard/profile',
      '/owner/dashboard/add-article',
      '/owner/dashboard/assinments-results',
      '/owner/dashboard/exams-results',
      '/owner/dashboard/groups',
      '/owner/dashboard/add-assinment',
      '/owner/dashboard/add-exam',
      '/owner/dashboard/add-lesson',
      '/owner/dashboard/add-group',
      '/owner/dashboard/admins',
      '/owner/dashboard/teachers',
      '/owner/dashboard/admins-teachers',
      '/owner/dashboard/students',
      '/owner/dashboard/codes',
      '/owner/dashboard/managers',
      '/owner/dashboard/news',
    ];

    const dynamicUrls = [];
    
    // روابط القراء والسور
    quraanQaree.forEach((qaree) => {
      quraanSuras.forEach((sora) => {
        dynamicUrls.push({
          loc: `/moshaf?القارىء=${encodeURIComponent(qaree)}&السورة=${encodeURIComponent(sora)}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: 0.7,
        });
      });
    });

    // روابط الإذاعات
    radios.forEach((radio) => {
      dynamicUrls.push({
        loc: `/?radio=${encodeURIComponent(radio)}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.7,
      });
    });

    // روابط الخطب
    Object.keys(khotap).forEach((section) => {
      khotap[section].forEach((khotb) =>
        dynamicUrls.push({
          loc: `/booksound?القسم=${encodeURIComponent(section)}&كتاب=${encodeURIComponent(khotb.title)}&المؤلف=${encodeURIComponent(khotb.author)}&بشرح=${encodeURIComponent(khotb.publisher)}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: 0.7,
        })
      );
    }
    );

    return [...urls.map((url) => ({
      loc: url,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: url === '/' ? 'daily' : 'weekly',
      priority: url === '/' ? 1.0 : 0.7,
    })), ...dynamicUrls];
  },
};