import React from 'react';
import Page from './Pages';
import Navi from './Navi';

const Websites = () => {

     return(
        <Page 
        footer={<Navi />}>
     <div className="reactContainer">
        <h3 className="title" style={{"padding-bottom" : "30px"}}>React Site</h3>
         <div className={'projectContent up'}>
             <ul style={{"paddingBottom" : "30px"}}>
               <a href="https://soyeya.github.io/React_lush_/" target="_blank" rel="noreferrer noopener" style={{"color" : "#009dcd", "fontSize" : "1.5em", "fontWeight" : "900"}}>LUSH</a>
                <li><p><strong>Info</strong> 친환경적인 제품을 지향하며 제공하는 유명 바디브랜드</p></li>
                <li><p><strong>Skills</strong> React.js</p></li>
                <li style={{"marginTop" : "30px"}} className='webImg'><a href="https://soyeya.github.io/React_lush_/" rel="noreferrer noopener" target="_blank"><img src="/assets/img/rea_img1.png" alt="react01"/></a></li>
             </ul>
           </div>
           <div className={'projectContent up'}>
             <ul style={{"paddingBottom" : "30px"}}>
               <a href="https://soyeya.github.io/React_tada/" target="_blank"rel="noreferrer noopener"  style={{"color" : "#01014a", "fontSize" : "1.5em", "fontWeight" : "900"}}>TADA</a>
                <li><p><strong>Info</strong>새로운 이동 기준을 제시하는 모빌리티 플랫폼</p></li>
                <li><p><strong>Skills</strong> React.js</p></li>
                <li style={{"marginTop" : "30px"}} className='webImg'><a href="https://soyeya.github.io/React_tada/" target="_blank" rel="noreferrer noopener"><img src="/assets/img/rea_img2.png" alt="react02"/></a></li>
             </ul>
           </div>
           <h3 className="title" style={{"padding-bottom" : "30px"}}>Vue Site</h3>
         <div className={'projectContent up'}>
             <ul style={{"paddingBottom" : "30px"}}>
               <a href="https://soyeya.github.io/vueBiffsite/" target="_blank" rel="noreferrer noopener" style={{"color" : "#000", "fontSize" : "1.5em", "fontWeight" : "900"}}>BIFF</a>
                <li><p><strong>Info</strong> 부산국제영화제 </p></li>
                <li><p><strong>Skills</strong> Vue.js (ver.2)</p></li>
                <li style={{"marginTop" : "30px"}} className='webImg'><a href="https://soyeya.github.io/vueBiffsite/" target="_blank" rel="noreferrer noopener"><img src="/assets/img/vue_img1.png" alt="vue01"/></a></li>
             </ul>
           </div>
           <div className={'projectContent up'}>
             <ul style={{"paddingBottom" : "30px"}}>
               <a href="https://soyeya.github.io/vueSchoolfood/" target="_blank" rel="noreferrer noopener" style={{"color" : "#aa0000", "fontSize" : "1.5em", "fontWeight" : "900"}}>SCHOOL FOOD</a>
                <li><p><strong>Info</strong> 스쿨푸드 </p></li>
                <li><p><strong>Skills</strong> Vue.js (ver.2)</p></li>
                <li style={{"marginTop" : "30px"}} className='webImg'><a href="https://soyeya.github.io/vueSchoolfood/" target="_blank" rel="noreferrer noopener"><img src="/assets/img/vue_img2.png" alt="vue02"/></a></li>
             </ul>
           </div>
         </div>
        </Page>
     )
}

export default Websites;