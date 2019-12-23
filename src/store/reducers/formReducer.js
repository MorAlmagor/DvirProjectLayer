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
    case actionTypes.UPDATE_TRAILER1_NUMBER:
      return {
        ...state,
        trailer1: {
          ...state.trailer1,
          trailerNumber: action.payload
        }
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
    case actionTypes.UPDATE_TRAILER2_NUMBER:
      return {
        ...state,
        trailer2: {
          ...state.trailer2,
          trailerNumber: action.payload
        }
      };


    default: return state;
  }
};

export default reducer;
