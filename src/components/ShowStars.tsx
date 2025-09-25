import { Stars } from "./Stars"
import type { typeStar } from "../types/typeStar"
import { useState } from "react"

type Props = {
    /**
     * List of values and number of stars
     * exemple: { value: [1,2,3,4,5]}
     */
    list: typeStar
}

/**
 * Responsible component for rendering a list of clickable stars that represent a rating
 * - Show stars in hover state when the user hovers the mouse.
 * - Show stars in the click state when the user clicks.
 * - Display the chosen ratin below
 * @param list list of stars and their values
 * @returns JSX.Element
 */
export const ShowStars = ({list}: Props) =>{
    //State of the clicked star(final rating chosen by the user)
    const [starClick, setStarClick] = useState<number | null>(null);

    //State of the hovered star(on mouse over)
    const [starHovered, setStarHovered] = useState<number | null>(null);

    /**
     * Defines the star clicked
     * @param valueStar value of the selected star
     */
    const showRate = (valueStar:number) => {
        setStarClick(valueStar)
    }

    return(
        <div>
            {/* Rendering of the stars */}
            <div className="flex">
                {list.value.map((valueStar) =>
                    <div key={valueStar} onClick={() => showRate(valueStar)} onMouseEnter={() => setStarHovered(valueStar)}
                    onMouseLeave={() => setStarHovered(null)}
                    >
                        <Stars 
                        hover={starHovered !== null && valueStar <= starHovered ? true : false}
                        clicked={starClick !== null && valueStar <= starClick }
                        />
                    </div>
                    
                )}
            </div>
            {/* If a star was clicked, show the chosen rating */}
            {starClick && 
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold">Sua nota foi de: {starClick} </h2>
                </div>
            }
        </div>
    )
}