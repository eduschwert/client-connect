import { createPortal } from 'react-dom';
import { Container } from './styles';
import { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
}

export const Modal = ({ toggleModal, children }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <Container>
      <div ref={ref}>{children}</div>
    </Container>,
    document.body
  );
};
