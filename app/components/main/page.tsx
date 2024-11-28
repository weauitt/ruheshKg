import Carousel from "./ImgCarousel/Carousel";
import NewsList from "./News/News";

export default function Main() {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <NewsList />
    </div>
  );
}
