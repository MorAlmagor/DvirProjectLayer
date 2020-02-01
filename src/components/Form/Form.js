import React from 'react';
import { FlatList } from 'react-native';
import FormSection from './FormSection';

const formSectionsList = [
  {
    title: 'Brake System',
    checkList: [
      {
        keyId: 'brakesParking',
        text: 'Brake Parking.'
      },
      {
        keyId: 'brakesService',
        text: 'Brakes Service.'
      },
      {
        keyId: 'brakeAccessories',
        text: 'Brake Accesories.'
      },
      {
        keyId: 'airCompresor',
        text: 'Air Compressor'
      },
      {
        keyId: 'airLines',
        text: 'Air Lines'
      },
    ]
  },
  {
    title: 'Lights',
    checkList: [
      {
        keyId: 'lightHead',
        text: 'Light Head'
      },
      {
        keyId: 'lightTail',
        text: 'Light Tail'
      },
      {
        keyId: 'lightStop',
        text: 'Light Stop'
      },
      {
        keyId: 'lightDash',
        text: 'Light Dash'
      },
      {
        keyId: 'lightTurnIndicators',
        text: 'Light Turn Indicators'
      },
      {
        keyId: 'spareSealBeam',
        text: 'Spare Seal Beam'
      },
      {
        keyId: 'spareBulbs',
        text: 'Spare Bulbs'
      },
    ]
  },
  {
    title: 'Engine',
    checkList: [
      {
        keyId: 'engine',
        text: 'Engine'
      },
      {
        keyId: 'battery',
        text: 'Battery'
      },
      {
        keyId: 'fluidLevel',
        text: 'Fluid Level'
      },
      {
        keyId: 'beltsAndHoses',
        text: 'Belts And Hoses'
      },
      {
        keyId: 'oilLevel',
        text: 'Oil Level'
      },
      {
        keyId: 'radiatorLevel',
        text: 'Radiator Level'
      },
      {
        keyId: 'exhaust',
        text: 'Exhaust'
      },
      {
        keyId: 'muffler',
        text: 'Muffler'
      },
      {
        keyId: 'starter',
        text: 'Starter'
      },
      {
        keyId: 'generator',
        text: 'Generator'
      },
      {
        keyId: 'clutch',
        text: 'Clutch'
      },
      {
        keyId: 'transmission',
        text: 'Transmission'
      },
    ]
  },
  {
    title: 'Body',
    checkList: [
      {
        keyId: 'fuleTanks',
        text: 'Fule Tanks'
      },
      {
        keyId: 'mirrors',
        text: 'Mirrors'
      },
      {
        keyId: 'horn',
        text: 'Horn'
      },
      {
        keyId: 'body',
        text: 'Body'
      },
      {
        keyId: 'frameAndAssembly',
        text: 'Frame And Assembly'
      },
      {
        keyId: 'windshieldsWipers',
        text: 'Wind shields Wipers'
      },
      {
        keyId: 'rearEnd',
        text: 'Rear End'
      },
      {
        keyId: 'fifthWheel',
        text: 'Fifth Wheel'
      },
      {
        keyId: 'windows',
        text: 'Windows'
      }
    ]
  },
  {
    title: 'Steering',
    checkList: [
      {
        keyId: 'steering',
        text: 'Steering'
      },
      {
        keyId: 'frontAxle',
        text: 'Front Axle'
      },
      {
        keyId: 'suspensionSystem',
        text: 'Suspension System'
      },
    ]
  }, {
    title: 'Safety',
    checkList: [
      {
        keyId: 'reflectors',
        text: 'Reflectors'
      },
      {
        keyId: 'reflectiveTriangles',
        text: 'Reflective Triangles'
      },
      {
        keyId: 'fireExtinguisher',
        text: 'Fire Extinguisher'
      },
      {
        keyId: 'flags',
        text: 'Flags'
      },
      {
        keyId: 'flares',
        text: 'Flares'
      }

    ]
  },
  {
    title: 'Wheels And Tires',
    checkList: [
      {
        keyId: 'tireChains',
        text: 'Tire Chains'
      },
      {
        keyId: 'tires',
        text: 'Tires'
      },
      {
        keyId: 'weelsAndRim',
        text: 'Rims'
      }
    ]
  },
  {
    title: 'Other',
    checkList: [
      {
        keyId: 'couplingDevices',
        text: 'Coupling Devices'
      },
      {
        keyId: 'driverLine',
        text: ' Driver Line'
      },
      {
        keyId: 'tripRecorder',
        text: 'Trip Recorder'
      },
      {
        keyId: 'spareFuses',
        text: 'Spare Fuses'
      },
      {
        keyId: 'fusees',
        text: 'Fuses'
      }
    ]
  },
];
const trailerNO1 = [
  {
    title: 'Trailer NO.1',
    checkList: [
      {
        text: 'Brake Connections',
        keyId: 'brakeConnectionsTrailer1'
      },
      {
        text: 'Brakes',
        keyId: 'brakesTrailer1'
      },
      {
        text: 'Coupling Devices',
        keyId: 'couplingDevicesTrailer1'
      },
      {
        text: 'Coupling King Pin',
        keyId: 'couplingKingPinTrailer1'
      },
      {
        text: 'Doors',
        keyId: 'doorsTrailer1'
      },
      {
        text: 'Hitch',
        keyId: 'hitchTrailer1'
      },
      {
        text: 'Landing Gear',
        keyId: 'landingGearTrailer1'
      },
      {
        text: 'Lights',
        keyId: 'lightsTrailer1'
      },
      {
        text: 'Reflectors',
        keyId: 'reflectorsTrailer1'
      },
      {
        text: 'Roof',
        keyId: 'roofTrailer1'
      },
      {
        text: 'Suspension System',
        keyId: 'suspensionSystemTrailer1'
      },
      {
        text: 'Straps',
        keyId: 'strapsTrailer1'
      },
      {
        text: 'Tarpulin',
        keyId: 'tarpulinTrailer1'
      },
      {
        text: 'Tires',
        keyId: 'tiresTrailer1'
      },
      {
        text: 'Wheels And Rim',
        keyId: 'wheelsAndRimTrailer1'
      }
    ]
  },
];

