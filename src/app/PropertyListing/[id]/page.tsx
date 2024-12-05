import { use } from 'react';
import PropertyDetail from '@/app/PropertyListing/components/PropertyDetail';
import { getPropertyById } from '@/app/utils/propertyUtils';

export default function PropertyPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
	const property = getPropertyById(id);

	return <PropertyDetail property={property || null} />;
}
