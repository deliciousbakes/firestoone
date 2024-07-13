
"use client"

import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';

// eslint-disable-next-line @next/next/no-async-client-component
async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect('/');
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  return <div>PropertyDetailsPage</div>;
}
export default PropertyDetailsPage;