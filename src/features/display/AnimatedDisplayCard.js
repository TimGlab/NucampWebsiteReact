import { useState, useEffects, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',  //scale(1,1) is saying 100% width and 0% height
        config: { duration: 500 } // this is saying we want from 0 to 100 in half a second, 500 milliseconds
    });

    useEffect(() => {
        setToggle(true);
    }, []); // this tells react we only to run this side effect once when the cards mount, and not on subsequent rerenders

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;