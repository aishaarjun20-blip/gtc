import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Eye, Image as ImageIcon, Search, Tag, ArrowRight
} from 'lucide-react';

// Import local premium assets
import gargTradingHero from '../assets/images/garg_trading_hero_1783838198658.jpg';
import mkgGasHosepipe from '../assets/images/mkg_gas_hosepipe_1784119192764.jpg';
import mkgMma250e from '../assets/images/mkg_mma_250_e_1784119208150.jpg';
import mkgArc200n from '../assets/images/mkg_arc_200n_1784119221028.jpg';
import mkgMma500sic from '../assets/images/mkg_mma_500_sic_1784119233192.jpg';
import mkgCut140sic from '../assets/images/mkg_cut_140_sic_1784119245796.jpg';
import mkgArcWelder from '../assets/images/mkg_arc_welder_1783838078581.jpg';
import mmaBlackWelder from '../assets/images/mma_black_welder_1783838095890.jpg';
import mkgMigWelder from '../assets/images/mkg_mig_welder_1783838145697.jpg';
import plasmaCutter from '../assets/images/plasma_cutter_1783838182629.jpg';

// Import newly uploaded system assets
import migTrolleyFeeder from '../assets/images/mig_trolley_feeder_1783838166873.jpg';
import mkgCutSic from '../assets/images/mkg_cut_sic_1783838643145.jpg';
import mkgMigSic from '../assets/images/mkg_mig_sic_1783838626394.jpg';
import mkgMmaSic from '../assets/images/mkg_mma_sic_1783838608406.jpg';
import mkgTigWelder from '../assets/images/mkg_tig_welder_1783838129019.jpg';
import mmaYellowGrey from '../assets/images/regenerated_image_1784196806440.jpg';
import mma400stWelder from '../assets/images/mma_400st_welder_1783840646987.jpg';
import mma400i3ph from '../assets/images/regenerated_image_1783841197583.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'showroom' | 'machines' | 'accessories' | 'safety' | 'catalog';
  image: string;
  description: string;
  brand: string;
  isNew?: boolean;
  specs?: string;
  isCatalog?: boolean;
  catalogDetails?: {
    subtitle?: string;
    highlights?: string[];
    modelsOrDetails?: string[][];
    brands?: string[];
    whatsappMessage?: string;
  };
}

interface GalleryViewProps {
  setLightboxImage: (image: { 
    src: string; 
    alt: string; 
    title?: string;
    isCatalog?: boolean;
    catalogDetails?: {
      subtitle?: string;
      highlights?: string[];
      modelsOrDetails?: string[][];
      brands?: string[];
      whatsappMessage?: string;
    };
  } | null) => void;
}

