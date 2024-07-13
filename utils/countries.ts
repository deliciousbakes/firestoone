import countries from "world-countries"

export const formattedCountries =  countries.map((item)=>{
    return{
        code:item.cca3,  
        name:item.name.common, 
        flag: item.flag, 
        location:item.latlng, 
        region:item.region

    }
})

export const findCountryByCode = (code:string) => {
    return formattedCountries.find((item)=> item.code===code)
}