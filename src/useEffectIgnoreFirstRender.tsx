import { useEffect, useRef, useState } from "react";

export const useEffectIgnoreFirstRender = (fn: () => void, inputs: Array<any>) => {
  const didMountRef = useRef(false);

    const [ty, setTy] = useState<string>()

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, inputs);

  return [ty, setTy] as const
};
