import React , { useState , useEffect } from 'react';


const Page = ( {children, footer }) => {
     const [nav, setNav] = useState();

     useEffect(() => {
        window.addEventListener("scroll" , () => {
            const scrollY = window.scrollY;

            if(scrollY > 20){ setNav(true)}
            else{setNav(false)}
        });

     },[])
     return(
        <div className="page">
            <main>{children}</main>
            <footer className={nav ? 'appear' : ''}>{footer}</footer>
        </div>
     )
}

export default Page;