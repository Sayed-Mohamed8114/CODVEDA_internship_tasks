import {RiMapPin2Line , RiGlobeLine} from 'react-icons/ri'

export default function SearchBar(){
    return (
    <div className="">
        <form action="#" className="">
          <RiGlobeLine />
          <input className="" type="search" placeholder="Enter a city name" required />
        </form>
        <button><RiMapPin2Line /></button>
      </div>
    )
}