const getCroppedImageUrl = (url: string, segment: string) => {
  const index = url.indexOf(segment) + segment.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
