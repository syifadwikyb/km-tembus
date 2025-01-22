import Doc1 from "./../assets/documentation_1.jpg";
import { useEffect } from "react";

export default function Documentations() {
  useEffect(() => {
    function startMarquee(row, direction = "left", speed = 2) {
      const container = document.getElementById(row);
      if (!container) return;

      const clone = container.innerHTML;
      container.innerHTML += clone;
      let offset = 0;

      function move() {
        offset += direction === "left" ? -speed : speed;

        if (Math.abs(offset) >= container.scrollWidth / 2) {
          offset = 0;
        }

        container.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(move);
      }

      move();
    }

    startMarquee("scrollRowLeft", "left", 1);
  }, []);

  return (
    <div className="container mx-auto w-full overflow-hidden mt-10">
      <div className="flex flex-col gap-4">
        <div id="scrollRowLeft" className="flex gap-4 whitespace-nowrap">
          <img className="w-48 h-28 lg:w-60 lg:h-36 object-cover" src={Doc1} />
          <img className="w-48 h-28 lg:w-60 lg:h-36 object-cover" src={Doc1} />
          <img className="w-48 h-28 lg:w-60 lg:h-36 object-cover" src={Doc1} />
          <img className="w-48 h-28 lg:w-60 lg:h-36 object-cover" src={Doc1} />
        </div>
      </div>
    </div>
  );
}
