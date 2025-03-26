import {
  Box,
  Typography,
  TextField,
  Stack,
  //Checkbox,
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
      <StyledInput value="" onChange={() => {}} placeholder="Primeiro Nome" />
      <StyledInput value="" onChange={() => {}} placeholder="Último Nome" />
      <StyledInput value="" onChange={() => {}} placeholder="E-mail de trabalho" />
      <StyledInput value="" onChange={() => {}} placeholder="Número de telefone" />
      <StyledInput value="" onChange={() => {}} placeholder="Empresa" />
      <StyledInput value="" onChange={() => {}} placeholder="País" />
      <StyledInput
        value=""
        onChange={() => {}}
        placeholder="Motivo da consulta"
      />
      <Stack>
        <StyledTypography label="Mensagem" notRequired />
        <TextField
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          placeholder="Sua mensagem aqui.."
        />
      </Stack>

      <Typography
        color="gray"
        fontFamily={'sans-serif'}
        variant="body2"
        fontWeight={400}
      >
        A Automateasy está comprometida em proteger sua privacidade e garantir a segurança de
        seus dados. Suas informações pessoais serão utilizadas exclusivamente para gerenciar
        nossa comunicação e fornecer os produtos e serviços solicitados. Respeitamos sua 
        escolha e garantimos que seus dados não serão utilizados para envios não autorizados.
        Caso queira definir suas preferências de contato, selecione abaixo como deseja se 
        comunicar conosco.

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
        Enviar
      </Button>
    </Box>
  );
};
