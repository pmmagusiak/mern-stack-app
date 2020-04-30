import React, {Component} from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthorPhoto from '../img/author-photo.PNG'
import Auditorium from '../img/auditorium.jpg'
import Chungking from '../img/gallery-img-8.1.JPG'
import TokyoDrifter from '../img/gallery-img-9.JPG'

export default class AboutAuthor extends Component {
    render() {
        return (
            <div>
                <div className="about-info">
                    <p><strong>O BLOGU I O MNIE</strong></p>
                    <p>Cześć. Nazywam się Maciek. Pasjonuję się kinem od wielu lat, a pierwszym
                        owocem tej pasji był blog czwartasciana.pl, który zacząłem prowadzić w 2012
                        roku. Pisałem dużo i niekoniecznie mądrze, ale udało mi się dotrzeć do wielu
                        ludzi, którzy kino kochali i cechowali się takim entuzjazmem jak ja. Moim
                        marzeniem od zawsze było otworzenie kina. To, co początkowo wydawało się
                        niemożliwe, właśnie dzięki takim ludziom stało się realistycznym planem, a w styczniu 2018 roku - rzeczywistością. Właśnie wtedy odbył się pierwszy seans w  
                        Kinie Vérité. Przez dwa lata działalności kina nauczyłem się wiele nowego, ale nigdy nie zapomniałem o początkach, żywiąc nadzieję, że kiedyś uda mi się zreaktywować bloga. W końcu nadarza się ta okazja. Blog 806 jest następcą czwartejściany i podtrzymuje motto poprzednika - "film powinien być jak kamień w bucie".</p>
                    <p>Zapraszam!
                    </p>
                </div>
                <Container>
                <Row>
                  <Col>
                    <Image src={AuthorPhoto} fluid rounded />
                  </Col>
                  <Col>
                    <Image src={TokyoDrifter} fluid rounded />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Image className="pb-4" src={Auditorium} fluid rounded/>
                  </Col>
                  <Col>
                    <Image className="pb-4 pt-4" src={Chungking} fluid rounded/>
                  </Col>
                </Row>
              </Container>
            </div>
        )
    }
}