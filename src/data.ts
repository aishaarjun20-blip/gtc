import { Product } from './types';

import mkgArcWelder from './assets/images/mkg_arc_welder_1783838078581.jpg';
import mmaBlackWelder from './assets/images/mma_black_welder_1783838095890.jpg';
import mmaYellowGrey from './assets/images/regenerated_image_1783840847264.png';
import mma400i3ph from './assets/images/regenerated_image_1783841197583.jpg';
import mkgTigWelder from './assets/images/mkg_tig_welder_1783838129019.jpg';
import mkgMigWelder from './assets/images/mkg_mig_welder_1783838145697.jpg';
import migTrolleyFeeder from './assets/images/mig_trolley_feeder_1783838166873.jpg';
import plasmaCutter from './assets/images/plasma_cutter_1783838182629.jpg';
import mmaSicWelder from './assets/images/mkg_mma_sic_1783838608406.jpg';
import migSicWelder from './assets/images/mkg_mig_sic_1783838626394.jpg';
import cutSicCutter from './assets/images/mkg_cut_sic_1783838643145.jpg';

// New high-quality product images for MKG line extension
import mkgGasHosepipe from './assets/images/mkg_gas_hosepipe_1784119192764.jpg';
import mkgMma250e from './assets/images/mkg_mma_250_e_1784119208150.jpg';
import mkgArc200n from './assets/images/mkg_arc_200n_1784119221028.jpg';
import mkgMma500sic from './assets/images/mkg_mma_500_sic_1784119233192.jpg';
import mkgCut140sic from './assets/images/mkg_cut_140_sic_1784119245796.jpg';

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
    model: 'ARC 200 IPH MOSFET',
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
      'INPUT VOLTAGE (V)': 'AC230V ± 15%',
      'FREQUENCY (HZ)': '50/60',
      'INPUT POWER CAPACITY (KVA)': '6',
      'RATED INPUT CURRENT (A)': '43.6',
      'OUTPUT CURRENT RANGE (A)': '30-200',
      'NO-LOAD VOLTAGE (V)': '65',
      'POWER FACTOR': '0.73',
      'NET WEIGHT (KG)': '8',
      'DIMENSION (L*W*H) (mm)': '445 x 265 x 345',
      'PLATE THICKNESS (MM)': '2.0 TO 6.0',
      'DIAMETER OF ROD (MM)': '2.0 To 3.2'
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
      'Rod holder cable length supported up to 30 meters',
      'Advanced IGBT Technology, increased duty cycle, more reliable under hot, humid, dusty working environments'
    ],
    specs: {
      'Input Voltage': '1PH-2PH AC60V-560V',
      'Frequency': '50/60',
      'Rated Input Current': '6.20/16.6KVA',
      'No-load Voltage': '75/220V,65/380V',
      'Output Current Range': '10-300',
      'Rated Output Voltage': '24V',
      'Duty Cycle': '60',
      'No-load Loss': '24',
      'Efficiency': '80',
      'Power Factor': '0.73',
      'Insulation Grade': 'H',
      'Housing Protection Grade': 'IP21',
      'Net Weight': '8KG',
      'Dimension': '383X190X330mm'
    }
  },
  {
    id: 'mkg-mma-400st',
    name: 'MMA 400ST',
    model: 'MMA 400ST',
    category: 'mma',
    brand: 'MKG',
    image: mmaYellowGrey,
    tagline: 'Heavy-Duty Wide Voltage MMA Inverter',
    isFeatured: false,
    phase: '1/2/3 Phase',
    features: [
      'Works on Single, Two, or Three phases (AC60V to 560V)',
      'Inbuilt VRD & Hot Start features',
      'Adjustable Arc Force for depth control',
      'Robust Anti-Stick control mechanism',
      'Rod holder cables supported up to 50 meters',
      'Suitable for harsh, dusty, hot, and humid working environments',
      'Advanced IGBT Technology, increased duty cycle'
    ],
    specs: {
      'Input Voltage': '1PH-2PH-3PH AC60V-560V',
      'Frequency': '50/60',
      'Rated Input Current': '7.80/14KVA',
      'No-load Voltage': '75/220V , 65/380V',
      'Output Current Range': '10-400',
      'Rated Output Voltage': '24V',
      'Duty Cycle': '60',
      'No-load Loss': '30',
      'Efficiency': '80',
      'Power Factor': '0.73',
      'Insulation Grade': 'F',
      'Housing Protection Grade': 'IP21',
      'Net Weight': '16KG',
      'Dimension': '520X240X390mm'
    }
  },
  {
    id: 'mkg-mma-400i-3ph',
    name: 'MMA-400I -3PH',
    model: 'MMA-400I -3PH',
    category: 'mma',
    brand: 'MKG',
    image: mma400i3ph,
    tagline: 'Heavy Duty 3-Phase Site Welding Inverter',
    isFeatured: false,
    phase: '3 Phase',
    features: [
      'Designed for extreme on-site operations',
      'Long distance welding cable support (up to 50m)',
      'Advanced Dual IGBT Module technology',
      'Dual digital LED display for current & voltage preset',
      'Remote voltage and current control options',
      'Inbuilt VRD & Active Anti-Stick safety loops',
      'Works in 3 phase power input'
    ],
    specs: {
      'Parameter/Model': 'ARC-400I -3PH',
      'Input Voltage': '3PH - AC415V',
      'Frequency': '50/60',
      'Rated Input Current': '22',
      'No-load Voltage': '65',
      'Output Current Range': '30-400',
      'VRD & VRD VOLTAGE': 'YES & 20VDC',
      'Duty Cycle': '60',
      'No-load Loss': '40',
      'Efficiency': '80',
      'Power Factor': '0.93',
      'Insulation Grade': 'F',
      'Housing Protection Grade': 'IP21',
      'Net Weight': '16 KGS',
      'Dimension': '633X353X533'
    }
  },
  {
    id: 'mkg-mma-400-sic',
    name: 'MMA-400 SiC 3-PH',
    model: 'MMA-400SiC',
    category: 'mma',
    brand: 'MKG',
    image: mmaSicWelder,
    tagline: 'Next-Gen Silicon Carbide (SiC) Multi-Process Welder',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Advanced Silicon Carbide (SiC) semiconductor technology for higher efficiency and lower losses',
      'Multi-Process supporting MMA, TIG, and MIG/MAG welding',
      'Supports high-duty continuous welding at 100% duty cycle (330A)',
      'Intelligent protection for Overheat, Overcurrent, and Undervoltage',
      'Accommodates high quality rods ranging Φ2.5 to Φ4.0 mm',
      'Extremely efficient cooling system (Air / Water / Self)'
    ],
    specs: {
      'Power Frequency': '50 Hz',
      'Rated Input Voltage': '3 Phase; 380V ± 10%',
      'Rated Input Capacity': '13.5 KVA',
      'Rated Input Current': '36 A',
      'Output No-load Voltage': '75 V',
      'Welding Current Range': '0-400 A',
      'Rated Duty Cycle (40°C)': '100%',
      'Output Current at 100% Duty Cycle': '330 A',
      'Efficiency': '85%',
      'Power Factor': 'Cosφ 0.8',
      'Technology': 'Silicon Carbide (SiC) Technology',
      'Welding Process': 'MMA, TIG, MIG/MAG',
      'Applicable Welding Rods': 'Φ2.5 - Φ4.0 mm',
      'Quick Connector': '50-70',
      'Protection': 'Overheat, Overcurrent, Undervoltage, Gas Shortage, Other',
      'Cooling Method': 'Air Cooling, Water Cooling, Self Cooling',
      'Handle': 'Yes',
      'VRD': 'Yes',
      'Insulation Class': 'Grade H',
      'Enclosure Protection Level': 'IP21S',
      'Net Weight': '11.3 kg',
      'Gross Weight': '12.65 kg',
      'Dimensions (LxWxH)': '467 * 219 * 366 mm'
    }
  },
  {
    id: 'mkg-tig-200',
    name: 'TIG / ARC 200 IPH MOSFET',
    model: 'TIG / ARC 200 IPH MOSFET',
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
      'INPUT VOLTAGE (V)': 'AC230V ± 15%',
      'FREQUENCY (HZ)': '50/60',
      'INPUT POWER CAPACITY (KVA) MMA/TIG': '6/6',
      'NO-LOAD VOLTAGE (V)': '56',
      'RATED INPUT CURRENT (A)': '32/24',
      'OUTPUT CURRENT RANGE (A)': '10-200',
      'ARC IGNITION': 'HF',
      'POWER FACTOR': '0.73',
      'NET WEIGHT (KG)': '9',
      'DIMENSION (L*W*H) (mm)': '371 x 153 x 232',
      'PLATE THICKNESS (MM)': '0.3-5.0 / 1.0-6.0',
      'DIAMETER OF ROD (MM) Arc': '2.0 TO 3.2'
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
      'Input Voltage': '3ph~AC380V±10%',
      'Input Power (KVA)': 'TIG:12.88/MMA:17.84',
      'Max Output Current': 'TIG: 400A /MMA: 400A',
      'No-load Voltage (V)': '76V (25V, VRD)',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP 21 & F',
      'Dimension (mm)': '418*229*362mm',
      'Weight': '20Kg'
    },
    accessories: [
      'WELDING MACHINE',
      'TIG TORCH',
      'EARTH CABLE SET',
      'CABLE SOCKET'
    ]
  },
  {
    id: 'mkg-mig-250st',
    name: 'MKG 250ST',
    model: 'MKG 250ST',
    category: 'mig',
    brand: 'MKG',
    image: mkgMigWelder,
    tagline: 'MIG / ARC Combined Multi-Phase Smart Inverter',
    isFeatured: true,
    phase: '1/2/3 Phase',
    features: [
      'Advanced IGBT Technology, increased duty cycle, more reliable under hot, humid, dusty working environments',
      'Exclusive Circuit Design, reduces maintenance cost and extends machine life',
      'Input 1/2/3 Phase combined wide-voltage input adapts automatically',
      'Supports long-distance control cables up to 30 meters and rod holder cables up to 50 meters',
      'Equipped with 2T/4T trigger settings, high performance Microcomputer Control Unit (MCU), and CC/CV constant current/voltage outputs'
    ],
    specs: {
      'Input Voltage': 'AC180V~410V 1/2/3PH',
      'Input Power (KVA)': 'MIG:8.21/MMA:9.29',
      'Max Output Current': 'MIG: 250A /MMA: 250A',
      'No-load Voltage (V)': '64',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP 23S & H',
      'Machine Package Size (mm)': '480x230x420',
      'Machine Weight (kg)': '17kg'
    },
    accessories: [
      '250 AMPS POWER SOURCE',
      'MIG TORCH',
      'WIRE FEEDER',
      'EARTH CABLE SET',
      'CO2 REGULATOR WITH FLOWMETER & HEATER'
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
      'INPUT VOLTAGE (V)': 'AC415V±15%',
      'INPUT POWER CAPACITY (KVA)': '14',
      'OUTPUT VOLTAGE ADJUSTMENT(V)': '31.5',
      'OUTPUT CURRENT RANGE (A)': '50 - 400',
      'WIRE FEEDER SPEED (MTR/MIN)': '3 - 24',
      'POWER FACTOR': '0.93',
      'NET WEIGHT (KG)': '36',
      'DIMENSION (INCH)': '21.5 x 11 x 21.5',
      'MIG WIRE DIAMETER (MM)': '0.8 - 1.2'
    }
  },
  {
    id: 'mkg-mig-400-sic',
    name: 'MIG-400 SiC 3-PH',
    model: 'MIG-400SiC',
    category: 'mig',
    brand: 'MKG',
    image: migSicWelder,
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
      'Power Frequency': '50 Hz',
      'Rated Input Voltage': '3 Phase; 380V ± 10%',
      'Permissible Input Voltage Range': '320~415 V',
      'Rated Input Capacity': '16.5 KVA',
      'Rated Input Current': '25 A',
      'Output No-load Voltage': '68.5 V',
      'Gas Shielded Welding Current Range': '0-400 A',
      'Manual Welding Current Range': '0-400 A',
      'Rated Duty Cycle (40°C)': '100%',
      'Output Current at 100% Duty Cycle': '350 A',
      'Efficiency': '85%',
      'Power Factor': 'Cosφ 0.8',
      'Technology': 'Silicon Carbide Technology',
      'Welding Process': 'MMA, TIG, MIG/MAG',
      'Applicable Welding Wire': '0.8--1.2 mm',
      'Quick Connector': 'DK50B-300A',
      'Protection': 'Overheat, Overcurrent, Undervoltage, Gas Shortage, Other',
      'Cooling Method': 'Air Cooling, Water Cooling, Self Cooling',
      'Handle': 'Yes',
      'Wire Feeder': 'External',
      'Insulation Class': 'Grade H',
      'Enclosure Protection Level': 'IP21S',
      'Net Weight': '15.3 kg',
      'Gross Weight': '18 kg',
      'Dimensions (LxWxH)': '467*219*366 mm'
    },
    accessories: [
      'Wire Feeder with 5meter connection cable',
      'MIG Torch KR-350 3meter',
      'Earthing Clamp with cable 2.5meter',
      'CO2 Regulator with pre heater'
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
      'Input Voltage': 'AC380V±10% 3PH',
      'Input Power (KVA)': '9.37',
      'Max Output Current': '70 A',
      'No-load Voltage (V)': '330',
      'Hot Start': 'YES',
      'Protection & Insulation': 'IP 21 & F',
      'Clean Cut': '15mm',
      'Max Cut': '25mm',
      'Machine Package Size (mm)': '480x230x420',
      'Machine Weight (kg)': '21kg'
    },
    accessories: [
      'POWER SOURCE',
      'CUTTING TORCH WITH NOZZLE & ELECTRODE',
      'PRESSURE METER',
      'EARTH CABLE SET'
    ]
  },
  {
    id: 'mkg-cut-120-sic',
    name: 'CUT-120 SiC 3-PH Inbuilt',
    model: 'CUT-120 SiC',
    category: 'plasma',
    brand: 'MKG',
    image: cutSicCutter,
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
      'External Air Input Connection': 'Yes with Duty Cycle (at 40°C): 100%',
      'Built-in Air Compressor': 'Yes with Duty Cycle (at 40°C): 60%',
      'Input Frequency': '50 Hz',
      'Rated Input Voltage': '3-Phase 380V AC ± 10%',
      'Input Voltage Range': '340~420 V',
      'Maximum Input Capacity': '19 kVA',
      'Maximum Input Current': '28 A',
      'No-Load Output Voltage': '310 V',
      'Plasma Cutting Current Range': '25~100 A',
      'Manual Arc Welding Current Range': '0~180 A',
      'MMA Duty Cycle (at 40°C)': '180A @ 60%',
      'Plasma Cutting Duty Cycle (at 40°C)': '100A @ 60%',
      'Efficiency': '85%',
      'Power Factor (cos Ø)': '0.8',
      'Clean Cut Capacity': '1~25 mm',
      'Maximum Cut Capacity': '35 mm',
      'Technology Type': 'Silicon Carbide (SiC)',
      'Output Connection Type': '35-50 Quick Connect',
      'Cooling System': 'Forced Air',
      'Insulation Class': 'Grade H',
      'Protection Class': 'IP23S',
      'Dimensions (L x W x H)': '502 x 209 x 554 mm',
      'Net Weight': '29 kg',
      'Gross Weight': '32 kg'
    },
    accessories: [
      'P80 Plasma Cutting Manual Air cooled Torch 5meter',
      'Earthing Clamp with cable 2 meter'
    ]
  },
  {
    id: 'mkg-hosepipe',
    name: 'MKG ARC EXTREME ISI - 447',
    model: 'Welding Gas Hose Pipe ID 8MM BP 50 BAR',
    category: 'accessories',
    brand: 'MKG',
    image: mkgGasHosepipe,
    tagline: 'Supreme Strength In Every Spray - High Pressure Hose',
    isFeatured: true,
    phase: 'N/A',
    features: [
      'Industrial grade premium Thermoplastic Rubber (TPR) construction',
      'Extremely high tensile strength for high pressure applications',
      'ISI - 447 Certified welding standard quality',
      'Coated protective surface resistant to sparks and abrasions',
      'Ideal for shielding gases like CO2, Argon, and Oxygen mixtures'
    ],
    specs: {
      'Hose Pipe Model': 'MKG ARC EXTREME ISI - 447',
      'Inner Diameter (ID)': '8 mm',
      'Burst Pressure (BP)': '50 BAR',
      'Material': 'High-strength Thermoplastic Rubber (TPR)',
      'Available Colors': 'TPR Red, TPR Blue',
      'Application': 'Welding gas transmission & regulator links',
      'Durability': 'Oil, heat, and weather resistant jacket'
    }
  },
  {
    id: 'mkg-mma-250-e',
    name: 'E-SERIES MMA-250 1/2-Ph',
    model: 'MMA-250 1/2-Ph',
    category: 'mma',
    brand: 'MKG',
    image: mkgMma250e,
    tagline: 'Power. Precision. Dual-Voltage MMA Welder',
    isFeatured: true,
    phase: '1/2 Phase',
    features: [
      'Highly portable compact professional stick welding machine',
      'True wide-voltage dual-phase compatibility (AC220V / AC380V)',
      'Inbuilt VRD (Voltage Reduction Device) for complete welder safety',
      'High rated duty cycle of 60% at 25°C ambient temperature',
      'Equipped with heavy-duty black carrying handle for easy field work'
    ],
    specs: {
      'Item': 'MMA-250 1/2-Ph',
      'INPUT POWER SOURCE': '(1P ~ AC 220V | 2P ~ AC 380V) | (±15% 50/60Hz)',
      'RATED INPUT CURRENT (A)': '20',
      'RATED INPUT POWER CAPACITY (KVA)': '4.5',
      'OUTPUT CURRENT RANGE (A)': '0-250',
      'NO-LOAD VOLTAGE (V)': '62V',
      'VRD & VRD VOLTAGE': 'Yes & 14V DC',
      'RATED DUTY CYCLE (%) @25°C': '60',
      'PROTECTION CLASS': 'IP 21',
      'INSULATION CLASS': 'F',
      'MACHINE DIMENSIONS (mm)': '300 x 160 x 240',
      'BOX PACKING SIZE (mm)': '380 x 245 x 340',
      'BOX GROSS WEIGHT (Kg)': '5.5',
      'MACHINE NET WEIGHT (Kg)': '4.5'
    }
  },
  {
    id: 'mkg-arc-200n',
    name: 'ARC 200N IGBT',
    model: 'ARC 200N IGBT',
    category: 'mma',
    brand: 'MKG',
    image: mkgArc200n,
    tagline: 'Professional High-Frequency Inverter Welding System',
    isFeatured: false,
    phase: '1 Phase',
    features: [
      'Advanced IGBT inverter control circuit with instant arc strike',
      'Incredibly lightweight and robust metal casing',
      'Excellent energy efficiency with a 0.73 power factor',
      'Ideal for plate thickness from 2.0 to 6.0 mm',
      'Handles welding rods from diameter 2.0mm to 3.2mm'
    ],
    specs: {
      'INPUT VOLTAGE (V)': 'AC230V ± 15%',
      'FREQUENCY (HZ)': '50/60',
      'INPUT POWER CAPACITY (KVA)': '6',
      'RATED INPUT CURRENT (A)': '43.6',
      'OUTPUT CURRENT RANGE (A)': '30-200',
      'NO-LOAD VOLTAGE(V)': '65',
      'POWER FACTOR': '0.73',
      'NET WEIGHT (KG)': '8',
      'DIMENSION (L*W*H) (mm)': '445 x 265 x 345',
      'PLATE THICKNESS (MM)': '2.0 TO 6.0',
      'DIAMETER OF ROD (MM)': '2.0 To 3.2'
    }
  },
  {
    id: 'mkg-mma-500-sic',
    name: 'MMA-500 SiC 3-PH',
    model: 'MMA-500SiC',
    category: 'mma',
    brand: 'MKG',
    image: mkgMma500sic,
    tagline: 'Heavy-Duty 3-Phase Silicon Carbide Site Inverter',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Cutting-edge Silicon Carbide (SiC) semiconductor modules',
      'Massive 500 Amps continuous output at 100% duty cycle',
      'Multi-process support: MMA, TIG, MIG/MAG, Carbon Arc Gouging',
      'Advanced thermal cooling: Air, Water, or Self-Cooling controls',
      'Full protection: Overheat, Overcurrent, Undervoltage, and Gas Shortage'
    ],
    specs: {
      'Item': 'MMA-500SiC',
      'Power Frequency (Hz)': '50',
      'Rated Input Voltage': '3 Phase; 380V±10%',
      'Rated Input Capacity (KVA)': '21',
      'Rated Input Current (A)': '75',
      'Output No-load Voltage': '0-500',
      'Output Current at 100% Duty Cycle (A)': '500',
      'Welding Process': 'MMA / TIG / MIG-MAG / Carbon Arc Gouging',
      'Applicable Welding Rod Diameter': 'Φ2.5 - Φ5.0 mm',
      'Power Factor': 'Cosφ 0.8',
      'Quick Protection': 'Overheat, Overcurrent, Undervoltage, Gas Shortage',
      'Cooling Method': 'Air Cooling / Water Cooling / Self Cooling',
      'Insulation Grade': 'H',
      'Enclosure Protection Level': 'IP21S',
      'Net Weight': '18 kg',
      'Gross Weight': '19.6 kg',
      'Dimensions (LxWxH) (mm)': '512.5 x 220 x 398'
    }
  },
  {
    id: 'mkg-cut-140-sic',
    name: 'CUT-140 SiC 3-PH',
    model: 'CUT-140 SiC',
    category: 'plasma',
    brand: 'MKG',
    image: mkgCut140sic,
    tagline: 'Silicon Carbide (SiC) Heavy Duty Plasma Cutter',
    isFeatured: true,
    phase: '3 Phase',
    features: [
      'Silicon Carbide technology with continuous 100% duty cycle',
      'Extreme cutting capability: Clean cut of 30mm, maximum cut of 40mm',
      'Dual functionality: supports both Plasma Cut and 200A manual MMA arc welding',
      'Full CNC Table integration compatibility built-in',
      'Heavy duty steel chassis with protective IP23S class insulation'
    ],
    specs: {
      'Item': 'CUT-140 SiC',
      'Power Frequency (Hz)': '50',
      'Rated Input Voltage': '3 Phase, 380V ±10%',
      'Permissible Input Voltage Range': '340~420 V',
      'Rated Input Capacity (KVA)': '23',
      'Rated Input Current (A)': '35',
      'Output No-load Voltage (V)': '310',
      'Plasma Cutting Current Range (A)': '25-140',
      'Manual ARC Welding Current Range (A)': '0-200',
      'Rated Duty Cycle (40°C)': '100%',
      'Output Current at 100% Duty Cycle': 'PLASMA-140A / MMA-200A',
      'Efficiency': '85%',
      'Power Factor': '0.8',
      'Clean Cut Thickness (mm)': '30',
      'Maximum Cut Thickness (mm)': '40',
      'CNC Compatible': 'YES',
      'Technology': 'Silicon Carbide Technology',
      'Welding Process': 'MMA / Plasma CUT',
      'Cooling Method': 'Air Cooling',
      'Insulation Class': 'Grade H',
      'Enclosure Protection Level': 'IP23S',
      'Net Weight (kg)': '18',
      'Dimensions (LxWxH) (mm)': '450 x 270 x 380'
    },
    accessories: [
      'P80 Plasma Cutting Manual Air cooled Torch 5meter',
      'Earthing Clamp with cable 2 meter',
      'Air Filter Valve (FRL)'
    ]
  }
];
