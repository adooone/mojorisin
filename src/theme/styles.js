import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    default: '#182228',
    primary: '#656B4A',
    secondary: '#C99A41',
    text: '#FBF9EA',
};

export const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Poiret One"',
        ].join(','),
    },
    palette: {
        type: 'dark',
        default: { main: colors.default },
        primary: { main: colors.primary },
        secondary: { main: colors.secondary },
    },
    overrides: {
        MuiDrawer: {
            paper: {
                width: 220,
                background: colors.default,
                // color: colors.text,
                //
            },
        },
    },
});
