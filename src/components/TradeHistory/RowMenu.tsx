import { useEffect, useRef, useState, useContext } from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FiMoreHorizontal, FiEdit2, FiTrash } from 'react-icons/fi';
import { ModalStatesContext } from '../../utils/createContext';
import { RowMenuProps } from '../../@types/trade-history-types';

export const RowMenu = ({ rowProps, ...rest }: RowMenuProps): JSX.Element => {
  const [rowData, setRowData] = useState({});
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { onModalOpen, onAlertOpen, passDataToModalContent } =
    useContext(ModalStatesContext);
  const ref = useRef<Record<string, unknown> | null>(null);

  useEffect(() => {
    ref.current = rowProps;
    if (!ref.current) throw Error('divRef is not assigned');

    setRowData(rowProps);
  }, [rowProps]);

  const handleModalOpen = (modalType: string) => {
    if (modalType === 'modal') {
      onModalOpen();
    } else if (modalType === 'alert') {
      onAlertOpen();
    }
    // pass selected row data when user opens modal
    passDataToModalContent(rowData);
  };

  return (
    <Menu isLazy {...rest}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMoreHorizontal />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => handleModalOpen('modal')} icon={<FiEdit2 />}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleModalOpen('alert')} icon={<FiTrash />}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
