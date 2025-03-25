import {
  Box,
  Typography,
  TextField,
  Stack,
  Checkbox,
  Button,
} from '@mui/material';
import StyledInput from './input';

const StyledTypography = ({
  label,
  notRequired,
}: {
  label: string;
  notRequired?: boolean;
}) => {
  return (
    <Typography
      fontWeight={500}
      fontSize={14}
      color="#000"
      marginBottom={0.5}
      fontFamily="sans-serif"
    >
      {label}
      {!notRequired && <span style={{ color: 'red' }}>*</span>}
    </Typography>
  );
};

export const ContactUsForm = () => {
  return (
    <Box display="flex" flexDirection="column" width="100%" gap={2}>
      <StyledInput value="" onChange={() => {}} placeholder="First Name" />
      <StyledInput value="" onChange={() => {}} placeholder="Last Name" />
      <StyledInput value="" onChange={() => {}} placeholder="Work Email" />
      <StyledInput value="" onChange={() => {}} placeholder="Phone Number" />
      <StyledInput value="" onChange={() => {}} placeholder="Company" />
      <StyledInput value="" onChange={() => {}} placeholder="Country" />
      <StyledInput
        value=""
        onChange={() => {}}
        placeholder="Reason for Inquiry"
      />
      <Stack>
        <StyledTypography label="Message" notRequired />
        <TextField
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          placeholder="Your message here..."
        />
      </Stack>

      <Typography
        color="gray"
        fontFamily={'sans-serif'}
        variant="body2"
        fontWeight={400}
      >
        Stonebranch is committed to protecting and respecting your privacy, and
        we&apos;ll only use your personal information to administer your account
        and to provide the products and services you requested from us. From
        time to time, we would like to contact you about our products and
        services, as well as other content that may be of interest to you. If
        you consent to us contacting you for this purpose, please tick below to
        say how you would like us to contact you:
      </Typography>
      <Stack direction={'row'} gap={1} alignItems={'center'}>
        <Checkbox />
        <Typography
          color="gray"
          fontFamily={'sans-serif'}
          variant="body2"
          fontWeight={400}
        >
          I agree to receive other communications from Stonebranch.
        </Typography>
      </Stack>

      <Typography
        color="gray"
        fontFamily={'sans-serif'}
        variant="body2"
        fontWeight={400}
      >
        In order to provide you the content requested, we need to store and
        process your personal data. If you consent to us storing your personal
        data for this purpose, please tick the checkbox below.
      </Typography>

      <Stack direction={'row'} gap={1} alignItems={'center'}>
        <Checkbox />
        <Typography
          color="gray"
          fontFamily={'sans-serif'}
          variant="body2"
          fontWeight={400}
        >
          I agree to allow Stonebranch to store and process my personal data.
          <span style={{ color: 'red' }}>*</span>
        </Typography>
      </Stack>
      <Typography
        color="gray"
        fontFamily={'sans-serif'}
        variant="body2"
        fontWeight={400}
      >
        You may unsubscribe from these communications at any time. For more
        information on how to unsubscribe, our privacy practices, and how we are
        committed to protecting and respecting your privacy, please review our
        Privacy Policy.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: '4px',
          margin: '24px 0',
          width: '89px',
          height: '38px',
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#156cb3',
          },
          textTransform: 'none',
        }}
      >
        Submit
      </Button>
    </Box>
  );
};
