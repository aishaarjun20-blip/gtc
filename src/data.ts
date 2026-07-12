import { Product } from './types';

import mkgArcWelder from './assets/images/mkg_arc_welder_1783508613768.jpg';
import mmaBlackWelder from './assets/images/mma_black_welder_1783509349750.jpg';
import mmaYellowGrey from './assets/images/mma_yellow_grey_1783509367312.jpg';
import mkgTigWelder from './assets/images/mkg_tig_welder_1783508626449.jpg';
import mkgMigWelder from './assets/images/mkg_mig_welder_1783508640242.jpg';
import migTrolleyFeeder from './assets/images/mig_trolley_feeder_1783509398181.jpg';
import plasmaCutter from './assets/images/plasma_cutter_1783509383258.jpg';

export const BRANDS = [
  { name: 'MKG', logoText: 'MKG', description: 'Premium Inverter Welding & Cutting Systems' },
  { name: 'BOSCH', logoText: 'BOSCH', description: 'World-Class Power & Hand Tools' },
  { name: 'ESAB', logoText: 'ESAB', description: 'Global Leaders in Welding Equipment' },
  { name: 'ADOR', logoText: 'ADOR', description: 'Advanced Welding Alloys & Machines' },
  { name: 'SUPERON', logoText: 'SUPERON', description: 'Premium Special Electrodes & Spray products' },
  { name: 'KARAM', logoText: 'KARAM', description: 'Personal Protective & Fall Safety Equipment' },
  { name: 'L&T EWAC', logoText: 'EWAC', description: 'Specialized Repair & Wear Resistant Welding' },
  { name: 'INGCO', logoText: 'INGCO', description: 'High-Quality Affordable Power Tools' },
  { name: 'D & H', logoText: 'D & H', description: 'Welding Electrodes & Filler Wires' },
  { name: 'ASHA', logoText: 'ASHA', description: 'Industrial Safety Products' },
  { name: 'YES', logoText: 'YES', description: 'Inverter Welding Equipment' },
  { name: 'CMO', logoText: 'CMO', description: 'Welding Accessories & Spares' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'mkg-arc-200',
    name: 'ARC 200 IPH MOSFET',
    model: 'ARC 200 IPH',
    category: 'mma',
    brand: 'MKG',
    image: mkgArcWelder,
    tagline: 'High-Frequency Inverter Welding System',
    isFeatured: true,
    phase: '1 Phase',
    features: [
      'High-Frequency MOSFET technology for ultra-stable arc',
      'Extremely light weight & portable with high power output',
      'Auto-compensate voltage fluctuation, stable welding performance',
      'Excellent weld quality with minimal spatter'
    ],
    specs: {
      'Input Voltage (V)': 'AC230V ± 15%',
      'Frequency (Hz)': '50/60',
      'Input Power Capacity (KVA)': '6',
      'Rated Input Current (A)': '43.6',
      'Output Current Range (A)': '30 - 200',
      'No-Load Voltage (V)': '65',
      'Power Factor': '0.73',
      'Net Weight (KG)': '8',
      'Dimension (L*W*H) (mm)': '445 x 265 x 345',
      'Plate Thickness (mm)': '2.0 to 6.0',
      'Diameter of Rod (mm)': '2.0 to 3.2'
    }
  },
  {
    id: 'mkg-mma-300st',
    name: 'MMA 300ST',
    model: 'MMA 300ST',
    category: 'mma',
    brand: 'MKG',
    image: mmaBlackWelder,
    tagline: 'Wide Voltage Multi-Phase MMA Inverter',
    isFeatured: true,
    phase: '1/2 Phase',
    features: [
      'Inbuilt VRD (Voltage Reduction Device) for extreme operator safety',
      'Hot Start function for instant and effortless arc strike',
      'Anti Stick function prevents electrode sticking during welding',
      'Works in any input voltage from 60V to 560V',
      'Generator compatible - ideal for field and remote locations',
      'Rod holder cable length supported up to 30 meters'
    ],
    specs: {
      'Input Voltage': '1PH-2PH AC80V - 560V',
      'Frequency': '50/60 Hz',
      'Rated Input Current': '6.20 / 16.6 KVA',
      'No-Load Voltage': '75/220V, 65/380V',
      'Output Current Range': '10 - 300 A',
      'Rated Output Voltage': '24V',
      'Duty Cycle (%)': '60%',
      'No-Load Loss (W)': '24',
      'Efficiency (%)': '80%',
      'Power Factor': '0.73',
      'Insulation Grade': 'H',
      'Housing Protection': 'IP21',
      'Net Weight': '8 KG',
      'Dimension': '383 x 190 x 330 mm'
    }
  },
  {
    id: 'mkg-mma-400st',
    name: 'MMA 400ST',
    model: 'MMA 400ST',
    category: 'mma',
    brand: 'MKG',
    image: mmaBlackWelder,
    tagline: 'Heavy-Duty Wide Voltage MMA Inverter',
    isFeatured: false,
    phase: '1/2/3 Phase',
    features: [
      'Works on Single, Two, or Three phases (AC60V to 560V)',
      'Inbuilt VRD & Hot Start features',
      'Adjustable Arc Force for depth control',
      'Robust Anti-Stick control mechanism',
      'Rod holder cables supported up to 50 meters',
      'Suitable for harsh, dusty, hot, and humid working environments'
    ],
    specs: {
      'Input Voltage': '1PH-2PH-3PH AC60V - 560V',
      'Frequency': '50/60 Hz',
      'Rated Input Current': '7.80 / 14 KVA',
      'No-Load Voltage': '75/220V, 65/380V',
      'Output Current Range': '10 - 400 A',
      'Rated Output Voltage': '24V',
      'Duty Cycle (%)': '60%',
      'No-Load Loss (W)': '30',
      'Efficiency (%)': '80%',
      'Power Factor': '0.73',
      'Insulation Grade': 'F',
      'Housing Protection': 'IP21',
      'Net Weight': '16 KG',
      'Dimension': '520 x 240 x 390 mm'
    }
  },
  {
    id: 'mkg-mma-400i-3ph',
    name: 'MMA-400I -3PH',
    model: 'MMA-400I 3-PH',
    category: 'mma',
    brand: 'MKG',
    image: mmaYellowGrey,
    tagline: 'Heavy Duty 3-Phase Site Welding Inverter',
    isFeatured: false,
    phase: '3 Phase',
    features: [
      'Designed for extreme on-site site operations',
      'Long distance welding cable support (up to 50m)',
      'Advanced Dual IGBT Module technology',
      'Dual digital LED display for current & voltage preset',
      'Remote voltage and current control options',
      'Inbuilt VRD & Active Anti-Stick safety loops'
    ],
    specs: {
      'Input Voltage': '3PH - AC415V',
      'Frequency': '50/60 Hz',
      'Rated Input Current': '22 A',
      'No-Load Voltage': '65 V',
      'Output Current Range': '30 - 400 A',
      'VRD & VRD Voltage': 'YES & 20VDC',
      'Duty Cycle (%)': '60%',
      'No-Load Loss (W)': '40',
      'Efficiency (%)': '80%',
      'Power Factor': '0.93',
      'Insulation Grade': 'F',
      'Housing Protection': 'IP21',
      'Net Weight': '16 KGS',
      'Dimension': '633 x 353 x 533 mm'
    }
  },
  {
    id: 'mkg-mma-400-sic',
    name: 'MMA-400 SiC 3-PH',
    model: 'MMA-400SiC',
    category: 'mma',
    brand: 'MKG',
    image: mmaBlackWelder,
    tagline: 'Next-Gen Silicon Carbide (SiC) Multi-Process Welder',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Advanced Silicon Carbide (SiC) semiconductor technology',
      'Multi-Process supporting MMA, TIG, and MIG/MAG welding',
      'Supports high-duty continuous welding at 100% duty cycle (330A)',
      'Intelligent protection for Overheat, Overcurrent, and Undervoltage',
      'Accommodates high quality rods ranging Φ2.5 to Φ4.0 mm',
      'Extremely efficient cooling system (Air / Water / Self)'
    ],
    specs: {
      'Rated Input Voltage': '3 Phase; 380V ± 10%',
      'Power Frequency': '50 Hz',
      'Rated Input Capacity': '13.5 KVA',
      'Rated Input Current': '36 A',
      'Output No-load Voltage': '75 V',
      'Welding Current Range': '0 - 400 A',
      'Rated Duty Cycle (40°C)': '100%',
      'Output Current (100% DC)': '330 A',
      'Efficiency (%)': '85%',
      'Power Factor': '0.8',
      'Insulation Class': 'H',
      'Enclosure Protection': 'IP21S',
      'Net Weight': '11.3 KG',
      'Gross Weight': '12.65 KG',
      'Dimension (L*W*H)': '467 x 219 x 366 mm'
    }
  },
  {
    id: 'mkg-tig-200',
    name: 'TIG / ARC 200 IPH MOSFET',
    model: 'TIG/ARC 200 IPH',
    category: 'tig',
    brand: 'MKG',
    image: mkgArcWelder,
    tagline: 'Dual Purpose TIG & ARC Inverter Systems',
    isFeatured: false,
    phase: '1 Phase',
    features: [
      'High-Frequency (HF) Arc Ignition for clean contactless start',
      'Dual-purpose TIG gas and standard MMA ARC manual welding',
      'Highly responsive control circuit, energy-saving design',
      'Perfect for sheet metal, stainless steel, and fine alloy fabrication'
    ],
    specs: {
      'Input Voltage (V)': 'AC230V ± 15%',
      'Frequency (Hz)': '50/60',
      'Input Power (KVA) MMA/TIG': '6 / 6',
      'No-Load Voltage (V)': '56',
      'Rated Input Current MMA/TIG': '32 / 24 A',
      'Output Current Range (A)': '10 - 200',
      'Arc Ignition Type': 'HF (High Frequency)',
      'Power Factor': '0.73',
      'Net Weight (KG)': '9',
      'Dimension (L*W*H) (mm)': '371 x 153 x 232',
      'Plate Thickness Range': '0.3 - 5.0 mm (TIG) / 1.0 - 6.0 mm (MMA)',
      'Diameter of Rod (mm)': '2.0 to 3.2'
    }
  },
  {
    id: 'mkg-tig-400ij',
    name: 'TIG 400 IJ',
    model: 'TIG 400 IJ',
    category: 'tig',
    brand: 'MKG',
    image: mkgTigWelder,
    tagline: 'Industrial Heavy Duty TIG / MMA Combined Inverter',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Combined professional TIG and heavy MMA ARC capabilities',
      'Advanced module-type IGBT inverter control system',
      'Integrated 2T/4T trigger settings for long structural welds',
      'Supports remote foot-pedal or torch control option',
      'Full digital interface displays clear voltage and current parameters'
    ],
    specs: {
      'Input Voltage': '3 Phase; AC380V ± 10%',
      'Input Power (KVA)': 'TIG: 12.88 / MMA: 17.84',
      'Max Output Current': 'TIG: 400A / MMA: 400A',
      'No-load Voltage (V)': '76V (25V with active VRD)',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP21 & F',
      'Dimension (mm)': '418 x 229 x 362 mm',
      'Weight': '20 KG'
    },
    accessories: ['High-Duty TIG Torch', 'Heavy Duty Earth Cable Set', 'Standard Cable Connection Sockets']
  },
  {
    id: 'mkg-mig-250st',
    name: 'MIG 250ST',
    model: 'MIG 250ST',
    category: 'mig',
    brand: 'MKG',
    image: mkgMigWelder,
    tagline: 'Multi-Phase MIG / ARC Combined Smart Inverter',
    isFeatured: true,
    phase: '1/2/3 Phase',
    features: [
      'Combined professional gasless/gas MIG and manual ARC MMA',
      'Versatile power unit: Auto adapts to 1, 2, or 3 Phase supplies',
      'Equipped with microcomputer control unit (MCU) for smart parameter adjustments',
      'Works with long distance control cable up to 30m',
      'Equipped with constant current / constant voltage (CC/CV) outputs'
    ],
    specs: {
      'Input Voltage': 'AC180V ~ 410V (1/2/3 Phase Auto-Combined)',
      'Input Power (KVA)': 'MIG: 8.21 / MMA: 9.29',
      'Max Output Current': 'MIG: 250A / MMA: 250A',
      'No-load Voltage (V)': '64',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP23S & H',
      'Machine Package Size (mm)': '480 x 230 x 420',
      'Machine Weight (kg)': '17 KG'
    },
    accessories: [
      '250 Amps High Stability Power Source',
      'Premium MIG Torch',
      'Integrated Wire Feeder Unit',
      'Earth Cable Set & Clamps',
      'CO2 Regulator with Flowmeter & Built-in Heater'
    ]
  },
  {
    id: 'mkg-mig-400ij',
    name: 'MIG / ARC 400IJ',
    model: 'MIG / ARC 400IJ',
    category: 'mig',
    brand: 'MKG',
    image: migTrolleyFeeder,
    tagline: '3-Phase Heavy Duty Trolley MIG System',
    isFeatured: false,
    phase: '3 Phase',
    features: [
      'Heavy duty 3-Phase IGBT module core design',
      'Separate heavy-duty double-roller wire feeder unit',
      'Dual MIG gas shielding and MMA manual electrode capability',
      'Very wide wire feeder speed control (3 - 24 meters/minute)',
      'Heavy steel trolley mounting for easy shop movement'
    ],
    specs: {
      'Input Voltage (V)': 'AC415V ± 15%',
      'Input Power Capacity (KVA)': '14',
      'Output Voltage Adjustment': '31.5 V',
      'Output Current Range (A)': '50 - 400',
      'Wire Feeder Speed (m/min)': '3 - 24',
      'Power Factor': '0.93',
      'Net Weight (KG)': '36',
      'Dimension (inch)': '21.5 x 11 x 21.5',
      'MIG Wire Diameter (mm)': '0.8 - 1.2'
    }
  },
  {
    id: 'mkg-mig-400-sic',
    name: 'MIG-400 SiC 3-PH',
    model: 'MIG-400SiC',
    category: 'mig',
    brand: 'MKG',
    image: migTrolleyFeeder,
    tagline: 'Silicon Carbide (SiC) High-Efficiency MIG System',
    isFeatured: false,
    phase: '3 Phase',
    features: [
      'Pioneering Silicon Carbide Technology for lower thermal losses',
      'Triple process welding: MMA, TIG, and MIG/MAG gas-shielded',
      'Includes dedicated 5-meter heavy wire feeder connection cable',
      'Ships with 36V CO2 heater set, Pana Torch, and earth kits',
      'Triple cooling system controls (Air, Water, or Self-Cooling)'
    ],
    specs: {
      'Rated Input Voltage': '3 Phase; 380V ± 10%',
      'Power Frequency': '50 Hz',
      'Permissible Voltage Range': '320 ~ 415 V',
      'Rated Input Capacity': '16.5 KVA',
      'Rated Input Current': '25 A',
      'Output No-load Voltage': '68.5 V',
      'Gas Shielded Current Range': '0 - 400 A',
      'Manual Welding Current Range': '0 - 400 A',
      'Rated Duty Cycle (40°C)': '100%',
      'Output Current (100% DC)': '350 A',
      'Efficiency (%)': '85%',
      'Power Factor': '0.8',
      'Insulation Class': 'H',
      'Enclosure Protection': 'IP21S',
      'Net Weight': '15.3 KG',
      'Gross Weight': '18 KG',
      'Dimension (mm)': '467 x 219 x 366'
    },
    accessories: [
      'Wire Feeder with 5-meter heavy connection cable',
      'Professional MIG Torch KR-350 (3 meters)',
      'Earthing Clamp with 2.5-meter copper cable',
      'CO2 Regulator with pre-heater set'
    ]
  },
  {
    id: 'mkg-cut-70e',
    name: 'PLASMA CUT 70E',
    model: 'CUT 70E',
    category: 'plasma',
    brand: 'MKG',
    image: plasmaCutter,
    tagline: 'High-Speed IGBT Plasma Cutting Inverter',
    isFeatured: false,
    phase: '3 Phase',
    features: [
      'Advanced IGBT electronic cutting control with instant strike',
      'Intelligent electrical protection over voltage, load, and heat',
      'Pilot Arc Start system ensures clean cuts even on rusty/painted metal',
      'Highly compatible with CNC cutting table interfaces',
      'Offers pristine dross-free clean cutting up to 15mm'
    ],
    specs: {
      'Input Voltage': 'AC380V ± 10% 3-Phase',
      'Input Power (KVA)': '9.37',
      'Max Output Current': '70 A',
      'No-load Voltage (V)': '330',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP21 & F',
      'Clean Cut Capacity': '15 mm',
      'Max Severance Cut': '25 mm',
      'Machine Package Size (mm)': '480 x 230 x 420',
      'Machine Weight': '21 KG'
    },
    accessories: [
      '70A Plasma Power Source',
      'P80 Plasma Torch with nozzles & electrodes',
      'Gas Pressure Meter & Filter kit',
      'Earth Cable Set'
    ]
  },
  {
    id: 'mkg-cut-120-sic',
    name: 'CUT-120 SiC 3-PH',
    model: 'CUT-120 SiC',
    category: 'plasma',
    brand: 'MKG',
    image: plasmaCutter,
    tagline: 'Heavy-Duty Silicon Carbide Cutter with Inbuilt Compressor',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Dual-Air Option: Built-in quiet air compressor or external supply',
      'Extremely high duty-cycles using patented Silicon Carbide modules',
      'Deep cutting: High efficiency clean cut to 25mm, max cut to 35mm',
      'Dual functionality supporting Plasma Cutting & MMA Arc Welding',
      'Over-temperature, air pressure protection systems built-in'
    ],
    specs: {
      'Input Frequency': '50 Hz',
      'Rated Input Voltage': '3-Phase 380V AC ± 10%',
      'Input Voltage Range': '340 ~ 420 V',
      'Maximum Input Capacity': '19 KVA',
      'Maximum Input Current': '28 A',
      'No-Load Output Voltage': '310 V',
      'Plasma Cutting Current': '25 - 100 A',
      'Manual Arc Current Range': '0 - 180 A',
      'MMA Duty Cycle (40°C)': '180A @ 60%',
      'Plasma Duty Cycle (40°C)': '100A @ 60%',
      'Efficiency (%)': '85%',
      'Clean Cut Capacity': '1 ~ 25 mm',
      'Maximum Cut Capacity': '35 mm',
      'Insulation Class': 'H',
      'Protection Class': 'IP23S',
      'Dimension (mm)': '502 x 209 x 554',
      'Net Weight': '29 KG'
    },
    accessories: [
      'P80 Plasma Cutting Air-Cooled Torch (5 meters)',
      'High-Grade Earthing Clamp with 2-meter cable',
      'External air intake adapter kits'
    ]
  }
];
