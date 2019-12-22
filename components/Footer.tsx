
import Link from 'next/link'
import Nav from './Nav'

  const Footer = () => (
    <footer className="py-4 px-4 mt-md-5 pt-md-5 border-top">
        <style jsx>{`
            footer{
                background:#38516a
            }
        `}</style>
      <div className="container-xl ">
    <div className="row footer-in clearfix">
        <div className="col-24 col-md copyright">
            <div className="copyright-logo"></div>
            <div className="copyright-text">
                <span>copyright@广州大白互联网科技有限公司</span>
                <p><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">粤ICP备15060458号</a></p>
            </div>
        </div>
        {/* <div className="col-6 col-md wxcode clearfix">
            <div className="wximg">
                <div className="gzh-code">
                    <img src="../images/qrcode.png" alt="图片加载失败" />
                </div>
            </div>
        </div> */}
        <div className="col-6 col-md links clearfix">
            <ul className="links-group fl">
                <p>关于大白<span className="divide1">|</span></p>
                <li><a href="dabbyTeam.html">团体介绍</a></li>
                <li><a href="dabbyTeam.html?select=1">联系我们</a></li>
                <li><a href="dabbyTeam.html?select=2">加入我们</a></li>
            </ul>
            
        </div>
        <div className="col-6 col-md links">
        <ul className="links-group fl">
                <p>了解及接入</p>
                <li><a href="authentication.html">认证应用方案</a></li>
                <li><a href="product.html?select=1">云网证APP</a></li>
                <li><a href="taxPayment.html">飞缴</a></li>
                <li><a href="product.html?select=2">认证徽章</a></li>
                <li><a href="product.html?select=3">网证机</a></li>
            </ul>
        </div>
        </div>
    </div>
    </footer>
  );
  
  export default Footer;