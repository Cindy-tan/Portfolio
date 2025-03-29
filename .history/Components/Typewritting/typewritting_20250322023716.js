import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

export default function TypeWritting() {
    return (
    <div className={styles.container}>
        <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
        sequence={[
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            3000,
            '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
        omitDeletionAnimation={true}
        style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
        repeat={Infinity}
      />
    </div>
    );
}
