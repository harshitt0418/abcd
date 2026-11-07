// Authentic product catalog extracted from Saurabh Agro Chemicals brochure
import ssPerforated from '../assets/products/ss_perforated.jpg';
import ssPoleTwin from '../assets/products/ss_pole_twin.jpg';
import ssPoleSingle from '../assets/products/ss_pole_single.jpg';
import ssRdso from '../assets/products/ss_rdso.jpg';
import ssSwing from '../assets/products/ss_swing.jpg';
import ssDShape from '../assets/products/ss_d_shape.jpg';
import ssPedal from '../assets/products/ss_pedal.jpg';
import ssPushDome from '../assets/products/ss_push_dome.jpg';
import ssCylindrical from '../assets/products/ss_cylindrical.jpg';
import ssSquare from '../assets/products/ss_square.jpg';

import plasticWheelieRed from '../assets/products/plastic_wheelie_red.jpg';
import plasticStandTrio from '../assets/products/plastic_stand_trio.jpg';
import equipmentGrassCutter from '../assets/products/equipment_grass_cutter.jpg';
import plasticBiomedicalPedal from '../assets/products/plastic_biomedical_pedal.jpg';
import plasticDomeBin from '../assets/products/plastic_dome_bin.jpg';
import plastic4WheelHdpe from '../assets/products/plastic_4wheel_hdpe.jpg';
import plasticSukhaGeela from '../assets/products/plastic_sukha_geela.jpg';
import wasteGarbageBags from '../assets/products/waste_garbage_bags.jpg';
import equipmentWheelbarrow from '../assets/products/equipment_wheelbarrow.jpg';
import equipmentThermalFogger from '../assets/products/equipment_thermal_fogger.jpg';

import safetyLifeJacket from '../assets/products/safety_life_jacket.jpg';
import safetyUnisexRaincoat from '../assets/products/safety_unisex_raincoat.jpg';
import safetyShoesGumboots from '../assets/products/safety_shoes_gumboots.jpg';
import safetyHelmet from '../assets/products/safety_helmet.jpg';
import safetyFallHarness from '../assets/products/safety_fall_harness.jpg';
import safetyFireExtinguisher from '../assets/products/safety_fire_extinguisher.jpg';
import safetyHighvisJacket from '../assets/products/safety_highvis_jacket.jpg';
import safetyWinterJacket from '../assets/products/safety_winter_jacket.jpg';
import safetyHandGloves from '../assets/products/safety_hand_gloves.jpg';
import safetyFirstAidKit from '../assets/products/safety_first_aid_kit.jpg';

import chemLambdaCyhalothrin from '../assets/products/chem_lambda_cyhalothrin.jpg';
import chemLimePowder from '../assets/products/chem_lime_powder.jpg';
import chemPyrethrumExtract from '../assets/products/chem_pyrethrum_extract.jpg';
import chemBleachingPowder from '../assets/products/chem_bleaching_powder.jpg';
import chemDeltamethrinUlv from '../assets/products/chem_deltamethrin_ulv.jpg';
import chemTemephosEc from '../assets/products/chem_temephos_ec.jpg';
import chemDelarve25wp from '../assets/products/chem_delarve_25wp.jpg';
import chemMalathion50ec from '../assets/products/chem_malathion_50ec.jpg';
import chemDeltamethrinFlow from '../assets/products/chem_deltamethrin_flow.jpg';
import chemMalathionTech95 from '../assets/products/chem_malathion_tech95.jpg';

export const CATEGORIES = [
  {
    id: "all",
    label: "All Product Lines",
    description: "Complete brochure portfolio engineered for municipal, railway, and institutional deployment.",
    count: 40,
  },
  {
    id: "stainless-steel",
    label: "Stainless Steel Dustbins",
    description: "Premium Grade 304 stainless steel waste bins, including RDSO-approved railway specifications.",
    count: 10,
    tagline: "Grade 304 Rust-Resistant & Heavy Duty",
  },
  {
    id: "plastic-bins",
    label: "Plastic Dustbins & Waste Systems",
    description: "Economical, UV-stabilized HDPE wheelie bins and municipal segregation systems for urban local bodies.",
    count: 7,
    tagline: "Weather-Resistant UV-Stabilized HDPE",
  },
  {
    id: "safety-products",
    label: "Safety & PPE Equipment",
    description: "ISI-marked fire extinguishers, high-visibility apparel, fall protection, and industrial protective gear.",
    count: 10,
    tagline: "Workplace & Industrial Safety Compliant",
  },
  {
    id: "agro-chemicals",
    label: "Insecticides & Agro Chemicals",
    description: "Public health larvicides, vector control formulations, bleaching powders, and agricultural crop solutions.",
    count: 10,
    tagline: "Public Health & Agricultural Formulations",
  },
  {
    id: "related-equipment",
    label: "Sanitation & Field Equipment",
    description: "Heavy-duty thermal foggers for mosquito eradication, multi-tool grass cutters, and industrial wheelbarrows.",
    count: 3,
    tagline: "Ground Maintenance & Vector Control Machines",
  }
];

