
"use client"
import AmenitiesInput from "@/components/form/AmenitiesInput"
import { SubmitButton } from "@/components/form/Buttons"
import CategoriesSelect from "@/components/form/CategoriesSelect"
import CounterInput from "@/components/form/CounterInput"
import CountriesSelect from "@/components/form/CountriesSelect"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInput from "@/components/form/ImageInput"
import PriceInput from "@/components/form/PriceInput"
import TextAreaInput from "@/components/form/TextAreatInput"
import { createPropertyAction } from "@/utils/actions"

const CreatePropertyPage = () => {
  return (
    <section>
          <h1 className="text-2xl capitalize  font-semibold mb-2" >Create Property </h1>
          <div className="border p-3  rounded-lg  bg-muted">
              <h3 className="text-lg mb-3 font-medium">General Info</h3>
              <FormContainer   action={createPropertyAction}>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 ">
                      <FormInput name="name" type="text" label="Name (20 limit)" defaultValue="Cabin in Latvia" />
                      <FormInput name="tagline" type="text" label="Tagline (20 limit)" defaultValue="dream getaway awaits you here" />
                      <PriceInput/>
                      <CategoriesSelect />
                      <CountriesSelect />
                       <ImageInput />
                  </div>
          {/* text area description input */}
          <TextAreaInput name="description" labelText="Description (10- 1000 words)" />
          <h3  className="my-4 text-lg font-medium">Accommodation details</h3>
         <CounterInput detail="guests"/>
         <CounterInput detail="bedrooms"/>
         <CounterInput detail="beds"/>
          <CounterInput detail="baths" />
          <AmenitiesInput  />
                      <SubmitButton  text=" Create Property" className="mt-.5 mb-1" />
                         
              </FormContainer>
          </div>
    </section>
  )
}

export default CreatePropertyPage
