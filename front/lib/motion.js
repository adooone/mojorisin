import anime from './anime';

const hide = (target, complete, delay) => {
    console.log(target);
    setTimeout(() => {
        anime({
            targets: `.${ target }`,
            // translateY: -200,
            opacity: 0,
            duration: 100,
            easing: 'easeOutQuart',
            delay: anime.stagger(200),
            complete: () => {
                anime({
                    targets: `.${target}`,
                    // translateY: 200,
                    duration: 200,
                    easing: 'easeOutQuart',
                    complete,
                });
            }
        });
    }, delay);
}
const show = (target, complete, delay) => {
    console.log(target);
    setTimeout(() => {
        anime({
            targets: `.${ target }`,
            // translateY: 0,
            opacity: 1,
            duration: 100,
            easing: 'easeOutQuart',
            delay: anime.stagger(200),
            complete,
        });
    }, delay);
}

const motion = {
    hide,
    show,
    //
}

export default motion;