export const PRODUCTS = [
  // 1. Stainless Steel Dustbins (Page 4 & 5)
  {
    id: "ss-perforated",
    name: "Stainless Steel Perforated Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssPerforated,
    brochureRef: "Page 4, Item 1",
    features: "Precision laser/punched perforated body for airflow and modern aesthetic. Corrosion resistant rubber base rim.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Finish", value: "Brushed Satin Finish" },
      { label: "Base", value: "Protective rubber base trim" },
      { label: "Application", value: "Railway waiting lounges, airports, institutional corridors" }
    ],
    highlight: "Grade 304 Stainless Steel"
  },
  {
    id: "ss-pole-twin",
    name: "Stainless Steel Pole Hanging Twin Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssPoleTwin,
    brochureRef: "Page 4, Item 2",
    features: "Dual-bin waste segregation system mounted on heavy gauge central stainless steel pole framework.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Mounting", value: "Heavy-duty ground anchored steel pole" },
      { label: "Swivel Mechanism", value: "Easy-tilt pivot for emptying" },
      { label: "Application", value: "Railway platforms, municipal walkways, public gardens" }
    ],
    highlight: "Dual Stream Segregation"
  },
  {
    id: "ss-pole-single",
    name: "Stainless Steel Pole Hanging Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssPoleSingle,
    brochureRef: "Page 4, Item 3",
    features: "Perforated cylindrical body with swing pivot bracket for single-pole mounting along public thoroughfares.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Design", value: "Perforated swing-out body" },
      { label: "Vandal Resistance", value: "Lockable pivot bracket" },
      { label: "Application", value: "Railway concourses, streetscapes, public promenades" }
    ],
    highlight: "Pole Mount Pivot"
  },
  {
    id: "ss-rdso",
    name: "Stainless Steel Dustbin (RDSO Approved)",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssRdso,
    brochureRef: "Page 4, Item 4",
    features: "Fabricated strictly as per Indian Railways RDSO technical drawings, featuring secure tamper-proof chain bracket and locking clamp.",
    specs: [
      { label: "Compliance", value: "Approved by RDSO drawing" },
      { label: "Material Grade", value: "SS 304 heavy-gauge" },
      { label: "Security", value: "Integrated anti-theft chain and lock bracket" },
      { label: "Application", value: "Indian Railways passenger coaches and railway platforms" }
    ],
    highlight: "Approved by RDSO Drawing"
  },
  {
    id: "ss-swing",
    name: "Stainless Steel Swing Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssSwing,
    brochureRef: "Page 4, Item 5",
    features: "Classic glossy finish with self-balancing 360-degree counter-weighted swing lid for hygienic touchless waste disposal.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Finish", value: "Mirror Glossy Finish" },
      { label: "Lid Type", value: "Self-closing 360° counter-weight swing" },
      { label: "Application", value: "Government offices, conference halls, health facilities" }
    ],
    highlight: "Self-Closing Swing Lid"
  },
  {
    id: "ss-d-shape",
    name: "Stainless Steel D-Shape Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssDShape,
    brochureRef: "Page 5, Item 1",
    features: "Space-efficient flat-back D-shape profile engineered to sit flush against walls and corridor partitions.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Profile", value: "Flat-back wall-hugger D-profile" },
      { label: "Opening", value: "Wide front drop chute with integrated handles" },
      { label: "Application", value: "Institutional elevators, lobbies, corridor perimeters" }
    ],
    highlight: "Flush Wall-Hugging Design"
  },
  {
    id: "ss-pedal",
    name: "Stainless Steel Pedal Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssPedal,
    brochureRef: "Page 5, Item 2",
    features: "Hands-free foot pedal operation with smooth damper lid closure and internal removable liner.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Mechanism", value: "Heavy-duty linkage foot pedal" },
      { label: "Lid", value: "Odor-tight closure" },
      { label: "Application", value: "Clinics, administrative restrooms, food-prep facilities" }
    ],
    highlight: "Hands-Free Pedal Operation"
  },
  {
    id: "ss-push-dome",
    name: "Stainless Steel Push Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssPushDome,
    brochureRef: "Page 5, Item 3",
    features: "Dome top with spring-loaded push door mechanism to conceal contents and contain odors.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Lid Type", value: "Spring-tensioned push flap" },
      { label: "Body", value: "Seamless spun cylindrical shell" },
      { label: "Application", value: "High-traffic institutional dining, reception foyers" }
    ],
    highlight: "Spring-Loaded Push Door"
  },
  {
    id: "ss-cylindrical",
    name: "Stainless Steel Open Taper Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssCylindrical,
    brochureRef: "Page 5, Item 4",
    features: "Seamless open top cylindrical bin with reinforced rolled rim for office waste collection.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Design", value: "Open top with collar collar rim" },
      { label: "Body", value: "Brushed finish, scratch resistant" },
      { label: "Application", value: "Executive desks, boardroom meeting rooms, hotel suites" }
    ],
    highlight: "Seamless Rolled Rim"
  },
  {
    id: "ss-square",
    name: "Stainless Steel Square Dustbin",
    category: "stainless-steel",
    brand: "SAC",
    material: "Stainless Steel Grade 304",
    image: ssSquare,
    brochureRef: "Page 5, Item 5",
    features: "Modern geometric square profile with reinforced corners for high-capacity institutional waste sorting.",
    specs: [
      { label: "Material Grade", value: "SS 304" },
      { label: "Form Factor", value: "Geometric square footprint" },
      { label: "Durability", value: "Reinforced seam welds and top collar" },
      { label: "Application", value: "Commercial complexes, railway administrative complexes" }
    ],
    highlight: "Geometric Heavy-Duty Square"
  },

  // 2. Plastic Dustbins & Waste Management (Page 6 & 7)
  {
    id: "plastic-wheelie-red",
    name: "Wheelie Plastic Dustbin",
    category: "plastic-bins",
    brand: "SAC",
    material: "Virgin High-Density Polyethylene (HDPE)",
    image: plasticWheelieRed,
    brochureRef: "Page 6, Item 1",
    features: "Durable, weather-resistant mobile waste bin with sturdy rubber wheels and solid axle for general waste and recycling collection.",
    specs: [
      { label: "Material", value: "UV-stabilized HDPE" },
      { label: "Mobility", value: "Heavy-duty rubber wheels on solid steel axle" },
      { label: "Lid", value: "Ergonomic molded handles and hinged flip lid" },
      { label: "Application", value: "Municipal sanitation, residential societies, commercial facilities" }
    ],
    highlight: "Weather-Resistant HDPE"
  },
  {
    id: "plastic-stand-trio",
    name: "Plastic Dustbins Mounted On Metal Stand",
    category: "plastic-bins",
    brand: "SAC",
    material: "HDPE Bins on Powder-Coated Metal Rail",
    image: plasticStandTrio,
    brochureRef: "Page 6, Item 2",
    features: "3-stream hanging waste station specifically designed for Gram Panchayats, Nagar Palika, and Maha Nagar Palika public areas.",
    specs: [
      { label: "Configuration", value: "Trio color-coded set (Blue, Green, Red)" },
      { label: "Stand", value: "Anti-corrosion powder-coated tubular steel frame" },
      { label: "Target Sector", value: "Gram Panchayat & Nagar Palika public spaces" },
      { label: "Application", value: "Streets, bus terminals, public parks, town squares" }
    ],
    highlight: "Nagar Palika Approved Design"
  },
  {
    id: "plastic-biomedical-pedal",
    name: "Bio-Medical Waste Pedal Dustbins",
    category: "plastic-bins",
    brand: "SAC",
    material: "Polypropylene / HDPE with Biohazard Symbols",
    image: plasticBiomedicalPedal,
    brochureRef: "Page 6, Item 4",
    features: "Color-coded biomedical waste pedal dustbins engineered for safe, touchless disposal of organic and hazardous medical waste.",
    specs: [
      { label: "Color Coding", value: "Green, Blue, Red with printed segregation iconography" },
      { label: "Operation", value: "Foot pedal hands-free lid opening" },
      { label: "Hygiene", value: "Smooth washable inner contour" },
      { label: "Application", value: "Government hospitals, healthcare centers, clinical labs" }
    ],
    highlight: "Color-Coded Bio-Medical Set"
  },
  {
    id: "plastic-dome-bin",
    name: "Dome Shape Plastic Dustbin",
    category: "plastic-bins",
    brand: "SAC",
    material: "High Grade UV-Stabilized Plastics",
    image: plasticDomeBin,
    brochureRef: "Page 6, Item 5",
    features: "Sleek dome hood prevents rainwater ingress; molded from high-grade UV-stabilized plastic for prolonged outdoor sun exposure.",
    specs: [
      { label: "Material", value: "UV-stabilized virgin polymer" },
      { label: "Weather Shield", value: "Molded dome hood protects against rain" },
      { label: "Base", value: "Weighted stable bottom" },
      { label: "Application", value: "Offices, hospitals, outdoor campuses, park benches" }
    ],
    highlight: "UV-Stabilized Rainproof Dome"
  },
  {
    id: "plastic-4wheel-hdpe",
    name: "4-Wheeled HDPE Waste Dustbin",
    category: "plastic-bins",
    brand: "SAC",
    material: "Heavy-Duty High-Density Polyethylene",
    image: plastic4WheelHdpe,
    brochureRef: "Page 7, Item 1",
    features: "High-capacity 4-wheel mobile container designed for collecting, transporting, and bulk tipping recyclables, compost, and general waste.",
    specs: [
      { label: "Wheel Setup", value: "4 swivel caster wheels with foot brake mechanism" },
      { label: "Lifting Trunnions", value: "Compatible with municipal hydraulic comb lifters" },
      { label: "Drain Plug", value: "Threaded bottom drain plug for washouts" },
      { label: "Application", value: "Railway yards, wholesale mandis, institutional campuses" }
    ],
    highlight: "4-Wheel Bulk Containment"
  },
  {
    id: "plastic-sukha-geela",
    name: "Sukha Kachra & Geela Kachra Twin Bins",
    category: "plastic-bins",
    brand: "SAC",
    material: "HDPE Bins on Metal Stanchion",
    image: plasticSukhaGeela,
    brochureRef: "Page 7, Item 2",
    features: "Dedicated dual-compartment segregation unit clearly labeled for Sukha Kachra (Dry Waste) and Geela Kachra (Wet Waste).",
    specs: [
      { label: "Labeling", value: "Screen-printed Dry & Wet waste Hindi/English signage" },
      { label: "Colors", value: "Standard Green (Wet/Biodegradable) & Blue (Dry/Recyclable)" },
      { label: "Mounting", value: "Twin-bracket grounded metal pole frame" },
      { label: "Application", value: "Swachh Bharat municipal drives, roadside points, train stations" }
    ],
    highlight: "Wet & Dry Waste Segregation"
  },
  {
    id: "waste-garbage-bags",
    name: "Heavy Duty Municipal Garbage Bags",
    category: "plastic-bins",
    brand: "SAC",
    material: "High Tear-Resistant Polyethylene Film",
    image: wasteGarbageBags,
    brochureRef: "Page 7, Item 3",
    features: "Offered in medium and large institutional sizes with tie-tapes for easy sealing and leakproof carrying of heavy wet or sharp waste.",
    specs: [
      { label: "Available Sizes", value: "Medium, Large & Extra Large bulk cartons" },
      { label: "Closure", value: "Integrated tie-tapes / heavy seal gusset" },
      { label: "Strength", value: "High tensile puncture resistance" },
      { label: "Application", value: "Municipal sanitation workers, hospital waste bagging, railway coaches" }
    ],
    highlight: "High Puncture-Resistance"
  },

  // 3. Safety Products (Page 8 & 9)
  {
    id: "safety-fire-extinguisher",
    name: "Premium Fire Extinguisher (ISI Mark)",
    category: "safety-products",
    brand: "SAC",
    material: "Heavy Duty Pressure Vessel with ISI Certification",
    image: safetyFireExtinguisher,
    brochureRef: "Page 9, Item 1",
    features: "Heavy-duty stored pressure fire extinguisher ideal for offices, small businesses, paper, flammable liquid, and electrical fires.",
    specs: [
      { label: "Certification", value: "ISI Mark certified (Bureau of Indian Standards)" },
      { label: "Agent Type", value: "Dry Chemical Powder (ABC multi-purpose)" },
      { label: "Mounting", value: "Includes quick-release heavy steel wall bracket" },
      { label: "Application", value: "Public buildings, rail coaches, industrial warehouses" }
    ],
    highlight: "Certified ISI Mark"
  },
  {
    id: "safety-highvis-jacket",
    name: "Premium Reflective Safety Jacket",
    category: "safety-products",
    brand: "SAC",
    material: "Fluorescent Polyester with 360° Reflective Strips",
    image: safetyHighvisJacket,
    brochureRef: "Page 9, Item 2",
    features: "High visibility bright fluorescent color with dual horizontal and vertical reflective micro-prismatic strips for day, dusk, and night visibility.",
    specs: [
      { label: "Visibility", value: "High-intensity retro-reflective retro tape" },
      { label: "Fit", value: "Unisex ergonomic vest with velcro front closure" },
      { label: "Fabric", value: "Lightweight breathable mesh/taffeta" },
      { label: "Application", value: "Railway trackmen, municipal sanitation workers, highway patrol" }
    ],
    highlight: "360° Night & Dusk Visibility"
  },
  {
    id: "safety-helmet",
    name: "Industrial Safety Helmet",
    category: "safety-products",
    brand: "SAC",
    material: "Impact-Resistant Virgin Polymer Shell",
    image: safetyHelmet,
    brochureRef: "Page 8, Item 4",
    features: "Extra comfortable cradle harness designed for long working hours; delivers superior impact absorption on construction sites and factories.",
    specs: [
      { label: "Suspension", value: "Multi-point shock-absorbing adjustable ratchet cradle" },
      { label: "Protection", value: "Crown deflection against falling objects" },
      { label: "Comfort", value: "Sweatband and ventilation contours" },
      { label: "Application", value: "Railway workshops, civil construction, manufacturing plants" }
    ],
    highlight: "Multi-Point Suspension"
  },
  {
    id: "safety-fall-harness",
    name: "Industrial Safety Belt & Fall Harness",
    category: "safety-products",
    brand: "SAC",
    material: "High-Tenacity Polyester Webbing with Alloy Hooks",
    image: safetyFallHarness,
    brochureRef: "Page 8, Item 5",
    features: "Full body fall protection harness featuring scaffold hook, double lanyard shock system, and unisex fully adjustable buckles.",
    specs: [
      { label: "Lanyard", value: "Double lanyard with forged scaffold carabiner hooks" },
      { label: "Adjustability", value: "Chest, thigh, and shoulder strap multi-point adjustment" },
      { label: "Load Rating", value: "Heavy-duty industrial fall arrest compliant" },
      { label: "Application", value: "Railway electrification towers, high-altitude maintenance" }
    ],
    highlight: "Double Lanyard Scaffold Hooks"
  },
  {
    id: "safety-shoes-gumboots",
    name: "Safety Shoes & Gum Boots",
    category: "safety-products",
    brand: "SAC",
    material: "Vulcanized PVC Gum Boots / Leather Safety Shoes",
    image: safetyShoesGumboots,
    brochureRef: "Page 8, Item 3",
    features: "Lightweight, easy to wear/remove, washable, and quick-drying footwear engineered for outdoor activities in damp and hazardous terrain.",
    specs: [
      { label: "Sole", value: "Slip-resistant deep-cleated anti-clog tread" },
      { label: "Upper", value: "Seamless waterproof molded PVC / reinforced toe shoe" },
      { label: "Resistance", value: "Water, mild acids, alkalis, and mud" },
      { label: "Application", value: "Sanitation workers, sewer maintenance, agro spraying teams" }
    ],
    highlight: "Waterproof Anti-Slip Grip"
  },
  {
    id: "safety-hand-gloves",
    name: "Natural Latex & Chemical Resistant Hand Gloves",
    category: "safety-products",
    brand: "SAC",
    material: "Natural Latex Rubber Compound",
    image: safetyHandGloves,
    brochureRef: "Page 9, Item 4",
    features: "Heavy-gauge natural latex rubber gloves offering exceptional durability and tactile grip for sanitation, chemical handling, and gardening.",
    specs: [
      { label: "Material", value: "100% natural latex with textured palm grip" },
      { label: "Cuff Length", value: "Extended beaded gauntlet cuff" },
      { label: "Resistance", value: "Disinfectants, agro chemicals, domestic chores" },
      { label: "Application", value: "Pest control operators, cleaning staff, agricultural applicators" }
    ],
    highlight: "Textured Chemical-Resistant Grip"
  },
  {
    id: "safety-unisex-raincoat",
    name: "Unisex Full Length Industrial Rain Coat",
    category: "safety-products",
    brand: "SAC",
    material: "Heavy-Gauge PVC Coated Polyester",
    image: safetyUnisexRaincoat,
    brochureRef: "Page 8, Item 2",
    features: "Full length raincoat with attached hood and comprehensive water-resistant barrier to keep field workers completely dry during heavy downpours.",
    specs: [
      { label: "Design", value: "Full-length trench coat with snap buttons and storm flap" },
      { label: "Hood", value: "Drawstring adjustable protective hood" },
      { label: "Seams", value: "Heat-sealed leakproof seams" },
      { label: "Application", value: "Railway track maintenance during monsoon, civic line staff" }
    ],
    highlight: "Heat-Sealed Leakproof Seams"
  },
  {
    id: "safety-life-jacket",
    name: "Life Saving Jacket",
    category: "safety-products",
    brand: "SAC",
    material: "Closed-Cell Foam Core with High-Visibility Outer",
    image: safetyLifeJacket,
    brochureRef: "Page 8, Item 1",
    features: "High-buoyancy life saving vest designed for water safety, boating, emergency flood response, and reservoir maintenance.",
    specs: [
      { label: "Buoyancy", value: "High flotation closed-cell polyethylene foam" },
      { label: "Straps", value: "Triple adjustable heavy webbing belts with quick clips" },
      { label: "Safety Accents", value: "Reflective panels and emergency rescue whistle" },
      { label: "Application", value: "Disaster management authorities, water utilities, defense" }
    ],
    highlight: "High Buoyancy Life Vest"
  },
  {
    id: "safety-first-aid-kit",
    name: "Multi-Compartment First Aid Kit Cabinet",
    category: "safety-products",
    brand: "SAC",
    material: "Wall-Mountable Steel / Impact Plastic with Lock",
    image: safetyFirstAidKit,
    brochureRef: "Page 9, Item 5",
    features: "Multi-compartment organizer with secure locking mechanism for emergency medical preparedness across institutional premises.",
    specs: [
      { label: "Mounting", value: "Pre-drilled wall-mount bracket or carry handle" },
      { label: "Security", value: "Key-lockable latch to prevent unauthorized access" },
      { label: "Marking", value: "High-visibility Medical Red Cross emblem" },
      { label: "Application", value: "Government offices, schools, railway junctions, industrial plants" }
    ],
    highlight: "Lockable Multi-Compartment"
  },
  {
    id: "safety-winter-jacket",
    name: "Weatherproof Industrial Winter Jacket",
    category: "safety-products",
    brand: "SAC",
    material: "100% Nylon Failled Weatherproof Shell with Thermal Lining",
    image: safetyWinterJacket,
    brochureRef: "Page 9, Item 3",
    features: "Ultra-warm, cold-weather parka designed with storm collar, secure zip pockets, and water resistance for night patrols and winter shifts.",
    specs: [
      { label: "Shell", value: "High-density windproof & water-resistant nylon" },
      { label: "Insulation", value: "Thermal polyester fill layer" },
      { label: "Pockets", value: "Dual secure zip handwarmers and chest storage" },
      { label: "Application", value: "Northern railway outdoor staff, night security, cold climate depots" }
    ],
    highlight: "Thermal Windproof Insulation"
  },

  // 4. Insecticides & Agro Chemicals (Page 10 & 11)
  {
    id: "chem-lambda-cyhalothrin",
    name: "Lambda Cyhalothrin 5-10% WP",
    category: "agro-chemicals",
    brand: "SAC Killmos",
    material: "Wettable Powder (WP) Formulation",
    image: chemLambdaCyhalothrin,
    brochureRef: "Page 10, Item 1",
    features: "Synthetic pyrethroid insecticide used for broad spectrum pest control in agriculture and public health. Delivers rapid knockdown and residual control of chewing/sucking pests, mosquitoes, and cockroaches.",
    specs: [
      { label: "Formulation", value: "Wettable Powder (5% - 10% WP)" },
      { label: "Target Pests", value: "Mosquitoes, cockroaches, flies, chewing & sucking agricultural pests" },
      { label: "Action Mode", value: "Quick knockdown with prolonged residual contact control" },
      { label: "Application", value: "Municipal vector control spraying, crop field protection" }
    ],
    highlight: "Broad Spectrum WP Formula"
  },
  {
    id: "chem-lime-powder",
    name: "Hydrated Lime Powder (25 kg Bag)",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Calcium Hydroxide Industrial Grade",
    image: chemLimePowder,
    brochureRef: "Page 10, Item 2",
    features: "Versatile industrial hydrated lime supplied in 25 kg bags. Extensively utilized in municipal sanitation, water treatment, soil neutralization, and rust prevention.",
    specs: [
      { label: "Packaging", value: "25 kg moisture-resistant woven bag (Use No Hooks)" },
      { label: "Composition", value: "Hydrated Lime [Ca(OH)2]" },
      { label: "Grade", value: "Industrial & Agricultural grade" },
      { label: "Application", value: "Public drain dusting, municipal sanitation, agricultural pH conditioning" }
    ],
    highlight: "25 kg Bulk Municipal Packing"
  },
  {
    id: "chem-pyrethrum-extract",
    name: "Pyrethrum 2% Extract",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Natural Pyrethrum Liquid Extract",
    image: chemPyrethrumExtract,
    brochureRef: "Page 10, Item 3",
    features: "Natural botanical insecticide extract primarily formulated for controlling household pests including mosquitoes, flies, and bed bugs in residential and public facilities.",
    specs: [
      { label: "Active Content", value: "2% Natural Pyrethrins" },
      { label: "Form", value: "Concentrated liquid extract" },
      { label: "Target Pests", value: "Bed bugs, flies, mosquitoes, household crawling insects" },
      { label: "Application", value: "Indoor spraying, railway coach disinfestation, hostel barracks" }
    ],
    highlight: "Natural Botanical Insecticide"
  },
  {
    id: "chem-bleaching-powder",
    name: "Stable Bleaching Powder (25 kg Bag)",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Calcium Hypochlorite Disinfectant",
    image: chemBleachingPowder,
    brochureRef: "Page 10, Item 4",
    features: "Stable bleaching powder with 32% - 35% available chlorine content. Essential municipal chemical for water purification, open drain sanitization, and pathogen control.",
    specs: [
      { label: "Packaging", value: "25 kg sealed heavy-duty bag" },
      { label: "Available Chlorine", value: "32% to 35% guaranteed active chlorine" },
      { label: "Function", value: "Disinfection, deodorization, and germicidal sanitization" },
      { label: "Application", value: "Municipal water treatment plants, open gutters, epidemic containment" }
    ],
    highlight: "32%-35% Active Chlorine"
  },
  {
    id: "chem-deltamethrin-ulv",
    name: "Deltamethrin 1.25% ULV",
    category: "agro-chemicals",
    brand: "SAC Shivfog",
    material: "Ultra Low Volume (ULV) Pyrethroid Formulation",
    image: chemDeltamethrinUlv,
    brochureRef: "Page 10, Item 5",
    features: "Specialized Ultra Low Volume liquid pyrethroid insecticide specifically engineered for fast-acting thermal fogging and cold fogging control of adult mosquitoes and agricultural insects.",
    specs: [
      { label: "Formulation", value: "1.25% ULV (Ultra Low Volume)" },
      { label: "Method", value: "Thermal fogging machines and cold ULV mist generators" },
      { label: "Action", value: "Instant space spray knockdown" },
      { label: "Application", value: "Urban mosquito fogging, municipal colonies, agricultural perimeter pest control" }
    ],
    highlight: "Specialized Fogging Formula"
  },
  {
    id: "chem-temephos-ec",
    name: "Temephos 50% E.C. (Paraguard)",
    category: "agro-chemicals",
    brand: "Paraguard / SAC",
    material: "Emulsifiable Concentrate (E.C.) Larvicide",
    image: chemTemephosEc,
    brochureRef: "Page 11, Item 1",
    features: "Highly effective organophosphate larvicide specifically recommended by public health authorities for controlling mosquito larvae in standing water, ponds, swamps, and storm drains.",
    specs: [
      { label: "Active Ingredient", value: "Temephos 50% EC" },
      { label: "Target Stage", value: "Mosquito larvae in breeding sites" },
      { label: "Water Types", value: "Stagnant pools, drainage lines, swamps, construction trenches" },
      { label: "Safety", value: "Compliant with public health anti-larval protocols" }
    ],
    highlight: "WHO-Grade Mosquito Larvicide"
  },
  {
    id: "chem-delarve-25wp",
    name: "De-Larve 25 WP Larvicide",
    category: "agro-chemicals",
    brand: "SAC De-Larve",
    material: "Wettable Powder Insect Growth Regulator / Larvicide",
    image: chemDelarve25wp,
    brochureRef: "Page 11, Item 2",
    features: "Formulated specifically for the control of mosquito larvae and housefly maggots in both clean and polluted water bodies, nurseries, garbage dumps, and large-scale utility drains.",
    specs: [
      { label: "Formulation", value: "25% WP (Wettable Powder)" },
      { label: "Target", value: "Housefly maggots & mosquito larvae" },
      { label: "Persistence", value: "Prolonged residual action prevents pupal emergence" },
      { label: "Application", value: "Dumping grounds, municipal drains, institutional nurseries" }
    ],
    highlight: "Fly Maggot & Larval Ingestion"
  },
  {
    id: "chem-malathion-50ec",
    name: "Malathion 50% EC",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Emulsifiable Concentrate Foliar Spray",
    image: chemMalathion50ec,
    brochureRef: "Page 11, Item 3",
    features: "Versatile agricultural liquid formulation diluted with water as a foliar spray to control chewing and sucking insect pests across fruit orchards, vegetable crops, and cereals.",
    specs: [
      { label: "Active Ingredient", value: "Malathion 50% EC" },
      { label: "Usage", value: "Dilute foliar spray application" },
      { label: "Crops", value: "Vegetables, fruits, cereals, pulses" },
      { label: "Pest Spectrum", value: "Aphids, mites, caterpillars, thrips, leafhoppers" }
    ],
    highlight: "Foliar Agricultural Defense"
  },
  {
    id: "chem-deltamethrin-flow",
    name: "Deltamethrin 2.5% Flow",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Flowable Suspension Concentrate",
    image: chemDeltamethrinFlow,
    brochureRef: "Page 11, Item 4",
    features: "Synthetic pyrethroid flowable liquid featuring 2.5% active Deltamethrin. Delivers rapid knockdown and extensive residual defense against vector carriers of Malaria and Dengue.",
    specs: [
      { label: "Active Ingredient", value: "Deltamethrin 2.5% Flow (Suspension)" },
      { label: "Vector Defense", value: "Malaria (Anopheles) and Dengue (Aedes) vectors" },
      { label: "Residual Span", value: "Extended indoor and outdoor surface barrier" },
      { label: "Application", value: "Health departments, municipal anti-vector indoor residual spraying (IRS)" }
    ],
    highlight: "Malaria & Dengue Vector Control"
  },
  {
    id: "chem-malathion-tech95",
    name: "Malathion Technical 95%",
    category: "agro-chemicals",
    brand: "SAC",
    material: "Technical Grade Active Chemical 95%",
    image: chemMalathionTech95,
    brochureRef: "Page 11, Item 5",
    features: "Highly concentrated technical active grade (95% purity) used for formulating specialized insecticidal blends and heavy industrial vector eradication programs.",
    specs: [
      { label: "Active Purity", value: "95% Malathion Technical" },
      { label: "Packaging", value: "Heavy-duty UN-approved sealed drum" },
      { label: "Handling", value: "Strict industrial protocol, stored in dry ventilated depot" },
      { label: "Application", value: "Formulation houses, large-scale public health programs" }
    ],
    highlight: "95% Pure Technical Active"
  },

  // 5. Related Equipment (Page 6 & 7)
  {
    id: "equipment-thermal-fogger",
    name: "Thermal Fogging Machine",
    category: "related-equipment",
    brand: "SAC",
    material: "Stainless Steel Resonator Tube & Fuel Tank",
    image: equipmentThermalFogger,
    brochureRef: "Page 7, Item 5",
    features: "Thermal pulse-jet fogger vaporizes chemical solution into a dense aerosol fog for eradicating mosquitoes, pests, and airborne pathogens across offices, lawns, and municipal wards.",
    specs: [
      { label: "Mechanism", value: "Thermal pulse vaporization creates dense aerosol fog" },
      { label: "Fuel / Carrier", value: "Petrol engine with diesel/solvent chemical carrier" },
      { label: "Coverage", value: "Deep penetration into vegetation, sewers, and large open grounds" },
      { label: "Application", value: "Municipal vector eradication, railway yards, residential societies" }
    ],
    highlight: "Dense Aerosol Vector Eradication"
  },
  {
    id: "equipment-grass-cutter",
    name: "Multi-Attachment Grass Cutter (35cc / 50cc)",
    category: "related-equipment",
    brand: "SAC",
    material: "High-Power 2-Stroke / 4-Stroke Engine with Alloy Shaft",
    image: equipmentGrassCutter,
    brochureRef: "Page 6, Item 3",
    features: "Heavy-duty agricultural cutter available in 35 cc and 50 cc power outputs. Supplied with interchangeable tiller, circular chainsaw grass blade, and nylon trimmer head.",
    specs: [
      { label: "Engine Range", value: "35 cc and 50 cc high-torque engines" },
      { label: "Attachments Included", value: "Tiller attachment, metal saw blade, trimmer head, safety guard" },
      { label: "Harness", value: "Ergonomic shoulder strap and dual bike handles" },
      { label: "Application", value: "Agriculture farming, lawn care, railway embankment & roadside grass clearing" }
    ],
    highlight: "35cc / 50cc with Multi-Attachments"
  },
  {
    id: "equipment-wheelbarrow",
    name: "Two-Wheel Handcraft / Heavy Wheelbarrow",
    category: "related-equipment",
    brand: "SAC",
    material: "Deep Pressed Steel Hopper on Reinforced Chassis",
    image: equipmentWheelbarrow,
    brochureRef: "Page 7, Item 4",
    features: "Deep open steel hopper mounted on twin pneumatic tires with tubular pushing handles for balanced, high-capacity transport of debris, compost, and sanitation goods.",
    specs: [
      { label: "Chassis", value: "Twin-wheel balanced wide-track frame" },
      { label: "Tray", value: "Deep heavy-gauge pressed steel hopper" },
      { label: "Tires", value: "Twin pneumatic rough-terrain tires" },
      { label: "Application", value: "Civic sanitation, gardening, public works construction, bulk debris" }
    ],
    highlight: "Twin Pneumatic Stable Chassis"
  }
];
