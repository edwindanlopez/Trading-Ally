import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { SmLabel } from './SmLabel';

interface InputProps {
  htmlFor: string;
  toolTipDescription: string;
  children: React.ReactNode;
}

export const SmLabelWithTooltip = ({
  htmlFor,
  toolTipDescription,
  children,
}: InputProps): JSX.Element => {
  return (
    <Flex>
      <SmLabel htmlFor={htmlFor}>{children}</SmLabel>
      <Popover>
        <PopoverTrigger>
          <QuestionOutlineIcon size="xs" w="10px" />
        </PopoverTrigger>
        <PopoverContent bg="brand.gray.900">
          <PopoverArrow bg="brand.gray.900" />
          <PopoverBody p={1} pl="10px" fontSize="xs" color="white">
            {toolTipDescription}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};