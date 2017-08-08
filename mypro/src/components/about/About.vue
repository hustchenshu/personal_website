<template>
  <div class='container'>
    <div class='proinfo'>
      <fieldset>
        <legend>专业技能</legend>
<!--         <div class='project'>
          <svg width="100%" height="210"></svg>
        </div> -->
<!--         <div class="item">HTML</div>
        <div class="item">HTML</div> -->
        <div style="padding:25px 5px;width:650px;margin:0 auto;">
          <div class="six">
            <div class="rl"></div>
            <div class="rr">
              <!-- <a>css</a> -->
            </div>
          </div>
          <div class="six">
            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div class="six">
            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div class="six">
            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div class="six" id="ff">

            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div class="six">
            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div class="six">
            <div class="rl"></div>
            <div class="rr"></div>
          </div>
          <div style="clear:both"></div>
        </div>
        
      </fieldset>
    </div>
    <div class='baseinfo'>
      <fieldset>
        <legend>教育经历</legend>
        <div class='benke'>
          <fieldset>
            <legend>学士</legend>
            <h2><a href='http://www.hust.edu.cn/' target="_new">华中科技大学</a></h2>
            <p><a href='http://www.hust.edu.cn/' target="_new">Huazhong University of Science and Technology</a></p>
            <small>2011-09 ~ 2015-07</small>
            <p class='pro'>自动化</p>
          </fieldset>
        </div>
        <div class='yanjiu'>
          <fieldset>
            <legend>硕士</legend>
            <h2><a href='http://www.hust.edu.cn/' target="_new">华中科技大学</a></h2>
            <p><a href='http://www.hust.edu.cn/' target="_new">Huazhong University of Science and Technology</a></p>
            <small>2015-09 ~ 2018-07</small>
            <p class='pro'>模式识别与智能系统</p>
          </fieldset>
        </div>
      </fieldset>
    </div>
    <div class='techinfo'></div>
    <div class='contact'>
      <fieldset align='center'>
        <legend>博文站点</legend>
        <div>
          <a href='https://github.com/hustchenshu' target='_blank'>
            <svg aria-hidden='true' class='mark' height='32' version='1.1' viewBox='0 0 16 16' width='32'><path fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path></svg>
          </a>
        </div>
        <div>
          <a href='http://blog.csdn.net/dujiajiyiyi' target='_blank'>
            <svg xmlns='http://www.w3.org/2000/svg' class='mark' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid' width='32' height='32' viewBox='0 0 32.41 28.313'><path d='M32.392,1.067 C32.118,3.080 31.876,4.863 31.571,7.111 C27.992,6.559 24.431,6.049 20.851,6.345 C17.574,6.616 14.398,7.235 12.079,9.747 C7.821,14.358 10.138,20.714 16.570,21.848 C20.574,22.555 24.627,22.174 28.643,21.624 C28.488,24.734 28.480,24.260 28.340,27.301 C28.310,27.966 28.462,27.705 23.753,28.183 C18.758,28.433 13.767,28.493 8.980,26.720 C4.444,25.041 0.872,22.370 0.148,17.436 C-0.597,12.358 1.533,8.258 5.612,5.096 C11.733,0.349 22.443,-1.321 32.392,1.067 Z' class='cls-1'/></svg>
          </a>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
// var d3 = require('d3')
export default {
  data () {
    return {}
  },
  mounted () {
    // console.log('mounted')
    // this.drawRadaer()
  },
  methods: {
    // drawRadaer: function () {
    //   var svg = d3.select('svg')
    //   var width = +svg.attr('width')
    //   var height = +svg.attr('height')
    //   var angles = d3.range(0, 2 * Math.PI, Math.PI / 200)

    //   var path = svg.append('g')
    //       .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    //       .attr('fill', 'none')
    //       .attr('stroke-width', 10)
    //       .attr('stroke-linejoin', 'round')
    //       .selectAll('path')
    //       .data(['cyan', 'magenta', 'yellow'])
    //       .enter().append('path')
    //       .attr('stroke', function (d) { return d })
    //       .style('mix-blend-mode', 'darken')
    //       .datum(function (d, i) {
    //         return d3.radialLine()
    //             .curve(d3.curveLinearClosed)
    //             .angle(function (a) { return a })
    //             .radius(function (a) {
    //               var t = d3.now() / 1000
    //               return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32
    //             })
    //       })

    //   d3.timer(function () {
    //     path.attr('d', function (d) {
    //       return d(angles)
    //     })
    //   })
    // }
  }
}
</script>

