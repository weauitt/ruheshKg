import Link from "next/link" 
function page() {
  return (
      <div>
      <button className="p-3 bg-black  "><Link href='/'>Домой</Link></button>
      <h1 className="text-2xl font-bold text-black">Коом</h1>
      
    </div>
  )
}

export default page