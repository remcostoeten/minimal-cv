"use client";
import React from "react";
import { Button } from "../effects/moving-border";

export function MovingBorderButton({ children }) {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-cardalt border-slate-800"
            >
                {children}
            </Button>
        </div>
    );
}
