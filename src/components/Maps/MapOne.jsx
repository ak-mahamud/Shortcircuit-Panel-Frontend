import jsvectormapMin from 'jsvectormap';
import React, { useEffect } from 'react';
import 'jsvectormap/dist/maps/world.js'
const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsvectormapMin({
      selector: '#mapOne',
      map: 'world',
      zoomButtons: true,
      markersSelectable: true ,

      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#fff',
        },
        hover: {
          cursor: 'pointer',
        },
      },

      labels: {
        regions: {
          render(code) {
            return code.split('-')[1];
          },
        },
      },
    });
    mapOne;
  },[]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default MapOne;
