import React from 'react'
import abimg from '../../images/ourfounder.jpg'
import VideoModal from '../ModalVideo'
import './style.css'

const FounderInfo = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);

    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-img-founder">
                            <img src={abimg} alt="" />    
                        </div>
                        <p className="wpo-about-img-founder-p">Mrs. Florence Bamidele Makanjuola nee Familusi <br/>(1921 - 2021) </p>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Our Founder</span>
                                <h4>Inspired by a passion for female education and empowerment </h4>
                            </div>
                            <p >
                                Mrs. Florence Bamidele Makanjuola nee Familusi (1921 - 2021) was a teacher, nurse, great grandmother and beloved matriarch.
                                A pioneer of her generation with educational opportunity, she lived a long, eventful, and accomplished life, passing away  just shy of her 100th birthday.

                                The Opekete Foundation was the brainchild of Florence, created as a platform to formalize her lifelong support for the education of indigent girls in Imesi-Ile and her other female empowerment and philanthropic activities.

                                The Foundation was named in honour of her beloved late father, Gilbert Familusi aka Opekete (proprietor of Opekete Shoes), a strong and enduring influence in her life whose love, guidance and memory she revered till the end of her days.

                                The motivation to support the education of girls came from the experiences in Florence’s own life. Strong parental support - particularly from Gilbert - and deliberate investment in her education ensured Florence received the highest standard of tutelage in teacher training and later a scholarship to study nursing in the UK.

                                Gilbert, especially enamored by the work of Florence Nightingale (1820 - 1910), the British noblewoman and founder of modern nursing, named FBM after her with high hopes that she would also follow in the field on nursing.

                                Florence was extremely grateful for the opportunities she received to get a good education. She was passionate about educating the girl-child, particularly those who could not afford it, given the scholarships she herself received which launched her to limitless opportunities.
                                Florence believed that all individuals must meaningfully contribute to society and that women in particular should be educated and use that training to ensure their financial independence, for the benefit of their families, society and the Nigerian economy.</p>
                          
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FounderInfo;
