import useSWR from "swr";
import NavBar from "./navBar";

export default function Home(){
    const {error, data, loading} = useSWR('https://fakestoreapi.com/products')
    console.log(data)
return (
    <>
    <NavBar></NavBar>
    <h2>Home</h2>
    <div>
    <ul>
    {data.map((prodotto) => <li key={prodotto.id}>
    <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={prodotto.image}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
    </li>)
    }
    </ul>
    </div>

    </>

)
}