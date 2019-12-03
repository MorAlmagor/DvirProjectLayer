import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentDate: '',
  locationDetails: {
    locationName: null,
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
    brakeConnections: {
      keyId: 'Brake Connections',
      status: true,
      dateModified: ''
    },
    brakes: {
      keyId: 'Brakes',
      status: true,
      dateModified: ''
    },
    couplingDevices: {
      keyId: 'Coupling Devices',
      status: true,
      dateModified: ''
    },
    couplingKingPin: {
      keyId: 'Coupling King Pin',
      status: true,
      dateModified: ''
    },
    doors: {
      keyId: 'Doors',
      status: true,
      dateModified: ''
    },
    hitch: {
      keyId: 'Hitch',
      status: true,
      dateModified: ''
    },
    landingGear: {
      keyId: 'Landing Gear',
      status: true,
      dateModified: ''
    },
    lights: {
      keyId: 'Lights',
      status: true,
      dateModified: ''
    },
    reflectors: {
      keyId: 'Reflectors',
      status: true,
      dateModified: ''
    },
    roof: {
      keyId: 'Roof',
      status: true,
      dateModified: ''
    },
    suspensionSystem: {
      keyId: 'Suspension System',
      status: true,
      dateModified: ''
    },
    straps: {
      keyId: 'Straps',
      status: true,
      dateModified: ''
    },
    tarpulin: {
      keyId: 'Tarpulin',
      status: true,
      dateModified: ''
    },
    tires: {
      keyId: 'Tires',
      status: true,
      dateModified: ''
    },
    wheelsAndRim: {
      keyId: 'Wheels And Rim',
      status: true,
      dateModified: ''
    }
  },
  trailer2: {
    trailerNumber: null,
    brakeConnections: {
      keyId: 'Brake Connections',
      status: true,
      dateModified: ''
    },
    brakes: {
      keyId: 'Brakes',
      status: true,
      dateModified: ''
    },
    couplingDevices: {
      keyId: 'Coupling Devices',
      status: true,
      dateModified: ''
    },
    couplingKingPin: {
      keyId: 'Coupling King Pin',
      status: true,
      dateModified: ''
    },
    doors: {
      keyId: 'Doors',
      status: true,
      dateModified: ''
    },
    hitch: {
      keyId: 'Hitch',
      status: true,
      dateModified: ''
    },
    landingGear: {
      keyId: 'Landing Gear',
      status: true,
      dateModified: ''
    },
    lights: {
      keyId: 'Lights',
      status: true,
      dateModified: ''
    },
    reflectors: {
      keyId: 'Reflectors',
      status: true,
      dateModified: ''
    },
    roof: {
      keyId: 'Roof',
      status: true,
      dateModified: ''
    },
    suspensionSystem: {
      keyId: 'Suspension System',
      status: true,
      dateModified: ''
    },
    straps: {
      keyId: 'Straps',
      status: true,
      dateModified: ''
    },
    tarpulin: {
      keyId: 'Tarpulin',
      status: true,
      dateModified: ''
    },
    tires: {
      keyId: 'Tires',
      status: true,
      dateModified: ''
    },
    wheelsAndRim: {
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

const reducer = (state = initialState, action) => {
  // (changeCheckTrailer1Status
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