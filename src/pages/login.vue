<template>
  <div>
    <div class="top">
      <div class="t-l">
        <span class="s1">{{today}}</span>
        <span class="s1">{{week}}</span>
        <span style="border-right:none">
          <img src="@/assets/icon/tq.png" alt style="width:100%;height:100%" />
        </span>
      </div>
      <div class="title">欢迎使用瑞之君智能垃圾桶</div>
      <div class="t-r">
        <span>
          <img src="@/assets/icon/logo.png" alt style="width:100%;height:100%" />
        </span>
        <div class="t-r-div">
          <p class="s2">安徽瑞之君科技有限公司</p>
          <p class="s2">联系电话：0551-123456789</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="first-line">
        <div class="first-line-one">
          <p class="p2">今日投放次数</p>
          <p class="p3">
            28
            <span class="s5">次</span>
          </p>
        </div>
        <div class="first-line-two">
          <p class="p2">今日投放垃圾总质量</p>
          <p class="p3">
            93
            <span class="s5">kg</span>
          </p>
        </div>
        <div class="first-line-three">
          <div class="first-line-three-div1">
            <img src="@/assets/icon/d1.png" alt class="img1" />
            <p class="p1">可回收垃圾</p>
            <p>
              <span class="s3">36</span>
              <span class="s4">次</span>
            </p>
          </div>
          <!-- <el-progress :percentage="100"></el-progress> -->
          <div class="first-line-three-div2">
            <img src="@/assets/icon/d2.png" alt class="img1" />
            <p class="p1">有害垃圾</p>
            <p>
              <span class="s3">36</span>
              <span class="s4">次</span>
            </p>
          </div>
          <!-- <el-progress :percentage="80"></el-progress> -->
        </div>
        <div class="first-line-four">
          <div class="first-line-three-div3">
            <img src="@/assets/icon/d3.png" alt class="img1" />
            <p class="p1">厨余垃圾</p>
            <p>
              <span class="s3">36</span>
              <span class="s4">次</span>
            </p>
          </div>
          <!-- <el-progress :percentage="50"></el-progress> -->
          <div class="first-line-three-div4">
            <img src="@/assets/icon/d4.png" alt class="img1" />
            <p class="p1">其他垃圾</p>
            <p>
              <span class="s3">36</span>
              <span class="s4">次</span>
            </p>
          </div>
          <!-- <el-progress :percentage="20"></el-progress> -->
        </div>
      </div>
      <p class="p">垃圾桶状态实时监控</p>
      <div class="two-line">
        <div class="two-line-one">
          <div class="two-line-one-top">
            <div class>
              <p class="p4">95%</p>
              <p class="p5">已使用容积</p>
            </div>
            <div>
              <p class="p4">95℃</p>
              <p class="p5">当前温度</p>
            </div>
            <div>
              <p class="p4">95kg</p>
              <p class="p5">当前垃圾质量</p>
            </div>
          </div>
          <div class="mart1">
            <div id="myChart_4" :style="{width: '100%', height: '100%'}"></div>
          </div>
          <img src="@/assets/icon/b1.png" alt class="img2" />
        </div>
        <div class="two-line-one">
          <div class="two-line-one-top">
            <div class>
              <p class="p4">95%</p>
              <p class="p5">已使用容积</p>
            </div>
            <div>
              <p class="p4">95℃</p>
              <p class="p5">当前温度</p>
            </div>
            <div>
              <p class="p4">95kg</p>
              <p class="p5">当前垃圾质量</p>
            </div>
          </div>
          <div class="mart1">
            <div id="myChart_2" :style="{width: '100%', height: '100%'}"></div>
          </div>
          <img src="@/assets/icon/b2.png" alt class="img2" />
        </div>
        <div class="two-line-one">
          <div class="two-line-one-top">
            <div class>
              <p class="p4">95%</p>
              <p class="p5">已使用容积</p>
            </div>
            <div>
              <p class="p4">95℃</p>
              <p class="p5">当前温度</p>
            </div>
            <div>
              <p class="p4">95kg</p>
              <p class="p5">当前垃圾质量</p>
            </div>
          </div>
          <div class="mart1">
            <div id="myChart_5" :style="{width: '100%', height: '100%'}"></div>
          </div>
          <img src="@/assets/icon/b3.png" alt class="img2" />
        </div>
        <div class="two-line-one">
          <div class="two-line-one-top">
            <div class>
              <p class="p4">95%</p>
              <p class="p5">已使用容积</p>
            </div>
            <div>
              <p class="p4">95℃</p>
              <p class="p5">当前温度</p>
            </div>
            <div>
              <p class="p4">95kg</p>
              <p class="p5">当前垃圾质量</p>
            </div>
          </div>
          <div class="mart1">
            <div id="myChart_3" :style="{width: '100%', height: '100%'}"></div>
          </div>
          <img src="@/assets/icon/b4.png" alt class="img2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import liquidFill from "echarts-liquidfill"; //在这里引入
