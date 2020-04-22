import React from 'react';
import { Component } from 'react'
import { Map, Controls, centerAndZoom, Popup, loadDataLayer } from '@bayer/ol-kit'

class MapApp extends Component {

 onMapInit = async map => {

    const dataLayer = await loadDataLayer(map, 'http://localhost:8080/geoserver/nyc/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=nyc%3Ageo_export_2e45fdc5-85c1-416c-aeeb-a1856c52c5c1&maxFeatures=50000&outputFormat=application%2Fjson')

    // quickly take the map
    centerAndZoom(map, {x: -73.913640, y: 40.701815, zoom: 10.58})
  }


  render() {
    return (
      <Map onMapInit={this.onMapInit}>
        <Popup />
        <Controls />
      </Map>
    )
  }

}

export default MapApp;
