const mapRange = (domainFrom, domainTo, rangeFrom, rangeTo) => {
  const scaleFactor = (rangeTo - rangeFrom) / (domainTo - domainFrom);
  return (x) => (x - domainFrom) * scaleFactor + rangeFrom;
};
