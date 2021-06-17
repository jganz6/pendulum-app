import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const drawSpring = (ctx, frameCount) => {
    const scale = 1000;

    // ctx.save();
    // ctx.beginPath();
    ctx.translate(ctx.canvas.width / 2, 0);
    // ctx.save();
    ctx.scale(1, scale);
    // ctx.restore();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#ff0066"; // blue-ish color
    ctx.stroke();
    // ctx.beginPath();
    ctx.translate(0, 200 * scale);
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    // ctx.restore();
  };
  const draw = (ctx, frameCount) => {
    const angle = 0;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#ff0066"; // blue-ish color
    ctx.stroke();
    ctx.fillStyle = "#4397AC";
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      //   drawSpring(context, frameCount);

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
