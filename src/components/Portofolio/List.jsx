import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import CardSkeleton from "../Skeleton/Card";

export default function List({ portofolio }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(portofolio.length === 0);
  }, [portofolio]);

  return (
    <div className="flex w-10/12 flex-row flex-wrap">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => <CardSkeleton key={index} />)
        : portofolio.map((item, index) => <Card portofolio={item} key={index} />)}
    </div>
  );
}

List.propTypes = {
  portofolio: PropTypes.array.isRequired,
};
