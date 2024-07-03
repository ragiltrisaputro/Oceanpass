import { FaShip } from "react-icons/fa6";
export default function SearchTujuan() {
  return (
  <>
    <form className="mb-2">
        <label for="countries" class="block mb-2 text-m text-white"><FaShip size={20} className="inline-block"/> Ke : </label>
        <select id="countries" class="bg-[#607273] bg-opacity-75 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Merak</option>
            <option value="US">Tanjung Priok</option>
            <option value="CA">Batam Center</option>
            <option value="FR">Soekarno-Hatta</option>
            <option value="DE">Harbour Bay</option>
        </select>
        </form>
  
  </>
  );
}