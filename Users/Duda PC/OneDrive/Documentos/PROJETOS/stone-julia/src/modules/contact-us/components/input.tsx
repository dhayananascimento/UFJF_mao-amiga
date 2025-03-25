import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface StyledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const StyledInput: React.FC<StyledInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Typography
        fontWeight={500}
        fontSize={14}
        color="#000"
        marginBottom={0.5}
        fontFamily="sans-serif"
      >
        {placeholder} <span style={{ color: 'red' }}>*</span>
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder={placeholder || 'First Name'}
        value={value}
        onChange={onChange}
        slotProps={{
          input: {
            sx: {
              borderRadius: '8px',
              backgroundColor: '#f5f8fa',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d3dce6',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#b0bec5',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
                borderWidth: '2px',
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default StyledInput;
