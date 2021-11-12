import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqs = () => {
    return (
        <div>
            <h1 className="heading text-success mt-5 mb-2">HELP & FAQ</h1>
            <h3 className="mb-3 fst-italic" >General <span className="text-danger  mb-3">Question'S</span> </h3>
            <p>Travel Mamma services means Tourist places, Guides, best Prices, professional Guides <br /> 24/7 Support, and services.</p>
            <div className=" row">
                <div className="col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I personally meet a Guide of Travelmama?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to Book a service of Travelmama?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How I can find a nearby Tourist place?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What payment methods are available?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className=" col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I personally meet a Guide of Travelmama?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to Book a service of Travelmama?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How I can find a nearby Tourist place?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What payment methods are available?</Accordion.Header>
                            <Accordion.Body>
                                A  Guide of Travelmama is someone who is experienced and certified to practice tourist to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div >
        </div >

    );
};

export default Faqs;