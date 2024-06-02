import { TypeAnimation } from 'react-type-animation';

const TypeAnimationPosition = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'MERN Stack Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ' Frontend Developer',
                    1000,
                    ' ReactJs Developer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.3em', fontWeight: "bold", display: '', textDecorationLine: 'underline' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default TypeAnimationPosition;