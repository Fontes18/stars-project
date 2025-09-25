import { ShowStars } from "./components/ShowStars";
import { listStar } from "./data/listStar";

/**
 * Main page showing the rating component
 * @returns 
 */
const Page = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
    <ShowStars 
      list={listStar}
    />
    </div>
  )
}

export default Page;