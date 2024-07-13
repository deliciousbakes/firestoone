import type { PropertyCardProps } from '@/utils/types';
import PropertyCard from '../card/PropertyCard';

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5'>
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
}
export default PropertiesList;  