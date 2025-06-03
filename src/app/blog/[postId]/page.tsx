import clsx from "clsx";
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
          <div
            className={clsx(
              "w-[400px] h-[calc(100dvh-115px)] overflow-y-scroll",
              "border-l-[1px] border-dotted border-[gainsboro]",
              "hidden sm:block"
            )}
          >
            <h2 className={clsx("p-[1em] font-semibold text-[1em]")}>
              SUMIN & SLOM
            </h2>
            <p className="p-[1em]">
              장소가 푸르러서 너무 좋았다. <br />
              관객들의 호응이 아쉬웠지만 밴드(특히 드러머님) 퍼포먼스와 수민님의
              무대매너 멋졌고 슬롬님이 중간에 선보인 보컬도 슴슴하니 재미있었다.
              <br />
              <br />
              개인적으로는 평소에 좋아하던 곡들(텅 빈 밤, 째각째각, 신호등)을
              들으니 신이 나지 않을 수 없었고..
              <br />
              <br />
              무더운 날씨 덕분에 오히려 신났던..
            </p>

            <h2 className="mt-[150px] p-[1em] font-semibold text-[1.1em]">
              Béla fleck Edmar castañeda Antonio sanchez Trio
            </h2>
            <p className="mb-[100px] p-[1em]">
              사실 알지 못하는 선생님들이었는데, 피자먹고 우연히 털레털레
              걸어들어가서 보게된 분들.
              <br />
              장인급의 경지를 가진 분들이 조화를 이루며 악기를 연주하니 천지가
              진동했다. 특히 하프의 소리, 연주 방법, 연주자 Antonio Sanchez의
              세밀하고 복잡한 컨트롤이 인상적.
              <br />
              <br />
              또한 각자 연주를 쉴 때 다른 멤버들을 연주를 듣는 것을 넘어
              감상하는 중이라는 느낌을 받았는데,
              <br />
              그만큼 서로 존중감을 가진 좋은 팀이라는 느낌이 들었고
              <br />
              중간에 드러머 Edmar Castañeda의 '어디에서도 이런 음악을 들어볼 수
              없을거다' 라는 자신감에 찬 멘트가 또한 인상적이었다.
              <br />
              <br />
              Béla fleck은 레전더리 밴조 마스터라고 한다. 라이브로 느꼈을때는
              되려 드럼과 하프 선생님들에 비해 마스터리가 뛰어나다기보다는
              악기의 귀여움과 인간적인 매력으로 승부하는 느낌이었다..
              <br />
              <br />
              하지만 세 명 다 정말 대단한 실력이 느껴지는 멋진 아저씨들로 기억.
              세 사람의 인생이 묻어나는 연주로서 온전히 꽉찬 무대를 만들었다.
            </p>

            <h2 className="mt-[150px] p-[1em] font-semibold text-[1.1em]">
              Tower of Power
            </h2>
            <p className="mb-[100px] p-[1em]">
              중간에 집에 택시타고 가서 쉬고 오토바이 타고 다시 공연장으로 왔다.
              다 끝나가는 시간이라서 마지막 공연을 조용히 보고 집에 가야겠다는
              마음으로 2층에 기어올라가 착석.
              <br />
              <br />
              그런데 이 선생님들의 텐션은 나와는 너무나 달랐다. 돌고래고음을
              처음부터 끝까지 질러대질 않나 트럼펫과 혼 등등 관악기를 동반한
              밴드사운드가 우렁차기가 그지 없었던..
              <br />
              <br />
              건강하고 따듯한 에너지. 미국에 가본적이 없지만 마치 미국에 30년 간
              살던 사람이 된 것 같은 무대였다. 노장은 죽지 않는다. 이토록
              열정적으로 살아가는 아저씨 할아버지 뮤지션들('뮤지션' 이라는
              단어가 참 잘 어울리는 사람들이었다)을 보며 나도 무언가를 천천히
              열심히 하며 살아가라는 가르침을 얻었다.
            </p>
          </div>

          <div className="flex-1 h-[calc(100dvh-60px)] overflow-y-scroll">
            <p>
              <img src="/sjf/01.jpg" />
            </p>

            <p className="flex justify-center my-[200px]">
              <img width="500" src="/sjf/058.jpg" />
            </p>

            <p className="flex justify-center my-[100px]">
              <img width="500" src="/sjf/02.jpg" />
            </p>

            <p>
              <img
                width="500"
                className="ml-auto my-[100px]"
                src="/sjf/04.jpg"
              />
            </p>

            <p>
              <img width="800" src="/sjf/05.jpg" />
            </p>

            <p>
              <img
                className="mx-auto mt-[450px] mb-[300px] w-[60vh]"
                src="/sjf/117.jpg"
                style={{
                  filter: "sepia(81020%)",
                }}
              />
            </p>

            <p>
              <img className="mx-auto w-[60vh]" src="/sjf/120.jpg" />
            </p>

            <p>
              <img
                className="mx-auto my-[150px] ml-[50px]"
                width="300"
                src="/sjf/06.jpg"
              />
            </p>

            <p className="mt-[100px]">
              <img
                className="ml-auto mr-[100px]"
                width="600"
                src="/sjf/03.jpg"
              />
            </p>

            <p className="my-[400px] mt-[800px]">
              <img
                className="mx-auto"
                width="1000"
                src="/sjf/136.jpg"
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
                src="/sjf/08.jpg"
              />
            </p>

            <p>
              <img src="/sjf/09.jpg" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
