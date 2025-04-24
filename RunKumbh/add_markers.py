from fastkml import kml
from lxml import etree

def add_markers_every_1_5km(input_kml_file, output_kml_file, route_name):
    # Read the original KML file
    with open(input_kml_file, 'r', encoding='utf-8') as file:
        doc = file.read()

    # Remove the XML declaration if it exists
    doc = doc.replace('<?xml version="1.0" encoding="UTF-8"?>', '')

    # Create a KML object using fastkml
    k = kml.KML()
    k.from_string(doc)  # Parse the KML string into a fastkml KML object

    # Access the first feature (document element) from the list
    document = k.features()[0]  # Accessing the first feature directly

    # Loop over the placemarks (you'll need to implement this logic to handle markers)
    for placemark in document.features():
        if isinstance(placemark, kml.Placemark):
            coordinates = placemark.geometry.coordinates
            # Add a new marker after every 1.5 km (logic to add markers should go here)

            # Example of adding new placemarks for markers
            new_placemark = kml.Placemark()
            new_placemark.name = f"{route_name} Marker"
            # Set new coordinates for the marker (example offset)
            new_placemark.geometry = kml.Point((coordinates[0] + 0.001, coordinates[1] + 0.001))  
            document.add_feature(new_placemark)

    # Write the updated KML to the output file
    with open(output_kml_file, 'w', encoding='utf-8') as file:
        file.write(etree.tostring(k.to_etree(), pretty_print=True).decode('utf-8'))

# Example of calling the function with the modified KML file
add_markers_every_1_5km("runkumbh_mens.kml", "runkumbh_mens_marked.kml", "Men's")
add_markers_every_1_5km("runkumbh_womens.kml", "runkumbh_womens_marked.kml", "Women's")