
import Link from 'next/link'
import Nav from './Nav'

const Footer = () => (
    <footer className="footer py-4 px-4  pt-md-5 border-top light">
        <style jsx>{`
            footer{
                background:#38516a
            }
        `}</style>
        <div className="container-xl ">
            <div className="row footer-in clearfix text-white-50">
                <div className="col-md-6  copyright">
                    <p>
                        <img src={`/logo-b.png`} />
                    </p>
                    <div className="copyright-text">
                        <span className="text-white-50 " >CopyRight 2013 All Right Reserved 焱欣智能网站</span>
                        <p><a className="text-white-50 " href="#" target="_blank">粤ICP备15060458号</a></p>
                    </div>
                </div>

                <div className="col-6 col-md-3 links">
                    <ul className="links-group fl">
                        <p>关于大白</p>
                        <li><a className="text-white-50 " href="dabbyTeam.html">团体介绍</a></li>
                        <li><a className="text-white-50 " href="dabbyTeam.html?select=1">联系我们</a></li>
                        <li><a className="text-white-50 " href="dabbyTeam.html?select=2">加入我们</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3  links">
                    <ul className="links-group fl">
                        <p>了解及接入</p>
                        <li><a className="text-white-50 " href="authentication.html">认证应用方案</a></li>
                        <li><a className="text-white-50 " href="product.html?select=1">云网证APP</a></li>
                        <li><a className="text-white-50 " href="taxPayment.html">飞缴</a></li>
                        <li><a className="text-white-50 " href="product.html?select=2">认证徽章</a></li>
                        <li><a className="text-white-50 " href="product.html?select=3">网证机</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <style jsx>{`
        .footer{
            font-size:13px;
            
        }
        .footer a{
            color:#fff;
            font-size:12px;
        }
        ul{
            padding:0
        }
        li{
            list-style:none
        }
    `}</style>
    </footer>
);

export default Footer;