require ('dotenv').config()
const db = require('./db')
const Terpine = require('./terpine')


const terpines = [
     {
          "name": "Myrcene",
          "nose": "Earthy, hoppy, mango, musky, lemongrass, and somtimes clove.",
          "properties": "Sleep aid, muscle relaxation, analgesic, anti-inflammatory, anti-bacterial, anti-fungal, and neuro-protective.",
          "strains": "White Widow, Bubba Kush.", 
          "altsources": ""
     },
     {
          "name": "Beta-caryophyllene",
          "nose": "Black pepper, cinnamon, cloves, and oregano.",
          "properties": "Anti - inflammatory, promotes healthy digestion, and may enhance wound healing.Beta - caryophyllene also has a unique ability to bind directly to CB - 2 receptors in the endocannabinoid system. ",
          "strains": "Girl Scout Cookies, Gorilla Glue #4, and OG Kush (high CBD).", 
          "altsources": ""
     },
     {
          "name": "Limonene",
          "nose": "Citrus and dill. ",
          "properties": "Uplifting, productivity support, possible anti - depressive props due to it effects on neural pathways. ",
          "strains": "Wedding cake, Do-Si-Do, Lemon Drop. ", 
          "altsources": ""
     },
     {
          "name": "Linalool",
          "nose": "lavender and lilac. ",
          "properties": "Relaxation, anti - stress, analgesic for body aches in particular, muscle anti - spasmodic. ",
          "strains": "Lavender, Master kush, and Abacus.", 
          "altsources": ""
     },
     {
          "name": "Pinene",
          "nose": "Abundant in conifers, rosemary, and parsley. ",
          "properties": "Anti-inflammatory, supports memory, antimicrobial, and opens airways. ",
          "strains": "Kona Gold, Blue Dream, Remedy.", 
          "altsources": ""
     },
     {
          "name": "Humulene",
          "nose": "Present in ginsing, sage, hops. ",
          "properties": "Anti - inflammatory, weight - control. ",
          "strains": ", Headband, Sour Diesel, Legendary OG.", 
          "altsources": ""
     },
     {
          "name": "Terpinolene",
          "nose": "Cumin, nutmeg, apples, and tea. ",
          "properties": "Tumor growth inhibitor.Cardiovascular support. ",
          "strains": ", Jack Herer.", 
          "altsources": ""
     },
     {
          "name": "alpha-Bisabolol",
          "nose": "Camomile. ",
          "properties": "Anti - bacterial, antioxidant, anti - inflammatory  for skin. ",
          "strains": "ACDC, Pink Kush, Sour Tsunami. ", 
          "altsources": ""
     },
     {
          "name": "Eucalyptol",
          "nose": "Eucalyptus. ",
          "properties": "antibacterial, antifungal, insect - repelent.Also, may help to lower blood pressure.",
          "strains": " ", 
          "altsources": ""
     },
     {
          "name": "Geraniol",
          "nose": "Geranium.High quantities in rose and citronella.",
          "properties": "antimicrobial, antioxidant, antiviral, neuroprotective properties, mosquito repellent.",
          "strains": " ", 
          "altsources": ""
     },
     {
          "name": "Terpineol",
          "nose": "",
          "properties": "Neuroprotective, anti-tumor. ",
          "strains": " ", 
          "altsources": ""
     },
     {
          "name": "Farnesene",
          "nose": "Green apple, ginger, tart fruit. ",
          "properties": "",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Borneol",
          "nose": "Rosemary, mint. ",
          "properties": "Analgesic, anti - inflammatory.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Ocimene",
          "nose": "Basil, orchids, and mint. ",
          "properties": "Fragrance, antioxidant, antimicrobial, and anti - tumor",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Nerolidol",
          "nose": "Woody",
          "properties": "Cleaning Products, antifungal, antioxidant, antimicrobial, and anti - inflammatory particularly for skin conditions.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Guaiol",
          "nose": "Pine. ",
          "properties": "Indica.Some research supports the natural destruction of cells in lung tumors.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Valencene",
          "nose": "Orange, grapefruit, tangerine. ",
          "properties": "Insect repellent, anti - inflammatory, skin - cancer protagonist. ",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "delta-3 Carene",
          "nose": "Cypress, pine, lemon, and musk.",
          "properties": "Assists with neuropathic conditions (fibromyalgia and Alzheimer's). May also assist with broken bones.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Phytol",
          "nose": "Jasmine. ",
          "strains": "Industrial hemp plants. ",
          "properties": "Pain relief via degradation of GABA.Anti - Stress, Promotes sleep. ", 
          "altsources": ""
     },
     {
          "name": "Sabinene",
          "nose": "Earthy oak aromas of wine and whiskey, Pepper & Pepper. ",
          "properties": "Digestive Aid, arthritis, salve for skin rashes, counters muscle atrophy.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Phellandrene",
          "nose": "Eucalyptus, Mint.Citrus Overtones. ",
          "properties": "Digestive Aid, Depression Aid, Neuropathic Pain. ",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Fenchol",
          "nose": "Fennel, Wood, Citrus. ",
          "properties": "",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Menthol",
          "nose": "Menthol ",
          "properties": "Analgesic, Anti - bacterial, Anti - inflammatory. ",
          "strains": "ChemDog, Gelato 45, and Thor’s Hammer.", 
          "altsources": ""
     },
     {
          "name": "Terpinene",
          "nose": "Earthy. ",
          "properties": "Anti - Tumor.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Isoborneol",
          "nose": "sweet and musky.",
          "properties": "Anti - Viral(HSV - 1).anti - oxidant, anti - inflammatory, anti - microbial.",
          "strains": "", 
          "altsources": ""
     },
     {
          "name": "Cymene",
          "nose": "carrots, orange, tangerine, oregano. ",
          "properties": "anti - inflammatory and pain relief.",
          "strains": "", 
          "altsources": ""
     }
]
Terpine.deleteMany({})
    .then(() => {
      Terpine.create(terpines)
        .then((createdTerpine) => {
            console.log('created terps:', createdTerpine)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })