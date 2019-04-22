import anime from './anime';

const hide = (target, complete, delay) => {
    const animation = anime.timeline({
        easing: 'easeOutQuart',
        duration: 1000,
        // delay: anime.stagger(200),
    }).add({
        targets: `.${target}`,
        opacity: 0,
    });
    animation.finished.then(() => {
        complete();
    });
}
const show = (target, complete, delay) => {
    setTimeout(() => {
        anime({
            targets: `.${ target }`,
            // translateY: 0,
            opacity: 1,
            duration: 100,
            easing: 'easeOutQuart',
            // delay: anime.stagger(200),
            complete,
        });
    }, delay);
}

const openPhotoMenu = (target) => {
    const element = document.getElementById(target);
    anime({
        targets: element,
        translateY: 0,
        opacity: 1,
        duration: 100,
        easing: 'easeOutQuart',
    })
}

const motion = {
    hide,
    show,
    openPhotoMenu,
    //
}

export default motion;