const trailerNO2 = [
  {
    title: 'Trailer NO.2',
    checkList: [
      {
        text: 'Brake Connections',
        keyId: 'brakeConnectionsTrailer2'
      },
      {
        text: 'Brakes',
        keyId: 'brakesTrailer2'
      },
      {
        text: 'Coupling Devices',
        keyId: 'couplingDevicesTrailer2'
      },
      {
        text: 'Coupling King Pin',
        keyId: 'couplingKingPinTrailer2'
      },
      {
        text: 'Doors',
        keyId: 'doorsTrailer2'
      },
      {
        text: 'Hitch',
        keyId: 'hitchTrailer2'
      },
      {
        text: 'Landing Gear',
        keyId: 'landingGearTrailer2'
      },
      {
        text: 'Lights',
        keyId: 'lightsTrailer2'
      },
      {
        text: 'Reflectors',
        keyId: 'reflectorsTrailer2'
      },
      {
        text: 'Roof',
        keyId: 'roofTrailer2'
      },
      {
        text: 'Suspension System',
        keyId: 'suspensionSystemTrailer2'
      },
      {
        text: 'Straps',
        keyId: 'strapsTrailer2'
      },
      {
        text: 'Tarpulin',
        keyId: 'tarpulinTrailer2'
      },
      {
        text: 'Tires',
        keyId: 'tiresTrailer2'
      },
      {
        text: 'Wheels And Rim',
        keyId: 'wheelsAndRimTrailer2'
      }
    ]
  },
];

const Form = ({
  navigation
}) => {
  return (
    <>
      <FlatList
        data={formSectionsList}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => {
          return <FormSection sectionInfo={item} />;
        }}
      />
      <FlatList
        data={trailerNO1}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => {
          return <FormSection navigation={navigation} sectionInfo={item} />;
        }}
      />
      <FlatList
        data={trailerNO2}
        keyExtractor={(section) => section.title}
        renderItem={({ item }) => {
          return <FormSection navigation={navigation} sectionInfo={item} />;
        }}
      />
    </>
  );
};


export default Form;