import propertyData from '@/app/Data/propertyData';
import { PropertyData } from '@/app/types/propertyTypes';

export function getPropertyById(id: string): PropertyData | undefined {
  return propertyData.find(property => property.id === parseInt(id));
}

