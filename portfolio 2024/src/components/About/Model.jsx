import { useState } from "react";
import { Avatar } from "@readyplayerme/visage";

const modelSrc = "/64626d9e64cdc6c67430fd48.glb";
const animationSrc = "/male-idle-2.fbx";

const Model = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative hidden h-full w-full md:block">
      {isLoading && (
        <img
          src="/ash-poster.webp"
          alt="Loading..."
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      )}
      <Avatar
        modelSrc={modelSrc}
        animationSrc={animationSrc}
        cameraTarget={0.28}
        scale={0.3}
        onLoaded={handleLoaded}
      />
    </div>
  );
};

export default Model;
