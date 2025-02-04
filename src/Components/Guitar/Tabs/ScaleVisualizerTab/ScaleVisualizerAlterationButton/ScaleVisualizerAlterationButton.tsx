import {Button} from "flowbite-react";
import {FC, MouseEventHandler} from "react";

interface ScaleVisualizerAlterationButtonProps {
    alteration: string
    onClickSharp: MouseEventHandler<HTMLButtonElement>
    onClickFlat: MouseEventHandler<HTMLButtonElement>
}

const ScaleVisualizerAlterationButton: FC<ScaleVisualizerAlterationButtonProps> = ({
                                                                                       alteration,
                                                                                       onClickSharp,
                                                                                       onClickFlat,
                                                                                   }) => {
    return (
        <div className="grid grid-rows-2 gap-2">
            <h3 className="text-xl font-medium dark:text-white">Alteration: </h3>
            <Button.Group outline>
                <Button
                    color={alteration === "sharp" ? "indigo" : "gray"}
                    onClick={onClickSharp}
                >
                    ♯
                </Button>
                <Button
                    color={alteration === "flat" ? "indigo" : "gray"}
                    onClick={onClickFlat}
                >
                    ♭
                </Button>
            </Button.Group>
        </div>
    );
};

export default ScaleVisualizerAlterationButton