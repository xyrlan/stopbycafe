import { Button } from "@nextui-org/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import React from "react";

const AboutText = () => {
  return (
    <div className="flex">
      <div className="max-w-md">
        <p className="tracking-wider text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta
          repellat quasi ab a! Nihil perspiciatis quibusdam quae illum!
          Doloribus natus sed aliquid eaque consectetur ab optio, atque
          laudantium ut?.
        </p>
        <br />
        <p className="tracking-wider text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta
          repellat quasi ab a! Nihil perspiciatis quibusdam quae illum!
          Doloribus natus sed aliquid eaque consectetur ab optio, atque
          laudantium ut?.
        </p>
        <Button className="mt-10  group hover:text-primary" radius="none">
          <span>Learn More</span>
          <ArrowUpRightFromSquareIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default AboutText;
