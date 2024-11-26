import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location to show you on the map.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        fetchCurrentLocation();
      } else {
        setPermissionDenied(true);
      }
    } else {
      Geolocation.requestAuthorization('whenInUse'); // Request for iOS permissions
      fetchCurrentLocation();
    }
  };

  const fetchCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
        setPermissionDenied(false);
      },
      (error) => {
        console.error(error);
        Alert.alert("Error", "Unable to fetch location. Please try again.");
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 }
    );
  };

  // Render content based on location and permission status
  return (
    <View style={{ flex: 1 }}>
      {permissionDenied ? (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text style={{ marginBottom: 10 }}>
            Location access is required to display your position on the map.
          </Text>
          <Button title="Re-request Permission" onPress={requestLocationPermission} />
        </View>
      ) : location ? (
        <MapView
          style={{ flex: 1 }} // Full screen map
          initialRegion={location} // Use initialRegion to set the region once
          showsUserLocation={true}
        >
          <Marker coordinate={location} title="You are here" />
        </MapView>
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text>Press the button to show your current location on the map.</Text>
          <Button title="Get Current Location" onPress={requestLocationPermission} />
        </View>
      )}
    </View>
  );
};

export default MapScreen;