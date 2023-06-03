import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './style';
import { StyledText } from '../../styles/typography';

interface iInputProps {
  id: string;
  label?: string;
  type: 'text' | 'email' | 'password';
  register?: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError;
  disabled?: boolean;
}

export const Input = ({
  id,
  label,
  type,
  register,
  placeholder,
  error,
  disabled,
}: iInputProps) => {
  return (
    <fieldset>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        error={error}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      {error && (
        <StyledText
          tag="p"
          fontSize="two"
          fontWeight="500"
          color="var(--color-negative)"
        >
          {error.message}
        </StyledText>
      )}
    </fieldset>
  );
};