<style lang='less' scoped>
#ff{
  margin-left: 86px;
}
fieldset{

  background: rgba(255,255,255,.3);
  border-color: rgba(255,255,255,.6);
  border-style: solid;
  border-width: 2px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -khtml-border-radius: 5px;
  border-radius: 5px;
  line-height: 30px;
  list-style: none;
  padding: 5px 10px;
  margin-bottom: 2px;
  legend{
    color:#302A2A;
    font: bold 22px Verdana, Geneva, sans-serif;
    font-weight: bold;
    text-align: left;
    text-shadow: 2px 2px 2px rgb(88, 126, 156);
  }
}
.container>div{
    margin:40px 0 40px 0;
  }
.container{
  width: 100%;
  .contact{
    fieldset{
      div{
        font-size: 16px;
        display: inline-block;
        width: 40%;
        text-align: center;
        a{
          text-decoration: none;
        }
      }
      @media screen and(max-width:700px) {
        div{
          display: block;
        }
      }
    }
  }
  .baseinfo{
    margin-top: 40px;
    .benke,.yanjiu{
      padding-left: 20px;
      border: dotted;
      border-radius: 10px;
      background: url('../../assets/school.png') bottom right rgba(255, 255, 255, 0.5);
      background-repeat: no-repeat;
      margin: 10px 10px;
      a{
        text-decoration: none;
      }
      .pro{
         font: bold 20px Verdana, Geneva, sans-serif;
      }
    }
  }
  .six:nth-child(1)>.rr{
    background-color: blue;
    background: url('../../assets/tech/css.png') center black;
  }
  .six:nth-child(2)>.rr{
    background: url('../../assets/tech/html.jpg') center white;
  }
  .six:nth-child(3)>.rr{
    background: url('../../assets/tech/bootstrap.jpg') center white;
  }
  .six:nth-child(4)>.rr{
    background: url('../../assets/tech/vue.png') center white;
  }
  .six:nth-child(5)>.rr{
    background: url('../../assets/tech/js.jpg') center white;
  }
  .six:nth-child(6)>.rr{
    background: url('../../assets/tech/node.png') center white;
  }
  .six:nth-child(7)>.rr{
    background: url('../../assets/tech/react.jpg') center white;
  }
  .proinfo{
    position: relative;
    .project{
      position: absolute;
      /*float: left;*/
    }
    .item{
      -webkit-animation:change 4s linear infinite;
      animation:change 4s linear infinite;
      float: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #fe56de;
      border-radius: 10px;
      margin:10px 30px;
    }


    .six{ 
      float: left;
      position: relative;
      margin: 25px 5px;
      width: 150px;
      height: 86px;
      transform: rotate(60deg);
      background-image: none;

      -webkit-background-size: contain;
           -moz-background-size: contain;
                background-size: contain;
      background-color: white;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      -webkit-background-size: auto 173px;

      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;

      /*z-index: -2;*/

/*      .content{
        width: 100%;
        height: 100%;
        background-image: url('../../assets/5.jpg');
        background-color: #ccc;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        -webkit-background-size: auto 173px;
      }  */

      background-size: contain;
      .rl{
        width: 100%;
        height: 100%;
        transform: rotate(60deg);
        position: absolute;
        top: 0;
        left: 0;
        background: inherit;
        background-size: contain;
        background-image: none;
      }
      .rr{
        width: 100%;
        height: 100%;
        transform: rotate(-60deg);
        position: absolute;
        top: 0;
        left: 0;
        /* background: inherit; */
      background-color: white;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      -webkit-background-size: auto 173px;
        -webkit-background-size: contain;
           -moz-background-size: contain;
                background-size: contain;
        a{
          display: block;
          width: 100%;
          height: 100%;
          text-decoration:none;
          text-align: center;
          font-size: 24px;
          padding-top: 20px;
          text-shadow: 1px 1px gray;
        }
      }
    }
    .six:hover{
      transform:rotate(420deg);
/*      -webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      -ms-transform:rotate(360deg);*/
    }
  }
}

/*@keyframes change{
  0%{-webkit-transform:rotate(0deg);}
  50%{-webkit-transform:rotate(180deg);}
  100%{-webkit-transform:rotate(360deg);}
}*/
</style>
