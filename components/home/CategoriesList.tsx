import { categories } from "@/utils/categories";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const CategoriesList = ({ category, search }: { category?: string; search?: string }) => {
    const searchTerm =search ? `&search=${search}`:""
    return (
      
    <section   className="">
            <ScrollArea   className="py-6">
                <div className="flex gap-x-3">
                    {categories?.map((item) =>{
                        const isActive=item.label===category    
                        return <Link key={item.label} href={`/?category=${item.label} ${searchTerm}`} >
                            <article  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary  w-[100px]  ${isActive ? "text-primary":""}`} >
                                <item.icon className="w-8 h-8" />
                                <p className="capitalize mt-2 text-sm">{ item.label}</p>
                        </article>
                    </Link>
                   } )}
                </div>
                <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </section>
  )
}

export default CategoriesList
