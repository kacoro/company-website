import { Project } from '../interfaces'

/** Dummy user data. */
export const sampleProjectData: Project[] = [
  { id: 1, name: '身份认证',banner:'/images/authentication.png',content:`<ul class="solution" style="">
  <li class="summary">
      <div class="title "><i class="title-line"></i><span>概&nbsp;述</span><i class="title-line"></i></div>
      <p class="title-en">SUMMARIZE</p>
      <div class="info">
          <p class="text">充分发挥居民身份证作为国家重大信息基础设施的优势，基于居民身份证生成与其唯一对应的网上凭证，建设网络身份认证信息系统。依托居民身份证制证数据资源，通过多场景、多级别、多终端自由组合进行安全精准的智能验证后，签发公安部认可的居民身份证网上功能凭证，使居民身份证成为具有中国特色的网络可信体系的基础信任根，实现网上网下身份信任的一体化。</p>

      </div>
  </li>
  <li class="technology clearfix">
      <div class="title "><i class="title-line"></i><span>技术核心优势</span><i class="title-line"></i></div>
      <p class="title-en">CORE TECHNICAL ADVANTAGES</p>
      <div class="info fl">
          <h3>检测因子</h3>
          <p class="text gray mt36">大白互联提供的可信身份认证服务是复合式的身份认证，该技术通过运用多种验证因子有效解决了单因子网络身份认证存在的问题。目前，认证服务采用的检验因子包括：居民身份证实体证件、居民身份信息、身份证网上凭证、认证码、活体人像。后期会（或将）陆续加入声纹、指纹、虹膜、指静脉等更加丰富全面的验证因子。</p>
      </div>
      <div class="info fr">
          <h3>比对系统</h3>
          <p class="text gray mt36">认证服务将国内外领先的人脸识别技术研发方分别提供的对比算法进行融合，形成独特的多算法、多引擎人像对比系统，该多引擎人像对比系统经过500万次实际应用的稳定性测试和72小时连续不间断压力测试，整体表现优秀，人脸错误接受率在十万分之一以下，正确识别率在97%以上。</p>
      </div>
  </li>
  <li class="service clearfix text_center">
      <div class="title "><i class="title-line"></i><span>认证服务优势</span><i class="title-line"></i></div>
      <p class="title-en">AUTHENTICATED SERVICE ADVANTAGES</p>
      <div class="inline_block">
      <div class="advantage mr26">
          <div class="icon icon1"></div>
          <h3>可配置服务资源</h3>
          <p>动态可配置的云服务资源，可灵活配置认证并发数及认证总量，满足业务单位的认证资源需求。</p>
      </div>
      <div class="advantage mr26">
          <div class="icon icon2"></div>
          <h3>成熟的高性能认证云平台</h3>
          <p>通过动态视频检测，有效识别人脸。平台采用不可逆加密算法，全程无明文采集、传输及存储公民个人信息环节，有效杜绝泄密隐患，确保信息安全。</p>
      </div>
      <div class="advantage mr26">
          <div class="icon icon3"></div>
          <h3>上下游专用的网络线路</h3>
          <p>与“微信”、“公安部第一研究所”建立认证专用网络专线，为第三方业务单位接入提供认证云平台专线连接。</p>
      </div>
      <div class="advantage">
          <div class="icon icon4"></div>
          <h3>专业全面的行业解决方案</h3>
          <p>基于“居民身份证网上应用”体系，为各行业业务提供方提供多元化的认证服务接入模式，以适应业务提供方不同的业务工具与应用场景。</p>
      </div>
  </div>
  </li>
  <li class="application clearfix mb180">
      <div class="title "><i class="title-line"></i><span>应用特点</span><i class="title-line"></i></div>
      <p class="title-en">APPLICATION FEATURES</p>
      <div class="info fl ">
          <h3>1.高级别认证效力</h3>
          <p>大白互联可信身份认证服务所依托的公安部“居民身份证网上应用”体系，正是直接建立在我国二代居民身份证应用基础之上，通过生成与实体身份证唯一对应的网上凭证，以全程在线的方式进行实时权威的自然人身份认证。</p>
      </div>
      <div class="info fr">
          <h3>2.高性能的认证能力</h3>
          <p>
              大白互联提供的可信身份认证服务，能够完整提供各行业领域的自然人身份认证解决方案，满足各类应用场景的身份认证需求。
          </p>
      </div>
      <div class="info fl ">
          <h3>3.高强度的安全保障</h3>
          <p>大白互联提供的可信身份认证服务，在接入层部署高安全级别接入策略，采用基于https的安全交互，并利用数字签名等技术控制识别请求来源。用户数据通过服务器进行交互，前端只传递相关认证凭证，同时对于流量进行监控，及时发现异常流量、异常访问，识别网络攻击及异常使用，并作出相应的防护措施。</p>
      </div>
      <div class="info fr">
          <h3>4.多元化的应用模式</h3>
          <p>
              大白互联提供的可信身份认证服务，为各类业务方提供多元化的认证服务应用模式，已适应业务方不同的业务工具与应用场景。
          </p>
      </div>

      <!-- <button  class="btn" >快速接入</button> -->

  </li>
</ul>`},
  { id: 2, name: 'Bob2',banner:'',content:''},
  { id: 3, name: 'Caroline',banner:'',content:'' },
  { id: 4, name: 'Dave' ,banner:'',content:''},
]