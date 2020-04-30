import React, {Component} from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthorPhoto from '../img/author-photo.PNG'
import Auditorium from '../img/auditorium.jpg'

export default class AboutAuthor extends Component {
    render() {
        return (
            <div>
                <div className="about-info">
                    <h2>O kinie i o mnie</h2>
                    <p>Cześć. Nazywam się Maciek. Pasjonuję się kinem od wielu lat, a pierwszym
                        owocem tej pasji był blog czwartasciana.pl, który zacząłem prowadzić w 2012
                        roku. Pisałem dużo i niekoniecznie mądrze, ale udało mi się dotrzeć do wielu
                        ludzi, którzy kino kochali i cechowali się takim entuzjazmem jak ja. Moim
                        marzeniem od zawsze było otworzenie kina. To, co początkowo wydawało się
                        niemożliwe, właśnie dzięki takim ludziom stało się realistycznym planem, a po
                        dwóch latach walki, w styczniu 2018 roku - rzeczywistością. Kino Vérité jest
                        stworzone z myślą o ludziach, którzy podobnie jak Lars von Trier uważają, że
                        "film powinien być jak kamień w bucie". Dla ludzi, którzy dzieło filmowe szanują
                        i nie wymagają od niego jedynie dostarczenia rozrywki.
                    </p>
                    <p>Kino Vérité ma 40 nienumerowanych miejsc. Gramy jeden film dziennie.
                        Repertuar jest układany z tygodniowym wyprzedzeniem. Filmy puszczane są
                        standardowo w formacie bluray.
                    </p>
                    <p>Zapraszam!
                    </p>
                </div>
                <Container>
                <Row>
                  <Col>
                    <Image src={AuthorPhoto} rounded />
                  </Col>
                  <Col>
                    <Image src={Auditorium} fluid rounded />
                  </Col>
                </Row>
              </Container>
            </div>
        )
    }
}