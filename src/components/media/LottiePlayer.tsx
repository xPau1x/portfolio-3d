"use client";

import { ComponentProps } from "react";
import { Lottie } from "lottie-react";

type LottiePlayerProps = ComponentProps<typeof Lottie>;

export default function LottiePlayer(props: LottiePlayerProps) {
    return <Lottie {...props} />;
}
