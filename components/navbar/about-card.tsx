import React from "react";
import { Button } from "./button";

export const AboutCard: React.FC<{ title: string; text: string; buttonText: string; }> = (props) => (
    <div className="flex flex-col gap-4">
        <h2 className="text-[#201F1B] font-medium text-2xl">{props.title}</h2>
        <p className="text-[#6A6A6A] font-normal text-lg">
            {props.text}
        </p>
        <Button>{props.buttonText} -&gt;</Button>
    </div>
)