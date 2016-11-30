import React from "react";
import Leaflet from "../../external/leaflet/leaflet.js";

import DataMap from "../components/DataMap.jsx";
import Table from "../components/datatable/Table.jsx";

const mapDivId = "MapDiv";
const mapboxToken = "pk.eyJ1IjoiY2FuZHJ5YW4iLCJhIjoiY2l0dGE0azA2MDAwbzJvbnZrOTR1cms4eSJ9.qDhRTvXlYvgFXSsFcDe9Eg";
const provLatLong = [41.8240, -71.4128];

export default class MapTable extends React.Component {
  constructor() {
		super();
    this.provMap = null;
    this.markers = {};
		this.state = {};
	}

  mapDidMount() {
    this.provMap = L.map(mapDivId).setView(provLatLong, 13);

    L.tileLayer('/get-tiles-proxy?z={z}&x={x}&y={y}',
      {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'React-Prov'
      }
    ).addTo(this.provMap);
  }

  mapLocation(coord, key, details) {
    if (!this.markers.hasOwnProperty(key)) {
      if (!details) {
        details = null;
      }

      this.markers[key] = { // lat lng data accessible from _latlng property of the marker
        marker: L.marker([coord.lat, coord.lng]).addTo(this.provMap),
        details: details
      };
    }

    if (this.markers[key].details !== null) {
      this.markers[key].marker.bindPopup(this.markers[key].details).openPopup();
    }
  }

  render() {
    return (
      <div>
        <DataMap mapDivId={mapDivId} mapDidMount={this.mapDidMount.bind(this)}></DataMap>
        <Table mapLocation={this.mapLocation.bind(this)}></Table>
      </div>
    );
  }
}
