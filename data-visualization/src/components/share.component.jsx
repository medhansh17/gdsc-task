async function OnShare(canvasRef) {
  const dataUrl = canvasRef.current.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray = [
    new File([blob], "animation.png", {
      type: blob.type,
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData).then(() => {
    console.log("Shared successfully");
  });
}

