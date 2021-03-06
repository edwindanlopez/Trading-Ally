import React, { Dispatch, SetStateAction } from 'react';
import {
  FormikValues,
  FormikHelpers,
  FormikTouched,
  FormikErrors,
} from 'formik';

export type LogTradeProps = {
  w?: string;
  mb?: number | string[] | number[];
  heading?: string;
  children?: React.ReactNode;
  preFillValues?: TradeDataPropVals;
  submitTradeDataForLog?: () => void;
  gridTemplateCols: string[];
  formConfig?: {
    postRoute?: string;
    invalidateQueries: string | string[];
  };
};

export type TradeDataPropVals = {
  date: string;
  execTime: string;
  posEffect: string;
  price: number;
  qty: number;
  side: string;
  spread: string;
  ticker: string;
};

export type FormFieldsProps = {
  children: React.ReactNode;
  setFieldValues: (
    values: SetStateAction<TradeDataPropVals>,
    shouldValidate?: boolean | undefined,
  ) => void;
  wrapperProps: Omit<LogTradeProps, 'formConfig' | 'children'>;
};

export interface SplitNumCounterFieldProps {
  w: string | string[];
  id: string;
  name: string;
  step?: number;
  size?: string;
  label: string;
  variant?: string;
  placeholder?: number;
  precision?: number;
  toolTipDescription: string;
}

export interface SelectFieldProps {
  w: string | string[];
  id: string;
  name: string;
  size?: string;
  type: string;
  label: string;
  variant?: string;
  placeholder?: string;
  toolTipDescription: string;
  children: React.ReactNode;
}

export type HandleSubmitFunctionProps = (
  fieldValues: FormikValues,
  actions: FormikHelpers<TradeDataPropVals>,
  formConfig: LogTradeProps['formConfig'],
) => void;

export type SubmittedResult = {
  submitted: boolean | null;
  success: boolean | null;
  message: string | null;
  submittedFromModal: boolean | null;
};

export type SubmissionResultCtx = (
  | Record<string, unknown>
  | Dispatch<SetStateAction<SubmittedResult>>
  | null
)[];

export interface FormProgressProviderProps extends Record<string, unknown> {
  children?: React.ReactNode;
  errors: FormikErrors<TradeDataPropVals>;
  touched: FormikTouched<TradeDataPropVals>;
}

export type FormFilledCtx = (
  | boolean
  | Dispatch<SetStateAction<boolean | null>>
  | null
)[];