export default {
  name: "login",
  data() {
    return {
      today: "",
      week: ""
    };
  },
  methods: {
    aaa5() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart_5 = that.$echarts.init(document.getElementById("myChart_5"));
      var myChart_4 = that.$echarts.init(document.getElementById("myChart_4"));
      var myChart_3 = that.$echarts.init(document.getElementById("myChart_3"));
      var myChart_2 = that.$echarts.init(document.getElementById("myChart_2"));
      // var dataTate = Object.values(e).map(item => item.name);
      // var dataNum = Object.values(e).map(item => item.count);

      // 绘制图表
      myChart_5.setOption({
        series: [
          {
            type: "liquidFill",
            data: [0.2],
            radius: "90%",
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 0.1,
              borderColor: "#149ED2",
              color: "rgba(20,158,210,0.3)",
              shadowBlur: 10
            },
            color: ["#149ED2", "#149ED2"],
            shape:
              "path://M6.000,-0.000 L216.000,-0.000 C219.314,-0.000 222.000,2.686 222.000,6.000 L222.000,9.000 C222.000,12.314 219.314,15.000 216.000,15.000 L6.000,15.000 C2.686,15.000 -0.000,12.314 -0.000,9.000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 6.000,-0.000 ZM22.000,13.000 L201.000,13.000 L182.000,197.000 C182.000,208.046 173.046,217.000 162.000,217.000 L61.000,217.000 C49.954,217.000 41.000,208.046 41.000,197.000 L22.000,13.000 Z",
            label: {
              normal: {
                position: ["38%", "40%"],
                formatter: function() {
                  return "";
                },
                textStyle: {
                  fontSize: 40,
                  color: "gray"
                }
              }
            }
          }
        ]
      });
      myChart_4.setOption({
        series: [
          {
            type: "liquidFill",
            data: [0.5],
            radius: "90%",
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 0.1,
              borderColor: "#05CB6B",
              color: "rgba(5,203,107,0.3)",
              shadowBlur: 10
            },
            color: ["#05CB6B", "#05CB6B"],
            shape:
              "path://M6.000,-0.000 L216.000,-0.000 C219.314,-0.000 222.000,2.686 222.000,6.000 L222.000,9.000 C222.000,12.314 219.314,15.000 216.000,15.000 L6.000,15.000 C2.686,15.000 -0.000,12.314 -0.000,9.000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 6.000,-0.000 ZM22.000,13.000 L201.000,13.000 L182.000,197.000 C182.000,208.046 173.046,217.000 162.000,217.000 L61.000,217.000 C49.954,217.000 41.000,208.046 41.000,197.000 L22.000,13.000 Z",
            label: {
              normal: {
                position: ["38%", "40%"],
                formatter: function() {
                  return "";
                },
                textStyle: {
                  fontSize: 40,
                  color: "gray"
                }
              }
            }
          }
        ]
      });
      myChart_3.setOption({
        series: [
          {
            type: "liquidFill",
            data: [0.7],
            radius: "90%",
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 0.1,
              borderColor: "#E56D31",
              color: "rgba(229,109,49,0.3)",
              shadowBlur: 10
            },
            color: ["#E56D31", "#E56D31"],
            shape:
              "path://M6.000,-0.000 L216.000,-0.000 C219.314,-0.000 222.000,2.686 222.000,6.000 L222.000,9.000 C222.000,12.314 219.314,15.000 216.000,15.000 L6.000,15.000 C2.686,15.000 -0.000,12.314 -0.000,9.000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 6.000,-0.000 ZM22.000,13.000 L201.000,13.000 L182.000,197.000 C182.000,208.046 173.046,217.000 162.000,217.000 L61.000,217.000 C49.954,217.000 41.000,208.046 41.000,197.000 L22.000,13.000 Z",
            label: {
              normal: {
                position: ["38%", "40%"],
                formatter: function() {
                  return "";
                },
                textStyle: {
                  fontSize: 40,
                  color: "gray"
                }
              }
            }
          }
        ]
      });
      myChart_2.setOption({
        series: [
          {
            type: "liquidFill",
            data: [0.7],
            radius: "90%",
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 0.1,
              borderColor: "#6E7172",
              color: "rgba(110,113,114,0.3)",
              shadowBlur: 10
            },
            color: ["#6E7172", "#6E7172"],
            shape:
              "path://M6.000,-0.000 L216.000,-0.000 C219.314,-0.000 222.000,2.686 222.000,6.000 L222.000,9.000 C222.000,12.314 219.314,15.000 216.000,15.000 L6.000,15.000 C2.686,15.000 -0.000,12.314 -0.000,9.000 L-0.000,6.000 C-0.000,2.686 2.686,-0.000 6.000,-0.000 ZM22.000,13.000 L201.000,13.000 L182.000,197.000 C182.000,208.046 173.046,217.000 162.000,217.000 L61.000,217.000 C49.954,217.000 41.000,208.046 41.000,197.000 L22.000,13.000 Z",
            label: {
              normal: {
                position: ["38%", "40%"],
                formatter: function() {
                  return "";
                },
                textStyle: {
                  fontSize: 40,
                  color: "gray"
                }
              }
            }
          }
        ]
      });
    },
    //获取日期
    gettime() {
      var today = new Date();
      var weeklist = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var week = `${today.getDay()}`.slice(-2);
      var weekday = weeklist[week];
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = mm + "/" + dd;
      this.today = today;
      this.week = weekday;
    },
    getinfo() {
      var clientID = "web-0001";
      // Activemq中间件地址
      client = new Messaging.Client("118.25.107.28", 61614, clientID);
      client.connect({
        userName: admin,
        password: admin,
        // 连接成功
        onSuccess: onConnect,
        // 连接出错
        onFailure: onFailure
      });
      client.onConnect = this.onConnect;
      client.onMessageArrived = this.onMessageArrived;
    },
    //建立连接
    onConnect() {
      ws_logs("正在建立连接");
      // 订阅Topic
      client.subscribe(topic_name);
    },
    // 连接失败
    onFailure(failure) {
        ws_logs("连接失败");
        ws_logs(failure.errorMessage);
    },
    //监听消息
    onMessageArrived(message) {
      ws_logs(message.payloadString);
      // 如果你传输的是Json数据，在这里就可以进行解析了
      var json_obj = eval("(" + message.payloadString + ")");
      if (json_obj.cmd == "1") {
        // 执行操作
      }
    }
  },
  mounted() {
    this.gettime();
    this.aaa5();
    this.getinfo();
  }
};
</script>

