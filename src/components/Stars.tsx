import { Star } from 'lucide-react';

type Props = {
  /**  
   * States that each property will receive.
   * Exemple : hover: true or false, clicked: true or false.
   */
    hover: boolean;
    clicked: boolean;
  
}


  /**
   * Component responsible for defining the standard structure of the star.
   * - Depending on the parameters it defines whether it is filled and with shadow or not.
   * @param hover if the mouse is over the star ex: (true, false).
   * @param clicked if the star was clicked ex: (true, flase).
   * @returns JSX.Element.
   */
export const Stars = ({hover, clicked}:Props) => {

  return (
    <div>
    {/* Rendering of the star */}
    <Star 
      size={44}
      fill={hover == true || clicked == true ? "blue" : "none"}
      color="blue"
      className={`${
        hover == true || clicked == true ? "drop-shadow-md/50 drop-shadow-blue-950" : ""
      }`}
    />
    </div>
  );
}