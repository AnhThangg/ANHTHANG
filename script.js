function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Access/male0001.png
     ./Access/male0002.png
     ./Access/male0003.png
     ./Access/male0004.png
     ./Access/male0005.png
     ./Access/male0006.png
     ./Access/male0007.png
     ./Access/male0008.png
     ./Access/male0009.png
     ./Access/male0010.png
     ./Access/male0011.png
     ./Access/male0012.png
     ./Access/male0013.png
     ./Access/male0014.png
     ./Access/male0015.png
     ./Access/male0016.png
     ./Access/male0017.png
     ./Access/male0018.png
     ./Access/male0019.png
     ./Access/male0020.png
     ./Access/male0021.png
     ./Access/male0022.png
     ./Access/male0023.png
     ./Access/male0024.png
     ./Access/male0025.png
     ./Access/male0026.png
     ./Access/male0027.png
     ./Access/male0028.png
     ./Access/male0029.png
     ./Access/male0030.png
     ./Access/male0031.png
     ./Access/male0032.png
     ./Access/male0033.png
     ./Access/male0034.png
     ./Access/male0035.png
     ./Access/male0036.png
     ./Access/male0037.png
     ./Access/male0038.png
     ./Access/male0039.png
     ./Access/male0040.png
     ./Access/male0041.png
     ./Access/male0042.png
     ./Access/male0043.png
     ./Access/male0044.png
     ./Access/male0045.png
     ./Access/male0046.png
     ./Access/male0047.png
     ./Access/male0048.png
     ./Access/male0049.png
     ./Access/male0050.png
     ./Access/male0051.png
     ./Access/male0052.png
     ./Access/male0053.png
     ./Access/male0054.png
     ./Access/male0055.png
     ./Access/male0056.png
     ./Access/male0057.png
     ./Access/male0058.png
     ./Access/male0059.png
     ./Access/male0060.png
     ./Access/male0061.png
     ./Access/male0062.png
     ./Access/male0063.png
     ./Access/male0064.png
     ./Access/male0065.png
     ./Access/male0066.png
     ./Access/male0067.png
     ./Access/male0068.png
     ./Access/male0069.png
     ./Access/male0070.png
     ./Access/male0071.png
     ./Access/male0072.png
     ./Access/male0073.png
     ./Access/male0074.png
     ./Access/male0075.png
     ./Access/male0076.png
     ./Access/male0077.png
     ./Access/male0078.png
     ./Access/male0079.png
     ./Access/male0080.png
     ./Access/male0081.png
     ./Access/male0082.png
     ./Access/male0083.png
     ./Access/male0084.png
     ./Access/male0085.png
     ./Access/male0086.png
     ./Access/male0087.png
     ./Access/male0088.png
     ./Access/male0089.png
     ./Access/male0090.png
     ./Access/male0091.png
     ./Access/male0092.png
     ./Access/male0093.png
     ./Access/male0094.png
     ./Access/male0095.png
     ./Access/male0096.png
     ./Access/male0097.png
     ./Access/male0098.png
     ./Access/male0099.png
     ./Access/male0100.png
     ./Access/male0101.png
     ./Access/male0102.png
     ./Access/male0103.png
     ./Access/male0104.png
     ./Access/male0105.png
     ./Access/male0106.png
     ./Access/male0107.png
     ./Access/male0108.png
     ./Access/male0109.png
     ./Access/male0110.png
     ./Access/male0111.png
     ./Access/male0112.png
     ./Access/male0113.png
     ./Access/male0114.png
     ./Access/male0115.png
     ./Access/male0116.png
     ./Access/male0117.png
     ./Access/male0118.png
     ./Access/male0119.png
     ./Access/male0120.png
     ./Access/male0121.png
     ./Access/male0122.png
     ./Access/male0123.png
     ./Access/male0124.png
     ./Access/male0125.png
     ./Access/male0126.png
     ./Access/male0127.png
     ./Access/male0128.png
     ./Access/male0129.png
     ./Access/male0130.png
     ./Access/male0131.png
     ./Access/male0132.png
     ./Access/male0133.png
     ./Access/male0134.png
     ./Access/male0135.png
     ./Access/male0136.png
     ./Access/male0137.png
     ./Access/male0138.png
     ./Access/male0139.png
     ./Access/male0140.png
     ./Access/male0141.png
     ./Access/male0142.png
     ./Access/male0143.png
     ./Access/male0144.png
     ./Access/male0145.png
     ./Access/male0146.png
     ./Access/male0147.png
     ./Access/male0148.png
     ./Access/male0149.png
     ./Access/male0150.png
     ./Access/male0151.png
     ./Access/male0152.png
     ./Access/male0153.png
     ./Access/male0154.png
     ./Access/male0155.png
     ./Access/male0156.png
     ./Access/male0157.png
     ./Access/male0158.png
     ./Access/male0159.png
     ./Access/male0160.png
     ./Access/male0161.png
     ./Access/male0162.png
     ./Access/male0163.png
     ./Access/male0164.png
     ./Access/male0165.png
     ./Access/male0166.png
     ./Access/male0167.png
     ./Access/male0168.png
     ./Access/male0169.png
     ./Access/male0170.png
     ./Access/male0171.png
     ./Access/male0172.png
     ./Access/male0173.png
     ./Access/male0174.png
     ./Access/male0175.png
     ./Access/male0176.png
     ./Access/male0177.png
     ./Access/male0178.png
     ./Access/male0179.png
     ./Access/male0180.png
     ./Access/male0181.png
     ./Access/male0182.png
     ./Access/male0183.png
     ./Access/male0184.png
     ./Access/male0185.png
     ./Access/male0186.png
     ./Access/male0187.png
     ./Access/male0188.png
     ./Access/male0189.png
     ./Access/male0190.png
     ./Access/male0191.png
     ./Access/male0192.png
     ./Access/male0193.png
     ./Access/male0194.png
     ./Access/male0195.png
     ./Access/male0196.png
     ./Access/male0197.png
     ./Access/male0198.png
     ./Access/male0199.png
     ./Access/male0200.png
     ./Access/male0201.png
     ./Access/male0202.png
     ./Access/male0203.png
     ./Access/male0204.png
     ./Access/male0205.png
     ./Access/male0206.png
     ./Access/male0207.png
     ./Access/male0208.png
     ./Access/male0209.png
     ./Access/male0210.png
     ./Access/male0211.png
     ./Access/male0212.png
     ./Access/male0213.png
     ./Access/male0214.png
     ./Access/male0215.png
     ./Access/male0216.png
     ./Access/male0217.png
     ./Access/male0218.png
     ./Access/male0219.png
     ./Access/male0220.png
     ./Access/male0221.png
     ./Access/male0222.png
     ./Access/male0223.png
     ./Access/male0224.png
     ./Access/male0225.png
     ./Access/male0226.png
     ./Access/male0227.png
     ./Access/male0228.png
     ./Access/male0229.png
     ./Access/male0230.png
     ./Access/male0231.png
     ./Access/male0232.png
     ./Access/male0233.png
     ./Access/male0234.png
     ./Access/male0235.png
     ./Access/male0236.png
     ./Access/male0237.png
     ./Access/male0238.png
     ./Access/male0239.png
     ./Access/male0240.png
     ./Access/male0241.png
     ./Access/male0242.png
     ./Access/male0243.png
     ./Access/male0244.png
     ./Access/male0245.png
     ./Access/male0246.png
     ./Access/male0247.png
     ./Access/male0248.png
     ./Access/male0249.png
     ./Access/male0250.png
     ./Access/male0251.png
     ./Access/male0252.png
     ./Access/male0253.png
     ./Access/male0254.png
     ./Access/male0255.png
     ./Access/male0256.png
     ./Access/male0257.png
     ./Access/male0258.png
     ./Access/male0259.png
     ./Access/male0260.png
     ./Access/male0261.png
     ./Access/male0262.png
     ./Access/male0263.png
     ./Access/male0264.png
     ./Access/male0265.png
     ./Access/male0266.png
     ./Access/male0267.png
     ./Access/male0268.png
     ./Access/male0269.png
     ./Access/male0270.png
     ./Access/male0271.png
     ./Access/male0272.png
     ./Access/male0273.png
     ./Access/male0274.png
     ./Access/male0275.png
     ./Access/male0276.png
     ./Access/male0277.png
     ./Access/male0278.png
     ./Access/male0279.png
     ./Access/male0280.png
     ./Access/male0281.png
     ./Access/male0282.png
     ./Access/male0283.png
     ./Access/male0284.png
     ./Access/male0285.png
     ./Access/male0286.png
     ./Access/male0287.png
     ./Access/male0288.png
     ./Access/male0289.png
     ./Access/male0290.png
     ./Access/male0291.png
     ./Access/male0292.png
     ./Access/male0293.png
     ./Access/male0294.png
     ./Access/male0295.png
     ./Access/male0296.png
     ./Access/male0297.png
     ./Access/male0298.png
     ./Access/male0299.png
     ./Access/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})