import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    default: '#131414',
    primary: '#d8d1d1',
    secondary: '#C99A41',
    text: '#FBF9EA',
};

export const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Poiret One"',
        ].join(','),
        fontSize: 17,
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
                width: 380,
                background: colors.default,
                border: 'none',
                // color: colors.text,
                //
            },
        },
        MuiListItemText: {
            root: {
                textAlign: 'center',
                fontSize: 24,
                //
            },
        },
    },
});
