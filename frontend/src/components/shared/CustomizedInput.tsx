import { TextField } from "@mui/material";

type Props = {
    name: string;
    label: string;
    type: string;
    value?: string; // Add value prop
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
};

const CustomizedInput = (props: Props) => {

    return ( 
        <TextField 
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            label={props.label} 
            type={props.type} 
            InputProps={{
                style: {
                  width: "400px",
                  borderRadius: 10,
                  fontSize: 20,
                  color: "white",
                },
              }}
            value={props.value} // Pass value prop
            onChange={props.onChange} // Pass onChange prop
        />
    );
};


export default CustomizedInput;