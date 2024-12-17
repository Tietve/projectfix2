// App.js
import React from 'react';
import HeaderHome from './component/HomePage/HeaderHome';
import SearchingHome from './component/HomePage/SearchingHome';
import ProductHome from './component/HomePage/productHome';
import Jointhebrand from "./component/HomePage/Jointhebrand";
import FooterHome from "./component/HomePage/FooterHome";
import Footer from "./component/common/footer";



const HomePage = () => {
    const image1Url = "https://s3-alpha-sig.figma.com/img/e5f0/b189/194e2e921fd328806a8cf60e668fb278?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQydLeUV-5MkwtdKSGIiSHGQmDQMIMwWgwQpnxbz5fXFhS7iSYFVi9HlRj5bCnXINDoK2CWmwym5nZWUjCkwZ-UHJ82ix7ikJT69y~J-F09EhKOXfHiMltGgfZUzdvicPAlX3WtMesYpkDMYb2y~aq4LILso0TwVAD5OfK4VLFlDlRnISZ~-amgGuYD8NgtYe-475iyh-oBZB0LMCzq9n6IjLp-~Nkl5WJKCvqQY0h7ehB~cuF1vxLfM1iZzXu4iq2mslWTmbuA5pF5ScmSfJYhfPcWQuffVqw9q74q82eT40T9jxEDFhT1FWQDiFGr52ORwoRD7alGqiCMn6fKNnQ__"; // Đường dẫn tới ảnh 1
    const image2Url = "https://th.bing.com/th/id/R.d49595849ba69c6f6dca590591bc0dc0?rik=z7%2fBGZh2z90cZA&pid=ImgRaw&r=0";
    return(
        <div >
            <HeaderHome image1={image1Url} image2={image2Url} />
            <SearchingHome />
            <ProductHome />
            <Jointhebrand />
            <Footer />
        </div>
    )

}

export default HomePage;
