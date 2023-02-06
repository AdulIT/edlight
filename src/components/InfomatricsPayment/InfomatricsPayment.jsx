import React from 'react'

const InfomatricsPayment = () => {
    return (
        <main className="main">
            <section className="infomatrics">
                <div className="container">
                    <div className="flex-container">
                        <div className="infomatrics-wrapper">
                            <h1 className="infomatrics__title">Подготовка к областной олимпиаде на базе Edlight</h1>
                            <a href="https://kaspi.kz/pay/_gate?action=service_with_subservice&service_id=3025&subservice_id=13857&region_id=19" className="infomatrics__payment__btn">Payment & registration</a>
                            <a href="https://edlight.kz/wp-content/uploads/2023/01/%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F_%D1%83%D1%81%D0%BB%D1%83%D0%B3.pdf" className="infomatrics__payment__link">Договор оферты</a>
                        </div>

                        <div className="infomatrics-wrapper">
                            <a href="https://kaspi.kz/pay/_gate?action=service_with_subservice&service_id=3025&subservice_id=13857&region_id=19" className="infomatrics__payment__qr">
                                <img src="../assets/img/qr.png" alt="qr" className="infomatrics__payment__img" />
                            </a>
                            <a href="https://kaspi.kz/pay/_gate?action=service_with_subservice&service_id=3025&subservice_id=13857&region_id=19" className="infomatrics__payment__link ta-center">Payment and registration</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default InfomatricsPayment