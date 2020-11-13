import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const UserTextField: any = withStyles({
    root: {

        fontFamily: 'Gilroy-Medium',
        "& label.Mui-focused": {
            color: 'rgb(49, 49, 49)',
            fontFamily: 'Gilroy-Medium'
        },
        "& label.MuiInputLabel-outlined": {
            color: 'rgb(173, 184, 191)',
            fontFamily: 'Gilroy-Medium',
        },
        "& .MuiFormControl-root ": {
            fontFamily: 'Gilroy-Medium'
        },
        "& label.MuiInputLabel-shrink": {
            color: 'rgb(49, 49, 49)',
            fontFamily: 'Gilroy-Medium, sans-serif',
            lineHeight: '12px',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0px',
            height: '12px'
        },
        "& input.MuiInputBase-input": {
            color: 'rgb(49, 49, 49)',
            fontFamily: 'Gilroy- Medium, sans-serif',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '0px',
            paddingLeft: "15px"

        },
        "& .MuiOutlinedInput-root": {

            borderRadius: '2px',
            '& input': {
                '&:-webkit-autofill': {
                }
            },

            "& textarea": {
                overflow: "auto",
                height: "auto",
            },

            "& fieldset": {
                "& legend": {
                    "& span": {
                        padding: '0px',
                        fontFamily: 'Gilroy-Medium'
                    }
                },
                color: "red",
                borderColor: "rgb(173, 184, 191)"
            },

            "&:hover fieldset": {
                border: '1px solid rgb(173, 184, 191)'
            },
            "&.Mui-focused fieldset": {
                border: '1px solid rgb(173, 184, 191) '
            },
            "  MuiInputLabel": {
                outlined: {

                    '&$shrink': {
                        color: 'rgb(49, 49, 49)',
                        transform: 'translate(0px, 0px) scale(0.75)',
                    }
                }
            }
        },
        "& .Mui-error": {
            "&.MuiFormHelperText-root.Mui-error": {
                color: 'rgb(209, 0, 0)',
            },
            "&.Mui-focused fieldset": {
                border: '2px solid rgb(209, 0, 0)',
                borderColor: 'rgb(209, 0, 0)'

            },
            "&:hover fieldset": {
                border: '1px solid rgb(209, 10, 67)'
            }
        },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: '2px solid rgb(209, 0, 0)',

        },
        "& .MuiFormHelperText-root": {
            color: 'rgb(209, 0, 0)'
        },

        "& .MuiOutlinedInput-root.Mui-disable": {
            color: 'rgb(0, 0, 0, 0.6)',
            borderColor: "rgb(0, 0, 0, 0.6)"
        }

    }
})(TextField);

export default UserTextField;