export default function GalleryView({ setLightboxImage }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Curated professional gallery items (includes the newly requested categories representing all prompt images)
  const defaultItems: GalleryItem[] = [
    {
      id: 'def-showroom-1',
      title: 'Strand Road Headquarters Showroom',
      category: 'showroom',
      image: gargTradingHero,
      brand: 'Garg Trading',
      description: 'Our primary retail outlet at 40 Strand Road, Ground Floor, Room No. 1, Kolkata. Populated with heavy machine inventory, cutting units, safety kits, and ready-to-ship accessories.',
      specs: 'Strand Road, Kolkata',
    },
    {
      id: 'def-shiva-electrodes',
      title: 'Calcutta Electrodes - Shiva Weld',
      category: 'accessories',
      image: mmaYellowGrey,
      brand: 'Shiva Weld',
      description: 'Premium rutile-coated general purpose welding electrodes. Delivers an exceptionally stable arc, smooth flow, low spatter, and self-peeling slag. Perfect for high-grade structural mild steel work.',
      specs: 'AWS E6013 Grade',
      isNew: true,
    },
    {
      id: 'def-superon-alloys',
      title: 'Superon Premium Welding Consumables',
      category: 'accessories',
      image: mma400i3ph,
      brand: 'Superon',
      description: 'World-class industrial welding alloys, stainless steel filler wires, specialized maintenance electrodes, and high-performance aerosol sprays like anti-spatter & crack detectors.',
      specs: 'Alloy & Chemical Consumables',
      isNew: true,
    },
    {
      id: 'def-sstc-cables',
      title: 'SSTC Copper Welding Cables',
      category: 'accessories',
      image: mkgGasHosepipe,
      brand: 'SSTC',
      description: 'Highly flexible multi-strand copper welding cables with dual rubber/HOFR sheathing. Engineered to withstand high currents (150A to 600A) without overheating. Available from 16mm² to 95mm².',
      specs: '16mm² - 95mm² (Pure Copper)',
      isNew: true,
    },
    {
      id: 'def-torch-spares',
      title: 'MIG, TIG & Plasma Torch Spares',
      category: 'accessories',
      image: plasmaCutter,
      brand: 'CMO / MKG',
      description: 'Comprehensive line of replacement torch heads, ceramic nozzles, contact tips, gas diffusers, collet bodies, and plasma electrodes built for continuous heavy fabrication.',
      specs: 'MIG / TIG / Plasma Spares',
      isNew: true,
    },
    {
      id: 'def-safety-shoes',
      title: 'Rock Steel-Toe Industrial Safety Boots',
      category: 'safety',
      image: mmaBlackWelder,
      brand: 'Rock',
      description: 'Premium high-ankle industrial protection footwear made of genuine cow split leather. Features built-in impact-resistant steel toe caps and anti-penetration steel midsoles for maximum safety.',
      specs: 'CE EN ISO 20345 Approved',
      isNew: true,
    },
    {
      id: 'def-safety-harness',
      title: 'Karam Full Body Safety Harness',
      category: 'safety',
      image: migTrolleyFeeder,
      brand: 'Karam',
      description: 'High-tenacity polyester webbing fall-arrest safety harness. Equipped with single/dual dorsal D-rings, adjustable thigh and chest straps, and comfortable lumbar support pads.',
      specs: 'ISI / CE Certified',
      isNew: true,
    },
    {
      id: 'def-safety-vest',
      title: 'High-Visibility Reflective Safety Jackets',
      category: 'safety',
      image: mkgGasHosepipe,
      brand: 'Asha Safety',
      description: 'Florescent orange lightweight safety jackets featuring ultra-reflective silver micro-prism stripes. Essential for high-risk railway yards, shipyards, and construction sites.',
      specs: 'EN471 Class 2 Compliant',
      isNew: true,
    },
    {
      id: 'def-safety-helmets',
      title: 'Heavy-Duty Industrial Safety Helmets',
      category: 'safety',
      image: mkgArcWelder,
      brand: 'Asha Safety',
      description: 'Reinforced high-impact thermoplastic protection helmets with 6-point internal suspension bands, adjustable nape straps, chin protectors, and integrated sweatband strips.',
      specs: 'IS 2925 Standard',
      isNew: true,
    },
    {
      id: 'def-safety-goggles',
      title: 'Clear Anti-Fog Protection Goggles',
      category: 'safety',
      image: mkgArc200n,
      brand: 'Asha Safety',
      description: 'Ergonomic wrap-around polycarbonate safety glasses providing absolute dust protection, anti-scratch shielding, anti-fog coatings, and complete filtration against harmful UV-A/B radiation.',
      specs: 'ANSI Z87.1 Approved',
      isNew: true,
    },
    {
      id: 'def-ppe-kit',
      title: 'Citra Certified Full PPE Protection Suits',
      category: 'safety',
      image: mkgMma250e,
      brand: 'Asha Safety',
      description: 'Spunbound breathable coveralls featuring elasticized cuffs, integrated hoods, and zipper closures. Designed for clean chemical, spray painting, and hazardous workplace environments.',
      specs: 'Splash & Dust Tight',
      isNew: true,
    },
    {
      id: 'def-safety-mask',
      title: 'KN95 Professional Workplace Dust Masks',
      category: 'safety',
      image: mkgMmaSic,
      brand: 'Asha Safety',
      description: 'Five-layer high-efficiency particulate breathing respirator with adjustable aluminium nose clip and exhalation valve. Filters out 95% of airborne smoke, welding fumes, and fine particles.',
      specs: 'Particulate Filtration >95%',
      isNew: true,
    },
    {
      id: 'def-leather-gloves',
      title: 'Cow Split Leather Welding Gloves',
      category: 'safety',
      image: mkgArcWelder,
      brand: 'Asha Safety',
      description: 'Heavy split-leather gloves offering outstanding heat insulation, abrasion resistance, and spatter shielding. Features a soft fleece inner lining and fully welted safety seams.',
      specs: '16-Inch Length',
      isNew: true,
    },
    {
      id: 'def-industrial-plugs',
      title: 'Blue IP44 Industrial 3-Pin Plugs & Sockets',
      category: 'accessories',
      image: mkgMma250e,
      brand: 'Asha Electricals',
      description: 'Flame-retardant industrial strength couplings, wall-mount sockets, and plugs. Perfect for single-phase heavy welding machines drawing 16A or 32A under full industrial duty.',
      specs: 'IP44 Dust & Splash Resistant',
      isNew: true,
    },
    {
      id: 'def-copper-wires',
      title: 'Copper-Coated Solid MIG Wire Spools',
      category: 'accessories',
      image: mkgMigSic,
      brand: 'Superon / Ador',
      description: 'Precision layered copper-coated solid steel wire for continuous automated or semi-automated gas-shielded welding. Delivers excellent weld metal ductility and smooth wire feeding.',
      specs: 'AWS ER70S-6 Grade',
      isNew: true,
    },
    {
      id: 'def-jain-arc',
      title: 'Jain Arc Krishana Heavy Diode Rectifier',
      category: 'machines',
      image: mkgMma500sic,
      brand: 'Jain Arc',
      description: 'Robust copper-wound diode rectifier engineered for heavy fabrication and continuous arc welding. Highly tolerant to heavy fluctuations and extreme manual stick electrode tasks.',
      specs: 'Model 171 Heavy Rectifier',
      isNew: true,
    },
    {
      id: 'def-robotic',
      title: 'Robotic Automated Welding Workcell',
      category: 'showroom',
      image: gargTradingHero,
      brand: 'Garg Automation',
      description: 'Showcasing high-speed multi-axis robotic welding arm installations deployed for heavy machinery manufacturers in our Eastern India regional client network.',
      specs: 'Industrial Automation Grid',
    },
    {
      id: 'def-cooling-towers',
      title: 'Industrial Project Infrastructure',
      category: 'showroom',
      image: mma400i3ph,
      brand: 'Garg Projects',
      description: 'Active site photo demonstrating heavy structural support welding on nuclear and thermal power plant cooling towers, utilizing our MKG Heavy Duty 3-Phase series.',
      specs: 'Power Generation Sectors',
    },
    {
      id: 'def-railway',
      title: 'Railway Tracks & Bogie Joint Welding',
      category: 'showroom',
      image: mma400stWelder,
      brand: 'Garg Projects',
      description: 'Authorized heavy-duty welding joints completed on public rail networks and metro coach chassis, leveraging premium low-hydrogen electrodes and mobile heavy generators.',
      specs: 'Metro & Railway Infrastructure',
    },
    {
      id: 'def-mig-combo',
      title: 'MKG 250ST Combined MIG / ARC Smart System',
      category: 'machines',
      image: mkgMigWelder,
      brand: 'MKG',
      description: 'Gas/gasless smart computer controlled system adapted to single, dual, or three phase input. Delivers immaculate continuous wire bead deposits.',
      specs: 'MIG / MAG / MMA Multi-Process',
    },
    {
      id: 'sys-tig-welder',
      title: 'MKG TIG-200 Pulse TIG/ARC System',
      category: 'machines',
      image: mkgTigWelder,
      brand: 'MKG',
      description: 'High frequency pulsed TIG welder featuring digital touch panel controls, pre-flow/post-flow adjustments, and stable arc start for immaculate alloy fabrication.',
      specs: 'Pulsed HF TIG & ARC',
    },
    {
      id: 'sys-mma-yellow-grey',
      title: 'MKG Yellow-Grey Series Arc Welder',
      category: 'machines',
      image: mmaYellowGrey,
      brand: 'MKG',
      description: 'Highly portable, dual-voltage inverter manual metal arc welder featuring dynamic hot start, adjustable arc force, and automatic anti-stick defense.',
      specs: 'Yellow-Grey Industrial Series',
    },
    {
      id: 'sys-mma-400st',
      title: 'MKG MMA-400ST Heavy Duty Welder',
      category: 'machines',
      image: mma400stWelder,
      brand: 'MKG',
      description: 'High-amperage industrial stick welding system optimized for cellulosic electrode performance on overland oil pipelines and heavy pressure vessel fabrication.',
      specs: '400A High Duty Inverter',
    },
    {
      id: 'def-cut-140',
      title: 'MKG CUT-140 SiC Plasma Cutter',
      category: 'machines',
      image: mkgCut140sic,
      brand: 'MKG',
      description: 'Sleek steel cutter compatible with CNC profiling tables, capable of cutting clean up to 40mm carbon steel with zero bottom dross.',
      specs: 'SiC High Frequency Plasma',
    },
    {
      id: 'def-mma-500',
      title: 'MKG MMA-500 SiC Heavy Duty Site Welder',
      category: 'machines',
      image: mkgMma500sic,
      brand: 'MKG',
      description: 'Silicon Carbide power modules delivering stable 500A power for heavy structural shipyard gouging and long-distance cable operations.',
      specs: '500A SiC Power Source',
    },
    // --- START OF 35 UPLOADED CATALOG & FLYER PAGES ---
    {
      id: 'cat-brand-banner',
      title: 'Garg Trading Corporate Brand Banner',
      category: 'catalog',
      image: gargTradingHero,
      brand: 'Garg Trading',
      description: 'Official main corporate banner of Garg Trading Company, highlighting authorization and key alliances with leading manufacturers.',
      specs: 'Corporate Directory',
      isNew: true,
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Authorized House of Heavy-Duty Welders, Power Tools & Safety Equipment',
        highlights: [
          'Main corporate retail counter located at 40 Strand Road, Ground Floor, Room No. 1, Kolkata.',
          'Authorized partner of ESAB, Ador Welding, MKG Power Beyond, Superon Alloys, L&T EWAC, Karam Safety, and Bosch Power Tools.',
          'Comprehensive supply of structural stick electrodes, heavy-duty IGBT inverter setups, and full-spectrum industrial PPE.'
        ],
        brands: ['Garg Trading', 'ESAB', 'Ador', 'MKG', 'Superon', 'EWAC', 'Karam', 'Bosch'],
        modelsOrDetails: [
          ['Company Name', 'Garg Trading Company'],
          ['Established', 'Strand Road, Kolkata, West Bengal'],
          ['Prime Focus', 'Industrial Wholesale Sourcing & Heavy Machinery Supply'],
          ['Authorized Dealer Of', 'ESAB, ADOR, MKG, SUPERON, EWAC, BOSCH, KARAM, INGCO'],
          ['Operational Capacity', 'Pan-India Delivery, Specialized Technical Consultation']
        ],
        whatsappMessage: 'Hello Mohit, I saw the Garg Trading Corporate Brand Banner and want to inquire about bulk distribution.'
      }
    },
    {
      id: 'cat-mkg-flyer',
      title: 'MKG Power Beyond - Full Technical Product Lineup Flyer',
      category: 'catalog',
      image: mkgMigWelder,
      brand: 'MKG',
      description: 'Complete promotional flyer displaying the full list of MKG Inverter Welding Machines, Plasma Cutters, and Torch Consumables.',
      specs: 'MKG Full Catalog',
      isNew: true,
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Heavy-Duty Inverter Welding & Cutting Systems Showcase',
        highlights: [
          'Highlights the complete range of ARC Inverters (MMA), MIG/MMA Systems, Pulse TIG Machines, DC TIG, and Plasma Cutters.',
          'Includes details on heavy-duty 100% duty cycle machines and specialized CNC-compatible profiling table cutters.',
          'Lists replacement torch models and consumables for MIG, TIG, and Plasma systems.'
        ],
        brands: ['MKG'],
        modelsOrDetails: [
          ['Product Scope', 'Inverter Welders, Cutters, Torches & Spares'],
          ['Core Categories', 'MMA (ARC), MIG/MMA, Pulse MIG, DC TIG, Pulse TIG, Plasma CUT'],
          ['Duty Cycle Std', '100% Duty Cycle series designed for continuous heavy fabrication'],
          ['Spares Listed', 'MIG/TIG/Plasma torches, ceramic nozzles, contact tips, gas diffusers']
        ],
        whatsappMessage: 'Hello, I want to inquire about the MKG full product lineup listed in the MKG Power Beyond Flyer.'
      }
    },
    {
      id: 'cat-safety-flyer',
      title: 'Garg Trading - Certified COVID-19 & General PPE Supplies Flyer',
      category: 'catalog',
      image: mkgMmaSic,
      brand: 'Garg Trading',
      description: 'An official safety, protection, and medical supply flyer listing high-quality masks, sanitizers, gloves, and protective kits.',
      specs: 'Health & PPE Flyer',
      isNew: true,
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Certified Workplace Health, Safety & Hygiene Solutions',
        highlights: [
          'N95 & KN95 respirators (IMA Approved, superior five-layer particulate filtration).',
          'Government-approved ethyl-alcohol based hand sanitizers available in 100ml, 500ml, 5000ml, and 10000ml bulk packaging.',
          'Contactless digital infrared thermometers (FDA Approved) and electronic disinfection fogging machine.'
        ],
        brands: ['Garg Trading', 'Asha Safety', 'The Sacred Bath Co.'],
        modelsOrDetails: [
          ['Respirators', 'KN95 / N95 / Surgical 3-Ply / Protective Cotton Masks'],
          ['Sanitizers', '80% Alcohol Handrub (100ml to 10 Liter Cans)'],
          ['Diagnostic Tool', 'Contactless Infrared Thermometer (FDA Approved, instant read)'],
          ['Sanitising Machine', 'Lightweight 3kg Electronic Disinfection Fogger / Atomizer'],
          ['Safety Apparel', 'Disposable Latex Hand Gloves, Citra-Certified Full-Body PPE Suits']
        ],
        whatsappMessage: 'Hello Mohit, I need a bulk quote for the safety, PPE, and sanitization items listed on your flyer.'
      }
    },
    {
      id: 'cat-ingco-banner',
      title: 'INGCO Power Tools Industrial Showcase Flyer',
      category: 'catalog',
      image: mkgArcWelder,
      brand: 'INGCO',
      description: 'Professional visual display page highlighting INGCO yellow-black heavy power tools and fabrication aids.',
      specs: 'Power Tools Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'INGCO - "Make The World In Your Hands"',
        highlights: [
          'Comprehensive assortment of heavy angle grinders, high-impact rotary hammers, and orbital sanders.',
          'Professional-grade cordless screwdriver drills, circular saws, and variable speed blowers.',
          'Designed to deliver maximum torque, extreme motor life, and exceptional value.'
        ],
        brands: ['INGCO'],
        modelsOrDetails: [
          ['Brand Vision', 'Professional Tools Made Affordable'],
          ['Key Hand Tools', 'Spanners, heavy pliers, screwdrivers, tool bags'],
          ['Key Power Tools', 'Grinders, Rotary Drills, Circular Saws, Blowers, Cordless Series'],
          ['Application', 'Industrial workshop fabrication, site assembly, maintenance']
        ],
        whatsappMessage: 'Hello Mohit, I want to get pricing and catalog details for the INGCO power tool series.'
      }
    },
    {
      id: 'cat-safety-cone',
      title: 'Aktion - Traffic Safety Cone AK 803 Product Page',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'Aktion',
      description: 'Technical product page for the heavy rubber-base high-visibility road safety cone (Model AK 803).',
      specs: 'Road Safety Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Aktion - Assurance to Life',
        highlights: [
          'Height: 750 mm with a strong, highly wind-resistant 3.5 kg hexagonal rubber base.',
          'Made of highly flexible UV-stabilized polymer material that bounces back after compression.',
          'Equipped with dual premium silver-white retro-reflective sleeves for absolute night-time visibility.'
        ],
        brands: ['Aktion'],
        modelsOrDetails: [
          ['Model Number', 'AK 803 Safety Cone'],
          ['Overall Height', '750 mm (Standard Industrial Size)'],
          ['Base Weight', '3.5 kg Heavy-Duty Hexagonal Rubber Base'],
          ['Reflective Tape', 'Dual 4-inch Retro-Reflective Silver Sleeves'],
          ['Resistance', 'Water, heat, UV degradation, crushing, high-speed vehicle impact']
        ],
        whatsappMessage: 'Hello Sunil, I would like to purchase the Aktion AK 803 heavy safety traffic cones.'
      }
    },
    {
      id: 'cat-safety-catalog',
      title: 'Aktion - PPE, Road Safety & Lockout Tagout (LOTO) Catalog',
      category: 'catalog',
      image: mmaBlackWelder,
      brand: 'Aktion',
      description: 'Full-spectrum catalog overview of Aktion security, lockouts, and personnel protective solutions.',
      specs: 'LOTO & PPE Catalog',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Aktion Integrated Industrial Safety Systems',
        highlights: [
          'Covers high-ankle industrial steel-toe safety boots, high-visibility reflective vests, and heavy helmets.',
          'Presents a solid array of Lockout Tagout (LOTO) padlocks, circuit breaker locks, and safety haps.',
          'Provides traffic barriers, safety boundary fences, warning tape, and anti-slip road studs.'
        ],
        brands: ['Aktion'],
        modelsOrDetails: [
          ['Category Focus', 'Personal Safety, Site Traffic Control & Lockout Tagout (LOTO)'],
          ['PPE Products', 'High-Ankle Safety Shoes, Reflector Vests, Helmets, Goggles, Ear Plugs'],
          ['LOTO Products', 'Industrial Lockout Padlocks, Multipolar Circuit Breaker Locks, Cable Lockouts'],
          ['Road Safety', 'Traffic Cones, Spring Posts, Speed Breakers, Road Delineators, Warning Barriers']
        ],
        whatsappMessage: 'Hello Sunil, I need catalog details and quotes for the Aktion PPE and Lockout Tagout items.'
      }
    },
    {
      id: 'cat-zermero-handrub',
      title: 'Zermero Advance WHO-Formula Ethyl Alcohol Handrub Brochure',
      category: 'catalog',
      image: mkgMmaSic,
      brand: 'The Sacred Bath Co.',
      description: 'Product information sheet for Zermero Advance 80% Ethyl Alcohol hand sanitizer disinfectant cans.',
      specs: 'Disinfectant Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'WHO-Formulation 80% v/v Hand Sanitiser / Disinfectant',
        highlights: [
          'Advanced healthcare handrub formula containing 80% pure ethyl alcohol to kill 99.9% of germs instantly.',
          'Moisture-retaining skin emollient system prevents dry hands even after repeated high-frequency usage.',
          'Supplied in heavy-duty 5-liter blue leak-proof industrial canisters for refills and hand stations.'
        ],
        brands: ['The Sacred Bath Co.', 'Zermero'],
        modelsOrDetails: [
          ['Formulation', 'Ethyl Alcohol 80% v/v (WHO Standard Formula-I)'],
          ['Germicidal Rate', 'Kills 99.99% of bacteria, yeasts, and enveloped viruses'],
          ['Packing Size', '5 Liters High-Density Polyethylene Blue Canisters'],
          ['Certifications', 'FDA Approved, WHO GMP Compliant Manufacturer'],
          ['Fragrance', 'Fresh citrus clinical grade scent']
        ],
        whatsappMessage: 'Hello, I want to place a bulk order for the Zermero Advance 5L Sanitizer Handrub.'
      }
    },
    {
      id: 'cat-robo-atomizer',
      title: 'ROBO - Disinfection Atomizer Machine SM1200 Page',
      category: 'catalog',
      image: plasmaCutter,
      brand: 'ROBO',
      description: 'Promotional booklet page showing the ROBO high-efficiency disinfectant atomizer fogger.',
      specs: 'Atomizer Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'ROBO SM1200 - Professional Disinfection Atomizer',
        highlights: [
          'High-performance electronic thermal spray sanitizer, perfect for offices, warehouses, homes, and public transport.',
          'Features automatic dry-heating protection and temperature control loop to ensure zero thermal breakdown.',
          'Supplies fine micro-droplet mist that sanitizes fabrics, metals, and air without leaving wet spots.'
        ],
        brands: ['ROBO'],
        modelsOrDetails: [
          ['Model Name', 'SM1200 Disinfection Atomizer'],
          ['Heating Power', '1200W High Speed Ceramic Core'],
          ['Vapor Volume', '2500 cubic feet per minute'],
          ['Controls', 'Automated timer, pre-heat cycle indicator'],
          ['Weight / Portability', '3.0 Kgs, integrated carrying handle']
        ],
        whatsappMessage: 'Hello Mohit, I am interested in the ROBO SM1200 Atomizer Disinfection machine.'
      }
    },
    {
      id: 'cat-robo-fog',
      title: 'ROBO - FOG-1500W Professional Heavy Fogger Page',
      category: 'catalog',
      image: plasmaCutter,
      brand: 'ROBO',
      description: 'Catalog specifications page detailing the ROBO 1500W heavy volume sanitizing fog machine.',
      specs: 'Fogger Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'ROBO FOG-1500W Professional Heavy Volume Disinfector',
        highlights: [
          'Designed for heavy-duty volume sanitation of factories, cargo container yards, hotel lobbies, and cinema halls.',
          'Comes with dual remote controllers: wireless handheld fob and wired manual button harness.',
          'Super-fast heating block reaches operating temperature in under 4 minutes with high-pressure pump feed.'
        ],
        brands: ['ROBO'],
        modelsOrDetails: [
          ['Model Designation', 'ROBO FOG-1500W'],
          ['Power Input', '1500 Watts High Capacity Ceramic Block'],
          ['Pump Pressure', 'High pressure electromagnetic pump'],
          ['Control Accessories', 'Wireless Remote RF Fob + Wired Remote Harness'],
          ['Liquid Capacity', '1.2 Liter integrated reservoir container']
        ],
        whatsappMessage: 'Hello Mohit, please send me the price quote and availability for the ROBO FOG-1500W machine.'
      }
    },
    {
      id: 'cat-esab-consumables',
      title: 'ESAB - Professional Welding Consumables Group Catalog',
      category: 'catalog',
      image: mma400i3ph,
      brand: 'ESAB',
      description: 'A comprehensive product group visual page detailing world-class ESAB fluxes, wires, and vacuum-packed electrodes.',
      specs: 'ESAB Consumables',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'ESAB - World Leaders in Welding Materials & Equipment',
        highlights: [
          'Features OK Flux 10.71, 10.62 high-quality submerged arc welding chemical agents.',
          'Showcases Marathon Pac™ massive bulk continuous steel wire drums for automated robotic cells.',
          'Highlights VacPac™ hermetically sealed moisture-free structural low-hydrogen electrodes.'
        ],
        brands: ['ESAB'],
        modelsOrDetails: [
          ['Submerged Arc Flux', 'ESAB OK Flux 10.71, OK Flux 10.81, OK Flux 10.62'],
          ['MIG Wires', 'OK Autrod 12.51, Spoolarc 86 (ER70S-6 CO2 wire)'],
          ['Stick Electrodes', 'ESAB OK 48.00 (E7018), OK 53.05 (E6013), VacPac Packing'],
          ['Moisture Protection', 'VacPac Foil Sealed packs - zero re-drying required at site']
        ],
        whatsappMessage: 'Hello Sunil, I need pricing and bulk lead times for ESAB OK Flux and VacPac electrodes.'
      }
    },
    {
      id: 'cat-ador-welding',
      title: 'Ador Welding - "Peace of Mind" Products & Consumables Page',
      category: 'catalog',
      image: mkgMigSic,
      brand: 'Ador Welding',
      description: 'Authorized Ador Welding flyer detailing premium CO2 wires, manual sticks, and auto welding helmets.',
      specs: 'Ador Catalog Page',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Ador Welding Limited - Industrial Materials & Safety',
        highlights: [
          'Features the famous Ador Miginox stainless steel wires and Superhaust structural steel consumables.',
          'Presents premium welding fluxes, high-toughness nickel repair electrodes, and carbon steel wires.',
          'Highlights the high-impact red auto-darkening variable shadow welding helmet.'
        ],
        brands: ['Ador Welding'],
        modelsOrDetails: [
          ['Stick Electrodes', 'Ador Overcord, Ador Mild Steel Special E6013, Ador Supatprime'],
          ['MIG/TIG Wires', 'MIGINOX (Stainless Steel), MIGFIL (Carbon Steel ER70S-6)'],
          ['Flux-Cored Wires', 'AUTOFIL series gas-shielded fabrication wire'],
          ['Safety Gear', 'Ador Auto-Darkening Liquid Crystal LCD Variable Helmet']
        ],
        whatsappMessage: 'Hello Sunil, I need a bulk price list for Ador Welding MIGFIL wires and Overcord electrodes.'
      }
    },
    {
      id: 'cat-superon-alloys',
      title: 'Superon - Premium Maintenance Alloys & Chemical Sprays Pack',
      category: 'catalog',
      image: mma400stWelder,
      brand: 'Superon',
      description: 'Superon Alloys catalog page highlighting special maintenance electrodes and crack detection sprays.',
      specs: 'Superon Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Superon - High-Performance Welding Alloys & Chemical Sprays',
        highlights: [
          'Specialized maintenance welding sticks for stainless steel, cast iron, hardfacing, and cladding.',
          'Features Superon Vac-Pac moisture-resistant vacuum-tight packaging for high-integrity critical welds.',
          'Includes industrial aerosol sprays: Anti-Spatter sprays, Crack Detectors, and Zinc Galvanizing sprays.'
        ],
        brands: ['Superon'],
        modelsOrDetails: [
          ['Specialized Alloys', 'Superon Superinox (Stainless Steel), Supercast (Cast Iron)'],
          ['Chemical Aerosols', 'Superon Spatter-Block Spray, Dye Penetrant, Developer, Cleaner'],
          ['Packaging Innovation', 'Vac-Pac hermetic aluminium shield packs'],
          ['Industry Approvals', 'RDSO, L&T, BHEL, NTPC, NPCIL, CE certified']
        ],
        whatsappMessage: 'Hello Sunil, please send quotes for Superon Spatter-Block spray and Superinox electrodes.'
      }
    },
    {
      id: 'cat-shiva-electrodes',
      title: 'Shiva Weld - Premium E6013 Welding Electrodes packaging Flyer',
      category: 'catalog',
      image: mmaYellowGrey,
      brand: 'Calcutta Electrodes Pvt Ltd',
      description: 'Brochure page showing the packaging and IS 814 approvals of Shiva Weld general-purpose electrodes.',
      specs: 'Shiva Weld Flyer',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Shiva Weld E6013 - High Performance Mild Steel Electrodes',
        highlights: [
          'AWS A5.1 E6013 general-purpose, medium-coated rutile electrodes.',
          'Extremely stable arc, very easy slag removal, self-releasing properties, and minimal spatter.',
          'Perfect for mild steel pipelines, structural frames, sheet fabrication, and metal furniture.'
        ],
        brands: ['Calcutta Electrodes', 'Shiva Weld'],
        modelsOrDetails: [
          ['Electrode Class', 'AWS E6013 / IS 814 ER4211 Standard'],
          ['Diameter Sizes', '2.5 mm, 3.15 mm, 4.0 mm, 5.0 mm'],
          ['Packaging Std', '5 kg inner carton boxes, 20 kg master cardboard crates'],
          ['Approvals', 'Bureau of Indian Standards (BIS) IS 814, ISO 9001:2015'],
          ['Welding Positions', 'All positions (Flat, Vertical-Up, Overhead, Horizontal)']
        ],
        whatsappMessage: 'Hello Mohit, I would like to order a pallet of Shiva Weld 3.15mm E6013 electrodes.'
      }
    },
    {
      id: 'cat-dh-india',
      title: 'D&H India Limited - Full Welding Consumables Portfolio',
      category: 'catalog',
      image: mkgMigSic,
      brand: 'D&H India',
      description: 'Technical catalog page displaying D&H India MIGARC wires, welding sticks, and SAW fluxes.',
      specs: 'D&H India Catalog',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'D&H India - Advanced Sourcing of Specialized Welding Materials',
        highlights: [
          'Comprehensive array of low-hydrogen basic coated electrodes for critical boiler and tank welds.',
          'MIGARC CO2 welding solid wires and premium copper-coated TIG filler rods.',
          'Wear-resistant hardfacing electrodes for cement plant crusher rolls and mining machinery.'
        ],
        brands: ['D&H India'],
        modelsOrDetails: [
          ['Corporate Standing', 'ISO 9001, ISO 14001, OHSAS 18001 Certified Manufacturer'],
          ['Key Electrodes', 'D&H LH-18 (E7018), D&H LH-15 (E7016), D&H Super-6 (E6013)'],
          ['MIG Wires', 'MIGARC CO2 wire spools (AWS ER70S-6)'],
          ['Flux-Cored Wire', 'DH-Flux series gas-shielded wire']
        ],
        whatsappMessage: 'Hello Sunil, please share pricing for D&H LH-18 E7018 electrodes.'
      }
    },
    {
      id: 'cat-ewac-alloys',
      title: 'L&T EWAC - Specialty Repair & Hardfacing Alloys Brochure',
      category: 'catalog',
      image: mma400i3ph,
      brand: 'L&T EWAC',
      description: 'Catalog page of EWAC specialized wear-resistant maintenance alloys packed in polymer boxes.',
      specs: 'EWAC Alloys Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'L&T EWAC - Wear Control & Reclamation Solutions',
        highlights: [
          'Highly specialized repair alloys designed to extend the service life of critical metal components.',
          'Provides excellent defense against severe metal-to-metal friction, earth abrasion, and thermal shock.',
          'Supplied in premium airtight moisture-free hexagonal polymer boxes to maintain flux properties.'
        ],
        brands: ['L&T EWAC', 'EWAC'],
        modelsOrDetails: [
          ['Repair Scope', 'Hardfacing, Cast Iron Reclamation, Stainless Steel joining, Cobalt-based alloys'],
          ['Popular Grades', 'EWAC 505 (Universal Join), EWAC 1001 (Hardfacing), EWAC 1500 (Cast Iron)'],
          ['Container Tech', 'Air-tight hexagonal polymer canisters for complete humidity shield'],
          ['Primary Industries', 'Sugar mills, steel plants, thermal power stations, dredging yards']
        ],
        whatsappMessage: 'Hello Sunil, please send stock availability for EWAC 505 and EWAC 1001 specialty sticks.'
      }
    },
    {
      id: 'cat-euroweld-equip',
      title: 'Euroweld - 9th Edition Cutting & Regulator Price Catalog',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'Euroweld',
      description: 'Official price catalog cover highlighting Euroweld single-stage gas regulators and blowpipes.',
      specs: 'Euroweld Catalog',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Euroweld - Gas Welding, Cutting & Flow Regulation Systems',
        highlights: [
          'Single-stage gas pressure regulators with dual high-accuracy dial indicators for CO2, Oxygen, and Acetylene.',
          'Heavy-duty NM type brass cutting blowpipes compatible with multi-size nozzle mixes.',
          'High-density double-braided rubber welding hoses and spring spark lighters.'
        ],
        brands: ['Euroweld'],
        modelsOrDetails: [
          ['Catalog edition', '9th Edition Authorized Price List Directory'],
          ['Core Hardware', 'CO2 Preheater Regulators, Oxygen/LPG Flowmeters, NM Blowpipes'],
          ['Safety Fittings', 'Flashback Arrestors (Regulator-mount & Torch-mount)'],
          ['Accessories', 'Spark lighters, nozzle cleaners, rubber hose clips']
        ],
        whatsappMessage: 'Hello Mohit, I would like to receive the latest price list for Euroweld regulators and cutting blowpipes.'
      }
    },
    {
      id: 'cat-asha-blowpipe',
      title: 'Asha - Heavy Duty NM Cutting Blow Pipe Technical Page',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'Asha',
      description: 'Promotional specification catalog for the Asha ISO 9001 brass nozzle-mix cutting blow torch.',
      specs: 'Asha Blow Pipe Page',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Asha NM Cutting Blow Pipe - 90 Degree Angle Torch',
        highlights: [
          'Top-grade forged brass head and solid metal tube construction for maximum safety and high heat tolerance.',
          'Nozzle-mixing (NM) gas feed design substantially reduces flashback risks.',
          'Equipped with smooth rotary control wheels for precise gas mixing (Oxygen and Acetylene/LPG).'
        ],
        brands: ['Asha'],
        modelsOrDetails: [
          ['Product Type', 'Nozzle-Mix (NM) Gas Cutting Blow Pipe Torch'],
          ['Angle Of Head', '90 Degrees standard cutting angle'],
          ['Compatible Gases', 'Oxygen-Acetylene or Oxygen-LPG (with matching nozzles)'],
          ['Cutting Range', 'Cuts carbon steel plate up to 300 mm thickness'],
          ['Compliance', 'Manufactured under ISO 9001:2015 certified safety standards']
        ],
        whatsappMessage: 'Hello Mohit, please send pricing for the Asha NM Cutting Blow Pipe torch.'
      }
    },
    {
      id: 'cat-sstc-cables',
      title: 'SSTC - Double sheathing Copper Welding Cable Specs Sheet',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'SSTC',
      description: 'Full technical page presenting pure copper SSTC multi-strand flexible welding cables.',
      specs: 'SSTC Cable Table',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'SSTC - Pure Electrolytic Copper Flexible Welding Cables',
        highlights: [
          'Extremely flexible multi-strand core containing thousands of fine pure copper filaments.',
          'Double-layer insulation with heavy HOFR (Heat, Oil, and Flame Retardant) rubber sheathing.',
          'Supports heavy manual welding machines and automatic lines running up to 600 Amps.'
        ],
        brands: ['SSTC'],
        modelsOrDetails: [
          ['Cable Sizes Available', '16 mm², 25 mm², 35 mm², 50 mm², 70 mm², 95 mm²'],
          ['Current Ratings', '150 Amps to 600 Amps under continuous duty cycle'],
          ['Conductor Material', '99.9% Pure Electrolytic Annealed Flexible Copper'],
          ['Sheath Standard', 'IS 9857 rubber sheathing - resistant to sparks, oil, water, acid, and cuts']
        ],
        whatsappMessage: 'Hello Sunil, please send the per-meter price quote for SSTC 50mm² copper welding cable.'
      }
    },
    {
      id: 'cat-spares-consumables',
      title: 'MIG, TIG & Plasma Torch Spares & Consumables Chart',
      category: 'catalog',
      image: plasmaCutter,
      brand: 'CMO / MKG',
      description: 'Complete visual chart listing replacement contact tips, ceramic nozzles, gas diffusers, and torch liners.',
      specs: 'Torch Spares Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Universal Torch Replacement Spares & Consumables',
        highlights: [
          'High-conductivity copper contact tips (E-Cu, CuCrZr) for MIG/MAG torches (15AK, 24KD, 36KD, Pana-350).',
          'Premium alumina ceramic gas cups and collet bodies for TIG torches (WP-17, WP-18, WP-26).',
          'High-durability plasma torch electrodes, cutting nozzles, and swirl rings for P80 and CUT-120 systems.'
        ],
        brands: ['CMO', 'MKG'],
        modelsOrDetails: [
          ['MIG Consumables', 'Contact Tips, Gas Nozzles, Tip Holders, Swan Necks, Steel/Teflon Liners'],
          ['TIG Consumables', 'Alumina Cups, Collets, Collet Bodies, Gas Lens, Short/Long Back Caps'],
          ['Plasma Consumables', 'Electrodes, Cutting Nozzles, Shield Caps, Swirl Rings, Spacer Guides'],
          ['Compatibility', '100% compatible with Binzel, Panasonic, Esab, Ador, and MKG torch models']
        ],
        whatsappMessage: 'Hello Mohit, I need to order a bulk batch of copper contact tips and ceramic nozzles.'
      }
    },
    {
      id: 'cat-twin-hoses',
      title: 'Red & Blue Twin Welding Rubber Hoses Catalog Page',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'MKG',
      description: 'Catalog presentation page for twin rubber welding gas hoses rated at 50 Bar burst pressure.',
      specs: 'Hose Pipe Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Premium Twin-Line Rubber Gas Hoses for Cutting Sets',
        highlights: [
          'Dual-line vulcanized rubber hoses extruded together to prevent tangling on workshop floors.',
          'Red line designed specifically for combustible fuel gases (Acetylene/LPG).',
          'Blue line designed specifically for high-pressure oxygen gas feeds.'
        ],
        brands: ['MKG'],
        modelsOrDetails: [
          ['Inner Diameter (ID)', '8.0 mm (Standard Gas Flow fitting)'],
          ['Working Pressure / Burst', '20 BAR Working Pressure / 50 BAR Burst Pressure'],
          ['Material Build', 'High-tensile synthetic yarn reinforced thermoplastic rubber (TPR)'],
          ['Jacket Resistance', 'Resistant to hot metal spatter, oil film, ozone degradation, cracking']
        ],
        whatsappMessage: 'Hello Mohit, please quote for a 50-meter coil of Red/Blue twin rubber welding hose.'
      }
    },
    {
      id: 'cat-cutting-regulator',
      title: 'Heavy Duty Gas Welding, Cutting & Regulator Assembly Kit',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'Euroweld / CMO',
      description: 'Technical set page presenting a complete gas welding rig with regulators, blowpipe, and hose.',
      specs: 'Cutting Kit Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Complete Gas Cutting, Brazing & Regulation Station',
        highlights: [
          'Includes dual gas pressure regulators with shock-absorbing rubber gauge sleeves.',
          'Features a heavy brass blowpipe assembly with interchangeable cutting nozzles.',
          'Pre-assembled with flashback arrestors and twin hoses for immediate operational safety.'
        ],
        brands: ['Euroweld', 'CMO'],
        modelsOrDetails: [
          ['Set Contents', 'Oxygen Regulator, LPG/Acetylene Regulator, Blowpipe, Flashback Arrestors, Twin Hose, Spark Lighter'],
          ['Regulator Material', 'Forged brass body with stainless steel diaphragm plates'],
          ['Blowpipe Length', '450 mm standard length with lever-operated oxygen jet'],
          ['Safety Loops', 'Integrated double-block flashback check valves on both gas lines']
        ],
        whatsappMessage: 'Hello Sunil, please send pricing for the complete Gas Welding, Cutting & Regulator Assembly Kit.'
      }
    },
    {
      id: 'cat-chain-pulley',
      title: 'Heavy Manual Chain Pulley Block Crane Hoist Catalog Page',
      category: 'catalog',
      image: plasmaCutter,
      brand: 'Garg Sourcing',
      description: 'Sourcing sheet displaying the heavy-duty blue industrial manual chain block crane hoist.',
      specs: 'Lifting Crane Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Heavy-Duty Industrial Manual Chain Pulley Block Hoist',
        highlights: [
          'Made of high-strength alloy steel with fully enclosed gear transmission housing.',
          'Heavy forged top and bottom hooks with spring-loaded safety latches.',
          'Grade 80 heat-treated load chains and mechanical friction braking system.'
        ],
        brands: ['Garg Sourcing'],
        modelsOrDetails: [
          ['Lifting Capacity', '1 Ton, 2 Ton, 3 Ton, 5 Ton Multi-Ton ratings'],
          ['Standard Lift Height', '3 Meters / 6 Meters (custom drops available)'],
          ['Load Chain Grade', 'G80 Black Oxide high-tensile alloy steel chain'],
          ['Brake System', 'Weston-style automatic double-pawl load brake'],
          ['Shell Material', 'Heavy-gauge steel shell with blue weather-proof powder coating']
        ],
        whatsappMessage: 'Hello Mohit, please send availability and prices for a 3-Ton 6-Meter Chain Pulley Block.'
      }
    },
    {
      id: 'cat-annular-cutters',
      title: 'Industrial Core Drill Bits & Annular Cutters Brochure Page',
      category: 'catalog',
      image: mkgMigSic,
      brand: 'Garg Sourcing',
      description: 'Product guide displaying multi-size high-speed steel (HSS) annular core cutters.',
      specs: 'Core Drill Brochure',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'HSS & Tungsten Carbide Annular Core Cutters',
        highlights: [
          'High-speed steel (HSS) and tungsten carbide tipped (TCT) annular cutters for magnetic drills.',
          'Engineered for extremely fast, clean, and burr-free hole cutting in thick structural steel.',
          'Multi-tooth geometry and pilot pin feed optimize chip flow and reduce drilling friction.'
        ],
        brands: ['Garg Sourcing'],
        modelsOrDetails: [
          ['Material Options', 'High-Speed Steel (M2/M35 Cobalt), Tungsten Carbide Tipped (TCT)'],
          ['Shank Style', '19.05 mm (3/4 inch) Weldon shank fitting with dual flat locks'],
          ['Diameter Range', '12 mm to 100 mm boring sizes'],
          ['Cutting Depths', '25 mm, 50 mm, 75 mm depth ratings']
        ],
        whatsappMessage: 'Hello Sunil, please send a price sheet for HSS Annular Cutters from 14mm to 32mm.'
      }
    },
    {
      id: 'cat-water-boots',
      title: 'High-Ankle Industrial Rubber Safety Water Boots Page',
      category: 'catalog',
      image: mmaBlackWelder,
      brand: 'Rock',
      description: 'Product brochure page showing the heavy-duty black vulcanized safety boots with white soles.',
      specs: 'Safety Shoes Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Heavy-Duty Waterproof High-Ankle Rubber Safety Boots',
        highlights: [
          '100% waterproof vulcanized rubber boot with reinforced shin, toe, and heel caps.',
          'Equipped with built-in steel shanks inside the outsole to prevent sole puncture.',
          'White high-traction slip-resistant PVC/rubber sole providing outstanding chemical resistance.'
        ],
        brands: ['Rock'],
        modelsOrDetails: [
          ['Boot Height', '380 mm (15 inch high-calf ankle protection)'],
          ['Impact Protection', 'Reinforced rubber toe cap (Optional EN steel toe approved)'],
          ['Sole Performance', 'Puncture resistant steel shank, acid-alkali resistant, slip-resistant'],
          ['Lining', 'Breathable cotton knit lining for long-shift comfort'],
          ['Sizes Available', 'UK / India sizes 6 to 11']
        ],
        whatsappMessage: 'Hello Mohit, I want to order 50 pairs of Rock high-ankle rubber safety boots.'
      }
    },
    {
      id: 'cat-construction-site',
      title: 'Structural Steel Site Welding Infrastructure Progress Photo',
      category: 'catalog',
      image: gargTradingHero,
      brand: 'Garg Projects',
      description: 'Authorized site photograph illustrating active structural steel grid assembly on a major high-rise housing complex.',
      specs: 'Site Operations Photo',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Garg Trading Sourced Machinery in Active Urban Infrastructure',
        highlights: [
          'Demonstrates real-world deployment of heavy 3-Phase MKG ARC and MMA welding systems.',
          'Shows reinforcement bar connection, heavy beam joining, and portal crane operations.',
          'Highlighting our commitment to supplying 100% reliable systems that withstand rugged outdoor construction.'
        ],
        brands: ['Garg Trading', 'MKG'],
        modelsOrDetails: [
          ['Project Sector', 'High-Rise Residential & Commercial Steel Infrastructure'],
          ['Machines Deployed', 'MKG MMA-400I 3-PH, MKG MMA-500 SiC Site Inverters'],
          ['Consumables Used', 'E7018 low-hydrogen baking electrodes, Pure Copper SSTC cables'],
          ['Operational Safety', 'Aktion traffic cones, Karam safety harnesses, Rock steel-toe boots']
        ],
        whatsappMessage: 'Hello Sunil, I need a technical quote for setting up 10 on-site welding stations.'
      }
    },
    {
      id: 'cat-robot-welding',
      title: 'Automotive Factory Assembly Line Robot Welding Gantry Photo',
      category: 'catalog',
      image: migTrolleyFeeder,
      brand: 'Garg Automation',
      description: 'Industrial site catalog page demonstrating high-speed automated spot welding robots in a vehicle plant.',
      specs: 'Automation Photo',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Automated Multi-Axis Robot Spot & Seam Welding Cells',
        highlights: [
          'Showcases multi-robot high-precision spot welding execution on vehicle body-in-white panels.',
          'Integrates automated wire feed drums (ESAB Marathon Pac) and high-duty MIG power blocks.',
          'Reflects our capability to design and supply complete high-capacity automated production cells.'
        ],
        brands: ['Garg Automation', 'ESAB', 'MKG'],
        modelsOrDetails: [
          ['Automation Level', 'Class-A Fully Automated Multi-Robot Gantry Line'],
          ['Robot Arms Deployed', '6-Axis High-Speed Precision Articulated Robots'],
          ['Power Sources Integrated', 'MKG MIG-400 SiC High-Duty smart power blocks'],
          ['Wire Feed Solution', 'ESAB Marathon Pac 250 kg bulk drum CO2 solid wire spools']
        ],
        whatsappMessage: 'Hello, I would like to consult with Garg Automation about robotic welding cell setups.'
      }
    },
    {
      id: 'cat-metal-warehouse',
      title: 'Modern Insulated Steel Portal Frame Warehouse Site Photo',
      category: 'catalog',
      image: gargTradingHero,
      brand: 'Garg Sourcing',
      description: 'Showroom booklet photograph detailing a newly constructed high-span metal warehouse workshop.',
      specs: 'Industrial Steel Photo',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Pre-Engineered Portal Frame Industrial Warehouses',
        highlights: [
          'Structural site view of a modern insulated corrugated corrugated-iron warehouse workshop.',
          'Features wide-span hollow-section column framing, roof trusses, and sliding hangar doors.',
          'Fabricated using our high-grade MKG MIG/MMA multi-process inverters and special carbon wires.'
        ],
        brands: ['Garg Sourcing', 'MKG'],
        modelsOrDetails: [
          ['Structure Class', 'Pre-Engineered Building (PEB) Portal Frame Warehouse'],
          ['Span Coverage', '30 Meter clear-span portal frames with zero central column obstruction'],
          ['Framing Sections', 'High-tensile H-beams, hollow structural profiles, Z-purloins'],
          ['Fabrication Method', 'MIG gas-shielded seam welding with AWS ER70S-6 wire spools']
        ],
        whatsappMessage: 'Hello Sunil, I saw your PEB Metal Warehouse photo and want to inquire about structural steel welding.'
      }
    },
    {
      id: 'cat-grinding-wheels',
      title: 'Fiberglass-Reinforced Grinding & Cut-Off Wheels Flyer',
      category: 'catalog',
      image: mkgMigSic,
      brand: 'CMO / Garg',
      description: 'Brochure page detailing a wide selection of professional fiber-reinforced abrasive grinding wheels.',
      specs: 'Abrasives Catalog',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Premium Fiber-Reinforced Abrasive Cutting & Grinding Wheels',
        highlights: [
          'Engineered with premium aluminum oxide and silicon carbide grains bonded with synthetic resin.',
          'Reinforced with double-layer high-strength fiberglass mesh for absolute operator safety at high RPM.',
          'Perfect for clean cutting and deburring carbon steel, stainless steel, cast iron, and alloys.'
        ],
        brands: ['CMO', 'Garg Sourcing'],
        modelsOrDetails: [
          ['Cutting Wheel Diameters', '4 inch (100mm), 5 inch (125mm), 14 inch (355mm) chop saw wheels'],
          ['Grinding Wheel Thickness', '6.0 mm heavy deburring discs (4-inch to 7-inch)'],
          ['Arbor Hole Standard', '16.0 mm / 22.23 mm center metal collar ring'],
          ['Safety Standard', 'EN 12413 compliant, max operating speed up to 80 meters/second']
        ],
        whatsappMessage: 'Hello Mohit, please send me a bulk price sheet for 4-inch cutting and grinding wheels.'
      }
    },
    {
      id: 'cat-bosch-professional',
      title: 'Bosch Professional Blue Power Tools Series Catalog',
      category: 'catalog',
      image: mkgArcWelder,
      brand: 'Bosch',
      description: 'Corporate alliance catalog page presenting the legendary Bosch Professional Blue series power tool line.',
      specs: 'Bosch Blue Catalog',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Bosch Professional Blue Series - Heavy Duty Power Tools',
        highlights: [
          'Legendary high-performance corded and cordless tools built for ultimate workshop torture.',
          'Angle grinders featuring KickBack Control, intelligent braking, and restart protection.',
          'Rotary SDS Plus/Max hammer drills, high-torque impact wrenches, and digital wood routers.'
        ],
        brands: ['Bosch'],
        modelsOrDetails: [
          ['Grinder Series', 'Bosch GWS 900-100, GWS 600, GWS 18V Cordless Professional'],
          ['Rotary Hammers', 'Bosch GBH 2-20, GBH 2-26 RE SDS Plus high-speed masonry drills'],
          ['Impact Wrenches', 'Bosch GDS 18V-400 brushless high-torque automotive wrenches'],
          ['Authenticity', '100% Genuine Bosch India inventory with official manufacturer warranty']
        ],
        whatsappMessage: 'Hello Mohit, I want to request a wholesale quote for Bosch GBH 2-26 and GWS 900 grinders.'
      }
    },
    {
      id: 'cat-powerweld-electrodes',
      title: 'PowerWeld E6013 General Purpose Welding Stick Carton Box',
      category: 'catalog',
      image: mmaYellowGrey,
      brand: 'PowerWeld',
      description: 'Packaging design catalog sheet showing the red carton packaging for PowerWeld general welding sticks.',
      specs: 'PowerWeld Flyer',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'PowerWeld E6013 - All-Position Rutile Welding Sticks',
        highlights: [
          'AWS A5.1 E6013 medium-penetration, high-recovery rutile-coated mild steel stick electrodes.',
          'Excellent bead appearance, smooth arc, low fume generation, and self-peeling slag coating.',
          'Perfect for small garage repair, steel window fabrication, ducting, and sheet steel crafts.'
        ],
        brands: ['PowerWeld'],
        modelsOrDetails: [
          ['Electrode Designation', 'AWS E6013 / IS 814 rutile standard'],
          ['Rod Size Options', '2.5mm x 350mm, 3.15mm x 350mm, 4.0mm x 400mm'],
          ['Operational Parameters', 'AC or DC electrode positive/negative (EP/EN)'],
          ['Box Weights', '2.0 Kgs inner boxes, 5.0 Kgs heavy cartons, 20 Kgs master shipments']
        ],
        whatsappMessage: 'Hello Mohit, please send pricing for PowerWeld E6013 welding sticks in 3.15mm size.'
      }
    },
    {
      id: 'cat-electrode-holder',
      title: 'Insulated Heavy Duty Jaw Clamp Electrode Holder Page',
      category: 'catalog',
      image: mkgGasHosepipe,
      brand: 'CMO',
      description: 'Safety spare parts page displaying the red-and-black fully insulated 400A welding rod holder.',
      specs: 'Electrode Holder Page',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Professional Fully-Insulated 400 Amps Welding Jaw Clamp',
        highlights: [
          'Heavy forged-brass body with deep groove jaw plates holding rods at 45, 90, and 180 degrees.',
          'Red/black heat-resistant fiberglass reinforced polyamide safety shield blocks current leakage.',
          'Equipped with heavy compression springs ensuring zero rod slippage under high-amperage heating.'
        ],
        brands: ['CMO', 'MKG'],
        modelsOrDetails: [
          ['Current Capacity', '400 Amps rated at 60% heavy industrial duty cycle'],
          ['Jaw Material', '99% Forged Red Brass (high electrical conductivity, low heating)'],
          ['Cable Connection', 'Dual allen-screw lock brass socket for absolute secure cable link'],
          ['Maximum Rod Size', 'Supports welding electrodes from 2.0 mm to 5.0 mm diameter']
        ],
        whatsappMessage: 'Hello Mohit, I want to order 20 pieces of the CMO 400A Insulated Electrode Holder.'
      }
    },
    {
      id: 'cat-mkg-arc400ci',
      title: 'MKG ARC-400CI IGBT Inverter Front Panel Catalog Page',
      category: 'catalog',
      image: mkgMma500sic,
      brand: 'MKG',
      description: 'Brochure page containing the technical close-up of the ARC-400CI site stick welder front panel.',
      specs: 'ARC-400CI Spec Page',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'MKG ARC-400CI - Professional IGBT Site Welding Inverter',
        highlights: [
          'Dual LED displays provide real-time preset current and dynamic output voltage readouts.',
          'Adjustable Hot-Start and Arc-Force dials provide total depth control and strike sensitivity.',
          'Overcurrent and thermal failure LED icons provide instant diagnostic alerts.'
        ],
        brands: ['MKG'],
        modelsOrDetails: [
          ['Machine Model', 'MKG ARC-400CI (Inverter MOSFET/IGBT Series)'],
          ['Output Terminals', 'Heavy-Duty 50-70 Quick-Connect Brass terminal sockets'],
          ['Control Dials', 'Welding Current (30-400A), Arc Force Dial, Hot Start Dial'],
          ['Cooling Intake', 'Forced-air ventilation fan with mesh screen filter']
        ],
        whatsappMessage: 'Hello, I want to request the catalog specifications and price of the MKG ARC-400CI welder.'
      }
    },
    {
      id: 'cat-welder-brochure',
      title: 'MKG Economy Series AC/DC Welding Machines Specs Sheet',
      category: 'catalog',
      image: mkgArc200n,
      brand: 'MKG',
      description: 'Technical specs brochure listing details of regulators, input currents, and insulation for models JA-141, JA-121.',
      specs: 'JA Series Spec Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'MKG JA Series Heavy-Duty Manual Welder Specifications',
        highlights: [
          'Covers economy series model ratings: JA-141, JA-121, JA-101 for variable field operations.',
          'Provides complete breakdown of input power capacities, open circuit voltage limits, and duty cycle indices.',
          'Forced-air cooled housing structures with IP21 class dust and water splash insulation.'
        ],
        brands: ['MKG'],
        modelsOrDetails: [
          ['Models Covered', 'JA-141 Heavy, JA-121 Medium, JA-101 Compact'],
          ['Insulation Class', 'Grade F / Grade H high temperature core bindings'],
          ['Housing Class', 'IP21 Dust and vertical water-drop splash protection'],
          ['Open Circuit V', '70V to 85V AC/DC adjustable regulator terminals']
        ],
        whatsappMessage: 'Hello Sunil, please send me technical specs and quotes for the MKG JA Series manual welders.'
      }
    },
    {
      id: 'cat-mkg-star',
      title: 'MKG Star - Premium Welding Sticks Packaging Design Box',
      category: 'catalog',
      image: mmaYellowGrey,
      brand: 'MKG',
      description: 'Design brochure page displaying the packaging carton layout for MKG Star premium welding sticks.',
      specs: 'MKG Star Packaging',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'MKG Star Premium Rutile-Coated Mild Steel Welding Sticks',
        highlights: [
          'Premium bright orange and yellow carton flat layout design listing technical welding compositions.',
          'Specially formulated flux coating minimizes toxic hexavalent chromium fumes during indoor fabrication.',
          'Offers stable arc, silent low-crackle burning, and beautiful ripple-pattern welds.'
        ],
        brands: ['MKG'],
        modelsOrDetails: [
          ['Carton Styling', 'Flat print layout design with signature Orange/Yellow corporate livery'],
          ['Chemical Spec', 'Rutile-coated high-silicon mild steel alloy E6013 class'],
          ['Approvals', 'CE Certified, ISO 9001:2015 Approved Sourcing'],
          ['Target Use', 'Light structural steel, coach building, gate grills, thin plate seam joints']
        ],
        whatsappMessage: 'Hello Mohit, I want to purchase a bulk consignment of the MKG Star E6013 welding sticks.'
      }
    },
    {
      id: 'cat-latex-gloves',
      title: 'Medical & Industrial Disposable Latex Gloves Packaging Box',
      category: 'catalog',
      image: mkgMmaSic,
      brand: 'Asha Safety',
      description: 'Close-up catalog page for powder-free, medical-grade, ambidextrous protective latex gloves.',
      specs: 'Safety Gloves Sheet',
      isCatalog: true,
      catalogDetails: {
        subtitle: 'Disposable Blue Ambidextrous Powder-Free Latex Gloves',
        highlights: [
          'High elasticity, outstanding puncture resistance, and micro-textured fingers for secure grip.',
          'Powder-free and protein-purified to avoid allergic skin dermatitis.',
          'Ideal for pharmaceutical clinics, medical cleaning, fine electronics handling, and safe hygiene.'
        ],
        brands: ['Asha Safety', 'Garg Trading'],
        modelsOrDetails: [
          ['Packaging Standard', '100 Pieces per inner box (50 ambidextrous pairs)'],
          ['Material Grade', 'Premium Grade Vulcanized Natural Latex Rubber'],
          ['Surface Finish', 'Micro-textured finger tips for high grip in wet/dry environments'],
          ['Certifications', 'CE Approved, FDA Class-I Medical Device Compliant']
        ],
        whatsappMessage: 'Hello Mohit, please send me a bulk quote for Asha Disposable Latex Gloves in Large size.'
      }
    }
  ];

  // Filter handlers
  const filters = [
    { id: 'all', label: 'All Stock Photos' },
    { id: 'showroom', label: 'Showroom & Sites' },
    { id: 'machines', label: 'Welding Machines' },
    { id: 'accessories', label: 'Cables & Consumables' },
    { id: 'safety', label: 'Safety & Protection' },
    { id: 'catalog', label: 'Catalog & Flyer Pages' },
  ];

  // Filter items based on active tab and search query
  const filteredItems = defaultItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
                          item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.specs?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCount = filteredItems.length;

  return (
    <div className="min-h-screen bg-zinc-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Aesthetic Header Block */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100/70 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600">Verified System Stock</span>
          </div>
          
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-none">
            Authorized Photo Gallery
          </h1>
          
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Real photos demonstrating our heavy welding machinery stock, high-performance cables, premium chemical consumables, and authorized industrial safety wear.
          </p>
        </div>

        {/* Gallery Grid Feed Segment */}
        <section className="space-y-8">
          
          {/* Filters Bar & Real-time Search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 bg-white border border-zinc-200/80 rounded-2xl shadow-xs">
            
            {/* Filter tags buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filters.map(filt => {
                const isActive = activeFilter === filt.id;
                return (
                  <button
                    key={filt.id}
                    onClick={() => setActiveFilter(filt.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-zinc-900 text-white shadow-sm' 
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 bg-transparent'
                    }`}
                  >
                    {filt.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Search & Count Wrapper */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search stock photos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-zinc-50/50 hover:bg-zinc-50 focus:bg-white border border-zinc-200 rounded-xl text-xs outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all w-full sm:w-64 font-sans text-zinc-800"
                />
              </div>

              <div className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-1.5 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-2.5 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                <span>Showing {displayCount} Stock Items</span>
              </div>
            </div>
          </div>

          {/* Dynamic Feed Grid */}
          {filteredItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-zinc-200 border-dashed space-y-4 shadow-2xs"
            >
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mx-auto border border-zinc-100">
                <ImageIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1.5 max-w-xs mx-auto">
                <h4 className="font-display font-black text-base text-zinc-900 tracking-tight">
                  No stock items match
                </h4>
                <p className="text-zinc-500 text-xs font-sans">
                  Try adjusting your search terms or filter tabs to browse other verified inventory.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              id="gallery-images-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 flex flex-col group relative shadow-2xs"
                  >
                    {/* Visual Panel frame */}
                    <div className="relative aspect-video bg-zinc-50 overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Interactive click overlay with blur glass effect */}
                      <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10 backdrop-blur-3xs">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setLightboxImage({ 
                              src: item.image, 
                              alt: item.description, 
                              title: item.title,
                              isCatalog: item.isCatalog,
                              catalogDetails: item.catalogDetails
                            })}
                            className="bg-white hover:bg-orange-600 hover:text-white text-zinc-900 px-4.5 py-3 rounded-xl shadow-lg font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                            title="Zoom High-Res"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Full Size Photo</span>
                          </button>
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                        {/* Category badge */}
                        <div className="bg-zinc-900/90 backdrop-blur-xs text-white text-[9px] font-mono uppercase font-black tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          <span>
                            {item.category === 'showroom' 
                              ? 'Showroom' 
                              : item.category === 'machines' 
                                ? 'Welder' 
                                : item.category === 'safety' 
                                  ? 'Safety' 
                                  : item.category === 'catalog'
                                    ? 'Flyer/Catalog'
                                    : 'Supplies'}
                          </span>
                        </div>

                        {/* New Tag badge */}
                        {item.isNew && (
                          <div className="bg-orange-600 text-white text-[9px] font-mono uppercase font-black tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 fill-white" />
                            <span>NEW UPDATE</span>
                          </div>
                        )}
                      </div>

                      {/* Brand Label Overlay */}
                      <div className="absolute bottom-3 left-4 bg-zinc-950/60 backdrop-blur-md text-zinc-100 text-[10px] font-mono uppercase px-2 py-1 rounded-md border border-white/5">
                        Brand: <span className="font-bold text-white">{item.brand}</span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-display font-black text-sm sm:text-base text-zinc-900 tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
                        <div className="flex items-center gap-1 text-zinc-500">
                          <Tag className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{item.specs || 'MKG Premium'}</span>
                        </div>
                        <span 
                          className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center gap-0.5" 
                          onClick={() => setLightboxImage({ 
                            src: item.image, 
                            alt: item.description, 
                            title: item.title,
                            isCatalog: item.isCatalog,
                            catalogDetails: item.catalogDetails
                          })}
                        >
                          Inspect <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </section>

      </div>
    </div>
  );
}
