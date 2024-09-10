"use client";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Card } from "@/components/ui/card";
import { AlignCenter, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen overflow-hidden bg-gray-100">
        {/* <main className="w-screen h-screen overflow-hidden">
      <div className="w-screen h-screen overflow-hidden bg-gray-100"> */}
        <TransformWrapper
          initialScale={1}
          // initialPositionX={screen.width / 2}
          initialPositionY={screen.height / 4}
          // centerOnInit={true}
          minScale={0.5}
          maxScale={5}
          limitToBounds={false}
        >
          {({
            zoomIn,
            zoomOut,
            centerView,
            resetTransform,
            zoomToElement,
            setTransform,
            instance,
          }) => (
            <>
              <div className="absolute top-2 right-2 z-10 space-x-2 bg-slate-200 rounded-full px-6 py-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => zoomIn()}
                >
                  <ZoomInIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => zoomOut()}
                >
                  <ZoomOutIcon className="h-4 w-4" />
                </Button>
                {/* <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => resetTransform()}
                >
                  <ResetIcon className="h-4 w-4" />
                </Button> */}
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => centerView(1)}
                >
                  <ResetIcon className="h-4 w-4" />
                  {/* <AlignCenter className="h-4 w-4" /> */}
                </Button>
              </div>
              <TransformComponent
                wrapperClass="min-w-full min-h-full"
                contentClass="min-w-full min-h-full"
              >
                <div className="w-full h-full flex justify-center">
                  <Card className="text-black top-1/2 left-1/2 transform w-32 h-32 bg-red-500 flex items-center justify-center font-bold">
                    Center
                  </Card>
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </main>
  );
}