<style scoped>
.p4 {
  font-size: calc(22vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(245, 0, 0, 1);
  margin-bottom: calc(18vh / 10.8);
  text-align: center;
}
.p5 {
  font-size: calc(18vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.mart1 {
  width: calc(222vw / 19.2);
  height: calc(217vh / 10.8);
  margin: 0 auto;
}
.two-line-one-top {
  width: 100%;
  padding: 0 calc(27vw / 19.2);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: calc(51vh / 10.8);
  margin-top: calc(104vh / 10.8);
}
.top {
  width: calc(1920vw / 19.2);
  height: calc(96vh / 10.8);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(39vw / 19.2);
  box-sizing: border-box;
}
.title {
  flex: 1;
  text-align: center;
  font-size: calc(40vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.t-l,
.t-r {
  display: flex;
  align-items: center;
}
.t-l span,
.t-r span {
  display: flex;
  align-items: center;
  padding: 0 calc(15vw / 19.2);
  box-sizing: border-box;
  height: calc(26vh / 10.8);
  border-right: 0.1px solid rgba(112, 112, 112, 1);
}
.t-r-div {
  padding: 0 0 0 calc(15vw / 19.2);
  box-sizing: border-box;
}
.t-r span {
  height: calc(38vh / 10.8);
}
.s1 {
  font-size: calc(26vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.s2 {
  font-size: calc(13vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}
.wrap {
  width: 100%;
  position: absolute;
  top: calc(96vh / 10.8);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(235, 235, 235);
}
.first-line {
  width: calc(1920vw / 19.2);
  height: calc(356vh / 10.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(40vw / 19.2);
  box-sizing: border-box;
}
.two-line {
  width: calc(1920vw / 19.2);
  height: calc(450vh / 10.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(40vw / 19.2);
  box-sizing: border-box;
}
.first-line-one {
  width: calc(469vw / 19.2);
  height: calc(269vh / 10.8);
  padding: calc(27vh / 10.8) calc(32vw / 19.2);
  box-sizing: border-box;
  background-image: url("../assets/icon/s1.png");
  background-size: 100% 100%;
}
.first-line-two {
  width: calc(469vw / 19.2);
  height: calc(269vh / 10.8);
  padding: calc(27vh / 10.8) calc(32vw / 19.2);
  box-sizing: border-box;
  background-image: url("../assets/icon/s2.png");
  background-size: 100% 100%;
}
.first-line-three {
  width: calc(423vw / 19.2);
  height: calc(271vh / 10.8);
}
.first-line-three-div1 {
  width: calc(423vw / 19.2);
  height: calc(120vh / 10.8);
  background: #149ed2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(31vw / 19.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  border-radius: 6px;
}
.first-line-three-div2 {
  width: calc(423vw / 19.2);
  height: calc(120vh / 10.8);
  background: #e56d31;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(31vw / 19.2);
  box-sizing: border-box;
  margin-top: calc(15vh / 10.8);
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  border-radius: 6px;
}
.first-line-four {
  width: calc(423vw / 19.2);
  height: calc(271vh / 10.8);
}
.first-line-three-div3 {
  width: calc(423vw / 19.2);
  height: calc(120vh / 10.8);
  background: #05cb6b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(31vw / 19.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  border-radius: 6px;
}
.first-line-three-div4 {
  width: calc(423vw / 19.2);
  height: calc(120vh / 10.8);
  background: #6e7172;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(31vw / 19.2);
  box-sizing: border-box;
  margin-top: calc(15vh / 10.8);
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  border-radius: 6px;
}
.img1 {
  width: calc(80vw / 19.2);
  height: calc(80vh / 10.8);
  margin-right: calc(13vw / 19.2);
}
.p {
  font-size: calc(31vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  padding: calc(15vh / 10.8) calc(40vw / 19.2) calc(60vw / 19.2)
    calc(40vw / 19.2);
  box-sizing: border-box;
}
.p1 {
  flex: 1;
  font-size: calc(24vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.s3 {
  font-size: calc(36vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.s4 {
  font-size: calc(12vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.p2 {
  font-size: calc(28vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.p3 {
  width: 100%;
  height: calc(216vh / 10.8);
  line-height: calc(216vh / 10.8);
  text-align: center;
  font-size: calc(90vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.s5 {
  font-size: calc(16vw / 19.2);
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.two-line-one {
  width: calc(445vw / 19.2);
  height: calc(450vh / 10.8);
  background: white;
  position: relative;
  box-shadow: 0px 2px 10px 0px rgba(110, 113, 114, 0.58);
  border-radius: 6px;
}
.img2 {
  position: absolute;
  top: calc(-28vh / 10.8);
  left: calc(115vw / 19.2);
  width: calc(197vw / 19.2);
  height: calc(57vh / 10.8);
}
</style>