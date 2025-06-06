import React from "react";

const PostDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(240, 248, 255, 0.2)",
      }}
    >
      <div>
        <div className="flex flex-row-reverse">
          <div className="flex-1 h-[calc(100dvh-60px)] overflow-y-scroll">
            <p>
              <img src="/sjf/01.JPG" />
            </p>

            <p className="flex justify-center my-[200px]">
              <img width="500" src="/sjf/058.JPG" />
            </p>

            <p className="flex justify-center my-[100px]">
              <img width="500" src="/sjf/02.JPG" />
            </p>

            <p>
              <img
                width="500"
                className="ml-auto my-[100px]"
                src="/sjf/04.JPG"
              />
            </p>

            <p>
              <img width="800" src="/sjf/05.JPG" />
            </p>

            <p>
              <img
                className="mx-auto mt-[450px] mb-[300px] w-[60vh]"
                src="/sjf/117.JPG"
                style={{
                  filter: "sepia(81020%)",
                }}
              />
            </p>

            <p>
              <img className="mx-auto w-[60vh]" src="/sjf/120.JPG" />
            </p>

            <p>
              <img
                className="mx-auto my-[150px] ml-[50px]"
                width="300"
                src="/sjf/06.JPG"
              />
            </p>

            <p className="mt-[100px]">
              <img
                className="ml-auto mr-[100px]"
                width="600"
                src="/sjf/03.JPG"
              />
            </p>

            <p className="my-[400px] mt-[800px]">
              <img
                className="mx-auto"
                width="1000"
                src="/sjf/136.JPG"
                style={{
                  filter: "brightness(100%) contrast(800%) hue-rotate(20deg)",
                }}
              />
            </p>

            <p>
              <img
                className="ml-auto mt-[100vh] mb-[30dvh]"
                style={{
                  filter: "grayscale(100%) contrast(300%)",
                }}
                width="600"
                src="/sjf/08.JPG"
              />
            </p>

            <p>
              <img src="/sjf/09.JPG" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
