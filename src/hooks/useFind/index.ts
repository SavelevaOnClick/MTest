import {useAppSelector, useEffect, useState} from '@hooks';
import {TFillingStationData, TFuelData} from '@types';


const contains = (where: string[], what: string[]) => {
  return what.every(element => {
    return where.filter(elem => elem.toLowerCase().indexOf(element.toLowerCase()) >= 0).length;
  });
};

const transformValue = (search: string) =>
  search
    .replace(/[\s.,%,(,)]/g, ' ')
    .split(' ')
    .filter(item => item);

export const useFind = (searchValue: string, fuels: TFuelData[], regions: string[]) => {
  const allStations = useAppSelector(state => state.fillingStations.stations);
  const [stations, setStations] = useState<TFillingStationData[]>(() => allStations);

  useEffect(() => {
    const filteredStations = allStations
      .filter(station => (regions.length ? regions.includes(station.region) : station))
      .filter(station => station && fuels.every(fuel => station.fuels.filter(item => item.id === fuel.id).length > 0));

    if (searchValue.trim().length) {
      setStations(
        filteredStations.filter(
          station =>
            station && contains(transformValue(station.address.concat(station.name)), transformValue(searchValue)),
        ),
      );
    } else {
      setStations(filteredStations);    
    }
  }, [searchValue, fuels, regions]);

  return stations;
};

export const useFormattedRegionsValue = (regions: string[]) => {
  const [formattedRegions, setFormattedRegions] = useState('Всі');

  useEffect(() => {
    if (regions.length) {
      if (regions.length === 1) {
        setFormattedRegions(regions[0]);
      } else {
        setFormattedRegions(
          `${regions
            .slice(0, 2)
            .map(region => region.split(' ')[0])
            .join(', ')} ${regions.length !== 2 ? `и ещё ${regions.length - 2}...` : `области`}`,
        );
      }
    } else {
      setFormattedRegions('Всі');
    }
  }, [regions]);

  return formattedRegions;
};
