import { GoogleMaps, GoogleMapsInfoWindow, useTreatTheme } from '@newrade/core-react-ui';
import { Marker } from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';
import { BlockGoogleMapAPI } from './block-google-map.api';
import { BlockProps } from './block.props';

type Props = BlockProps &
  BlockGoogleMapAPI & {
    inView?: boolean;
    googleMapsApiKey?: string;
  };

declare let GOOGLE_MAP_API_KEY: string;

/**
 * High-level component that renders a Google Map iframe.
 */
export const BlockGoogleMap: React.FC<Props> = React.memo(
  ({ inView, long, lat, zoom, placeId, googleMapsApiKey = GOOGLE_MAP_API_KEY }) => {
    const theme = useTreatTheme();
    const [shouldLoad, setShouldLoad] = useState<boolean>(false);

    // when in view, load once and stay visible
    useEffect(() => {
      if (inView) {
        if (!shouldLoad) {
          setShouldLoad(true);
        }
      }
    }, [inView]);

    /**
     * Google Maps section
     */
    const [place, setPlace] = useState<google.maps.places.PlaceResult>();
    const [marker, setMarker] = useState<google.maps.Marker>();
    const [infoWindowVisible, setInfoWindowVisible] = useState<boolean>(true);
    const onLoad = useCallback(
      function onLoad(mapInstance: google.maps.Map<Element>) {
        if (!placeId) {
          return;
        }

        const service = new window.google.maps.places.PlacesService(mapInstance);

        service.getDetails({ placeId }, (result, status) => {
          // somehow we can't pass place to <Marker/> so we set the result in the state
          const marker = new window.google.maps.Marker({
            map: mapInstance,
            place: {
              placeId: result.place_id,
              location: result.geometry?.location,
            },
          });

          setPlace(result);
          setMarker(marker);
        });
      },
      [window.google]
    );
    const handleToggleInfoWindow = () => {
      setInfoWindowVisible(!infoWindowVisible);
    };

    return (
      <div>
        {shouldLoad && googleMapsApiKey ? (
          <GoogleMaps
            theme={theme}
            script={{
              // ...script,
              id: 'contact-map-script',
              googleMapsApiKey,
            }}
            map={{
              // ...map,
              id: 'contact-map',
              center: { lat: Number(lat), lng: Number(long) },
              mapContainerStyle: {
                height: `min(50vh, 600px)`,
              },
              options: {
                streetViewControl: true,
              },
              onLoad,
            }}
          >
            {place && place.geometry?.location ? (
              <Marker position={place.geometry?.location} onClick={handleToggleInfoWindow}></Marker>
            ) : null}
            {place && marker && infoWindowVisible ? (
              <GoogleMapsInfoWindow place={place} anchor={marker} onCloseClick={handleToggleInfoWindow} />
            ) : null}
          </GoogleMaps>
        ) : null}
      </div>
    );
  }
);
