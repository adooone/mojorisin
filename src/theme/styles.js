import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    default: '#232323',
    primary: '#D8CECE',
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
        MuiAppBar: {
            root: {
                boxShadow: 'none',
                // boxShadow: '0px 0px 35px -2px rgba(0,0,0,0)',
                height: 80,
                //
            },
        },
        MuiToolbar: {
            root: {
                minHeight: 80,
                //
            },
        },
        MuiDrawer: {
            paper: {
                width: 380,
                background: colors.default,
                border: 'none',
                boxShadow: '0px 0px 48px -7px rgba(0,0,0,0.55)',
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
        MuiIconButton: {
            colorPrimary: {
                color: '#636363',
                //
            },
        },
    },
});
