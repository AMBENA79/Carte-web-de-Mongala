var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Surfacesdelaprovince_1 = new ol.format.GeoJSON();
var features_Surfacesdelaprovince_1 = format_Surfacesdelaprovince_1.readFeatures(json_Surfacesdelaprovince_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacesdelaprovince_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacesdelaprovince_1.addFeatures(features_Surfacesdelaprovince_1);
var lyr_Surfacesdelaprovince_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacesdelaprovince_1, 
                style: style_Surfacesdelaprovince_1,
                popuplayertitle: 'Surfaces de la province',
                interactive: true,
    title: 'Surfaces de la province<br />\
    <img src="styles/legend/Surfacesdelaprovince_1_0.png" /> 15933,725052<br />\
    <img src="styles/legend/Surfacesdelaprovince_1_1.png" /> 16024,468265<br />\
    <img src="styles/legend/Surfacesdelaprovince_1_2.png" /> 24293,366584<br />\
    <img src="styles/legend/Surfacesdelaprovince_1_3.png" /> <br />' });
var format_sercteurs_2 = new ol.format.GeoJSON();
var features_sercteurs_2 = format_sercteurs_2.readFeatures(json_sercteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sercteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sercteurs_2.addFeatures(features_sercteurs_2);
var lyr_sercteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sercteurs_2, 
                style: style_sercteurs_2,
                popuplayertitle: 'sercteurs',
                interactive: true,
    title: 'sercteurs<br />\
    <img src="styles/legend/sercteurs_2_0.png" /> Agricole <br />\
    <img src="styles/legend/sercteurs_2_1.png" /> (Bois)<br />\
    <img src="styles/legend/sercteurs_2_2.png" /> (Commerce)<br />\
    <img src="styles/legend/sercteurs_2_3.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Surfacesdelaprovince_1.setVisible(true);lyr_sercteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Surfacesdelaprovince_1,lyr_sercteurs_2];
lyr_Surfacesdelaprovince_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_sercteurs_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'Secteurs d': 'Secteurs d\'activités', });
lyr_Surfacesdelaprovince_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_sercteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'Secteurs d': 'ValueMap', });
lyr_Surfacesdelaprovince_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'no label', 'CODE_INS': 'no label', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'no label', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_sercteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'Secteurs d': 'inline label - always visible', });
lyr_sercteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});