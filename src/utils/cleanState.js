export const initialStateCopy = () => {
  const cleanState = {
    currentDate: '',
    locationDetails: {
      coords: {
        longitude: null,
        latitude: null
      }
    },
    carrier: '',
    lastOdometer: '',
    truckImage: null,
    trailer1: {
      trailerNumber: null,
      brakeConnectionsTrailer1: {
        keyId: 'Brake Connections',
        status: true,
        dateModified: ''
      },
      brakesTrailer1: {
        keyId: 'Brakes',
        status: true,
        dateModified: ''
      },
      couplingDevicesTrailer1: {
        keyId: 'Coupling Devices',
        status: true,
        dateModified: ''
      },
      couplingKingPinTrailer1: {
        keyId: 'Coupling King Pin',
        status: true,
        dateModified: ''
      },
      doorsTrailer1: {
        keyId: 'Doors',
        status: true,
        dateModified: ''
      },
      hitchTrailer1: {
        keyId: 'Hitch',
        status: true,
        dateModified: ''
      },
      landingGearTrailer1: {
        keyId: 'Landing Gear',
        status: true,
        dateModified: ''
      },
      lightsTrailer1: {
        keyId: 'Lights',
        status: true,
        dateModified: ''
      },
      reflectorsTrailer1: {
        keyId: 'Reflectors',
        status: true,
        dateModified: ''
      },
      roofTrailer1: {
        keyId: 'Roof',
        status: true,
        dateModified: ''
      },
      suspensionSystemTrailer1: {
        keyId: 'Suspension System',
        status: true,
        dateModified: ''
      },
      strapsTrailer1: {
        keyId: 'Straps',
        status: true,
        dateModified: ''
      },
      tarpulinTrailer1: {
        keyId: 'Tarpulin',
        status: true,
        dateModified: ''
      },
      tiresTrailer1: {
        keyId: 'Tires',
        status: true,
        dateModified: ''
      },
      wheelsAndRimTrailer1: {
        keyId: 'Wheels And Rim',
        status: true,
        dateModified: ''
      }
    },
    trailer2: {
      trailerNumber: null,
      brakeConnectionsTrailer2: {
        keyId: 'Brake Connections',
        status: true,
        dateModified: ''
      },
      brakesTrailer2: {
        keyId: 'Brakes',
        status: true,
        dateModified: ''
      },
      couplingDevicesTrailer2: {
        keyId: 'Coupling Devices',
        status: true,
        dateModified: ''
      },
      couplingKingPinTrailer2: {
        keyId: 'Coupling King Pin',
        status: true,
        dateModified: ''
      },
      doorsTrailer2: {
        keyId: 'Doors',
        status: true,
        dateModified: ''
      },
      hitchTrailer2: {
        keyId: 'Hitch',
        status: true,
        dateModified: ''
      },
      landingGearTrailer2: {
        keyId: 'Landing Gear',
        status: true,
        dateModified: ''
      },
      lightsTrailer2: {
        keyId: 'Lights',
        status: true,
        dateModified: ''
      },
      reflectorsTrailer2: {
        keyId: 'Reflectors',
        status: true,
        dateModified: ''
      },
      roofTrailer2: {
        keyId: 'Roof',
        status: true,
        dateModified: ''
      },
      suspensionSystemTrailer2: {
        keyId: 'Suspension System',
        status: true,
        dateModified: ''
      },
      strapsTrailer2: {
        keyId: 'Straps',
        status: true,
        dateModified: ''
      },
      tarpulinTrailer2: {
        keyId: 'Tarpulin',
        status: true,
        dateModified: ''
      },
      tiresTrailer2: {
        keyId: 'Tires',
        status: true,
        dateModified: ''
      },
      wheelsAndRimTrailer2: {
        keyId: 'Wheels And Rim',
        status: true,
        dateModified: ''
      }
    },
    truckStatus: {
      airCompresor: {
        keyId: 'Air Compresor',
        status: true,
        dateModified: ''
      },
      airLines: {
        keyId: 'Air Lines',
        status: true,
        dateModified: ''
      },
      battery: {
        keyId: 'Battery',
        status: true,
        dateModified: ''
      },
      beltsAndHoses: {
        keyId: 'Belts Ans Hoses',
        status: true,
        dateModified: ''
      },
      body: {
        keyId: 'Body',
        status: true,
        dateModified: ''
      },
      brakeAccessories: {
        keyId: 'Brake Accessories ',
        status: true,
        dateModified: ''
      },
      brakesParking: {
        keyId: 'Brakes Parking',
        status: true,
        dateModified: ''
      },
      brakesService: {
        keyId: 'Brakes Service',
        status: true,
        dateModified: ''
      },
      clutch: {
        keyId: 'Clutch',
        status: true,
        dateModified: ''
      },
      couplingDevices: {
        keyId: 'Coupling Devices',
        status: true,
        dateModified: ''
      },
      driverLine: {
        keyId: 'Driver Line',
        status: true,
        dateModified: ''
      },
      engine: {
        keyId: 'Engine',
        status: true,
        dateModified: ''
      },
      exhaust: {
        keyId: 'Exhaust',
        status: true,
        dateModified: ''
      },
      fifthWheel: {
        keyId: 'Fifth Wheel',
        status: true,
        dateModified: ''
      },
      fluidLevel: {
        keyId: 'Fluid Level',
        status: true,
        dateModified: ''
      },
      frameAndAssembly: {
        keyId: 'Frame And Assembly',
        status: true,
        dateModified: ''
      },
      frontAxle: {
        keyId: 'Front Axle',
        status: true,
        dateModified: ''
      },
      fuleTanks: {
        keyId: 'Fule Tanks',
        status: true,
        dateModified: ''
      },
      generator: {
        keyId: 'Generator',
        status: true,
        dateModified: ''
      },
      horn: {
        keyId: 'Horn',
        status: true,
        dateModified: ''
      },
      lightHead: {
        keyId: 'LightHead',
        status: true,
        dateModified: ''
      },
      lightStop: {
        keyId: 'Light Stop',
        status: true,
        dateModified: ''
      },
      lightTail: {
        keyId: 'Light Tail',
        status: true,
        dateModified: ''
      },
      lightDash: {
        keyId: 'Light Dash',
        status: true,
        dateModified: ''
      },
      lightTurnIndicators: {
        keyId: 'Light Turn Indicators',
        status: true,
        dateModified: ''
      },
      mirrors: {
        keyId: 'Mirrors',
        status: true,
        dateModified: ''
      },
      muffler: {
        keyId: 'Muffler',
        status: true,
        dateModified: ''
      },
      oilLevel: {
        keyId: 'Oil Level',
        status: true,
        dateModified: ''
      },
      radiatorLevel: {
        keyId: 'Radiator Level',
        status: true,
        dateModified: ''
      },
      rearEnd: {
        keyId: 'Rear End',
        status: true,
        dateModified: ''
      },
      reflectors: {
        keyId: 'Reflectors',
        status: true,
        dateModified: ''
      },
      fireExtinguisher: {
        keyId: 'Fire Extinguisher',
        status: true,
        dateModified: ''
      },
      flags: {
        keyId: 'Flags',
        status: true,
        dateModified: ''
      },
      flares: {
        keyId: 'Flares',
        status: true,
        dateModified: ''
      },
      fusees: {
        keyId: 'Fusees',
        status: true,
        dateModified: ''
      },
      reflectiveTriangles: {
        keyId: 'Reflective Triangles',
        status: true,
        dateModified: ''
      },
      spareBulbs: {
        keyId: 'Spare Bulbs',
        status: true,
        dateModified: ''
      },
      spareFuses: {
        keyId: 'Spare Fuses',
        status: true,
        dateModified: ''
      },
      spareSealBeam: {
        keyId: 'Spare Seal Beam',
        status: true,
        dateModified: ''
      },
      starter: {
        keyId: 'Starter',
        status: true,
        dateModified: ''
      },
      steering: {
        keyId: 'Steering',
        status: true,
        dateModified: ''
      },
      suspensionSystem: {
        keyId: 'Suspension System',
        status: true,
        dateModified: ''
      },
      tireChains: {
        keyId: 'Tire Chains',
        status: true,
        dateModified: ''
      },
      tires: {
        keyId: 'Tires',
        status: true,
        dateModified: ''
      },
      transmission: {
        keyId: 'Transmission',
        status: true,
        dateModified: ''
      },
      tripRecorder: {
        keyId: 'Trip Recorder',
        status: true,
        dateModified: ''
      },
      weelsAndRim: {
        keyId: 'Weels And Rim',
        status: true,
        dateModified: ''
      },
      windows: {
        keyId: 'Windows',
        status: true,
        dateModified: ''
      },
      windshieldsWipers: {
        keyId: 'Windshields Wipers',
        status: true,
        dateModified: ''
      }
    }
  };
  return cleanState;
};