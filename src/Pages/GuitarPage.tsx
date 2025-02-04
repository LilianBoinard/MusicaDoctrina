import {ReactElement} from "react";

import Guitar from "../Components/Guitar/Guitar.tsx";
import {FretboardProvider} from "../Context/Guitar/Fretboard/FretboardProvider.tsx";

export default function GuitarPage(): ReactElement {
    return (
        <>
            <FretboardProvider>
                <Guitar/>
            </FretboardProvider>

        </>
    )
}