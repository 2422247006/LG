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
      <div class="con">
         <div class="img">
             <img src="@/assets/icon/finish.png" alt="" style="width:100%;height:100%;">
         </div>
         <p class="p1">投放成功，您已累计投放33次</p>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  name: "finish",
  data() {
    return {
      today:'',
      week:''
    };
  },
  methods: {
    //获取日期
    gettime(){
      var today = new Date();
      var weeklist = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      var dd = today.getDate(); 
      var mm = today.getMonth()+1; 
      var week = `${today.getDay()}`.slice(-2);
      var weekday = weeklist[week];
      if(dd<10) { 
        dd = '0'+dd 
        } 
      if(mm<10) {
         mm = '0'+mm 
         } 
    today = mm + '/' + dd  
    this.today=today
    this.week=weekday
    
    }
  },
  mounted() {
    this.gettime()
    
  }
};
</script>

<style scoped>

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
.wrap{
    width:100%;
    position: absolute;
    top:calc(96vh / 10.8);
    left:0;
    right:0;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.con{
    width:100%;
    height:calc(164vh / 10.8);
    padding: 0 calc(437vw / 19.2);
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.img{
    width:calc(186vw / 19.2);
    height:calc(164vh / 10.8);
}
.p1{
    
font-size:calc(60vw / 19.2);
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
}
</style>