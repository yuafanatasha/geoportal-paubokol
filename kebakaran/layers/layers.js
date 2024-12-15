ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32751").setExtent([539270.928471, 9062669.629263, 546939.334336, 9069394.646005]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_2_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/_2_1.png" /> Rendah<br />\
    <img src="styles/legend/_2_2.png" /> Sedang<br />\
    <img src="styles/legend/_2_3.png" /> Tinggi<br />\
    <img src="styles/legend/_2_4.png" /> Sangat Tinggi<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr__2];
lyr__2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_buffer': 'FID_buffer', 'id': 'id', 'Jenis': 'Jenis', 'ringId': 'ringId', 'distance': 'distance', 'bobot': 'bobot', 'FID_LST_po': 'FID_LST_po', 'VALUE': 'VALUE', 'Bobot_1': 'Bobot_1', 'FID_SMI_Po': 'FID_SMI_Po', 'VALUE_1': 'VALUE_1', 'Bobot_12': 'Bobot_12', 'FID_slope_': 'FID_slope_', 'VALUE_12': 'VALUE_12', 'Bobot_12_1': 'Bobot_12_1', 'FID_jenis_': 'FID_jenis_', 'OBJECTID': 'OBJECTID', 'SNUM': 'SNUM', 'FAOSOIL': 'FAOSOIL', 'DOMSOI': 'DOMSOI', 'PHASE1': 'PHASE1', 'PHASE2': 'PHASE2', 'MISCLU1': 'MISCLU1', 'MISCLU2': 'MISCLU2', 'PERMAFROST': 'PERMAFROST', 'CNTCODE': 'CNTCODE', 'CNTNAME': 'CNTNAME', 'SQKM': 'SQKM', 'COUNTRY': 'COUNTRY', 'Shape_Leng': 'Shape_Leng', 'Bobot_12_2': 'Bobot_12_2', 'FID_AR_LUL': 'FID_AR_LUL', 'Shape_Le_1': 'Shape_Le_1', 'Nama_Lahan': 'Nama_Lahan', 'Bobot_12_3': 'Bobot_12_3', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Total_bobo': 'Total_bobo', 'kelas': 'kelas', 'areaaa': 'areaaa', 'area_dec': 'area_dec', });
lyr__2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_buffer': 'TextEdit', 'id': 'TextEdit', 'Jenis': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', 'bobot': 'TextEdit', 'FID_LST_po': 'TextEdit', 'VALUE': 'TextEdit', 'Bobot_1': 'TextEdit', 'FID_SMI_Po': 'TextEdit', 'VALUE_1': 'TextEdit', 'Bobot_12': 'TextEdit', 'FID_slope_': 'TextEdit', 'VALUE_12': 'TextEdit', 'Bobot_12_1': 'TextEdit', 'FID_jenis_': 'TextEdit', 'OBJECTID': 'TextEdit', 'SNUM': 'TextEdit', 'FAOSOIL': 'TextEdit', 'DOMSOI': 'TextEdit', 'PHASE1': 'TextEdit', 'PHASE2': 'TextEdit', 'MISCLU1': 'TextEdit', 'MISCLU2': 'TextEdit', 'PERMAFROST': 'TextEdit', 'CNTCODE': 'TextEdit', 'CNTNAME': 'TextEdit', 'SQKM': 'TextEdit', 'COUNTRY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Bobot_12_2': 'TextEdit', 'FID_AR_LUL': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Nama_Lahan': 'TextEdit', 'Bobot_12_3': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total_bobo': 'TextEdit', 'kelas': 'TextEdit', 'areaaa': '', 'area_dec': '', });
lyr__2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'FID_buffer': 'hidden field', 'id': 'hidden field', 'Jenis': 'hidden field', 'ringId': 'hidden field', 'distance': 'hidden field', 'bobot': 'hidden field', 'FID_LST_po': 'hidden field', 'VALUE': 'hidden field', 'Bobot_1': 'hidden field', 'FID_SMI_Po': 'hidden field', 'VALUE_1': 'hidden field', 'Bobot_12': 'hidden field', 'FID_slope_': 'hidden field', 'VALUE_12': 'hidden field', 'Bobot_12_1': 'hidden field', 'FID_jenis_': 'hidden field', 'OBJECTID': 'hidden field', 'SNUM': 'hidden field', 'FAOSOIL': 'hidden field', 'DOMSOI': 'hidden field', 'PHASE1': 'hidden field', 'PHASE2': 'hidden field', 'MISCLU1': 'hidden field', 'MISCLU2': 'hidden field', 'PERMAFROST': 'hidden field', 'CNTCODE': 'hidden field', 'CNTNAME': 'hidden field', 'SQKM': 'hidden field', 'COUNTRY': 'hidden field', 'Shape_Leng': 'hidden field', 'Bobot_12_2': 'hidden field', 'FID_AR_LUL': 'hidden field', 'Shape_Le_1': 'hidden field', 'Nama_Lahan': 'hidden field', 'Bobot_12_3': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'Total_bobo': 'hidden field', 'kelas': 'inline label - visible with data', 'areaaa': 'inline label - visible with data', 'area_dec': 'hidden field', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});