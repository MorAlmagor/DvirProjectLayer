import * as actionTypes from '../actions/actionTypes';

const initialState = {
  truckNumber: '',
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
    trailerNumber: false,
    brakeConnectionsTrailer1: {
      keyId: 'Brake Connections',
      status: true,
      dateModified: '',
      Score: 5
    },
    brakesTrailer1: {
      keyId: 'Brakes',
      status: true,
      dateModified: '',
      Score: 10
    },
    couplingDevicesTrailer1: {
      keyId: 'Coupling Devices',
      status: true,
      dateModified: '',
      Score: 7
    },
    couplingKingPinTrailer1: {
      keyId: 'Coupling King Pin',
      status: true,
      dateModified: '',
      Score: 5
    },
    doorsTrailer1: {
      keyId: 'Doors',
      status: true,
      dateModified: '',
      Score: 2
    },
    hitchTrailer1: {
      keyId: 'Hitch',
      status: true,
      dateModified: '',
      Score: 3
    },
    landingGearTrailer1: {
      keyId: 'Landing Gear',
      status: true,
      dateModified: '',
      Score: 5
    },
    lightsTrailer1: {
      keyId: 'Lights',
      status: true,
      dateModified: '',
      Score: 3
    },
    reflectorsTrailer1: {
      keyId: 'Reflectors',
      status: true,
      dateModified: '',
      Score: 2
    },
    roofTrailer1: {
      keyId: 'Roof',
      status: true,
      dateModified: '',
      Score: 2
    },
    suspensionSystemTrailer1: {
      keyId: 'Suspension System',
      status: true,
      dateModified: '',
      Score: 5
    },
    strapsTrailer1: {
      keyId: 'Straps',
      status: true,
      dateModified: '',
      Score: 2
    },
    tarpulinTrailer1: {
      keyId: 'Tarpulin',
      status: true,
      dateModified: '',
      Score: 3
    },
    tiresTrailer1: {
      keyId: 'Tires',
      status: true,
      dateModified: '',
      Score: 5
    },
    wheelsAndRimTrailer1: {
      keyId: 'Wheels And Rim',
      status: true,
      dateModified: '',
      Score: 3
    }
  },
  trailer2: {
    trailerNumber: false,
    brakeConnectionsTrailer2: {
      keyId: 'Brake Connections',
      status: true,
      dateModified: '',
      Score: 5
    },
    brakesTrailer2: {
      keyId: 'Brakes',
      status: true,
      dateModified: '',
      Score: 10
    },
    couplingDevicesTrailer2: {
      keyId: 'Coupling Devices',
      status: true,
      dateModified: '',
      Score: 7
    },
    couplingKingPinTrailer2: {
      keyId: 'Coupling King Pin',
      status: true,
      dateModified: '',
      Score: 5
    },
    doorsTrailer2: {
      keyId: 'Doors',
      status: true,
      dateModified: '',
      Score: 2
    },
    hitchTrailer2: {
      keyId: 'Hitch',
      status: true,
      dateModified: '',
      Score: 2
    },
    landingGearTrailer2: {
      keyId: 'Landing Gear',
      status: true,
      dateModified: '',
      Score: 4
    },
    lightsTrailer2: {
      keyId: 'Lights',
      status: true,
      dateModified: '',
      Score: 2
    },
    reflectorsTrailer2: {
      keyId: 'Reflectors',
      status: true,
      dateModified: '',
      Score: 2
    },
    roofTrailer2: {
      keyId: 'Roof',
      status: true,
      dateModified: '',
      Score: 2
    },
    suspensionSystemTrailer2: {
      keyId: 'Suspension System',
      status: true,
      dateModified: '',
      Score: 5
    },
    strapsTrailer2: {
      keyId: 'Straps',
      status: true,
      dateModified: '',
      Score: 1
    },
    tarpulinTrailer2: {
      keyId: 'Tarpulin',
      status: true,
      dateModified: '',
      Score: 3
    },
    tiresTrailer2: {
      keyId: 'Tires',
      status: true,
      dateModified: '',
      Score: 5
    },
    wheelsAndRimTrailer2: {
      keyId: 'Wheels And Rim',
      status: true,
      dateModified: '',
      Score: 5
    }
  },
  truckStatus: {
    airCompresor: {
      keyId: 'Air Compresor',
      status: true,
      dateModified: '',
      Score: 5
    },
    airLines: {
      keyId: 'Air Lines',
      status: true,
      dateModified: '',
      Score: 4
    },
    battery: {
      keyId: 'Battery',
      status: true,
      dateModified: '',
      Score: 5
    },
    beltsAndHoses: {
      keyId: 'Belts Ans Hoses',
      status: true,
      dateModified: '',
      Score: 2
    },
    body: {
      keyId: 'Body',
      status: true,
      dateModified: '',
      Score: 1
    },
    brakeAccessories: {
      keyId: 'Brake Accessories ',
      status: true,
      dateModified: '',
      Score: 4
    },
    brakesParking: {
      keyId: 'Brakes Parking',
      status: true,
      dateModified: '',
      Score: 5
    },
    brakesService: {
      keyId: 'Brakes Service',
      status: true,
      dateModified: '',
      Score: 5
    },
    clutch: {
      keyId: 'Clutch',
      status: true,
      dateModified: '',
      Score: 3
    },
    couplingDevices: {
      keyId: 'Coupling Devices',
      status: true,
      dateModified: '',
      Score: 2
    },
    driverLine: {
      keyId: 'Driver Line',
      status: true,
      dateModified: '',
      Score: 2
    },
    engine: {
      keyId: 'Engine',
      status: true,
      dateModified: '',
      Score: 7
    },
    exhaust: {
      keyId: 'Exhaust',
      status: true,
      dateModified: '',
      Score: 2
    },
    fifthWheel: {
      keyId: 'Fifth Wheel',
      status: true,
      dateModified: '',
      Score: 2
    },
    fluidLevel: {
      keyId: 'Fluid Level',
      status: true,
      dateModified: '',
      Score: 5
    },
    frameAndAssembly: {
      keyId: 'Frame And Assembly',
      status: true,
      dateModified: '',
      Score: 3
    },
    frontAxle: {
      keyId: 'Front Axle',
      status: true,
      dateModified: '',
      Score: 4
    },
    fuleTanks: {
      keyId: 'Fule Tanks',
      status: true,
      dateModified: '',
      Score: 0
    },
    generator: {
      keyId: 'Generator',
      status: true,
      dateModified: '',
      Score: 3
    },
    horn: {
      keyId: 'Horn',
      status: true,
      dateModified: '',
      Score: 1
    },
    lightHead: {
      keyId: 'LightHead',
      status: true,
      dateModified: '',
      Score: 2
    },
    lightStop: {
      keyId: 'Light Stop',
      status: true,
      dateModified: '',
      Score: 3
    },
    lightTail: {
      keyId: 'Light Tail',
      status: true,
      dateModified: '',
      Score: 1
    },
    lightDash: {
      keyId: 'Light Dash',
      status: true,
      dateModified: '',
      Score: 1
    },
    lightTurnIndicators: {
      keyId: 'Light Turn Indicators',
      status: true,
      dateModified: '',
      Score: 2
    },
    mirrors: {
      keyId: 'Mirrors',
      status: true,
      dateModified: '',
      Score: 3
    },
    muffler: {
      keyId: 'Muffler',
      status: true,
      dateModified: '',
      Score: 2
    },
    oilLevel: {
      keyId: 'Oil Level',
      status: true,
      dateModified: '',
      Score: 5
    },
    radiatorLevel: {
      keyId: 'Radiator Level',
      status: true,
      dateModified: '',
      Score: 4
    },
    rearEnd: {
      keyId: 'Rear End',
      status: true,
      dateModified: '',
      Score: 3
    },
    reflectors: {
      keyId: 'Reflectors',
      status: true,
      dateModified: '',
      Score: 1
    },
    fireExtinguisher: {
      keyId: 'Fire Extinguisher',
      status: true,
      dateModified: '',
      Score: 3
    },
    flags: {
      keyId: 'Flags',
      status: true,
      dateModified: '',
      Score: 2
    },
    flares: {
      keyId: 'Flares',
      status: true,
      dateModified: '',
      Score: 2
    },
    fusees: {
      keyId: 'Fusees',
      status: true,
      dateModified: '',
      Score: 1
    },
    reflectiveTriangles: {
      keyId: 'Reflective Triangles',
      status: true,
      dateModified: '',
      Score: 1
    },
    spareBulbs: {
      keyId: 'Spare Bulbs',
      status: true,
      dateModified: '',
      Score: 1
    },
    spareFuses: {
      keyId: 'Spare Fuses',
      status: true,
      dateModified: '',
      Score: 1
    },
    spareSealBeam: {
      keyId: 'Spare Seal Beam',
      status: true,
      dateModified: '',
      Score: 1
    },
    starter: {
      keyId: 'Starter',
      status: true,
      dateModified: '',
      Score: 2
    },
    steering: {
      keyId: 'Steering',
      status: true,
      dateModified: '',
      Score: 2
    },
    suspensionSystem: {
      keyId: 'Suspension System',
      status: true,
      dateModified: '',
      Score: 4
    },
    tireChains: {
      keyId: 'Tire Chains',
      status: true,
      dateModified: '',
      Score: 3
    },
    tires: {
      keyId: 'Tires',
      status: true,
      dateModified: '',
      Score: 5
    },
    transmission: {
      keyId: 'Transmission',
      status: true,
      dateModified: '',
      Score: 4
    },
    tripRecorder: {
      keyId: 'Trip Recorder',
      status: true,
      dateModified: '',
      Score: 2
    },
    weelsAndRim: {
      keyId: 'Weels And Rim',
      status: true,
      dateModified: '',
      Score: 4
    },
    windows: {
      keyId: 'Windows',
      status: true,
      dateModified: '',
      Score: 1
    },
    windshieldsWipers: {
      keyId: 'Windshields Wipers',
      status: true,
      dateModified: '',
      Score: 1
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CHECK_TRUCK_STATUS:
      return {
        ...state,
        truckStatus: {
          ...state.truckStatus,
          [action.payload]: {
            ...state.truckStatus[action.payload],
            dateModified: new Date(),
            status: !state.truckStatus[action.payload].status
          }
        }
      };
    case actionTypes.CHANGE_CHECK_TRAILER1_STATUS:
      return {
        ...state,
        trailer1: {
          ...state.trailer1,
          [action.payload]: {
            ...state.trailer1[action.payload],
            dateModified: new Date(),
            status: !state.trailer1[action.payload].status
          }
        }
      };
    case actionTypes.CHANGE_CHECK_TRAILER2_STATUS:
      return {
        ...state,
        trailer2: {
          ...state.trailer2,
          [action.payload]: {
            ...state.trailer2[action.payload],
            dateModified: new Date(),
            status: !state.trailer2[action.payload].status
          }
        }
      };
    case actionTypes.SET_USER_IMAGE:
      return {
        ...state,
        truckImage: action.payload
      };
    case actionTypes.CHANGE_USER_LOCATION:
      return {
        ...state,
        locationDetails: {
          coords: action.payload
        }
      };
    case actionTypes.ON_DATE_UPDATE:
      return {
        ...state,
        currentDate: action.payload
      };
    case actionTypes.ON_ODOMETER_UPDATE:
      return {
        ...state,
        lastOdometer: action.payload
      };
    case actionTypes.CHANGE_CARRIER:
      return {
        ...state,
        carrier: action.payload
      };
    case actionTypes.SET_TRUCK_NUMBER:
      return {
        ...state,
        truckNumber: action.payload
      };
    //
    case actionTypes.REMOVE_TRAILER1:
      return {
        ...state,
        trailer1: {
          trailerNumber: false,
          brakeConnectionsTrailer1: {
            keyId: 'Brake Connections',
            status: true,
            dateModified: '',
            Score: 5
          },
          brakesTrailer1: {
            keyId: 'Brakes',
            status: true,
            dateModified: '',
            Score: 10
          },
          couplingDevicesTrailer1: {
            keyId: 'Coupling Devices',
            status: true,
            dateModified: '',
            Score: 7
          },
          couplingKingPinTrailer1: {
            keyId: 'Coupling King Pin',
            status: true,
            dateModified: '',
            Score: 5
          },
          doorsTrailer1: {
            keyId: 'Doors',
            status: true,
            dateModified: '',
            Score: 2
          },
          hitchTrailer1: {
            keyId: 'Hitch',
            status: true,
            dateModified: '',
            Score: 3
          },
          landingGearTrailer1: {
            keyId: 'Landing Gear',
            status: true,
            dateModified: '',
            Score: 5
          },
          lightsTrailer1: {
            keyId: 'Lights',
            status: true,
            dateModified: '',
            Score: 3
          },
          reflectorsTrailer1: {
            keyId: 'Reflectors',
            status: true,
            dateModified: '',
            Score: 2
          },
          roofTrailer1: {
            keyId: 'Roof',
            status: true,
            dateModified: '',
            Score: 2
          },
          suspensionSystemTrailer1: {
            keyId: 'Suspension System',
            status: true,
            dateModified: '',
            Score: 5
          },
          strapsTrailer1: {
            keyId: 'Straps',
            status: true,
            dateModified: '',
            Score: 2
          },
          tarpulinTrailer1: {
            keyId: 'Tarpulin',
            status: true,
            dateModified: '',
            Score: 3
          },
          tiresTrailer1: {
            keyId: 'Tires',
            status: true,
            dateModified: '',
            Score: 5
          },
          wheelsAndRimTrailer1: {
            keyId: 'Wheels And Rim',
            status: true,
            dateModified: '',
            Score: 3
          }
        }
      };
    //
    case actionTypes.REMOVE_TRAILER2:
      return {
        ...state,
        trailer2: {
          trailerNumber: false,
          brakeConnectionsTrailer2: {
            keyId: 'Brake Connections',
            status: true,
            dateModified: '',
            Score: 5
          },
          brakesTrailer2: {
            keyId: 'Brakes',
            status: true,
            dateModified: '',
            Score: 10
          },
          couplingDevicesTrailer2: {
            keyId: 'Coupling Devices',
            status: true,
            dateModified: '',
            Score: 7
          },
          couplingKingPinTrailer2: {
            keyId: 'Coupling King Pin',
            status: true,
            dateModified: '',
            Score: 5
          },
          doorsTrailer2: {
            keyId: 'Doors',
            status: true,
            dateModified: '',
            Score: 2
          },
          hitchTrailer2: {
            keyId: 'Hitch',
            status: true,
            dateModified: '',
            Score: 3
          },
          landingGearTrailer2: {
            keyId: 'Landing Gear',
            status: true,
            dateModified: '',
            Score: 5
          },
          lightsTrailer2: {
            keyId: 'Lights',
            status: true,
            dateModified: '',
            Score: 3
          },
          reflectorsTrailer2: {
            keyId: 'Reflectors',
            status: true,
            dateModified: '',
            Score: 2
          },
          roofTrailer2: {
            keyId: 'Roof',
            status: true,
            dateModified: '',
            Score: 2
          },
          suspensionSystemTrailer2: {
            keyId: 'Suspension System',
            status: true,
            dateModified: '',
            Score: 5
          },
          strapsTrailer2: {
            keyId: 'Straps',
            status: true,
            dateModified: '',
            Score: 2
          },
          tarpulinTrailer2: {
            keyId: 'Tarpulin',
            status: true,
            dateModified: '',
            Score: 3
          },
          tiresTrailer2: {
            keyId: 'Tires',
            status: true,
            dateModified: '',
            Score: 5
          },
          wheelsAndRimTrailer2: {
            keyId: 'Wheels And Rim',
            status: true,
            dateModified: '',
            Score: 3
          }
        }
      };
    case actionTypes.UPDATE_TRUCK_STATUS:
      return {
        ...state,
        truckStatus: {
          airCompresor: {
            keyId: 'Air Compresor',
            status: action.payload.airCompresor.status,
            dateModified: action.payload.airCompresor.dateModified,
            Score: 5
          },
          airLines: {
            keyId: 'Air Lines',
            status: action.payload.airLines.status,
            dateModified: action.payload.airLines.dateModified,
            Score: 4
          },
          battery: {
            keyId: 'Battery',
            status: action.payload.battery.status,
            dateModified: action.payload.battery.dateModified,
            Score: 5
          },
          beltsAndHoses: {
            keyId: 'Belts Ans Hoses',
            status: action.payload.beltsAndHoses.status,
            dateModified: action.payload.beltsAndHoses.dateModified,
            Score: 2
          },
          body: {
            keyId: 'Body',
            status: action.payload.body.status,
            dateModified: action.payload.body.dateModified,
            Score: 1
          },
          brakeAccessories: {
            keyId: 'Brake Accessories ',
            status: action.payload.brakeAccessories.status,
            dateModified: action.payload.brakeAccessories.dateModified,
            Score: 4
          },
          brakesParking: {
            keyId: 'Brakes Parking',
            status: action.payload.brakesParking.status,
            dateModified: action.payload.brakesParking.dateModified,
            Score: 5
          },
          brakesService: {
            keyId: 'Brakes Service',
            status: action.payload.brakesService.status,
            dateModified: action.payload.brakesService.dateModified,
            Score: 5
          },
          clutch: {
            keyId: 'Clutch',
            status: action.payload.clutch.status,
            dateModified: action.payload.clutch.dateModified,
            Score: 3
          },
          couplingDevices: {
            keyId: 'Coupling Devices',
            status: action.payload.couplingDevices.status,
            dateModified: action.payload.couplingDevices.dateModified,
            Score: 2
          },
          driverLine: {
            keyId: 'Driver Line',
            status: action.payload.driverLine.status,
            dateModified: action.payload.driverLine.dateModified,
            Score: 2
          },
          engine: {
            keyId: 'Engine',
            status: action.payload.engine.status,
            dateModified: action.payload.engine.dateModified,
            Score: 7
          },
          exhaust: {
            keyId: 'Exhaust',
            status: action.payload.exhaust.status,
            dateModified: action.payload.exhaust.dateModified,
            Score: 2
          },
          fifthWheel: {
            keyId: 'Fifth Wheel',
            status: action.payload.fifthWheel.status,
            dateModified: action.payload.fifthWheel.dateModified,
            Score: 2
          },
          fluidLevel: {
            keyId: 'Fluid Level',
            status: action.payload.fluidLevel.status,
            dateModified: action.payload.fluidLevel.dateModified,
            Score: 5
          },
          frameAndAssembly: {
            keyId: 'Frame And Assembly',
            status: action.payload.frameAndAssembly.status,
            dateModified: action.payload.frameAndAssembly.dateModified,
            Score: 3
          },
          frontAxle: {
            keyId: 'Front Axle',
            status: action.payload.frontAxle.status,
            dateModified: action.payload.frontAxle.dateModified,
            Score: 4
          },
          fuleTanks: {
            keyId: 'Fule Tanks',
            status: action.payload.fuleTanks.status,
            dateModified: action.payload.fuleTanks.dateModified,
            Score: 0
          },
          generator: {
            keyId: 'Generator',
            status: action.payload.generator.status,
            dateModified: action.payload.generator.dateModified,
            Score: 3
          },
          horn: {
            keyId: 'Horn',
            status: action.payload.horn.status,
            dateModified: action.payload.horn.dateModified,
            Score: 1
          },
          lightHead: {
            keyId: 'LightHead',
            status: action.payload.lightHead.status,
            dateModified: action.payload.lightHead.dateModified,
            Score: 2
          },
          lightStop: {
            keyId: 'Light Stop',
            status: action.payload.lightStop.status,
            dateModified: action.payload.lightStop.dateModified,
            Score: 3
          },
          lightTail: {
            keyId: 'Light Tail',
            status: action.payload.lightTail.status,
            dateModified: action.payload.lightTail.dateModified,
            Score: 1
          },
          lightDash: {
            keyId: 'Light Dash',
            status: action.payload.lightDash.status,
            dateModified: action.payload.lightDash.dateModified,
            Score: 1
          },
          lightTurnIndicators: {
            keyId: 'Light Turn Indicators',
            status: action.payload.lightTurnIndicators.status,
            dateModified: action.payload.lightTurnIndicators.dateModified,
            Score: 2
          },
          mirrors: {
            keyId: 'Mirrors',
            status: action.payload.mirrors.status,
            dateModified: action.payload.mirrors.dateModified,
            Score: 3
          },
          muffler: {
            keyId: 'Muffler',
            status: action.payload.muffler.status,
            dateModified: action.payload.muffler.dateModified,
            Score: 2
          },
          oilLevel: {
            keyId: 'Oil Level',
            status: action.payload.oilLevel.status,
            dateModified: action.payload.oilLevel.dateModified,
            Score: 5
          },
          radiatorLevel: {
            keyId: 'Radiator Level',
            status: action.payload.radiatorLevel.status,
            dateModified: action.payload.radiatorLevel.dateModified,
            Score: 4
          },
          rearEnd: {
            keyId: 'Rear End',
            status: action.payload.rearEnd.status,
            dateModified: action.payload.rearEnd.dateModified,
            Score: 3
          },
          reflectors: {
            keyId: 'Reflectors',
            status: action.payload.reflectors.status,
            dateModified: action.payload.reflectors.dateModified,
            Score: 1
          },
          fireExtinguisher: {
            keyId: 'Fire Extinguisher',
            status: action.payload.fireExtinguisher.status,
            dateModified: action.payload.fireExtinguisher.dateModified,
            Score: 3
          },
          flags: {
            keyId: 'Flags',
            status: action.payload.flags.status,
            dateModified: action.payload.flags.dateModified,
            Score: 2
          },
          flares: {
            keyId: 'Flares',
            status: action.payload.flares.status,
            dateModified: action.payload.flares.dateModified,
            Score: 2
          },
          fusees: {
            keyId: 'Fusees',
            status: action.payload.fusees.status,
            dateModified: action.payload.fusees.dateModified,
            Score: 1
          },
          reflectiveTriangles: {
            keyId: 'Reflective Triangles',
            status: action.payload.reflectiveTriangles.status,
            dateModified: action.payload.reflectiveTriangles.dateModified,
            Score: 1
          },
          spareBulbs: {
            keyId: 'Spare Bulbs',
            status: action.payload.spareBulbs.status,
            dateModified: action.payload.spareBulbs.dateModified,
            Score: 1
          },
          spareFuses: {
            keyId: 'Spare Fuses',
            status: action.payload.spareFuses.status,
            dateModified: action.payload.spareFuses.dateModified,
            Score: 1
          },
          spareSealBeam: {
            keyId: 'Spare Seal Beam',
            status: action.payload.spareSealBeam.status,
            dateModified: action.payload.spareSealBeam.dateModified,
            Score: 1
          },
          starter: {
            keyId: 'Starter',
            status: action.payload.starter.status,
            dateModified: action.payload.starter.dateModified,
            Score: 2
          },
          steering: {
            keyId: 'Steering',
            status: action.payload.steering.status,
            dateModified: action.payload.steering.dateModified,
            Score: 2
          },
          suspensionSystem: {
            keyId: 'Suspension System',
            status: action.payload.suspensionSystem.status,
            dateModified: action.payload.suspensionSystem.dateModified,
            Score: 4
          },
          tireChains: {
            keyId: 'Tire Chains',
            status: action.payload.tireChains.status,
            dateModified: action.payload.tireChains.dateModified,
            Score: 3
          },
          tires: {
            keyId: 'Tires',
            status: action.payload.tires.status,
            dateModified: action.payload.tires.dateModified,
            Score: 5
          },
          transmission: {
            keyId: 'Transmission',
            status: action.payload.transmission.status,
            dateModified: action.payload.transmission.dateModified,
            Score: 4
          },
          tripRecorder: {
            keyId: 'Trip Recorder',
            status: action.payload.tripRecorder.status,
            dateModified: action.payload.tripRecorder.dateModified,
            Score: 2
          },
          weelsAndRim: {
            keyId: 'Weels And Rim',
            status: action.payload.weelsAndRim.status,
            dateModified: action.payload.weelsAndRim.dateModified,
            Score: 4
          },
          windows: {
            keyId: 'Windows',
            status: action.payload.windows.status,
            dateModified: action.payload.windows.dateModified,
            Score: 1
          },
          windshieldsWipers: {
            keyId: 'Windshields Wipers',
            status: action.payload.windshieldsWipers.status,
            dateModified: action.payload.windshieldsWipers.dateModified,
            Score: 1
          }
        }
      };
    case actionTypes.UPDATE_TRAILER1:
      return {
        ...state,
        trailer1: {
          trailerNumber: action.payload.trailerNumber,
          brakeConnectionsTrailer1: {
            keyId: 'Brake Connections',
            status: action.payload.status.brakeConnections.status,
            dateModified: action.payload.status.brakeConnections.dateModified,
            Score: 5
          },
          brakesTrailer1: {
            keyId: 'Brakes',
            status: action.payload.status.brakes.status,
            dateModified: action.payload.status.brakes.dateModified,
            Score: 10
          },
          couplingDevicesTrailer1: {
            keyId: 'Coupling Devices',
            status: action.payload.status.couplingDevices.status,
            dateModified: action.payload.status.couplingDevices.dateModified,
            Score: 7
          },
          couplingKingPinTrailer1: {
            keyId: 'Coupling King Pin',
            status: action.payload.status.couplingKingPin.status,
            dateModified: action.payload.status.couplingKingPin.dateModified,
            Score: 5
          },
          doorsTrailer1: {
            keyId: 'Doors',
            status: action.payload.status.doors.status,
            dateModified: action.payload.status.doors.dateModified,
            Score: 2
          },
          hitchTrailer1: {
            keyId: 'Hitch',
            status: action.payload.status.hitch.status,
            dateModified: action.payload.status.hitch.dateModified,
            Score: 3
          },
          landingGearTrailer1: {
            keyId: 'Landing Gear',
            status: action.payload.status.landingGear.status,
            dateModified: action.payload.status.landingGear.dateModified,
            Score: 5
          },
          lightsTrailer1: {
            keyId: 'Lights',
            status: action.payload.status.lights.status,
            dateModified: action.payload.status.lights.dateModified,
            Score: 3
          },
          reflectorsTrailer1: {
            keyId: 'Reflectors',
            status: action.payload.status.reflectors.status,
            dateModified: action.payload.status.reflectors.dateModified,
            Score: 2
          },
          roofTrailer1: {
            keyId: 'Roof',
            status: action.payload.status.roof.status,
            dateModified: action.payload.status.roof.dateModified,
            Score: 2
          },
          suspensionSystemTrailer1: {
            keyId: 'Suspension System',
            status: action.payload.status.suspensionSystem.status,
            dateModified: action.payload.status.suspensionSystem.dateModified,
            Score: 5
          },
          strapsTrailer1: {
            keyId: 'Straps',
            status: action.payload.status.straps.status,
            dateModified: action.payload.status.straps.dateModified,
            Score: 2
          },
          tarpulinTrailer1: {
            keyId: 'Tarpulin',
            status: action.payload.status.tarpulin.status,
            dateModified: action.payload.status.tarpulin.dateModified,
            Score: 3
          },
          tiresTrailer1: {
            keyId: 'Tires',
            status: action.payload.status.tires.status,
            dateModified: action.payload.status.tires.dateModified,
            Score: 5
          },
          wheelsAndRimTrailer1: {
            keyId: 'Wheels And Rim',
            status: action.payload.status.wheelsAndRim.status,
            dateModified: action.payload.status.wheelsAndRim.dateModified,
            Score: 3
          }
        },
      };
    case actionTypes.UPDATE_TRAILER2:
      return {
        ...state,
        trailer2: {
          trailerNumber: action.payload.trailerNumber,
          brakeConnectionsTrailer2: {
            keyId: 'Brake Connections',
            status: action.payload.status.brakeConnections.status,
            dateModified: action.payload.status.brakeConnections.dateModified,
            Score: 5
          },
          brakesTrailer2: {
            keyId: 'Brakes',
            status: action.payload.status.brakes.status,
            dateModified: action.payload.status.brakes.dateModified,
            Score: 10
          },
          couplingDevicesTrailer2: {
            keyId: 'Coupling Devices',
            status: action.payload.status.couplingDevices.status,
            dateModified: action.payload.status.couplingDevices.dateModified,
            Score: 7
          },
          couplingKingPinTrailer2: {
            keyId: 'Coupling King Pin',
            status: action.payload.status.couplingKingPin.status,
            dateModified: action.payload.status.couplingKingPin.dateModified,
            Score: 5
          },
          doorsTrailer2: {
            keyId: 'Doors',
            status: action.payload.status.doors.status,
            dateModified: action.payload.status.doors.dateModified,
            Score: 2
          },
          hitchTrailer2: {
            keyId: 'Hitch',
            status: action.payload.status.hitch.status,
            dateModified: action.payload.status.hitch.dateModified,
            Score: 3
          },
          landingGearTrailer2: {
            keyId: 'Landing Gear',
            status: action.payload.status.landingGear.status,
            dateModified: action.payload.status.landingGear.dateModified,
            Score: 5
          },
          lightsTrailer2: {
            keyId: 'Lights',
            status: action.payload.status.lights.status,
            dateModified: action.payload.status.lights.dateModified,
            Score: 3
          },
          reflectorsTrailer2: {
            keyId: 'Reflectors',
            status: action.payload.status.reflectors.status,
            dateModified: action.payload.status.reflectors.dateModified,
            Score: 2
          },
          roofTrailer2: {
            keyId: 'Roof',
            status: action.payload.status.roof.status,
            dateModified: action.payload.status.roof.dateModified,
            Score: 2
          },
          suspensionSystemTrailer2: {
            keyId: 'Suspension System',
            status: action.payload.status.suspensionSystem.status,
            dateModified: action.payload.status.suspensionSystem.dateModified,
            Score: 5
          },
          strapsTrailer2: {
            keyId: 'Straps',
            status: action.payload.status.straps.status,
            dateModified: action.payload.status.straps.dateModified,
            Score: 2
          },
          tarpulinTrailer2: {
            keyId: 'Tarpulin',
            status: action.payload.status.tarpulin.status,
            dateModified: action.payload.status.tarpulin.dateModified,
            Score: 3
          },
          tiresTrailer2: {
            keyId: 'Tires',
            status: action.payload.status.tires.status,
            dateModified: action.payload.status.tires.dateModified,
            Score: 5
          },
          wheelsAndRimTrailer2: {
            keyId: 'Wheels And Rim',
            status: action.payload.status.wheelsAndRim.status,
            dateModified: action.payload.status.wheelsAndRim.dateModified,
            Score: 3
          }
        },
      };


    default: return state;
  }
};

export default reducer;
